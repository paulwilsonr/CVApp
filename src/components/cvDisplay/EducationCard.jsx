export default function EducationCard ({school}) {
    
    return (
  <div className='card'>
    <h3 className='cardText companyName'>{school.schoolName}</h3>
    <p className='cardText jobDesc'>{school.study}</p>
    <p className='cardText jobDates'>
      {school.schoolStart} - {school.schoolEnd}
    </p>
  </div>
)}
