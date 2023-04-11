import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.educationProp.map((school) => {
                    return (
                        <div className="school" key={school.schoolKey}>
                            <h3>{school.schoolName}</h3>
                            <h4>Major: {school.major}</h4>
                            <h4>Graduation: {school.graduation}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }

}


export default Education;