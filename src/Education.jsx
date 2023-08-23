/* eslint-disable react/prop-types */
export default function EducationDetails ({handleChange, eduInfo}) {
  const changingEduInfo = {...eduInfo}
  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h2>Education</h2>
        <img src='public/arrow.png' alt='minimize' className='arrow' />
      </div>
      <label>
        School Name
        <input type='text' id='schoolName' name='schoolName' value={eduInfo.schoolName}  onChange={(e) => {
            changingEduInfo.schoolName = e.target.value;
            handleChange({education: changingEduInfo})
            }}></input>
      </label>
      <label>
        Area of Study
        <input type='text' id='study' name='study' value={eduInfo.study}  onChange={(e) => {
            changingEduInfo.study = e.target.value;
            handleChange({education: changingEduInfo})
            }}></input>
      </label>
      <label>
        From
        <input type='month' id='schoolStart' name='schoolStart' value={eduInfo.schoolStart}  onChange={(e) => {
            changingEduInfo.schoolStart = e.target.value;
            handleChange({education: changingEduInfo})
            }}></input>
      </label>
      <label>
        To
        <input type='month' id='schoolEnd' name='schoolEnd' value={eduInfo.schoolEnd}  onChange={(e) => {
            changingEduInfo.schoolEnd = e.target.value;
            handleChange({education: changingEduInfo})
            }}></input>
      </label>
    </div>
  )
}
