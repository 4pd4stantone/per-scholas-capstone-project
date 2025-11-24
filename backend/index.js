import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './db.js';
import socialsRoutes from './routes/socials.js'

const app = express();

const port = 8080;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json('You are connected to the server on port: ' + port)
})

app.use('/socials', socialsRoutes);

app.listen(8080, () => {
    console.log(`Listening on port: ${port}`)
    connectDB()
})