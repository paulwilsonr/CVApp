import React, { Component } from "react";
import DatesWorked from "./DatesWorked";

class Experience extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <div>
                {this.props.experienceProp.map((job) => {
                    return (
                        <div className="job" key={job.jobKey}>
                            <h3>{job.jobTitle}</h3>
                            <DatesWorked hired={job.hired} quit={job.quit}/>
                            <p>{job.jobDescription}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

function jobMaker(jobObj) {
    return
}



export default Experience;