import React, {Component} from "react"
/*import anime from "animejs"*/

class TopBarLogo extends Component{
    render(){
        /*function scroll(topoffset, duration){
            const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
            anime({
                targets : scrollElement,
                scrollTop: topoffset,
                easing: 'easeInOutQuad',
                duration: duration
            })
            console.log("scrolled")
        }*/
        return(
            <div className="logo-title" style={{height: "80px", width: "calc(100vw - 90px)",zIndex: "100"}}>
                <div style={{
                    display: "flex", padding:"20px", paddingLeft:"50px"
                }}>
                    <img id="logo" alt="logo" src={require("../../media/logowhite.png")} style={{height: "40px", position:"fixed"}}/>
                    <h1 id="logo-title" className="text-white cabin" style={{fontSize: "30px", marginLeft:"90px"}}>Gabriel Borges</h1>
                </div>
            </div>
        )
    }
}

export default TopBarLogo