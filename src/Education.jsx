import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function EducationDetails ({ handleChange, eduInfo }) {
 const [changingEduInfo, setChangingEduInfo] = useState([...eduInfo])
  const [currentView, setCurrentView] = useState(0)
  const [currentEduKey, setCurrentEduKey] = useState(1)
  function handleClick(key) {
    let schoolIndex = changingEduInfo.findIndex((school => school.key === key)) +1;
    setCurrentView(schoolIndex);
  }

  function handleDelete() {
  }
  if (currentView === 0) {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2>Education</h2>
          <img src='public/arrow.png' alt='minimize' className='arrow' />
        </div>
        {eduInfo.map(school => {
          return <p onClick={() => {
            handleClick(school.key)
          }} key = {school.key}>{school.schoolName}</p>
        })}
        <button>Add Education</button>
      </div>
      
    )
  } else {

    const currentSchool= {...changingEduInfo[currentView-1]}
    console.log(currentSchool)
  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h2>Education</h2>
        <img src='public/arrow.png' alt='minimize' className='arrow' />
      </div>
      <label>
        School Name
        <input
          type='text'
          id='schoolName'
          name='schoolName'
          value={currentSchool.schoolName}
          onChange={e => {
            currentSchool.schoolName = e.target.value;
            setChangingEduInfo(changingEduInfo.toSpliced(currentView-1, 1, currentSchool));
          }}
        ></input>
      </label>
      <label>
        Area of Study
        <input
          type='text'
          id='study'
          name='study'
          value={currentSchool.study}
          onChange={e => {
            currentSchool.study = e.target.value
            setChangingEduInfo(changingEduInfo.toSpliced(currentView-1, 1, currentSchool));          }}
        ></input>
      </label>
      <label>
        From
        <input
          type='month'
          id='schoolStart'
          name='schoolStart'
          value={currentSchool.schoolStart}
          onChange={e => {
            currentSchool.schoolStart = e.target.value
            setChangingEduInfo(changingEduInfo.toSpliced(currentView-1, 1, currentSchool));          }}
        ></input>
      </label>
      <label>
        To
        <input
          type='month'
          id='schoolEnd'
          name='schoolEnd'
          value={currentSchool.schoolEnd}
          onChange={e => {
            currentSchool.schoolEnd = e.target.value
            setChangingEduInfo(changingEduInfo.toSpliced(currentView-1, 1, currentSchool)); 
          }}
        ></input>
      </label>
      <button onClick={() => {
        handleDelete();
        setCurrentView(0);
      }}>Delete</button>
      <button onClick={() => setCurrentView(0)}>Cancel</button>
      <button onClick={() => {
        handleChange({ education: changingEduInfo })
        setCurrentView(0);
        }}>Save</button>
    </div>
  )
}
}