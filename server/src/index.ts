import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser';
import "dotenv-safe/config";
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import { verify } from 'jsonwebtoken';
import "reflect-metadata";
import cors from 'cors';
import { buildSchema } from 'type-graphql';
import { createConnection } from "typeorm";
import { __prod__ } from './constants';
import { PartnerData } from './entities/PartnerData';
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import { createAccessToken, createRefreshToken } from './utils/JWTAuth';
import { sendRefreshToken } from './utils/sendRefreshToken';
import { ContainerPark } from './entities/ContainerPark';
import { Container } from './entities/Container';
import { ContainerParkResolver } from './resolvers/containerpark';
import { ContainerResolver } from './resolvers/container';
require('dotenv-safe').config({ allowEmptyValues: true });


const main = async () => {
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED='0' //DIT MOEST IK DOEN OM TOESTEMMING TE KRIJGEN OM EMAILS TE VERSTUREN


    const schemaNormal = await buildSchema({
        resolvers: [
              UserResolver, ContainerResolver, ContainerParkResolver
        ],
        validate: false
    });


    const conn = await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: __prod__ ? true : true, // (not in production)
        // migrations: [path.join(__dirname, "./migrations/*")],
        entities: [ User, PartnerData, ContainerPark, Container],
    });

    // if(__prod__){
    //     conn.runMigrations();
    // }

    // if(true){
    //     conn.runMigrations();
    // }




    const app = express();

    const RedisStore = connectRedis(session);
    const redis = new Redis(process.env.REDIS_URL);

    // // tell express server that we have a proxy (nginx) so that all cookies 
    // properly work (for cookies, session,...)
    app.set("trust proxy", "loopback, 68.183.212.48");

    app.use(
        cors({
            origin:  __prod__ ?  ["https://aeterna.be","https://relivo.be","https://lovento.be"]: process.env.CORS_ORIGIN,   //
            credentials: true,
        })
    );



    app.use(
        session({
          name: "CookieConsent",
          store: new RedisStore({
            client: redis,
            disableTouch: true,
          }),
          cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
            httpOnly: true,
            sameSite: "lax", // csrf
            secure: __prod__, // cookie only works in https
            domain: __prod__ ? ".aeterna.be" : undefined,
          },
          saveUninitialized: false,
          secret: process.env.SESSION_SECRET,
          resave: false,
        })
    );


    app.use('/refresh_token', cookieParser());
    app.get('/', (_, res) => {
        res.send("hello");
    })
    app.post('/refresh_token', async (req, res) => {
        // console.log("headers",req.headers);
        // console.log("cookies",req.cookies);
        const token = req.cookies.jwt;
        // console.log("headers",req.headers);
        // console.log("cookies",req.cookies);
        console.log("app post  refresh/token in index");
        console.log("token in indexpage backend :" , token);


        // console.log("token",token);


        if (!token) {
            return res.send({ ok: false, accessToken: '' })
        }

        let payload: any = null;
        try {
            payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)
        }
        catch (err) {
            console.log("error try catch post in backend : ", err)
            return res.send({ ok: false, accessToken: '' })
        }

        // token is valid and we can send back an access
        const cpark = await ContainerPark.findOne({ id: payload.containerParkId })


        // console.log("user found: " , user?.username);

        if (!cpark) {
            return res.send({ ok: false, accessToken: '' })
        }

        if (cpark.tokenVersion !== payload.tokenVersion) {
            return res.send({ ok: false, accessToken: '' })
        }

        // create als a new refreshtoken
        sendRefreshToken(res, createRefreshToken(cpark));
        const accessToken = await createAccessToken(cpark);
        // console.log("net voor verzenden naar front-end" ,accessToken );
        // console.log("net voor verzenden naar front-end stringify " ,JSON.stringify(accessToken) );

        return res.send({ ok: true, accessToken: accessToken })
    });








    app.use(
        session({
            store: new RedisStore({
                client: redis,
                // disableTTL: true,
                disableTouch: true
            }),
            saveUninitialized: false,
            secret: "dslkfmjdslfkjùldskfsqdf",  // want to be hidden -< environment variable
            resave: false,
        })
    );



    const apolloServer = new ApolloServer({
        schema: await schemaNormal,

        context: ({ req, res }) => ({
            req,
            res,
            redis
            
           

        }),


        uploads: {
            maxFileSize: 100000000000, // 100 GB,
            maxFieldSize: 100000000000, //100 GB
            maxFiles: 10000



        },

       
    });



    apolloServer.applyMiddleware({
        app,
        cors: false,
        bodyParserConfig: {
            limit: "2000mb",

        }

    });




    app.listen(parseInt(process.env.PORT), () => {
        console.log("server started on localhost:4000");
    });


  
}


main().catch(err => {
    console.error(err);
});