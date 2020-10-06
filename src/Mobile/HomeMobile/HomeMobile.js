import React, {Component} from "react"
import Typewriter from 'typewriter-effect'
import anime from "animejs"

class HomeMobile extends Component{
    componentDidMount(){
        setTimeout(()=>{
            anime({
                targets: "#arrow",
                borderColor: "rgb(255, 255, 255)",
                duration: 3000,
                easing: "linear"
            })
        }, 12000)
    }
    render(){
        return(
            <div style={{minHeight:"900px",height: "100vh"}}>
               <div style={{padding:"5vw 15vw", textAlign: "right"}}>
                   <h1 style={{fontSize:"13vw", lineHeight:"120px", WebkitTextStroke: "1.5px", WebkitTextStrokeColor:"white", color:"rgba(0, 255, 0,0)", minHeight:"60vh"}}>
                   <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(2000)
                        .typeString('“Hello<br/> Guys!')
                        .pauseFor(1000)
                        .deleteChars(5)
                        .typeString("World”")
                        .typeString("<br/>I'm<br/>Gqb")
                        .deleteChars(2)
                        .typeString("abriel<br/>Borges")
                        .start()
                    }}
                    options={{autoStart: true, loop: false}}
                    />
                   </h1>
                   <div style={{marginTop:"2vh"}}>
                        <div id="arrow" style={{
                            borderRight: `1.5vw solid rgba(255, 255, 255, 0)`,
                            borderBottom: `1.5vw solid rgba(255, 255, 255, 0)`,
                            width: "50px",
                            height: "50px",
                            transform: "rotate(45deg)",
                            margin: "0 auto",
                            borderRadius: "5px"
                        }} onClick={()=>{
                            const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
                            anime({
                                targets: scrollElement,
                                scrollTop: document.getElementById('AboutMobileBox').offsetTop,
                                duration: 1500,
                                easing: "easeInOutCubic"
                            })
                        }}></div>
                   </div>
               </div>
    
            </div>
        )
    }
}


export default HomeMobile