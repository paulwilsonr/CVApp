import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import '../stylesheets/CVRender.css'

class CVRender extends Component {
  /*constructor(props) {
    super(props);
  } */
  render() {
    const {infoProp, educationProp, experienceProp} = this.props.state
    return (
      <div id="renderedCV">
        <GeneralInfo infoProp={infoProp}/>
        <h2>Education</h2>
        <Education educationProp={educationProp}/>
        <h2>Experience</h2>
        <Experience experienceProp={experienceProp}/>
        
      </div>
    )
  }

}


export default CVRender;
