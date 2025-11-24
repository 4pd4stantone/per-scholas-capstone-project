import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import geoDanceLogo from "../assets/nav-logo-img.png";
import './EventView.css'

export const BASE_URL = import.meta.env.VITE_BASE_URL

export default function EventView({setHeader}){
const navigate = useNavigate();
const [social, setSocial] = useState(null);

 useEffect(() => {
    setHeader(false);
  }, []);

  const { id } = useParams();
  console.log(id)
  
  async function handleDelete() {
    console.log('handleDelete');
    try {
      const response = await fetch(`http://localhost:8080/socials/${id}`, {
        method: "DELETE"
      })
      const result = await response.json();
      console.log(result);
      console.log(id);
    } catch(e) {
      console.log(e)
    }
    navigate('/socials/grid-view')
  }

  useEffect(() => {
    async function getSocial() {
      const response = await fetch(`http://localhost:8080/socials/${id}`);
      const data = await response.json();
      console.log(data);
    setSocial(data)
    }
    getSocial();
  }, [id]);

  if (!social) {
    return (
    <p>Loading...</p>
    )
  } else {
    return (
        <div id="event-section">
            <div id="event-box">
                <div id="img-box">
                    <img src={social.event.imgUrl || geoDanceLogo} alt="Social Logo" id="social-flyer-img"/>
                </div>
                <p className="eventView-danceStyle">{social.event.danceStyles}</p>
                <h1>{social.event.eventTitle}</h1>
                <h2>{social.event.eventDescription}</h2>
                <h3 className="event-view-info">Event Type: {social.eventType} </h3>
                <h3 className="event-view-info">Hosted by: {social.hostName}</h3>
                <h3 className="event-view-info">Event Company: {social.hostCompany}</h3>
                <h3 className="event-view-info">Email Contact: {social.hostEmail}</h3>
                <h2>Venue Information</h2>
                <h3 className="event-view-info">Venue Name: {social.event.venueName}</h3>
                <h3 className="event-view-info">Venue Address: {social.event.venueStreet}, {social.event.venueCity}, {social.event.venueState}, {social.event.venueZipCode}, {social.event.venueCountry}</h3>
                <h3 className="event-view-info">NYC area: {social.event.venueNYC}</h3>
                <h3 className="event-view-info">Dance Floor: {social.event.floorType}</h3>
                <h2>Event Date & Time</h2>
                <h3 className="event-view-info">Date: {new Date(social.event.startDateTime).toLocaleDateString()}</h3>
                <h3 className="event-view-info">Time: {new Date(social.event.startDateTime).toLocaleTimeString()} - {new Date(social.event.endDateTime).toLocaleTimeString()}</h3>
                <h2>Pricing</h2>
                <h3 className="event-view-info">Price: ${social.event.price}</h3>
                <h3 className="event-view-info">{social.event.studentPrice === null || 0 || undefined ? "" : `Student Price: $${social.event.studentPrice}`}</h3>
            </div>
            <div className="event-view-btns">
              <Link>
              <button className='edit-btn' >Edit Event</button>
              </Link>
              <button className='delete-btn' onClick={() => handleDelete(id)}>Delete Event</button>
            </div>
        </div>
    );
}
}