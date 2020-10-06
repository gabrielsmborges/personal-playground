import React, {Component} from 'react'
import Title from "../Default/Title"

class About extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        /*480 w photo-description-cont offsetWidth*/
        function center(){
            if (document.getElementById("photo-description-cont").offsetWidth < 600){
                document.getElementById('description').style.textAlign="center"
            }
            else{
                document.getElementById('description').style.textAlign="right"
            }
        }
        

        window.onload = function(){
            center()
        };

        window.onresize = function(){
            center()
        }

        return(
            <div id="about" className="text-white" style={{zIndex:"-10"}}>
                <Title name={this.props.title}/>
                <div id="about-box" style={{
                    backgroundColor:"rgba(255, 255, 255, 0.19)",
                    boxShadow:"0px -20px 15px 35px rgba(255, 255, 255, 0.19)",
                    marginTop:"50px",
                    width: "100vw",
                    zIndex: "-10"
                }}>
                    <div>
                        <div style={{display:"flex"}}>
                            <div style={{
                                display:"flex",
                                writingMode:"vertical-rl",
                                padding:"0px 20px",
                                fontSize:"12px", 
                                textAlign:"center",
                                justifyContent:"space-evenly"
                            }}>
                                <p className="p60"><a href="https://www.linkedin.com/in/gabrielsmborges/" target="_blank" rel="noopener noreferrer" style={{color: "white",userSelect: "none"}}>Linkedin</a></p>
                                <p className="p60"><a href="https://www.instagram.com/gabrielsmborges/" target="_blank" rel="noopener noreferrer" style={{color: "white",userSelect: "none"}}>Instagram</a></p>
                                <p className="p60"><a href="https://github.com/gabrielsmborges" target="_blank" rel="noopener noreferrer" style={{color: "white",userSelect: "none"}}>Github</a></p>
                            </div>
                            <div className="container" id="photo-description-cont">
                                <div className="row" style={{height: "100%",justifyContent:"center", marginLeft:"25px", marginRight:"40px"}}>
                                    <div className="col-5" style={{minWidth:"200px", display:"flex"}}>
                                        <img id="profile-pic" alt="profile-pic" src={require("../../media/profile-pic.jpg")} style={{width:"inherit",maxWidth:"250px", position:"relative", border:"3px solid #1DE9B6", borderRadius:"500px", margin:"auto"}}/>
                                    </div>
                                    <div className="col-7 cherokee" style={{maxWidth:"350px",minWidth:"200px", fontSize:"16px", display:"flex", marginTop:"30px"}}>
                                        <p id="description" className="" style={{marginLeft:"10px", margin: "auto"}}>
                                            {this.props.description[1]}
                                            <br/>
                                            {this.props.description[2]}
                                            <br/><br/>
                                            {this.props.description[3]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="skills-container" className="container" style={{minWidth:"100px", marginTop:"35px"}}>
                        <div style={{marginLeft:"52px"}}>
                            <div className="row" style={{margin:"0px 8vw", justifyContent:"space-evenly"}}>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/python.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/javascript.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/html-5.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/css3.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/windows/128/FFFFFF/node-js.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-after-effects.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-premiere-pro.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-xd.png"/></div>
                                <div className="icon-cont"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-photoshop.png"/></div>
                            </div>
                        </div>
                        <p className="text-right" style={{fontSize:"5px", marginRight:"10vw"}}>Icons by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About


