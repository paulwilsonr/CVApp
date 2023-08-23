export default function ExperienceDetails ({handleChange, expInfo}) {
  const changingExpInfo = {...expInfo};
    return (
      <div className="formContainer">
          <div className="formTitle">
        <h2>Experience</h2>
        <img src="public/arrow.png" alt="minimize" className="arrow"/>
        </div>
          <label>
            Company Name
            <input type='text' id='companyName' name="companyName" value={expInfo.companyName}  onChange={(e) => {
            changingExpInfo.companyName = e.target.value;
            handleChange({experience: changingExpInfo})
            }}></input>
          </label>
          <label>
              Job Title
              <input type="text" id="jobTitle" name="jobTitle" value={expInfo.jobTitle}  onChange={(e) => {
            changingExpInfo.jobTitle = e.target.value;
            handleChange({experience: changingExpInfo})
            }}></input>
          </label>
          <label>
              Job Location
              <input type="text" id="jobLocation" name="jobLocation" value={expInfo.jobLocation}  onChange={(e) => {
            changingExpInfo.jobLocation = e.target.value;
            handleChange({experience: changingExpInfo})
            }}></input>
          </label>
          <label>
              Job Description
              <input type="text" id="jobDesc" name="jobDesc" value={expInfo.jobDesc}  onChange={(e) => {
            changingExpInfo.jobDesc = e.target.value;
            handleChange({experience: changingExpInfo})
            }}></input>
          </label>
          <label>
              From
              <input type="month" id="jobStart" name="jobStart" value={expInfo.jobStart}  onChange={(e) => {
            changingExpInfo.jobStart = e.target.value;
            handleChange({experience: changingExpInfo})
            }}></input>
          </label>
          <label>
              To
              <input type="month" id="jobEnd" name="jobEnd" value={expInfo.jobEnd}  onChange={(e) => {
            changingExpInfo.jobEnd = e.target.value;
            handleChange({experience: changingExpInfo})
            }}></input>
          </label>
        
      </div>
    )
  }