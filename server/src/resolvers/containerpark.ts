
import argon2 from "argon2";
import { verify } from "jsonwebtoken";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { ContainerPark } from "../entities/ContainerPark";
import { MyContext } from "../types";
import { createAccessToken, createRefreshToken } from "../utils/JWTAuth";
import { sendRefreshToken } from "../utils/sendRefreshToken";

@InputType()
class ContainerParkInput {
    @Field()
    name: string


    @Field({ nullable: true })
    location?: string

    @Field({ nullable: true })
    intercommunale?: string
}

@Resolver(ContainerPark)
export class ContainerParkResolver {



    @Query(() => String, { nullable: true })    
    async currentContainerParkId(
        @Ctx() context: MyContext,
    ) {
        const authorization = context.req.headers["authorization"];

       
        if (!authorization) {
            return null;
        }
        try {
            const token = authorization.split(" ")[1];
            console.log("token", token)
            const payload: any = await verify(token, process.env.ACCESS_TOKEN_SECRET! );
            console.log("payload",payload);
            return payload.containerParkId;

        } catch (err) {
            console.log(err);
            return null;
        }

    }


    @Mutation(() => String)
    async login(
        @Arg("ContainerParkId") ContainerParkId: string,
        @Arg("password") password: string,
        @Ctx() { res }: MyContext
    ): Promise<String> {

        const cpark = await ContainerPark.findOne(
            { where: { id: ContainerParkId } }
        );
        if (!cpark) {
            throw new Error("Doesn't work")
        }
        const valid = await argon2.verify(cpark.password!, password);  // hash the password
        if (!valid) {
            throw new Error("Wrong password")

        }

        // creer jwt 
        const accessToken = await createAccessToken(cpark);

        console.log("accessToken in login",accessToken)
        
        sendRefreshToken(res, createRefreshToken(cpark));

        return accessToken;
    }




    @Mutation(() => ContainerPark)  // type graphql
    async createContainerPark(
        @Arg('input') input: ContainerParkInput,
        @Arg('password') password: string,
        // @Ctx() { payload }: MyContext,     
    ): Promise<ContainerPark> {   //TYPE TYPESCRIPT
        // 2 sql queries

        const hashedPassword = await argon2.hash(password);

        return ContainerPark.create({
            ...input,
            password: hashedPassword
        }).save();
    }


    @Query(() => ContainerPark, { nullable: false })  // type graphql
    async containerPark(
        @Arg('containerParkId') containerParkId: string,
        // @Ctx() { payload }: MyContext,
    ): Promise<ContainerPark | undefined> {   //TYPE TYPESCRIPT

        const containerpark = await ContainerPark.findOne({
            where:
            {
                id: containerParkId,
            }
        });
        if (!containerpark) {
            throw new Error("Could not find memory")
        }
        // checkPermission(payload!.statusList[paginaId],STATUS.Approved,containerpark.creatorId,payload!.userId );

        return containerpark;


    }


    @Query(() => [ContainerPark])  // type graphql
    async allContainerParks(
    ): Promise<ContainerPark[]> {   //TYPE TYPESCRIPT

        const containerparks = await getConnection().query(
        `        
        select c.*
        from container_park c     
        order by c."createdAt" DESC
        `
        );

        return containerparks;


    }





}

