import { useState } from 'react'
export default function PersonalDetails ({ handleChange, personalInfo }) {
  const changingPersonalInfo = { ...personalInfo }
  const [linkID, setLinkID] = useState(0)
  const [currentLinkValue, setCurrentLinkValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  function handleDelete(linkKey) {
    const deletingIndex = changingPersonalInfo.links.findIndex((link => link.key === linkKey ))
    changingPersonalInfo.links.splice(deletingIndex, 1);
    handleChange({personal: changingPersonalInfo});
  }

  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h2 className='titleText'>Personal Details</h2>
        <img src='public/arrow.png' alt='minimize' className= {!isMinimized ? 'arrow flip' : 'arrow'} 
            onClick={() => {
              setIsMinimized(!isMinimized);
            }}/>
                  </div>
                  <div className={isMinimized === true ? 'hidden': ''}>
      <label>
        Full Name
        <input
          type='text'
          id='name'
          name='name'
          value={personalInfo.name}
          onChange={e => {
            changingPersonalInfo.name = e.target.value
            handleChange({ personal: changingPersonalInfo })
          }}
        ></input>
      </label>
      <label>
        Email
        <input
          type='email'
          id='email'
          name='email'
          value={personalInfo.email}
          onChange={e => {
            changingPersonalInfo.email = e.target.value
            handleChange({ personal: changingPersonalInfo })
          }}
        ></input>
      </label>
      <label>
        Phone Number
        <input
          type='tel'
          id='phone'
          name='phone'
          value={personalInfo.phone}
          onChange={e => {
            changingPersonalInfo.phone = e.target.value
            handleChange({ personal: changingPersonalInfo })
          }}
        ></input>
      </label>
      <label>
        Address
        <input
          type='text'
          id='address'
          name='address'
          value={personalInfo.address}
          onChange={e => {
            changingPersonalInfo.address = e.target.value
            handleChange({ personal: changingPersonalInfo })
          }}
        ></input>
      </label>
      <label>
        Links
        <input
          type='text'
          id='links'
          name='links'
          value={currentLinkValue}
          onChange={e => setCurrentLinkValue(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              changingPersonalInfo.links.push({ info: e.target.value, key: linkID })       
              
              setLinkID(linkID + 1)
              handleChange({ personal: changingPersonalInfo })
              setCurrentLinkValue('')
            }
          }}
        ></input>
        <div className='enteredLinksHolder'>
          {personalInfo.links.map(link => {
            return (
              <div key={link.key} className='enteredLink clickable'>
                <p >{link.info}</p>
                <img src='./x-mark.png' alt='delete link' className='deleteButton' onClick={() => {
                  handleDelete(link.key);
                }}/>
              </div>
            )
          })}
        </div>
      </label>
      </div>
    </div>
  )
}
