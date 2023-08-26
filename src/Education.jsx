import { useState } from 'react'
import uniqid from 'uniqid'

export default function EducationDetails ({ handleChange, eduInfo }) {
  const [editOpen, setEditOpen] = useState(false)
  const [currentSchool, setCurrentSchool] = useState({})

  function findSchoolIndex (schoolKey) {
    let schoolIndex = eduInfo.findIndex(school => school.key === schoolKey)
    return schoolIndex
  }

  function handleClick (schoolKey) {
    let schoolIndex = findSchoolIndex(schoolKey)
    let shownSchool = eduInfo[schoolIndex]
    setCurrentSchool(shownSchool)
    setEditOpen(true)
  }

  function handleDelete () {
    let schoolIndex = findSchoolIndex(currentSchool.key);
    let tempEduInfo = [...eduInfo];
    tempEduInfo.splice(schoolIndex, 1);
    handleChange({education: tempEduInfo});
    setEditOpen(false)
  }

  function handleCancel () {
    setEditOpen(false)
  }

  function handleSave () {
    let schoolIndex = findSchoolIndex(currentSchool.key);
    let tempEduInfo = [...eduInfo];
    tempEduInfo[schoolIndex] = currentSchool;
    handleChange({education: tempEduInfo})
    setEditOpen(false)
  }

  function handleAddNew () {
    let tempEduInfo = [...eduInfo];
    let newSchool = {
      schoolName: 'New School',
      study: '',
      schoolStart: '',
      schoolEnd: '',
      key: uniqid(),
    }
    tempEduInfo.push(newSchool);
    handleChange({education: tempEduInfo});
    return;
    
    
  }

  if (!editOpen) {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2>Education</h2>
          <img src='public/arrow.png' alt='minimize' className='arrow' />
        </div>
        {eduInfo.map(school => {
          return (
            <p
              onClick={() => {
                handleClick(school.key)
              }}
              key={school.key}
            >
              {school.schoolName}
            </p>
          )
        })}
        <button onClick={() => {
          handleAddNew();
          }}>Add Education</button>
      </div>
    )
  } else {
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
              setCurrentSchool({ ...currentSchool, schoolName: e.target.value })
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
              setCurrentSchool({ ...currentSchool, study: e.target.value })
            }}
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
              setCurrentSchool({ ...currentSchool, schoolStart: e.target.value })
            }}
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
              setCurrentSchool({ ...currentSchool, schoolEnd: e.target.value })
            }}
          ></input>
        </label>
        <button onClick={handleDelete}>Delete</button>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleSave}>Save</button>
      </div>
    )
  }
}

