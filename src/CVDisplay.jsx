import './CVDisplay.css';
import EducationCard from './EducationCard';
import JobCard from './JobCard';
// eslint-disable-next-line react/prop-types
export default function CVDisplay ({ cvInfo }) {
  return (
    <div className='cvContainer'>
      <div className='sidePannel'>
        <div className='personalPannel'>
          <h1 className='pannelTitle cvName'>{cvInfo.personal.name}</h1>
          <div className='pannelInfoHolder'>
            <img src="./phone.png" className='smallIcon' />
            <p className='pannelInfo'>{cvInfo.personal.phone}</p>
          </div>
          <div className='pannelInfoHolder'>
            <img src="./email.png" className='smallIcon' />
            <p className='pannelInfo'>{cvInfo.personal.email}</p>
          </div>
          <div className='pannelInfoHolder'>
            <img src="./location.png" className='smallIcon' />
            <p className='pannelInfo'>{cvInfo.personal.address}</p>
          </div>
          <div className='pannelInfoHolder'>
            <div className='smallIcon'></div>
            <ul className='linksHolder'>
            {cvInfo.personal.links.map((link) => {
              return (
                <li className='pannelInfo linksText' key={link.key}>
                  {link.info}
                </li>
              )
            })}
          </ul>
          </div>
        </div>
        <div className='skillsPannel'>
          <h2 className='pannelTitle underline whiteUnderline'>
            Relevant Skills
          </h2>
          <ul className='skillsHolder'>
            {cvInfo.skills.map((skill) => {
              return (
                <li className='pannelInfo' key={skill.key}>
                  {skill.info}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='experiencePannel'>
        <h2 className='underline pannelTitle'>Professional Experience</h2>
        <div className='cardsContainer'>
          {cvInfo.experience.map(job => {
            return <JobCard job={job} key={job.key} />
          })}
        </div>
      </div>
      <div className='educationPannel'>
        <h2 className='underline pannelTitle'>Education</h2>
        <div className='cardsContainer'>
          {cvInfo.education.map(school => {
            return <EducationCard school={school} key={school.key}/>
          })}
        </div>
      </div>
    </div>
  )
}
