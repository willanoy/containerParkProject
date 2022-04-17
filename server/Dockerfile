FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn 

# Bundle app source
COPY . .
COPY .env.production .env
#Rename?

# RUN yarn build 
#build will generate the dist folder (and dont watch it!)


ENV NODE_ENV production
#Set a node environment to production 

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

USER node
# By default, Docker runs container as root which inside of the container 
# can pose as a sedocker startcurity issue. You would want to run the container
# as an unprivileged user wherever possible. 
# The node images provide the node user for such purpose. 
