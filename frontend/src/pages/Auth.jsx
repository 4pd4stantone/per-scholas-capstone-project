import { useState, useEffect, useRef } from "react";
import "./Auth.css";
import constructionImg from '../assets/constructionImg.png'

export default function Auth( ) {

 

  return (
    <>  <div id="welcome-section">
            <h1 id="welcome-title">
                Welcome to GeoDance
            </h1>
            <p id="welcome-subtitle">
                Discover and connect with the NYC dance community
            </p>
        </div>
        <main>
            <h3 style={{textAlign: 'center', margin: '50px auto 20px auto'}}>Sign In Page Coming Soon!</h3>
            <img src={constructionImg} alt="Under Construction Image" style={{display: 'flex', width: "200px", margin: '0 auto'}}/>
                
        </main>
    </>
  );
}
