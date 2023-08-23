import { useState } from 'react'
import PersonalDetails from './Personal'
import EducationDetails from './Education'
import ExperienceDetails from './Experience'
import SkillDetails from './Skills'
import CVDisplay from './CVDisplay'
import './App.css'

function App () {
  const [cvInfo, setCvInfo] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      address: '',
      links: '',
    }, 
    education: {
      schoolName: 'aa',
      study: '',
      schoolStart: '',
      schoolEnd: '',
    }, 
    experience: {
      companyName: '',
      jobTitle: '',
      jobDesc: '',
      jobStart: '',
      jobEnd: '',
    }, 
    skills: []});
  function handleChange (changedInfo) {
    let newInfo = {...cvInfo, ...changedInfo};
    setCvInfo(newInfo);
  }
  return (
    <>
      <button>Content</button>
      <div className='forms'>
        <PersonalDetails handleChange={handleChange} personalInfo={cvInfo.personal}/>
        <EducationDetails handleChange={handleChange} eduInfo={cvInfo.education}/>
        <ExperienceDetails handleChange={handleChange} expInfo={cvInfo.experience}/>
        <SkillDetails handleChange={handleChange} skillInfo={cvInfo.skills} />
      </div>
      <CVDisplay cvInfo={cvInfo}/>
    </>
  )
}

export default App
