import React, { Component } from "react";
import CVForm from "./components/CVForm";
import CVRender from "./components/CVRender";
import './stylesheets/App.css';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoProp: {
        name: 'Name Name',
        phone: '5555555555',
        email: 'email@email.com'
      },
      experienceProp: [
        {
          jobKey: 'job1',
          jobTitle: 'Test job',
          jobDescription: 'This is the description of the job that was done. It was good job I did',
          hired: '2006-1',
          quit: '2007-5'
        },
        {
          jobKey: 'job2',
          jobTitle: 'Test job 2',
          jobDescription: 'This is the second description of the job that was done. It was bad job I did',
          hired: '2009-7',
          quit: '2010-8'
        },
        
      ],
      educationProp: [
        {
          schoolKey: 'school1',
          schoolName: 'Test School',
        major: 'All majors',
        graduation: '2009'
        },
        {
          schoolKey: 'school2',
          schoolName: 'Test School 2',
        major: 'None majors',
        graduation: '2019'
        },
        
      ]
      
    };
  
  }

handleChange = (cat, key, val) => {
  const category = this.state[cat];
  category[key] = val;
  this.setState({ [cat]: category});
};

addSchool = (schoolObj) => {
  let newSchool = {
    schoolKey: uniqid(),
    schoolName: schoolObj.schoolName,
    major: schoolObj.major,
    graduation: schoolObj.graduation
  };
  this.setState(prevState => ({
    educationProp: [...prevState.educationProp, newSchool]
  }));
}

addJob = (jobObj) => {
  let newJob = {
    jobKey: uniqid(),
    jobTitle: jobObj.jobTitle,
    jobDescription: jobObj.jobDescription,
    hired: jobObj.hired,
    quit: jobObj.quit
  };
  this.setState(prevState => ({
    experienceProp: [...prevState.experienceProp, newJob]
  }));
}

  render() {
    return (
      <div id="app">
        <CVForm handleChange={this.handleChange} addSchool={this.addSchool} addJob={this.addJob}/>
        <CVRender state={this.state} />
      </div>
    )
  }

}


export default App;
