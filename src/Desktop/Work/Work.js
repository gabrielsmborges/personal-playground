import React, {Component} from 'react'
import Title from "../Default/Title"

class Work extends Component{
    render(){
        return(
            <div id="work-box"className="" style={{minHeight: "80vh", marginRight: "19px", marginTop: "100px"}}>
                <Title name={this.props.title}/>
                <Workelement Id="1"align="left" image="https://www.dropbox.com/s/hpumtq9k3vr11d3/lyrics-lp-background.png?raw=1" content={
                    <p><b><a href="http://lyricslp.com/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>{this.props.description.lyrics.title}</a></b>{this.props.description.lyrics.description[1]}<br/>{this.props.description.lyrics.description[2]}</p>
                }/>
                <Workelement Id="2" align="left" hov="https://www.dropbox.com/s/tmpsq4g5ravbmas/dronecompressed.gif?raw=1" image="https://www.dropbox.com/s/e57cky68pj9dslk/dji-tello-featured-1-670x335.png?raw=1" content={
                    <p><b>{this.props.description.tello.title}</b><br/>{this.props.description.tello.description}</p>
                }/>
                <Workelement Id="3" align="left" image="https://www.dropbox.com/s/11brfvb83ehszm3/covid-site-background.png?raw=1" content={
                    <p><b>{this.props.description.attestation.title}</b><br/>{this.props.description.attestation.description}</p>
                }/>
            </div>
            
        )
    }
}

export default Work

class Workelement extends Component{
    constructor(props) {
        super(props);
        this.state = {
            align: props.align,
            alignreco: props.align,
            image: props.image,
            hov: props.hov,
            recoimg: props.image
        };
    }

    render(){
        const enter = () =>{
            if (this.state.hov){
                this.setState({
                    image: this.state.hov
                })
            }
        }

        const out = () =>{
            if (this.state.hov){
                this.setState({
                    image: this.state.recoimg
                })
            }
        }

        if(this.state.align === "left"){
            return(
                <div id="workelement" className="workelement container mt-5 hov-work" style={{marginLeft: "80px", textAlign:`${this.state.align}`}}>
                    <div className="row" style={{height: "100%",justifyContent:"center", marginLeft:"25px", marginRight:"20px"}}>
                        <div className="col" style={{minWidth:"300px", display:"flex"}}>
                            <img className=""
                            id="work-im" 
                            alt="profile-pic" 
                            src={this.state.image}
                            onMouseEnter= {()=>{enter()}}
                            onMouseOut = {() => {out()}}
                            style={{
                                    width:"inherit",
                                    maxWidth:"400px", 
                                    position:"relative", 
                                    margin:"auto", 
                                    borderRadius:"25px",
                                    border: "solid 3px #1DE9B6"
                                }}
                            />
                        </div>
                        <div className="col cherokee" style={{minWidth:"250px", fontSize:"16px", display:"flex", margin:"auto 40px"}}>
                            <p id="description" className="" style={{marginLeft:"10px"}}>{this.props.content}</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div id="workelement" className="workelement container mt-5" style={{marginLeft: "80px", textAlign:`${this.state.align}`}}>
                    <div className="row" style={{height: "100%",justifyContent:"center", marginLeft:"25px", marginRight:"20px"}}>
                        <div className="col cherokee" style={{minWidth:"250px", fontSize:"16px", margin:"auto 40px"}}>
                            <p id="description" className="" style={{marginLeft:"10px"}}>{this.props.content}</p>
                        </div>
                        <div className="col" style={{minWidth:"300px", display:"flex"}}>
                            <img id="work-im" 
                            alt="profile-pic" 
                            src={this.state.image}
                            onMouseEnter= {()=>{enter()}}
                            onMouseOut = {() => {out()}}
                            style={{width:"inherit",maxWidth:"400px", position:"relative", margin:"auto", borderRadius:"25px"}}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}