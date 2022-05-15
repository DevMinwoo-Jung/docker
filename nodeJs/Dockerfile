FROM node:10

WORKDIR /user/src/app

COPY package.json ./

RUN npm install

COPY ./ ./
# ./ ./은 ./의 모든 파일을 도커의 ./에 복사 하는 것

CMD ["node", "server.js"]