import { useState } from 'react'

export default function SkillDetails ({handleChange, skillsInfo}) {
  const changingSkillsInfo = skillsInfo;
  const [skillsID, setSkillsID] = useState(0)
  const [currentSkillValue, setCurrentSkillValue] = useState('')
  const [isMinimized, setIsMinimized] = useState(false);

  function handleDelete(linkKey) {
    const deletingIndex = changingSkillsInfo.findIndex((link => link.key === linkKey ))
    console.log(deletingIndex);
    changingSkillsInfo.splice(deletingIndex, 1);
    console.log(changingSkillsInfo.links)
    handleChange({skills: changingSkillsInfo});
  }

  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h2 className='titleText'>Relevant Skills</h2>
        <img src='public/arrow.png' alt='minimize' className= {!isMinimized ? 'arrow flip' : 'arrow'} 
            onClick={() => {
              setIsMinimized(!isMinimized);
            }}/>
            </div>
            <div className={isMinimized === true ? 'hidden': ''}>
      <label>
        Skill
        <input
          type='text'
          id='skill'
          name='skill'
          onChange={e => setCurrentSkillValue(e.target.value)}
          value={currentSkillValue}
          onKeyDown={e=> {
            if (e.keyCode === 13) {
              changingSkillsInfo.push({ info: e.target.value, key: skillsID })       
              
              setSkillsID(skillsID + 1)
              handleChange({ skills: changingSkillsInfo })
              setCurrentSkillValue('')
            }
          }}
        ></input>
        <div className='enteredLinksHolder'>
          {skillsInfo.map(skill => {
            return (
              <div key={skill.key} className='enteredLink clickable'>
                <p >{skill.info}</p>
                <img src='./x-mark.png' alt='delete link' className='deleteButton' onClick={() => {
                  handleDelete(skill.key);
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
