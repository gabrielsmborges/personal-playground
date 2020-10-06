import React, {Component} from "react"

class Title extends Component{

    render(){
        return(
            <div id="about-title-container" style={{marginLeft:"145px", top:"16px", position:"relative"}}>
                <h1 id="about-title-123" style={{fontSize:"35px"}}>{this.props.name}</h1>
            </div>
        )
    }
}

export default Title