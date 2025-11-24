import { useState, useEffect, useRef } from "react";
import "./Auth.css";
import { BASE_URL } from '../App'

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
            <section>
                <h2 id="create-event-title">Create New Event</h2>
                <p id="create-event-subtitle">Create a new dance event.</p>
                <h2 id="choose-event-type-title">Choose Your Event Type</h2>
                <p id="choose-event-type-subtitle">
                Select the type of event you're hosting. This will determine the
                available features and options for your event.
                </p>
            </section>
            <form method="Post">
                <div>
                <div className="event-type-box-row">
                    <label>
                    <div className="event-type-radio-box">
                        <input
                        type="radio"
                        name="eventType"
                        className="event-type-radio-btns"
                        value="Dance Studio Social"
                        onChange={(e) => setSocialForm(e.target.value)}
                        required
                        />
                        Dance Studio Social
                    </div>
                    </label>
                    <label>
                    <div className="event-type-radio-box">
                        <input
                        type="radio"
                        name="eventType"
                        className="event-type-radio-btns"
                        value="Club Social"
                        onChange={(e) => setSocialForm(e.target.value)}
                        required
                        />
                        Club Social
                    </div>
                    </label>
                </div>
                <div className="event-type-box-row">
                    <label>
                    <div className="event-type-radio-box">
                        <input
                        type="radio"
                        name="eventType"
                        className="event-type-radio-btns"
                        value="Outdoor Social"
                        onChange={(e) => setSocialForm(e.target.value)}
                        required
                        />
                        Outdoor Social
                    </div>
                    </label>
                    <label>
                    <div className="event-type-radio-box">
                        <input
                        type="radio"
                        name="eventType"
                        className="event-type-radio-btns"
                        value="Congress/Festival"
                        onChange={(e) => setSocialForm(e.target.value)}
                        required
                        />
                        Congress/Festival
                    </div>
                    </label>
                </div>
                </div>
            </form>
        </main>
    </>
  );
}
