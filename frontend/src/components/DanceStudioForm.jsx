import './DanceStudioForm.css'

export default function DanceStudioForm({ refs }) {
  return (
    <div id='form'>
      <h3>Host Information</h3>

      <div className="form-styling">
        <label htmlFor="hostName" >Host Name *</label>
        <input id="hostName" name="hostName" type="text" required ref={refs.hostName} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="hostCompany">Host Company *</label>
        <input id="hostCompany" name="hostCompany" type="text" required ref={refs.hostCompany} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="hostEmail">Host Email *</label>
        <input id="hostEmail" name="hostEmail" type="email" required ref={refs.hostEmail} className='input-styling'/>
      </div>

      <h3>Event Information</h3>

      <div className="form-styling">
        <label htmlFor="eventTitle">Event Title *</label>
        <input id="eventTitle" name="eventTitle" type="text" required ref={refs.eventTitle} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="eventDescription">Event Description *</label>
        <textarea id="eventDescription" name="eventDescription" required ref={refs.eventDescription} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="danceStyles">Dance Style *</label>
        <select id="danceStyles" name="danceStyles" required ref={refs.danceStyles} >
          <option value="">Select an option</option>
          <option value="Salsa on 2">Salsa on 2</option>
          <option value="Urban Bachata">Urban Bachata</option>
          <option value="Traditional Bachata">Traditional Bachata</option>
          <option value="Sensual Bachata">Sensual Bachata</option>
          <option value="Merengue">Merengue</option>
          <option value="Chacha">Chacha</option>
          <option value="Salsa on 1">Salsa on 1</option>
          <option value="Cumbia">Cumbia</option>
          <option value="Mainstream Music">Mainstream Music</option>
        </select>
      </div>

      <div className="form-styling">
        <label htmlFor="dressCode">Dress Code *</label>
        <select id="dressCode" name="dressCode" required ref={refs.dressCode} >
          <option value="">Select</option>
          <option value="No Dress Code">No Dress Code</option>
          <option value="Casual">Casual</option>
          <option value="Formal (Required)">Formal (Required)</option>
          <option value="Formal (Encouraged)">Formal (Encouraged)</option>
          <option value="Theme/Costumed (Required)">
            Theme/Costumed (Required)
          </option>
          <option value="Theme/Costumed (Encouraged)">
            Theme/Costumed (Encouraged)
          </option>
        </select>
      </div>

      <h3>Venue Information</h3>

      <div className="form-styling">
        <label htmlFor="venueName">Venue Name *</label>
        <input id="venueName" name="venueName" type="text" required ref={refs.venueName} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="venueStreet">Street Address *</label>
        <input id="venueStreet" name="venueStreet" type="text" required ref={refs.venueStreet} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="venueCity">City *</label>
        <input id="venueCity" name="venueCity" type="text" required ref={refs.venueCity} className='input-styling'/>
      </div>

      <div className="form-styling">
        <label htmlFor="venueNYC">NYC Area</label>
        <select id="venueNYC" name="venueNYC" ref={refs.venueNYC}>
          <option value="">Select</option>
          <option value="Bronx">Bronx</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Staten Island">Staten Island</option>
          <option value="Long Island">Long Island</option>
          <option value="Westchester">Westchester</option>
        </select>
      </div>

      <div className="form-styling">
        <label htmlFor="venueState">State *</label>
        <select id="venueState" name="venueState" required ref={refs.venueState}>
          <option value="">Select a state</option>
          <option value="NY" defaultValue="NY">
            NY
          </option>
          <option value="NJ">NJ</option>
          <option value="CT">CT</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </select>
      </div>

      <div className="form-styling">
        <label htmlFor="venueZipCode">Zip Code *</label>
        <input
          id="venueZipCode"
          name="venueZipCode"
          type="text"
          pattern="[0-9]{5}"
          required
          ref={refs.venueZipCode}
        />
      </div>

      <div className="form-styling">
        <label htmlFor="venueCountry">Country *</label>
        <input
          id="venueCountry"
          name="venueCountry"
          type="text"
          defaultValue="USA"
          required
          ref={refs.venueCountry}
        />
      </div>

      <div className="form-styling">
        <label htmlFor="floorType">Floor Type *</label>
        <select id="floorType" name="floorType" required ref={refs.floorType}>
          <option value="">Select</option>
          <option value="Unknown">Unknown</option>
          <option value="Hardwood">Hardwood</option>
          <option value="Dance Floor (Sprung/Professional)">
            Dance Floor (Sprung/Professional)
          </option>
          <option value="Marble">Marble</option>
          <option value="Tile">Tile</option>
          <option value="Carpet">Carpet</option>
          <option value="Lawn">Lawn</option>
          <option value="Concrete">Concrete</option>
        </select>
      </div>

      <h3>Event Timing</h3>

      <div className="form-styling">
        <label htmlFor="startDateTime">Start Date & Time *</label>
        <input
          id="startDateTime"
          name="startDateTime"
          type="datetime-local"
          required
          ref={refs.startDateTime}
        />
      </div>

      <div className="form-styling">
        <label htmlFor="endDateTime">End Date & Time *</label>
        <input
          id="endDateTime"
          name="endDateTime"
          type="datetime-local"
          required
          ref={refs.endDateTime}
        />
      </div>

      <h3>Recurrence</h3>

      <div className="form-styling">
        <label>
          <input type="checkbox" name="recurrence" value="true" ref={refs.recurrence}/>
          This event repeats
        </label>
      </div>

      <div className="form-styling">
        <label htmlFor="frequency">Frequency</label>
        <select id="frequency" name="frequency" ref={refs.frequency}>
          <option value="">Select</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="form-styling">
        <label htmlFor="repeatCount">Number of Occurrences</label>
        <input
          id="repeatCount"
          name="repeatCount"
          type="number"
          min="1"
          max="12"
          ref={refs.repeatCount}
        />
      </div>

      <h3>Pricing</h3>

      <div className="form-styling">
        <label htmlFor="price">General Admission Price *</label>
        <input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          required
          ref={refs.price}
        />
      </div>

      <div className="form-styling">
        <label>
          <input type="checkbox" name="isFree" value="true" ref={refs.isFree}/>
          This event is free
        </label>
      </div>

      <div className="form-styling">
        <label htmlFor="studentPrice">Student Price</label>
        <input
          id="studentPrice"
          name="studentPrice"
          type="number"
          min="0"
          step="0.01"
          ref={refs.studentPrice}
        />
      </div>
      <h3>Event Flyer</h3>

      <div className="form-styling">
        <label htmlFor="price">
            Image URL
        </label>
        <input
          id="img-url"
          name="imgUrl"
          type="text"
          ref={refs.imgUrl}
        />
      </div>
    </div>
  );
}
