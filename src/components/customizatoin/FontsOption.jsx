import FontChoice from './FontChoice'
import { useEffect } from 'react';
import handleFontChoice from '../../handleFontChoice';

export default function FontsOption ({ setFontChoice }) {
    const fontArr = ['serif', 'sans', 'mono']

useEffect(() => {
    handleFontChoice(1, fontArr);
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
                handleFontChoice={handleFontChoice}
                fontArr={fontArr}
                />
            )
        })}

      </div>
    </div>
  )
}
