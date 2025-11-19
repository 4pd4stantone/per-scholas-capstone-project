export default function DanceStudioForm() {
  return (
    <>
      <h4 className="form-title-styling">Host Information</h4>
      <div className="form-styling">
        <label htmlFor="">
          Host Name *
          <input type="text" placeholder="Enter full name" />
        </label>
      </div>
      <div className="form-styling">
        <label htmlFor="">
          Host Email *
          <input type="email" placeholder="Email@example.com" />
        </label>
      </div>
      <div className="form-styling">
        <label htmlFor="">
          Host Company *
          <input type="text" placeholder="Enter company name" />
        </label>
      </div>
      <h4 className="form-title-styling">Event Information</h4>
      <div className="form-styling">
        <label htmlFor="">
          Event Title *
          <input type="text" placeholder="Enter event title" />
        </label>
      </div>
      <div className="form-styling">
        <label htmlFor="">
          Event Description *
          <textarea type="text" placeholder="Describe your event..." />
        </label>
      </div>
      <div className="form-styling">
        <label for="dance-style">Choose a dance style *</label>
        <select id="dance-style" name="danceStyle">
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
        <div className="form-styling">
          <label for="dressCode">Dress Code *</label>
          <select id="dressCode" name="dressCode">
            <option value="">Select a dress code</option>
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
      </div>
      <div className="form-styling">
        <label htmlFor="event-datetime">
          Event Start Date & Time *
          <input type="datetime-local" name="event-datetime" />
        </label>
      </div>
      <div className="form-styling">
        <label htmlFor="event-datetime">
          Event End Date & Time *
          <input type="datetime-local" name="event-datetime" />
        </label>
      </div>
      <div className="form-styling">
        <label>
          <input type="checkbox" name="recurrence" value="true" />
          This event repeats
        </label>
      </div>
      <div className="form-styling">
        <label for="frequency">Frequency</label>
        <select id="frequency" name="frequency">
          <option value="">Select frequency</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="form-styling">
        <label for="repeatCount">Number of occurrences</label>
        <input
          type="number"
          id="repeatCount"
          name="repeatCount"
          min="1"
          max="12"
          placeholder="#"
        />
      </div>
      <div className="form-styling">
        <label for="price">Price *</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="1"
          required
        />
      </div>
      <div className="form-styling">
        <label for="price">Student Price *</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          step="1"
          required
        />
      </div>
      <div className="form-styling">
        <label>
          <input type="checkbox" name="isFree" value="true" />
          This event is free
        </label>
      </div>
      <h4 className="form-title-styling">Venue Information</h4>
      <div className="form-styling">
        <label htmlFor="">
          Venue Name *
          <input type="text" placeholder="Enter venue name" />
        </label>
      </div>
      <div className="form-styling">
        <label htmlFor="">
          Street *
          <input type="text" placeholder="555 Example Street 5th floor" />
        </label>
      </div>
      <div className="form-styling">
        <label htmlFor="">
          City *
          <input type="text" placeholder="Enter street" />
        </label>
      </div>
      <div className="form-styling">
        <label for="borough">Borough/NYC Area</label>
        <select id="borough" name="borough">
          <option value="">Select an option</option>
          <option value="Bronx">Bronx</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Sensual Bachata">Queens</option>
          <option value="Staten Island">Staten Island</option>
          <option value="Long Island">Long Island</option>
          <option value="Westchester">Westchester</option>
        </select>
      </div>
      <div className="form-styling">
        <label for="state">State</label>
        <select id="state" name="state">
          <option value="">Select a state</option>
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
        <label for="floorType">Floor Type *</label>
        <select id="floorType" name="floorType">
          <option value="">Select a floor type</option>
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
    </>
  );
}
