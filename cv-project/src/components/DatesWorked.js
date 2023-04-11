import React, { Component } from "react";


class DatesWorked extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h4>{prettyDate(this.props.hired)} - {prettyDate(this.props.quit)}</h4>
            </div>
        )
    }
}

function prettyDate(dateInput) {
    const dateArr = dateInput.split('-');
    console.log(dateArr)
    const date = new Date();
    //date.setMonth(dateArr[1] -1);
    date.setFullYear(dateArr[0], dateArr[1] -1);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric'});
}

export default DatesWorked