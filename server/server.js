const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const dotenv = require('dotenv');


dotenv.config(); // .env 파일의 환경 변수를 로드

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); // express 내장 bodyParser 사용

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});