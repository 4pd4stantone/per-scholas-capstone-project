import { useState, useRef } from "react";
import "./CreateEvent.css";
import DanceStudioForm from "../components/DanceStudioForm";
import ClubForm from "../components/ClubForm"; 
import OutdoorForm from "../components/OutdoorForm";
import CongressForm from "../components/CongressForm";

export default function CreateEvent() {
  const [socialForm, setSocialForm] = useState(null);


  return (
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
      <form action="submit" method="POST">
        <div>
          <div className="event-type-box-row">
            <label>
              <div className="event-type-radio-box">
                <input
                  type="radio"
                  name="evnetType"
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
                  name="evnetType"
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
                  name="evnetType"
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
                  name="evnetType"
                  className="event-type-radio-btns"
                  value="Congress/Festival"
                  onChange={(e) => setSocialForm(e.target.value)}
                  required
                />
                Congress/Festival
              </div>
            </label>
          </div>
          {socialForm ? <p id="event-type-selected">✓ Event type selected: <span id="event-type-name">{socialForm}</span></p> : null}
        </div>
        {socialForm === "Dance Studio Social" ? <DanceStudioForm /> : null}
        {socialForm === "Club Social" ? <ClubForm /> : null}
        {socialForm === "Outdoor Social" ? <OutdoorForm /> : null}
        {socialForm === "Congress/Festival" ? <CongressForm /> : null}
        <div>
          <button id="create-event-submit-btn">Create Event</button>
        </div>
        
      </form>
    </main>
  );
}
