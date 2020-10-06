import React, {Component} from "react"

class AboutMobile extends Component{
    render(){
        return(
            <div id="AboutMobileBox">
                <h1 style={{fontSize:"5vw", marginLeft:"15vw"}}>{this.props.lang.titles.about}</h1>
                <div style={{
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    boxShadow:"0px 0px 20px 20px rgba(255, 255, 255, 0.19)",
                    marginTop:"0px",
                    width: "100vw",
                    zIndex: "-10"
                    }}>
                        <div className="container">
                    <div className="row-12">
                        <div className="col">
                            <div className="row">
                                <div className="col-2">
                                    
                                </div>
                                <div className="col-8">
                                    <img src={require('../../media/profile-pic.jpg')} style={{width: "80%", margin:"30px 10%", border:"1vw #1DE9B6 solid", borderRadius: "50%"}} rel="noopener noreferrer" alt="github"/>
                                </div>
                                <div className="col-2" style={{display: "flex", alignItems:"center"}}>
                                    <div className="" style={{marginLeft: "-50px"}}>
                                        <div className="col">
                                            <a href="https://www.linkedin.com/in/gabrielsmborges/" target="_blank" rel="noopener noreferrer" >
                                                <img style={{width: "5vw", maxWidth:"80px"}} src="https://img.icons8.com/android/128/FFFFFF/linkedin.png" alt="linnkedin"/>
                                            </a>
                                        </div>
                                        <div className="col" style={{marginTop:"20px"}}>
                                            <a href="https://www.instagram.com/gabrielsmborges/" target="_blank" rel="noopener noreferrer" >
                                                <img style={{width: "5vw", maxWidth:"80px"}} src="https://img.icons8.com/metro/128/FFFFFF/instagram-new.png" alt="instagram"/>
                                            </a>
                                        </div>
                                        <div className="col" style={{marginTop:"20px"}}>
                                            <a href="https://github.com/gabrielsmborges/" target="_blank" rel="noopener noreferrer" >
                                                <img style={{width: "5vw", maxWidth:"80px"}} src="https://img.icons8.com/material-outlined/128/FFFFFF/github.png" alt="github"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row cherokee">
                                <div className="col-1"></div>
                                <div className="col-10">
                                    <p style={{fontSize: "4vw", textAlign:"center"}}>
                                        {this.props.lang.about[1]}
                                        <br/>
                                        {this.props.lang.about[2]}
                                        <br/>
                                        <br/>
                                        {this.props.lang.about[3]}
                                    </p>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div id="skills" className="row">
                                <div id="skills-container" className="container" style={{minWidth:"100px", marginTop:"35px"}}>
                                    <div style={{}}>
                                        <div className="row" style={{margin:"0px 8vw", justifyContent:"space-evenly"}}>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/python.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/javascript.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/html-5.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/material/128/FFFFFF/css3.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/windows/128/FFFFFF/node-js.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-after-effects.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-premiere-pro.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-xd.png"/></div>
                                            <div className="icon-cont-mobile"><img alt="icon" className="col icon" src="https://img.icons8.com/ios-filled/128/FFFFFF/adobe-photoshop.png"/></div>
                                        </div>
                                    </div>
                                    <p className="text-right" style={{fontSize:"5px", marginRight:"10vw"}}>Icons by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
            </div>
        )
    }
}



export default AboutMobile