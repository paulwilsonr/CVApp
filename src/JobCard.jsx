export default function JobCard ({job}) {
return (
    <div className='card'>
            <h3 className='cardText companyName'>
              {job.companyName}
            </h3>
            <p className='cardText jobTitle'>{job.jobTitle}</p>
            <p className='cardText jobLocation'>
              {job.jobLocation}
            </p>
            <p className='cardText jobDesc'>{job.jobDesc}</p>
            <p className='cardText jobDates'>
              {job.jobStart} - {job.jobEnd}
            </p>
          </div>
)
}