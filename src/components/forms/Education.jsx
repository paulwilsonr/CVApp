import { useState } from 'react'
import handleForms from '../../handleForms'

export default function EducationDetails ({ handleChange, eduInfo }) {
  const [editOpen, setEditOpen] = useState(false)
  const [currentSchool, setCurrentSchool] = useState({})
  const [isMinimized, setIsMinimized] = useState(false)

  if (!editOpen) {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2 className='titleText'>Education</h2>
          <img
            src='/arrow.png'
            alt='minimize'
            className={!isMinimized ? 'arrow flip' : 'arrow'}
            onClick={() => {
              setIsMinimized(!isMinimized)
            }}
          />
        </div>
        <div className={isMinimized === true ? 'hidden' : ''}>
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
          <div className='addButtonContainer'>
            <button
              className='addButton'
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
      </div>
    )
  } else {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2>Education</h2>
          <img
            src='/arrow.png'
            alt='minimize'
            className={!isMinimized ? 'arrow flip' : 'arrow'}
            onClick={() => {
              setIsMinimized(!isMinimized)
              handleForms.handleCancel(setEditOpen)
            }}
          />
        </div>
        <div className={isMinimized === true ? 'hidden' : ''}>
          <label>
            School Name
            <input
              type='text'
              id='schoolName'
              name='schoolName'
              value={currentSchool.schoolName}
              onChange={e => {
                setCurrentSchool({
                  ...currentSchool,
                  schoolName: e.target.value
                })
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
              type='text'
              placeholder='MMM-YYYY'
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
              type='text'
              placeholder='MMM-YYYY'
              id='schoolEnd'
              name='schoolEnd'
              value={currentSchool.schoolEnd}
              onChange={e => {
                setCurrentSchool({
                  ...currentSchool,
                  schoolEnd: e.target.value
                })
              }}
            ></input>
          </label>
          <div className='formButtonContainer'>
            <button
              className='formButton formDelete'
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
              <img src='/trash.png' className='deleteButton'></img>
              Delete
            </button>
            <button
              className='formButton formCancel'
              onClick={() => {
                handleForms.handleCancel(setEditOpen)
              }}
            >
              Cancel
            </button>
            <button
              className='formButton formSave'
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
        </div>
      </div>
    )
  }
}
