# GeoDance

GeoDance is a full-stack MERN application that helps dancers discover, create, and share social dance events across New York City. The platform supports event hosts, dance studios, and dancers by providing tools to create events, upload flyers, browse socials, and explore weekly and recurring dance gatherings.

This project was built as a capstone that combines real-world full-stack experience, modern frontend tooling, RESTful API design, and third-party integrations such as Cloudinary.
<img width="1905" height="796" alt="Screenshot 2025-11-25 at 1 40 22 AM" src="https://github.com/user-attachments/assets/9d32c74b-7c49-4845-8d2c-c3063ef79f6d" />

## Features
## Event Creation

Multiple event types, including:

Dance Studio Social

Club Event

Outdoor Event

Congress/Event Weekender

Cloudinary image upload support

Venue and event detail forms with validation

Calendar date-time selection with correct formatting
<img width="1903" height="861" alt="Screenshot 2025-11-25 at 1 40 42 AM" src="https://github.com/user-attachments/assets/71eb27be-5b44-4558-a4cb-b35ca2721b0b" />

## Event Browsing

Grid and list views

Individual event detail pages

Date filtering with a calendar popup

Auto-fallback to default logo when no image is provided

## Event Editing and Deletion

Edit pages pre-populate the form with existing values

Events can be updated or deleted in real time

Full client-side form control and fetch-based updates
<img width="520" height="890" alt="Screenshot 2025-11-25 at 1 41 23 AM" src="https://github.com/user-attachments/assets/4805af6a-67af-4340-8185-018652073391" />

## Backend Capabilities

Express REST API

Mongoose models for events, hosts, and venues

Cloudinary uploader with Multer support

Environment-based configuration

JSON validation and error handling

## Tech Stack
## Frontend

React

Vite

React Router

CSS Modules

Fetch API

## Backend

Node.js

Express

MongoDB + Mongoose

Cloudinary, Multer

dotenv

## Deployment

Netlify for frontend (https://geodance.netlify.app/)

Backend locally or deployed (Render recommended)

Netlify redirects to support React Router

## Project Structure
Capstone Project/
│
├── backend/
│   ├── models/
│   │   ├── Social.js
│   │   └── ...other mongoose models
│   ├── routes/
│   │   ├── socials.js
│   │   └── ...other route files
│   ├── cloudinary.js
│   ├── server.js
│   └── .env  (not included in repo)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── index.html
│   └── .env
│
└── README.md

## Installation
1. Clone the repository
git clone <repo-url>
cd "Capstone Project"

2. Install dependencies
Frontend
cd frontend
npm install

Backend
cd backend
npm install

## Environment Variables
## Backend .env
PORT=8080
MONGODB_URI=<your-mongo-uri>

CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>

## Frontend .env
VITE_BASE_URL=http://localhost:8080

## Running the Project
Start backend
cd backend
npm run dev

Start frontend
cd frontend
npm run dev


Frontend will run at:

http://localhost:5173


Backend will run at:

http://localhost:8080

## API Endpoints
## Social Events
GET     /socials
POST    /socials
GET     /socials/:id
PUT     /socials/:id
DELETE  /socials/:id


Event objects contain:

Host info

Event details

Venue fields

Pricing

Recurrence settings

Cloudinary image URL

## Deployment Notes
Fix React Router 404 on Netlify

Create a _redirects file in /frontend/public:

/*    /index.html   200

Date formatting for <input type="datetime-local">

Convert MongoDB ISO dates into:

YYYY-MM-DDTHH:mm

Cloudinary “Must supply api_key”

Ensure your .env is loaded before calling Cloudinary config.

## Future Enhancements

User login system

Map and Calendar View

Favorites and saved events

Extended search filters (borough, style, time range)

Push notifications

Verified host profiles

NYC dance studio directory

## Author

Victor Stanton
Software Engineer
Email: Victor.Stanton@gmail.com

## License

MIT License © 2025 Victor Stanton
