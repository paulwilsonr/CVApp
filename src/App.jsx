import { useState } from 'react'
import Forms from './components/forms/Forms';
import CVDisplay from './components/cvDisplay/CVDisplay';
import Customization from './components/customizatoin/Customization';
import FormPicker from './components/forms/FormPicker'
import './style.css'

function App () {
  const [mainColor, setMainColor] = useState('#6580eb')
  const [textColor, setTextColor] = useState('#000')
  const [showForms, setShowForms] = useState(true)
  const [fontChoice, setFontChoice] = useState({fontFamily: "Arial"})
  const [layoutChoice, setLayoutChoice] = useState('left');
  const [cvInfo, setCvInfo] = useState(
    {
    personal: {
      name: '',
      email: '',
      phone: '',
      address: '',
      links: []
    },
    education: [
      
    ],
    experience: [
    ],
    skills: []
  })

  document.documentElement.style.setProperty('--main-color', mainColor)
  document.documentElement.style.setProperty('--textColor', textColor)
  function handleChange (changedInfo) {
    let newInfo = { ...cvInfo, ...changedInfo }
    setCvInfo(newInfo)
  }

 
  return (
    <>
      <FormPicker setShowForms={setShowForms} />
      {showForms ? <Forms handleChange={handleChange} cvInfo={cvInfo} /> : 
      <Customization setMainColor={setMainColor} mainColor={mainColor} setFontChoice={setFontChoice} setLayoutChoice={setLayoutChoice} setTextColor={setTextColor} textColor={textColor} /> }
      <CVDisplay cvInfo={cvInfo} fontChoice={fontChoice} layoutChoice={layoutChoice} />
    </>
  )
}

export default App
