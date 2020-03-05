import React, { Component } from 'react';


export default class About extends Component {

    constructor() {
        super()
        this.state = {}
    }



    render() {


        return (
            <div style={{ height: "100vh" }}>

                <div id="moreInfo">

                    <h2>Yoni Kiat</h2>

                    <p id="mobile">A Full Stack Developer with proficiency in the following programs: <br></br> <br></br>
                        C++, Javascript, expertise with HTML and CSS, servers and DataBases.</p>

                <div>find me on: <span> </span> 
                <a className="g" href="https://github.com/yonikt" target="_blank">
    <svg class="icon-arrow before">
        <use xlinkHref="#arrow"></use>
    </svg>
    <span class="label">Github</span>
    <svg class="icon-arrow after">
        <use xlinkHref="#arrow"></use>
    </svg>
</a>

<svg style={{display: "none"}}>
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>


<span>   </span>   



<a className="g" href="https://www.linkedin.com/in/yoni-kiat-654a1918b/" target="_blank">
    <svg class="icon-arrow before">
        <use xlinkHref="#arrow"></use>
    </svg>
    <span class="label">LinkedIn</span>
    <svg class="icon-arrow after">
        <use xlinkHref="#arrow"></use>
    </svg>
</a>

<svg style={{display: "none"}}>
  <defs>
    <symbol id="arrow" viewBox="0 0 35 15">
      <title>Arrow</title>
      <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z "/>
    </symbol>
  </defs>
</svg>


</div>

            </div>
            </div> 
        )
    }
}