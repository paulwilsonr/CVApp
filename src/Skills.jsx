export default function SkillDetails () {
  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h2>Relevant Skills</h2>
        <img src='public/arrow.png' alt='minimize' className='arrow' />
      </div>
      <label>
        Skill
        <input type='text' id='skill' name='skill'></input>
      </label>
    </div>
  )
}
