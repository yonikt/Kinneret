import React, { Component } from 'react';

export default class MoreInfo extends Component {

    constructor() {
        super()
        this.state = {}
    }


    render() {

        return (
            <div style={{ height: "100vh" }}>
                <br></br><br></br>

                <div><br></br><span id="moreInfo">{this.props.info.info1}</span><br></br><br></br></div>
                <div><br></br><span id="moreInfo">{this.props.info.info2}</span><br></br><br></br></div>
                <div><br></br><span id="moreInfo">{this.props.info.info3}</span><br></br><br></br></div>

                <span id="emoji">💧</span>

            </div>
        )
    }
}