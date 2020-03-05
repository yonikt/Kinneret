import React, { Component } from 'react';


export default class MoreInfo extends Component {

    constructor() {
        super()
        this.state = {}
    }



    render() {

        console.log(this.props.info)


        return  (
            <div style = {{height:"100vh"}}>
<br></br><br></br>

                {this.props.info.slice(2, 5).map(i => <div><br></br><span id="moreInfo">{i}</span><br></br><br></br></div>)}

                <span id="emoji">💧</span>



            </div>
        )
    }
}