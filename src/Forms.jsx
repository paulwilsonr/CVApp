import PersonalDetails from './Personal'
import EducationDetails from './Education'
import ExperienceDetails from './Experience'
import SkillDetails from './Skills'

export default function Forms ({handleChange, cvInfo}) {
    return (
        <div className='forms'>
        <PersonalDetails
          handleChange={handleChange}
          personalInfo={cvInfo.personal}
        />
        <EducationDetails
          handleChange={handleChange}
          eduInfo={cvInfo.education}
        />
        <ExperienceDetails
          handleChange={handleChange}
          expInfo={cvInfo.experience}
        />
        <SkillDetails handleChange={handleChange} skillsInfo={cvInfo.skills} />
      </div>
    )
}