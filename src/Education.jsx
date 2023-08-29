import { useState } from 'react'
import handleForms from './handleForms'

export default function EducationDetails ({ handleChange, eduInfo }) {
  const [editOpen, setEditOpen] = useState(false)
  const [currentSchool, setCurrentSchool] = useState({})
  const [isMinimized, setIsMinimized] = useState(false);

  if (!editOpen) {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2 className='titleText'>Education</h2>
          <img src='public/arrow.png' alt='minimize' className= {!isMinimized ? 'arrow flip' : 'arrow'} 
            onClick={() => {
              setIsMinimized(!isMinimized);
            }}/>        
            </div>
            <div className={isMinimized === true ? 'hidden': ''}>
        {eduInfo.map(school => {
          return (
            <p
              onClick={() => {
                handleForms.handleClick(
                  school.key,
                  eduInfo,
                  setCurrentSchool,
                  setEditOpen
                )
              }}
              key={school.key}
              className='clickable'
            >
              {school.schoolName}
            </p>
          )
        })}
        <button
          onClick={() => {
            handleForms.handleAddNew(
              eduInfo,
              'school',
              handleChange,
              setCurrentSchool,
              setEditOpen
            )
          }}
        >
          Add Education
        </button>
      </div>
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
              setCurrentSchool({
                ...currentSchool,
                schoolStart: e.target.value
              })
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
        <button
          onClick={() => {
            handleForms.handleDelete(
              currentSchool,
              eduInfo,
              'education',
              handleChange,
              setEditOpen
            )
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleForms.handleCancel(setEditOpen)
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleForms.handleSave(
              currentSchool,
              eduInfo,
              'education',
              handleChange,
              setEditOpen
            )
          }}
        >
          Save
        </button>
      </div>
    )
  }
}
