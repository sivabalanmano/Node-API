import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/user',userRoute);

app.listen(PORT, () => {
    console.log(`running port has running : http://localhost:${PORT}`);
});