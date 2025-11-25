import { useState, useEffect, useRef } from "react";
import "./CreateEvent.css";
import DanceStudioForm from "../components/DanceStudioForm";
import ClubForm from "../components/ClubForm";
import OutdoorForm from "../components/OutdoorForm";
import CongressForm from "../components/CongressForm";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../App";

export default function EditEvent({ setHeader }) {
    const navigate = useNavigate();
    const [socialForm, setSocialForm] = useState(null);
    const [social, setSocial] = useState(null);

  const { id } = useParams();
  console.log(id);

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



  useEffect(() => {
    async function getSocial() {
      const response = await fetch(`${BASE_URL}/socials/${id}`);
      const data = await response.json();
      console.log(data);
      setSocial(data);
    }
    getSocial();
  }, [id]);

  useEffect(() => {
    setHeader(false);
  }, []);

useEffect(() => {
  if (!social) return;
  setSocialForm(social.eventType);
}, [social]);

  useEffect(() => {
    if (!socialForm) return;

    refs.hostName.current.value = social.hostName;
    refs.hostCompany.current.value = social.hostCompany;
    refs.hostEmail.current.value = social.hostEmail;

    refs.eventTitle.current.value = social.event.eventTitle;
    refs.eventDescription.current.value = social.event.eventDescription;
    refs.danceStyles.current.value = social.event.danceStyles;
    refs.dressCode.current.value = social.event.dressCode;

    refs.venueName.current.value = social.event.venueName;
    refs.venueStreet.current.value = social.event.venueStreet;
    refs.venueCity.current.value = social.event.venueCity;
    refs.venueNYC.current.value = social.event.venueNYC;
    refs.venueState.current.value = social.event.venueState;
    refs.venueZipCode.current.value = social.event.venueZipCode;
    refs.venueCountry.current.value = social.event.venueCountry;

    refs.floorType.current.value = social.event.floorType;

    refs.startDateTime.current.value = social.event.startDateTime.slice(0, 16);
    refs.endDateTime.current.value = social.event.endDateTime.slice(0,16);

    refs.price.current.value = social.event.price;
    refs.studentPrice.current.value = social.event.studentPrice;

    refs.imgUrl.current.value = social.event.imgUrl;
  }, [social]);

  async function handleEdit(e) {
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
      },
    };
    console.log(socialFormData);

    try {
      const response = await fetch(`${BASE_URL}/socials/${id}`, {
        method: "PUT",
        body: JSON.stringify(socialFormData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const newSocial = await response.json();

      console.log(newSocial);

    } catch (e) {
      console.log(e);
    }
    navigate("/socials/grid-view");
  }

  return (
    <main>
      <section>
        <h2 id="choose-event-type-title">Edit Your Event</h2>
        <p id="choose-event-type-subtitle">
          Review the details below and update any information as needed.
        </p>
      </section>
      <form onSubmit={handleEdit} method="Post">
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
                  checked={socialForm === "Dance Studio Social"}
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
                  checked={socialForm === "Club Social"}
              
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
                  checked={socialForm === "Outdoor Social"}
              
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
                  checked={socialForm === "Congress/Festival"}
               
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
          <DanceStudioForm refs={refs}/>
        ) : null}
        {socialForm === "Club Social" ? <ClubForm /> : null}
        {socialForm === "Outdoor Social" ? <OutdoorForm /> : null}
        {socialForm === "Congress/Festival" ? <CongressForm /> : null}
        <div>
          {socialForm === "Dance Studio Social" ? (
            <button id="create-event-submit-btn">Edit Event</button>
          ) : (
            <button id="create-event-submit-btn" disabled>
              Edit Event
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
