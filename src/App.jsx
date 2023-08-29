import { useState } from 'react'
import Forms from './Forms'
import CVDisplay from './CVDisplay'
import Customization from './Customization'
import FormPicker from './FormPicker'
import './style.css'

function App () {
  const [mainColor, setMainColor] = useState('#6580eb')
  const [showForms, setShowForms] = useState(false)
  const [fontChoice, setFontChoice] = useState({fontFamily: "Arial"})
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
        companyName: 'Google also',
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

  document.documentElement.style.setProperty('--main-color', mainColor)
  function handleChange (changedInfo) {
    let newInfo = { ...cvInfo, ...changedInfo }
    setCvInfo(newInfo)
  }

 
  return (
    <>
      <FormPicker setShowForms={setShowForms} />
      {showForms ? <Forms handleChange={handleChange} cvInfo={cvInfo} /> : 
      <Customization setMainColor={setMainColor} mainColor={mainColor} setFontChoice={setFontChoice} /> }
      <CVDisplay cvInfo={cvInfo} fontChoice={fontChoice} />
    </>
  )
}

export default App
