import React,{Component} from "react"
import DefaultMobile from "./Default/DefaultMobile"
import HomeMobile from "./HomeMobile/HomeMobile"
import AboutMobile from "./AboutMobile/AboutMobile"
import WorkMobile from "./WorkMobile/WorkMobile"
import ContactMobile from "./ContactMobile/ContactMobile"



class Mobile extends Component{
    render(){
        return(
            <div>
                <div>
                    <DefaultMobile changeLang={this.props.changeLang} lang={this.props.lang}/>
                </div>
                <div style={{position:"absolute", top: "55px", width: "100vw"}}>
                    <HomeMobile/>
                    <AboutMobile lang={this.props.lang}/>
                    <WorkMobile lang={this.props.lang}/>
                    <ContactMobile sendMail={this.props.sendMail} lang={this.props.lang}/>
                </div>
            </div>
        )
    }
}

export default Mobile