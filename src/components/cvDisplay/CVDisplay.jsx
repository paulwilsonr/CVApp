import EducationCard from './EducationCard'
import JobCard from './JobCard'
import SkillsPannel from './SkillsPannel'
import ColorPannel from './ColorPannel'
import InfoPannel from './InfoPannel'

export default function CVDisplay ({ cvInfo, fontChoice, layoutChoice }) {
  return (
    <div className={'cvContainer ' + layoutChoice} style={fontChoice}>
      <ColorPannel layoutChoice={layoutChoice} cvInfo={cvInfo} />
      
      <InfoPannel
        infoArr={cvInfo.experience}
        infoType={'experience'}
        title={'Professional Experience'}
      />
      <InfoPannel
        infoArr={cvInfo.education}
        infoType={'education'}
        title={'Education'}
      />
      {layoutChoice === 'top' ? (
        <SkillsPannel layoutChoice={layoutChoice} cvInfo={cvInfo} />
      ) : (
        ''
      )}
    </div>
  )
}
