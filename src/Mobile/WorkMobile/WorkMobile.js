import React, {Component} from "react"

class WorkMobile extends Component{
    constructor(props){
        super(props)
        this.state ={
            img_drone: "https://www.dropbox.com/s/e57cky68pj9dslk/dji-tello-featured-1-670x335.png?raw=1",
            img_drone_hov: "https://www.dropbox.com/s/71hfumg54bkwgo5/drone%20gif.gif?raw=1",
            img_reco: "https://www.dropbox.com/s/e57cky68pj9dslk/dji-tello-featured-1-670x335.png?raw=1",

        }
    }
    render(){
        const enter = () =>{
            if (this.state.hov){
                this.setState({
                    img_drone: this.state.img_drone_hov
                })
            }
        }

        const out = () =>{
            if (this.state.hov){
                this.setState({
                    image: this.state.img_reco
                })
            }
        }
        return(
            <div id="WorkMobileBox" style={{margin: "100px 0"}}>
                <h1 style={{fontSize:"5vw", marginLeft:"15vw"}}>{this.props.lang.titles.work}</h1>
                <div className=" container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col  cherokee" style={{textAlign:"center"}}>
                            <div className="row mt-5" style={{borderRadius:"15px", backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
                                <a href="http://lyricslp.com" target="_blank" rel="noopener noreferrer">
                                    <img style={{width: "100%", borderRadius:"15px"}} src="https://www.dropbox.com/s/hpumtq9k3vr11d3/lyrics-lp-background.png?raw=1" rel="noopener noreferrer" alt="LyricsLp"/>
                                </a>
                                <div className="col-12">
                                    <p>
                                        <b>
                                            <a href="http://lyricslp.com" target="_blank" style={{color: "white"}} rel="noopener noreferrer">
                                                {this.props.lang.works.lyrics.title}
                                            </a>
                                        </b>
                                        <br/>
                                        {this.props.lang.works.lyrics.description[1]}
                                        <br/>
                                        {this.props.lang.works.lyrics.description[2]}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-5" style={{borderRadius:"15px", backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
                                <img onMouseEnter={()=>{enter()}}  onMouseOut={()=>{out()}} style={{width: "100%", borderRadius:"15px"}} src={this.state.img_drone} rel="noopener noreferrer" alt="teelo-face-track"/>
                                <div className="col-12">
                                    <p><b>{this.props.lang.works.tello.title}</b><br/>{this.props.lang.works.tello.description}</p>
                                </div>
                            </div>
                            <div className="row mt-5" style={{borderRadius:"15px", backgroundColor:"rgba(255, 255, 255, 0.3)"}}>
                                <img style={{width: "100%", borderRadius:"15px"}} src="https://www.dropbox.com/s/11brfvb83ehszm3/covid-site-background.png?raw=1" rel="noopener noreferrer" alt="covid-app"/>
                                <div className="col-12">
                                    <p><b>{this.props.lang.works.attestation.title}</b><br/>{this.props.lang.works.attestation.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkMobile