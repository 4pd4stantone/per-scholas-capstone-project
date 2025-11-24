import express from "express";
import socialsData from "../data/socials.js";
import Social from '../models/socials.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
    const socials = await Social.find({});
    console.log("Get /Socials")
    res.status(200).json(socials);
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

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

router.get('/:id', async (req, res) => {
    try {
    const socialById = await Social.findById(req.params.id);
    console.log("Get /Socials/:id")
    res.status(200).json(socialById)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const social = await Social.create(req.body);
        console.log("POST /Socials")
        res.status(200).json(social)
        redirect('/')
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
})

export default router;