FROM node:16.16.0

COPY . /src
WORKDIR /src

COPY package.json ./
COPY /tsconfig.build.json /
COPY /tsconfig.json /

RUN npm install
RUN npm run build

EXPOSE 4000

ENTRYPOINT npm run prod