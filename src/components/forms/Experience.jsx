import { useState } from 'react'
import handleForms from '../../handleForms'

export default function ExperienceDetails ({ handleChange, expInfo }) {
  const [editOpen, setEditOpen] = useState(false)
  const [currentJob, setCurrentJob] = useState({})
  const [isMinimized, setIsMinimized] = useState(false)

  if (!editOpen) {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2>Experience</h2>
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
          {expInfo.map(job => {
            return (
              <p
                onClick={() => {
                  handleForms.handleClick(
                    job.key,
                    expInfo,
                    setCurrentJob,
                    setEditOpen
                  )
                }}
                key={job.key}
                className='clickable'
              >
                {job.companyName}
              </p>
            )
          })}
          <div className='addButtonContainer'>
            <button
              className='addButton'
              onClick={() => {
                handleForms.handleAddNew(
                  expInfo,
                  'job',
                  handleChange,
                  setCurrentJob,
                  setEditOpen
                )
              }}
            >
              Add Experience
            </button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='formContainer'>
        <div className='formTitle'>
          <h2>Experience</h2>
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
          Company Name
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={currentJob.companyName}
            onChange={e => {
              setCurrentJob({ ...currentJob, companyName: e.target.value })
            }}
          ></input>
        </label>
        <label>
          Job Title
          <input
            type='text'
            id='jobTitle'
            name='jobTitle'
            value={currentJob.jobTitle}
            onChange={e => {
              setCurrentJob({ ...currentJob, jobTitle: e.target.value })
            }}
          ></input>
        </label>
        <label>
          Job Location
          <input
            type='text'
            id='jobLocation'
            name='jobLocation'
            value={currentJob.jobLocation}
            onChange={e => {
              setCurrentJob({ ...currentJob, jobLocation: e.target.value })
            }}
          ></input>
        </label>
        <label>
          Job Description
          <input
            type='text'
            id='jobDesc'
            name='jobDesc'
            value={currentJob.jobDesc}
            onChange={e => {
              setCurrentJob({ ...currentJob, jobDesc: e.target.value })
            }}
          ></input>
        </label>
        <label>
          From
          <input
            type='text'
            placeholder='MMM-YYYY'
            id='jobStart'
            name='jobStart'
            value={currentJob.jobStart}
            onChange={e => {
              setCurrentJob({ ...currentJob, jobStart: e.target.value })
            }}
          ></input>
        </label>
        <label>
          To
          <input
            type='text'
            placeholder='MMM-YYYY'
            id='jobEnd'
            name='jobEnd'
            value={currentJob.jobEnd}
            onChange={e => {
              setCurrentJob({ ...currentJob, jobEnd: e.target.value })
              
            }}
          ></input>
        </label>
        <div className='formButtonContainer'>
          <button
            className='formButton formDelete'
            onClick={() => {
              handleForms.handleDelete(
                currentJob,
                expInfo,
                'experience',
                handleChange,
                setEditOpen
              )
            }}
          >
            <img src='/trash.png' className='deleteButton'></img>Delete
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
                currentJob,
                expInfo,
                'experience',
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
