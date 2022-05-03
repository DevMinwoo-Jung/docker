FROM node:10

COPY ./ ./
# ./ ./은 ./의 모든 파일을 도커의 ./에 복사 하는 것
RUN npm install

CMD ["node", "server.js"]