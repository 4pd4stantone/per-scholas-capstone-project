import { useState, useEffect } from 'react'
import './GridView.css'

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

        <>
            {socials.map((social, _id) => {
            return (
                <div key={social._id} >
                {social.eventType} Hosted by: {social.hostName}
                <img style={{width: "50px"}} src="https://res.cloudinary.com/dkdrhpx4c/image/upload/v1763657653/rnzq4iyhvri4undtqhcu.png" alt="" />
                </div>
            );
            })}
        </>
    )
}