import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import geoDanceLogo from "../assets/nav-logo-img.png";
import './EventView.css'

export const BASE_URL = import.meta.env.VITE_BASE_URL

export default function EventView({setHeader}){

const [social, setSocial] = useState(null);

 useEffect(() => {
    setHeader(false);
  }, []);

  const { id } = useParams();
  console.log(id)
  

  useEffect(() => {
    async function getSocial() {
      const response = await fetch(`http://localhost:8080/Socials/${id}`);
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
                <h2>{social.event.eventTitle}</h2>
                <h3>Hosted by: {social.hostName}</h3>
            </div>
        </div>
    );
}
}