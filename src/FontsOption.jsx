import FontChoice from './FontChoice'
import { useEffect } from 'react';

export default function FontsOption ({ setFontChoice }) {
    const fontArr = ['serif', 'sans', 'mono']
  function handleChoice (fontIndex) {
    for(let i=0; i < fontArr.length; i++) {
        if(i === fontIndex) {
            document.getElementById(fontArr[i]).style.backgroundColor = 'var(--main-color)';
        } else {
            document.getElementById(fontArr[i]).style.backgroundColor = '#fff';
        }
    }
  }

useEffect(() => {
    handleChoice(1);
}, [])

  return (
    <div className='formContainer'>
      <h2 className='customizationTitle'>Fonts</h2>
      <div className='layoutOptionContainer'>
        {fontArr.map((font, index) => {
            return (
                <FontChoice
                font={font}
                setFontChoice={setFontChoice}
                key={font}
                index={index}
                handleChoice={handleChoice}
                />
            )
        })}

        {/* <FontChoice
          font='serif'
          setFontChoice={setFontChoice}
          handleChoice={handleChoice}
        />
        <FontChoice
          font='sans'
          setFontChoice={setFontChoice}
          handleChoice={handleChoice}
        />
        <FontChoice
          font='mono'
          setFontChoice={setFontChoice}
          handleChoice={handleChoice}
        /> */}
      </div>
    </div>
  )
}
