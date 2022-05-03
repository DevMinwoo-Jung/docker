const express = require('express'); // express 모듈 불러오기

// Constants
const PORT = 8080; // Express 서버를 위한 포트 설정
const HOST = '0.0.0.0'; // 호스트 지정

// App

const app = express(); // express 어플 생성
app.get('/', (req, res) => {
    res.send('Hello World!'); // "/" 이 경로로 요청이 오면 hello world를 결과값으로 전달달});
});
app.listen(PORT, HOST); // 해당 포트와 호스트에서 http 서버를 시작
console.log(`Running on http://${HOST}: ${PORT}`);