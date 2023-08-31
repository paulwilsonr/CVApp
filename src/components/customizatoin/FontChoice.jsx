
export default function FontChoice ({ font, setFontChoice, handleFontChoice, index, fontArr }) {
    
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
        handleFontChoice(index, fontArr)}
    }>
      <h3 className='fontSample controlableTextColor'>Aa</h3>
      <p className='fontName controlableTextColor'>{font}</p>
    </div>
  )
}
