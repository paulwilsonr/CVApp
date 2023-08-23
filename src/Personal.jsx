
// eslint-disable-next-line react/prop-types
export default function PersonalDetails ({handleChange, personalInfo}) {
    const changingPersonalInfo = {...personalInfo}

  return (
    <div className="formContainer">
        <div className="formTitle">
      <h2>Personal Details</h2>
      <img src="public/arrow.png" alt="minimize" className="arrow"/>
      </div>
        <label>
          Full Name
          <input type='text' id='name' name="name" value={personalInfo.name}  onChange={(e) => {
            changingPersonalInfo.name = e.target.value;
            handleChange({personal: changingPersonalInfo})
            }}></input>
        </label>
        <label>
            Email
            <input type="email" id="email" name="email" value={personalInfo.email}  onChange={(e) => {
            changingPersonalInfo.email = e.target.value;
            handleChange({personal: changingPersonalInfo})
            }}></input>
        </label>
        <label>
            Phone Number
            <input type="tel" id="phone" name="phone" value={personalInfo.phone}  onChange={(e) => {
            changingPersonalInfo.phone = e.target.value;
            handleChange({personal: changingPersonalInfo})
            }}></input>
        </label>
        <label>
            Address
            <input type="text" id="address" name="address" value={personalInfo.address}  onChange={(e) => {
            changingPersonalInfo.address = e.target.value;
            handleChange({personal: changingPersonalInfo})
            }}></input>
        </label>
        <label>
            Links
            <input type="text" id="links" name="links" value={personalInfo.links}  onChange={(e) => {
            changingPersonalInfo.links = e.target.value;
            handleChange({personal: changingPersonalInfo})
            }}></input>
        </label>
      
    </div>
  )
}
