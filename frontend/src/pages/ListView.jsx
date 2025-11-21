import { useState, useEffect } from 'react'
import './ListView.css'
import geoDanceLogo from '../assets/nav-logo-img.png'

export default function GridView() {
const [socials, setSocials] = useState([]);

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
        <section id='list-section'>
          <h4 id='events-found'>{socials.length} events found</h4>
            {socials.map((social, _id) => {
            return (
              <>
                <div key={social._id} className='list-box'>
                    <div className='list-heart-box'>
                          <img src="" alt="" />
                    </div>
                    <div className='list-img-div'>
                        <img className='list-social-img' src={social.event.imgUrl || geoDanceLogo} alt="Social Logo" />
                    </div>
                  <div className='list-info-box'>
                      <h4>{social.event.eventTitle}</h4>
                      <p >{social.event.venueName}</p>
                      <p>{social.event.startDateTime}</p>
                      <p className='list-danceStyle'>{social.event.danceStyles}</p>
                  </div>
                </div>
              </>
            );
            })}
        </section>
    )
}