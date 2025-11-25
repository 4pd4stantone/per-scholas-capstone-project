import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./ListView.css";
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
    <section id="list-section">
      {/* filter for events that match all the text queries and match the date if applicable */}
      {socials
        .filter((s) => {
          const company = s.hostCompany.toLowerCase();
          const eventTitle = s.event.eventTitle.toLowerCase();
          const danceStyles = s.event.danceStyles.toLowerCase();
          const venueName = s.event.venueName.toLowerCase();
          const eventDate = new Date(
            s.event.startDateTime
          ).toLocaleDateString();
          // checkng if the query is empty or if it matches any of the fields that follow
          const allQueries =
            !query ||
            company.includes(query) ||
            eventTitle.includes(query) ||
            danceStyles.includes(query) ||
            venueName.includes(query);
          // if no date is chosen do not filter by date, otherwise filter by date that matches. 
          const dateMatches = !dateFilter || eventDate === dateFilter;
          // filter by text query and/or date.
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
                <h4 className="list-title">{social.event.eventTitle}</h4>
                <p className="list-venueName">{social.event.venueName}</p>
              </div>
              <div className="list-date-time-box">
                <p className="date-time">
                  {new Date(social.event.startDateTime).toLocaleDateString()}
                </p>
                <p className="date-time">
                  {new Date(social.event.startDateTime).toLocaleTimeString()}
                </p>
              </div>
              <div className="list-danceStyle-box">
                <p className="list-danceStyle">{social.event.danceStyles}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}
