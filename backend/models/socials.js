import mongoose, { mongo } from "mongoose";

const danceStudioSocials = mongoose.Schema({
    hostedBy: { type: String, required: true, trim: true},
    eventTitle: { type: String, required: true, trim: true},
    eventDescription: { type: String, required: true },
    danceStyles: [
        {
            style: { type: String, required: true },
            enum: ["Salsa on 2", "Urban Bachata", "Traditional Bachata", "Sensual Bachata", "Merengue", "Chacha", "Salsa on 1", "Cumbia", "Mainstream Music" ],
            percentageNumber: { type: Number, required: true, min: 5, max: 100 }
        }
    ],
    venue: [ 
        { 
            venueName: { type: String, required: true, trim: true},
            venueAddress: { type: String, required: true, trim: true},
            venueCity: { type: String, required: true, trim: true},
            venueState: { type: String, trim: true},
            venueCountry: { type: String, required: true, trim: true},
            venueZipCode: { type: String, required: true, trim: true},
        }
    ],
    events: [
        {
            startDateTime: { type: Date, required: true},
            endDateTime: { type: Date, required: true},
            recurrence: { type: Boolean, default: false},
            frequency: { type: String, enum: ["weekly", "bi-weekly", "monthly", null], default: null},
            repeatCount: { type: Number, min: 1, max: 24, default: null },
            endRepeatDate: { type: Date, default: null },
            price: { type: Number, required: true, min: 0},
            isFree: { type: Boolean, default: false},
            studentPrice: { type: Number, min: 0, default: null}
        }
    ]
    
})