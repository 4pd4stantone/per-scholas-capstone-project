import { useState, useEffect, useRef } from "react";
import "./CreateEvent.css";
import DanceStudioForm from "../components/DanceStudioForm";
import ClubForm from "../components/ClubForm";
import OutdoorForm from "../components/OutdoorForm";
import CongressForm from "../components/CongressForm";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../App'


export default function CreateEvent({ setHeader }) {
const navigate = useNavigate();

  useEffect(() => {
    setHeader(false);
  }, []);

  const [socialForm, setSocialForm] = useState(null);
  const refs = {
    eventType: useRef(null),
    hostName: useRef(null),
    hostCompany: useRef(null),
    hostEmail: useRef(null),
    eventTitle: useRef(null),
    eventDescription: useRef(null),
    danceStyles: useRef(null),
    dressCode: useRef(null),
    venueName: useRef(null),
    venueStreet: useRef(null),
    venueCity: useRef(null),
    venueNYC: useRef(null),
    venueState: useRef(null),
    venueZipCode: useRef(null),
    venueCountry: useRef(null),
    floorType: useRef(null),
    startDateTime: useRef(null),
    endDateTime: useRef(null),
    price: useRef(null),
    studentPrice: useRef(null),
    imgUrl: useRef(null),
  };


  async function handleSubmit(e) {
    e.preventDefault();

    const socialFormData = {
      eventType: refs.eventType.current.value,
      hostName: refs.hostName.current.value,
      hostCompany: refs.hostCompany.current.value,
      hostEmail: refs.hostEmail.current.value,

      event: {
      eventTitle: refs.eventTitle.current.value,
      eventDescription: refs.eventDescription.current.value,
      danceStyles: refs.danceStyles.current.value,
      dressCode: refs.dressCode.current.value,
      venueName: refs.venueName.current.value,
      venueStreet: refs.venueStreet.current.value,
      venueCity: refs.venueCity.current.value,
      venueNYC: refs.venueNYC.current.value,
      venueState: refs.venueState.current.value,
      venueZipCode: refs.venueZipCode.current.value,
      venueCountry: refs.venueCountry.current.value,
      floorType: refs.floorType.current.value,
      startDateTime: refs.startDateTime.current.value,
      endDateTime: refs.endDateTime.current.value,
      price: refs.price.current.value,
      studentPrice: refs.studentPrice.current.value,
      imgUrl: refs.imgUrl.current.value,
      }
    };
    console.log(socialFormData);

    try {
      const response = await fetch(`${BASE_URL}/socials`, {
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
    navigate('/socials/grid-view')
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
                  ref={refs.eventType}
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
          <DanceStudioForm refs={refs} />
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
    </main>
  );
}
