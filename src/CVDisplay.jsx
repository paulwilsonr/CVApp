import './CVDisplay.css'
// eslint-disable-next-line react/prop-types
export default function CVDisplay ({ cvInfo }) {
  console.log(cvInfo)
  return (
    <div className='cvContainer'>
      <div className='sidePannel'>
        <div className='personalPannel'>
          <h1 className='pannelTitle cvName'>{cvInfo.personal.name}</h1>
          <p className='pannelInfo'>{cvInfo.personal.phone}</p>
          <p className='pannelInfo'>{cvInfo.personal.email}</p>
          <p className='pannelInfo'>{cvInfo.personal.links}</p>
        </div>
        <div className='skillsPannel'>
          <h2 className='pannelTitle underline whiteUnderline'>
            Relevant Skills
          </h2>
          <ul>
            {cvInfo.skills.map((skill, index) => {
              return (
                <li className='pannelInfo' key={index}>
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='experiencePannel'>
        <h2 className='underline pannelTitle'>Professional Experience</h2>
        <div className='jobCardsContainer'>
          <div className='jobCard'>
            <h3 className='jobCardText companyName'>{cvInfo.experience.companyName}</h3>
            <p className='jobCardText jobTitle'>{cvInfo.experience.jobTitle}</p>
            <p className='jobCardText jobLocation'>{cvInfo.experience.jobLocation}</p>
            <p className='jobCardText jobDesc'>{cvInfo.experience.jobDesc}</p>
            <p className='jobCardText jobDates'>
              {cvInfo.experience.jobStart} - {cvInfo.experience.jobEnd}
            </p>
          </div>
        </div>
      </div>
      <div className='educationPannel'>
        <h2 className='underline pannelTitle'>Education</h2>
        <h3>{cvInfo.education.schoolName}</h3>
        <p>{cvInfo.education.study}</p>
        <p>{cvInfo.education.schoolStart}</p>
        <p>{cvInfo.education.schoolEnd}</p>
      </div>
    </div>
  )
}
