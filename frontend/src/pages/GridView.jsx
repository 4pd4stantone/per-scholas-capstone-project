import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GridView.css'
import geoDanceLogo from '../assets/nav-logo-img.png'

export default function GridView() {
const [socials, setSocials] = useState([]);
const [socialId, setSocialId] = useState("")

  useEffect(() => {
    async function getSocials() {
      const response = await fetch("http://localhost:8080/Socials");
      const data = await response.json();
      console.log(data);
      setSocials(data)
    }
    getSocials();
  }, []);

    return (
        <section id='grid-section'>
          <h4 id='events-found'>{socials.length} events found</h4>
            {socials.map((social, _id) => {
            return (
            
                <div key={social._id} className='grid-box'>
                  
                  <div className='img-box'>
                      <div className='heart-box'>
                          {/* <img src="" alt="" /> */}
                        </div>
                      <div className='img-div'>
                        <Link to={`/socials/event/${social._id}`}>
                        <img className='social-img' src={social.event.imgUrl || geoDanceLogo} alt="Social Logo" />
                        </Link>
                      </div>
                      <p className='danceStyle'>{social.event.danceStyles}</p>
                  </div>
                
                  <div className='info-box'>
                      <h4>{social.event.eventTitle}</h4>
                      <p>{social.event.venueName}</p>
                      <p>{new Date(social.event.startDateTime).toLocaleDateString()}</p>
                      <p>{new Date(social.event.startDateTime).toLocaleTimeString()}</p>
                  </div>
                </div>
              
            );
            })}
        </section>
    )
}