export default function SkillsPannel ({layoutChoice, cvInfo}) {

  if(cvInfo.skills.length === 0) {
    return (
      <div className={layoutChoice === "top" ? 'skillPannel ' + layoutChoice : 'skillPannel controlableTextColor ' + layoutChoice}>
      </div>
    )
  }
    return (
      <div className={layoutChoice === "top" ? 'skillPannel ' + layoutChoice : 'skillPannel controlableTextColor ' + layoutChoice}>
        <h2 className='skillsTitle underline whiteUnderline'>
          Relevant Skills
        </h2>
        <ul className='skillsHolder'>
          {cvInfo.skills.map(skill => {
            return (
              <li className='pannelInfo' key={skill.key}>
                {skill.info}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }