
export default function FontChoice ({ font, setFontChoice, handleChoice, index }) {
    
  let chosenFont = {}
  switch (font) {
    case 'serif':
      chosenFont = { fontFamily: 'Times New Roman' }
      break
    case 'sans':
      chosenFont = { fontFamily: 'Arial' }
      break
    case 'mono':
      chosenFont = { fontFamily: "'Courier New'" }
  }
  
  
  return (
    <div
      className='fontChoice clickable'
      id={font}
      style={chosenFont}
      onClick={() => {
        setFontChoice(chosenFont)
        handleChoice(index);}
    }>
      <h3 className='fontSample'>Aa</h3>
      <p className='fontName'>{font}</p>
    </div>
  )
}
