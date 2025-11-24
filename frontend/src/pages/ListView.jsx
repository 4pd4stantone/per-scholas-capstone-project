import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./ListView.css";
import geoDanceLogo from "../assets/nav-logo-img.png";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function GridView({ input, dateFilter }) {
  const [socials, setSocials] = useState([]);
  const query = String(input).toLocaleLowerCase().trim();
  const dateQuery = dateFilter;
  console.log(query);

  useEffect(() => {
    async function getSocials() {
      const response = await fetch(`http://localhost:8080/Socials`);
      const data = await response.json();
      console.log(data);
      setSocials(data);
    }
    getSocials();
  }, []);



  return (
    <section id="list-section">
      {socials
        .filter((s) => {
          const company = s.hostCompany.toLowerCase();
          const eventTitle = s.event.eventTitle.toLowerCase();
          const danceStyles = s.event.danceStyles.toLowerCase();
          const venueName = s.event.venueName.toLowerCase();
          const eventDate = new Date(
            s.event.startDateTime
          ).toLocaleDateString();
          const allQueries =
            !query ||
            company.includes(query) ||
            eventTitle.includes(query) ||
            danceStyles.includes(query) ||
            venueName.includes(query);
          const dateMatches = !dateFilter || eventDate === dateFilter;

          return allQueries && dateMatches;
        })
        .map((social, _id) => {
          return (
            <div key={social._id} className="list-box">
              <div className="list-heart-box">
                {/* <img src="" alt="" /> */}
              </div>
              <div className="list-img-div">
                <Link to={`/socials/event/${social._id}`}>
                <img
                  className="list-social-img"
                  src={social.event.imgUrl || geoDanceLogo}
                  alt="Social Logo"
                />
                </Link>
              </div>
              <div className="list-info-box">
                <h4>{social.event.eventTitle}</h4>
                <p>{social.event.venueName}</p>
                <p>
                  {new Date(social.event.startDateTime).toLocaleDateString()}
                </p>
                <p>
                  {new Date(social.event.startDateTime).toLocaleTimeString()}
                </p>
                <p className="list-danceStyle">{social.event.danceStyles}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}
