import React, {Component} from 'react'
import Typewriter from 'typewriter-effect';

class Home extends Component{
    render(){

        return(
            <div style={{minHeight: "700px", maxHeight:"1000px", height:"100vh"}}>
                <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
                <div className="" style={{borderLeft:"5px #1DE9B6 solid", minHeight:"520px"}}>
                    <p id="hello-world" style={{marginTop:"70px", textAlign:"right", marginRight:"40px", fontSize:"75px", WebkitTextStroke: "1.5px",WebkitTextStrokeColor:"white", color:"rgba(0, 255, 0,0)"}}>
                    <Typewriter
  onInit={(typewriter) => {
    typewriter.pauseFor(2000)
    .typeString('“Hello<br/> Guys!')
      .pauseFor(1000)
      .deleteChars(5)
      .typeString("World”")
      .typeString("<br/>I'm<br/> Gqbr")
      .deleteChars(3)
      .typeString("abriel<br/>Borges")
      .start()
  }}
  options={{autoStart: true, loop: false}}
/>
                    </p>
                </div>
            </div>
        )
    }
}


export default Home