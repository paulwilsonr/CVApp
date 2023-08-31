import SkillsPannel from "./SkillsPannel"

export default function ColorPannel ({layoutChoice, cvInfo}) {
  return (
    <div className={'colorPannel ' + layoutChoice}>
      <div className={'personalPannel ' + layoutChoice}>
        <h1
          className={'pannelTitle cvName controlableTextColor ' + layoutChoice}
        >
          {cvInfo.personal.name}
        </h1>
        <div className={'personalInfoHolder ' + layoutChoice}>
          <div className={cvInfo.personal.phone ? 'pannelInfoHolder ' + layoutChoice : 'hidden ' + layoutChoice}>
            <div className='changingColor'>
              <img src='./phone.png' className='smallIcon' />
            </div>
            <p className='pannelInfo controlableTextColor'>
              {cvInfo.personal.phone}
            </p>
          </div>
          <div className={cvInfo.personal.email ? 'pannelInfoHolder ' + layoutChoice : 'hidden ' + layoutChoice}>
            <div className='changingColor'>
              <img src='./email.png' className='smallIcon' />
            </div>
            <p className='pannelInfo controlableTextColor'>
              {cvInfo.personal.email}
            </p>
          </div>
          <div className={cvInfo.personal.address ? 'pannelInfoHolder ' + layoutChoice : 'hidden ' + layoutChoice}>
            <div className='changingColor'>
              <img src='./location.png' className='smallIcon' />
            </div>
            <p className='pannelInfo controlableTextColor'>
              {cvInfo.personal.address}
            </p>
          </div>
        </div>
        <div className={'pannelInfoHolder ' + layoutChoice}>
          <ul className={'linksHolder ' + layoutChoice}>
            {cvInfo.personal.links.map(link => {
              return (
                <li
                  className={
                    'pannelInfo linksText controlableTextColor ' + layoutChoice
                  }
                  key={link.key}
                >
                  {link.info}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {layoutChoice === 'left' || layoutChoice === 'right' ? (
        <SkillsPannel layoutChoice={layoutChoice} cvInfo={cvInfo} />
      ) : (
        ''
      )}
    </div>
  )
}
