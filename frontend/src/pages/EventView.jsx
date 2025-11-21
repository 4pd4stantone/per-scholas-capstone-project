import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import geoDanceLogo from "../assets/nav-logo-img.png"


export default function EventView({setHeader}){

const [social, setSocial] = useState(null);

 useEffect(() => {
    setHeader(false);
  }, []);

  const params = useParams();
  console.log(params.id)
  

  useEffect(() => {
    async function getSocial() {
      const response = await fetch(`http://localhost:8080/Socials/${params.id}`);
      const data = await response.json();
      console.log(data);
    setSocial(data)
    }
    getSocial();
  }, [params.id]);

  if (!social) {
    return (
    <p>Loading...</p>
    )
  } else {
    return (
        <>
        <p>Hi</p>
            <img src={social.event.imgUrl || geoDanceLogo} alt="Social Logo" style={{width: "200px"}}/>
            <h2>{social.event.eventTitle}</h2>
        </>
    );
}
}