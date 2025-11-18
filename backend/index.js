import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './db.js';
import DanceStudioSocials from './models/socials.js';

const app = express();

const port = 8080;

app.use(cors())

app.get('/', (req, res) => {
    res.json('You are connected to the server on port: ' + port)
})

app.get('/danceStudioSocials', async (req, res) => {
    try {
    const danceStudioSocials = await DanceStudioSocials.find({});
    res.status(200).json(danceStudioSocials);
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
})

app.listen(8080, () => {
    console.log(`Listening on port: ${port}`)
    connectDB()
})