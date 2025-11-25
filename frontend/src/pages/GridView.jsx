import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GridView.css";
import geoDanceLogo from "../assets/nav-logo-img.png";
import { BASE_URL } from '../App'


export default function GridView({ input, dateFilter }) {
  const [socials, setSocials] = useState([]);
  const query = String(input).toLocaleLowerCase().trim();
  const dateQuery = dateFilter;
  console.log(query);

  useEffect(() => {
    async function getSocials() {
      const response = await fetch(`${BASE_URL}/socials`);
      const data = await response.json();
      console.log(data);
      setSocials(data);
    }
    getSocials();
    
  }, []);

  return (
    <section id="grid-section">
      {/* filter for events that match all the text queries and match the date if applicable */}
      {socials
        .filter((s) => {
          const company = s.hostCompany.toLowerCase();
          const eventTitle = s.event.eventTitle.toLowerCase();
          const danceStyles = s.event.danceStyles.toLowerCase();
          const venueName = s.event.venueName.toLowerCase();
          const eventDate = new Date(s.event.startDateTime).toLocaleDateString();
             // checkng if the query is empty or if it matches any of the fields that follow
            const allQueries = !query || company.includes(query) ||
            eventTitle.includes(query) || danceStyles.includes(query) || venueName.includes(query); 
            // if no date is chosen do not filter by date, otherwise filter by date that matches. 
            const dateMatches = !dateFilter || eventDate === dateFilter;
          // filter by text query and/or date.
          return allQueries && dateMatches
        })
        .map((social, _id) => {
          return (
            <div key={social._id} className="grid-box">
              
                <div className="heart-box">{/* <img src="" alt="" /> */}</div>
                <div className="img-div">
                  <Link to={`/socials/event/${social._id}`}>
                    <img
                      className="social-img"
                      src={social.event.imgUrl || geoDanceLogo}
                      alt="Social Logo"
                    />
                  </Link>
                </div>
                <p className="danceStyle">{social.event.danceStyles}</p>

              <div className="info-box">
                <h4>{social.event.eventTitle}</h4>
                <p>{social.event.venueName}</p>
                <p>
                  {new Date(social.event.startDateTime).toLocaleDateString()}
                </p>
                <p>
                  {new Date(social.event.startDateTime).toLocaleTimeString()}
                </p>
              </div>
            </div>
          );
        })}
    </section>
  );
}
