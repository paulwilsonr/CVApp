import JobCard from "./JobCard"
import EducationCard from "./EducationCard"

export default function InfoPannel ({infoArr, infoType, title}) {
  return (
    <div className={infoType=== 'experience' ? "experiencePannel" : "educationPannel"}>
      <h2 className={infoArr[0] ? 'underline pannelTitle' : 'hidden'}>{title}</h2>
      <div className='cardsContainer'>
        {infoArr.map(item => {
          return (
          infoType=== 'experience' ? <JobCard job={item} key={item.key} /> : <EducationCard school={item} key={item.key} />)
        })}
      </div>
    </div>
  )
}
