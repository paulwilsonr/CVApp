export default function FormPicker ({ setShowForms }) {
  function handleClick (button, e) {
    if (button === 'content') {
      document.getElementById('contentButton').style.backgroundColor =
        'var(--light-grey)'
      document.getElementById('customizeButton').style.backgroundColor = '#fff'
    } else {
      document.getElementById('contentButton').style.backgroundColor = '#fff'
      document.getElementById('customizeButton').style.backgroundColor =
        'var(--light-grey)'
    }
  }
  return (
    <div className='formPickerContainer'>
      <button
        id='contentButton'
        className='formPickerButton clickable'
        style={{backgroundColor:'var(--light-grey)'}}
        onClick={e => {
          setShowForms(true)
          handleClick('content', e)
        }}
      >
        <img className='smallIcon' src='/edit.png'></img>
        Content
      </button>
      <button
        id='customizeButton'
        className='formPickerButton clickable'
        style={{backgroundColor: '#fff'}}
        onClick={e => {
          setShowForms(false)
          handleClick('customize', e)
        }}
      >
        <img className='smallIcon' src='/color-palette.png'></img>
        Customize
      </button>
    </div>
  )
}
