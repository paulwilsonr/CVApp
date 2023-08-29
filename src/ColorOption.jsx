export default function ColorOption ({ setMainColor, mainColor }) {
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
    </div>
  )
}


ColorOption.PropTypes = {
  setMainColor: PropTypes.func,
}