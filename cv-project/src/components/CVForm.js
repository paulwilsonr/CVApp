import React, { Component } from "react";
import '../stylesheets/CVForm.css'

class CVForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: {
        schoolName: '',
        major: '',
        graduation: '',
      },
      job: {
        jobTitle: '',
        jobDescription: '',
        hired: '',
        quit: '',
      },
    }
  }

  handleStateChange(cat, key, val) {
    const category = this.state[cat];
    category[key] = val
    this.setState({ [cat]: category });
  }

  render() {
    return (
      <div id="formContainer">
        <form>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input id="name" type="text" name="name" onChange={(e) => {
              this.props.handleChange('infoProp', 'name', e.target.value)
            }}></input>
          </div>
          <div>
            <label htmlFor="phone">Your Phone Number:</label>
            <input id="phone" type="tel" name="phone" onChange={(e) => {
              this.props.handleChange('infoProp', 'phone', e.target.value)
            }}></input>
          </div>
          <div>
            <label htmlFor="email">Your E-Mail:</label>
            <input id="email" type="email" name="email" onChange={(e) => {
              this.props.handleChange('infoProp', 'email', e.target.value)
            }}></input>
          </div>
          <div id="addSchool">
            <div>
              <label htmlFor="schoolName">School Name:</label>
              <input id="schoolName" type="text" name="schoolName" value={this.state.school.schoolName}
                onChange={(e) => {
                  this.handleStateChange('school', 'schoolName', e.target.value)
                }}></input>
            </div>
            <div>
              <label htmlFor="major">School Major:</label>
              <input id="major" type="text" name="major" value={this.state.school.major}
                onChange={(e) => {
                  this.handleStateChange('school', 'major', e.target.value)
                }}></input>
            </div>
            <div>
              <label htmlFor="graduation">Year Graduated:</label>
              <input id="graduation" type="num" placeholder="yyyy" name="graduation" value={this.state.school.graduation}
                onChange={(e) => {
                  this.handleStateChange('school', 'graduation', e.target.value)
                }}></input>
            </div>
            <button onClick={(e) => {
              e.preventDefault();
              this.props.addSchool(this.state.school)
              this.setState({
                ...this.state,
                school: {
                  schoolName: '',
                  major: '',
                  graduation: '',
                }
              })
            }}>Add Education</button>
          </div>
          <div id="addJob">
            <div>
              <label htmlFor="jobName">JobName:</label>
              <input id="jobName" type="text" name="jobName" value={this.state.job.jobTitle} onChange={(e) => {
                this.handleStateChange('job', 'jobTitle', e.target.value)
              }}></input>
            </div>
            <div>
              <label htmlFor="hired">Date Hired:</label>
              <input id="hired" type="month" placeholder="yyyy-mm" name="hired" value={this.state.job.hired} onChange={(e) => {
                this.handleStateChange('job', 'hired', e.target.value)
              }}></input>
            </div>
            <div>
              <label htmlFor="quit">Date Quit:</label>
              <input id="quit" type="month" placeholder="yyyy-mm" name="quit" value={this.state.job.quit} onChange={(e) => {
                this.handleStateChange('job', 'quit', e.target.value)
              }}></input>
            </div>
            <div>
              <label htmlFor="jobDesc">Job Description:</label>
              <input id="jobDesc" type="text" name="jobDesc" value={this.state.job.jobDescription} onChange={(e) => {
                this.handleStateChange('job', 'jobDescription', e.target.value)
              }}></input>
            </div>
            <button onClick={(e) => {
              e.preventDefault();
              this.props.addJob(this.state.job);
              this.setState({
                ...this.state,
                job: {
                  jobTitle: '',
                  jobDescription: '',
                  hired: '',
                  quit: '',
                }
              })
            }}>Add Work Experience</button>
          </div>
        </form>
      </div>
    )
  }

}


export default CVForm;
