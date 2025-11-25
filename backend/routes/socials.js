import express from "express";
import socialsData from "../data/socials.js";
import Social from '../models/socials.js';
import mongoose from "mongoose";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
    const socials = await Social.find({});
    console.log("Get /socials")
    res.status(200).json(socials);
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

router.get('/seed' , async (req, res) => {
    try {
        const resultDelete = await Social.deleteMany({});
        const resultInsert = await Social.insertMany(socialsData);
        console.log({...resultDelete, ...resultInsert});
        res.redirect('/')

    }catch(e){
        console.log(e.message);
        res.json({ error: e.message})
    }
});

router.get('/:id', async (req, res) => {
    try {
    const socialById = await Social.findById(req.params.id);
    console.log("GET /socials/:id")
    res.status(200).json(socialById)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

router.delete('/:id', async (req, res) => {
    try {
         const deleteById = await Social.findByIdAndDelete(req.params.id);
         console.log("DELETE /socials/:id", deleteById);
         res.status(200).json(deleteById)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
});

const validId = (id) => mongoose.Types.ObjectId.isValid(id);

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    if(!validId(id)){
        return res.status(404).send("Invalid Id")
    }
    const update = {
        eventType: req.body.eventType,
        hostName: req.body.hostName,
        hostCompany: req.body.hostCompany,
        hostEmail: req.body.hostEmail,
        event: {
            eventTitle: req.body.event.eventTitle,
            eventDescription: req.body.event.eventDescription,           
            danceStyles: req.body.event.danceStyles,
            venueName: req.body.event.venueName,
            venueStreet: req.body.event.venueStreet,
            venueCity: req.body.event.venueCity,
            venueNYC: req.body.event.venueNYC,
            venueState: req.body.event.venueState,      
            venueCountry: req.body.event.venueCountry,
            venueZipCode: req.body.event.venueZipCode,
            dressCode: req.body.event.dressCode,
            floorType: req.body.event.floorType,
            startDateTime: new Date(req.body.event.startDateTime),
            endDateTime: new Date(req.body.event.endDateTime),
            price: Number(req.body.event.price),
            studentPrice: Number(req.body.event.studentPrice),
            imgUrl: req.body.event.imgUrl
        }
    }
    try {
         const editById = await Social.findByIdAndUpdate(id, update, {new: true, runValidators: true});
         console.log("PUT /socials/:id", editById);
         res.status(200).json(editById)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const social = await Social.create(req.body);
        console.log("POST /socials")
        res.status(200).json(social)
    } catch(e) {
        console.log(e.message);
        res.status(400).json({ error: e.message})
    }
})

export default router;