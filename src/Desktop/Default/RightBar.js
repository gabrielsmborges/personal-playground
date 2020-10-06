import React, {Component} from "react"
import anime from "animejs";

class RightBar extends Component{
    onClickLang(){

    }
    render(){
        function scroll(topoffset, duration){
            const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
            anime({
                targets : scrollElement,
                scrollTop: topoffset,
                easing: 'easeInOutCubic',
                duration: duration
            })
        }

        function obscur(targ){
            anime({
                targets: targ,
                color: "#666",
                duration: 300,
                easing: "linear"
            })
        }

        function light(target){
            anime({
                targets: target,
                color: "#FFFFFF",
                duration: 300,
                easing: "linear"
            })
        }

        return(
            <div>
                <div className="sidebar green">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{
                        width: "60px", fontSize: "9px", margin: "14px", backgroundColor: "rgba(255,255,255,0)", border: "white 2px solid", borderRadius:"15px"
                    }}>
                            {this.props.langs.actual}
                        </button>
                        <div className="dropdown-menu" style={{fontSize:"9px", width:"40px", borderRadius:"20px"}}>
                            <div className="dropdown-item" onClick={()=>{this.props.changeLang()}}>{this.props.langs.inverse}</div>
                        </div>
                    </div>
                    <div className="right-nav">
                        <p onMouseEnter={()=>{obscur("#about-button")}} onMouseOut={()=>{light("#about-button")}} id="about-button" onClick={()=>{scroll((document.getElementById("about-box").offsetTop) - 38, 1500)}} className="h6 navtitle sel">{this.props.title.about}</p>
                        <p onMouseEnter={()=>{obscur("#work-button")}} onMouseOut={()=>{light("#work-button")}} id="work-button" className="h6 navtitle sel" onClick={()=>{scroll((document.getElementById("work-box").offsetTop) + 55, 1500)}}>{this.props.title.work}</p>
                        <p onMouseEnter={()=>{obscur("#contact-button")}} onMouseOut={()=>{light("#contact-button")}} id="contact-button" className="h6 navtitle sel" onClick={()=>{scroll(document.getElementById('contact-box').offsetTop + 55, 1500)}}>{this.props.title.contact}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default RightBar