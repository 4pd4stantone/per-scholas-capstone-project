import express from "express";
import socialsData from "../data/socials.js";
import Social from '../models/socials.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
    const socials = await Social.find({});
    res.status(200).json(socials);
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const social = await Social.create(req.body);
        res.status(200).json(social)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
})


router.get('/seed' , async (req, res) => {
    try {
        const resultDelete = await Social.deleteMany({});
        const resutlInsert = await Social.insertMany(socialsData);
        console.log({...resultDelete, ...resutlInsert});
        res.redirect('/')

    }catch(e){
        console.log(e.message);
        res.json({ erros: e.message})
    }
});

export default router;