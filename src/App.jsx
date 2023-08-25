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
      name: 'Paul Wilson',
      email: 'email@email',
      phone: '9405555555',
      address: 'Dallas, TX',
      links: [
        { info: 'google.com', key: 9 },
        { info: 'bing.com', key: 19 }
      ]
    },
    education: [
      {
        schoolName: 'University of North',
        study: 'Everything',
        schoolStart: 'aug-10',
        schoolEnd: 'may-11',
        key: 1888
      },
      {
        schoolName: 'University of North',
        study: 'Everything',
        schoolStart: 'aug-14',
        schoolEnd: 'may-15',
        key: 99897
      }
    ],
    experience: [
      {
        companyName: 'Google',
        jobTitle: 'Googler',
        jobDesc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        jobStart: 'Jul-11',
        jobEnd: 'aug-11',
        jobLocation: 'New York City',
        key: 98798
      },
      {
        companyName: 'Google',
        jobTitle: 'Googler',
        jobDesc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        jobStart: 'Jul-11',
        jobEnd: 'aug-11',
        jobLocation: 'New York City',
        key: 78939,
      }
    ],
    skills: [
      { info: 'none', key: 999 },
      { info: 'this one thing', key: 9988 }
    ]
  })
  function handleChange (changedInfo) {
    let newInfo = { ...cvInfo, ...changedInfo }
    setCvInfo(newInfo)
  }
  return (
    <>
      <button>Content</button>
      <div className='forms'>
        <PersonalDetails
          handleChange={handleChange}
          personalInfo={cvInfo.personal}
        />
        <EducationDetails
          handleChange={handleChange}
          eduInfo={cvInfo.education}
        />
        <ExperienceDetails
          handleChange={handleChange}
          expInfo={cvInfo.experience}
        />
        <SkillDetails handleChange={handleChange} skillsInfo={cvInfo.skills} />
      </div>
      <CVDisplay cvInfo={cvInfo} />
    </>
  )
}

export default App
