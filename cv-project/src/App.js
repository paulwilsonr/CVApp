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
      },
      experienceProp: [
        
      ],
      educationProp: [
        
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
