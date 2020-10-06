//------------------------- Default Mobile -------------------------


import React, {Component} from "react"
import anime from "animejs"




class DefaultMobile extends Component{
    constructor(props){
        super(props)
        this.state = {
            expanded: false
        }
    }

    navmobile(){
        this.setState({
            expanded: !this.state.expanded
        }, ()=>{
            if (this.state.expanded === true){
                anime({
                    targets: "#nav-mobile",
                    borderRadius:"0 0 20px 20px",
                    duration: 200
                })
            }else if(this.state.expanded === false){
                anime({
                    targets: "#nav-mobile",
                    borderRadius:"0px",
                    duration: 200
                })
            }
        })
        
    }

    navigate(topOff){
        const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
        anime({
            targets: scrollElement,
            scrollTop: topOff - 30,
            duration: 1500,
            easing: "easeInOutCubic"
        })
        document.getElementById("navbar-button-mobile").click()
        
    }

    render(){
        return(
            <div style={{position: "fixed", zIndex:"9999"}}>
                <nav id="nav-mobile" className="navbar navbar-expand-md navbar-dark green" style={{width: "100vw"}}>
                    <div className="navbar-brand cabin text-white" href="#">
                        <img onClick={()=>{
                            const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
                            anime({
                                targets: scrollElement,
                                scrollTop: 0,
                                duration: 1500,
                                easing: "easeInOutCubic"
                            })
                        }} src={require('../../media/logowhite.png')} width="68" height="30" class="d-inline-block align-top" alt="" />
                        Gabriel Borges
                    </div>
                    <button id="navbar-button-mobile" onClick={()=>{this.navmobile()}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center justify-content-md-end" id="navbarNav">
                        <ul className="navbar-nav" style={{marginTop: "30px"}}>
                            <li class="nav-item active">
                                <p className="nav-link text-white" style={{minWidth:"120px"}} onClick={()=>{
                                    this.navigate(document.getElementById('AboutMobileBox').offsetTop)
                                }}>{this.props.lang.titles.about}</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link text-white" onClick={()=>{
                                    this.navigate(document.getElementById('WorkMobileBox').offsetTop)
                                }}>{this.props.lang.titles.work}</p>
                            </li>
                            <li class="nav-item">
                                <p className="nav-link text-white"  onClick={()=>{
                                    this.navigate(document.getElementById('ContactMobileBox').offsetTop)
                                }}>{this.props.lang.titles.contact}</p>
                            </li>
                            <li class="nav-item active container" style={{textAlign:"center"}}>
                                <p className="nav-link text-white mx-auto">
                                    <div className="row mx-auto">
                                        <div className="col">{this.props.lang.langs.actual}</div>|<div className="col" style={{color:"rgba(255, 255, 255, 0.5)"}} onClick={()=>{this.props.changeLang()}}>{this.props.lang.langs.inverse}</div>
                                    </div>
                                </p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default DefaultMobile
