import { useState, useEffect, useRef } from "react";
import "./CreateEvent.css";
import DanceStudioForm from "../components/DanceStudioForm";
import ClubForm from "../components/ClubForm";
import OutdoorForm from "../components/OutdoorForm";
import CongressForm from "../components/CongressForm";

export default function CreateEvent() {
  const [socialForm, setSocialForm] = useState(null);
  const [socials, setSocials] = useState([]);
  const eventTypeRef = useRef(null);
  const hostNameRef = useRef(null);

  useEffect(() => {
    async function getSocials() {
      const response = await fetch("http://localhost:8080/Socials");
      const data = await response.json();
      console.log(data);
      // setSocials(data)
    }
    getSocials();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const socialFormData = {
      eventType: eventTypeRef.current.value,
      hostName: hostNameRef.current.value,
    };
    console.log(socialFormData);

    try {
      const response = await fetch("http://localhost:8080/Socials", {
        method: "POST",
        body: JSON.stringify(socialFormData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const newSocial = await response.json();

      console.log(newSocial);

      setSocials([...socials, newSocial]);
    } catch (e) {
      console.log(e);
    }
  }

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
      <form onSubmit={handleSubmit} method="Post">
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
                  ref={eventTypeRef}
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
          {socialForm ? (
            <p id="event-type-selected">
              ✓ Event type selected:{" "}
              <span id="event-type-name">{socialForm}</span>
            </p>
          ) : null}
        </div>
        {socialForm === "Dance Studio Social" ? (
          <DanceStudioForm 
          hostNameRef={hostNameRef} />
        ) : null}
        {socialForm === "Club Social" ? <ClubForm /> : null}
        {socialForm === "Outdoor Social" ? <OutdoorForm /> : null}
        {socialForm === "Congress/Festival" ? <CongressForm /> : null}
        <div>
          {socialForm === "Dance Studio Social" ? (
            <button id="create-event-submit-btn">Create Event</button>
          ) : (
            <button id="create-event-submit-btn" disabled>
              Create Event
            </button>
          )}
        </div>
      </form>
      <ul>
        {socials.map((social, _id) => {
          return (
            <li key={social._id}>
              {social.eventType} Hosted by: {social.hostName}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
