export default function ColorOption ({ setMainColor, mainColor, setTextColor, textColor }) {
  return (
    <div className='formContainer'>
      <h2 className='cusomizationTitle'>Color</h2>
      <label className='colorChoice clickable'>
        Main Color
        <input
          type='color'
          value={mainColor}
          className="clickable"
          name='mainColorChoice'
          id='mainColorChoice'
          onChange={e => {
            setMainColor(e.target.value)
          }}
        />
      </label>
      <label className='colorChoice clickable'>
        Text Color
        <input
          type='color'
          value={textColor}
          className="clickable"
          name='textColorChoice'
          id='textColorChoice'
          onChange={e => {
            setTextColor(e.target.value)
          }}
        />
      </label>
    </div>
  )
}
