import React, {Component} from 'react'
import Default from './Default/Default'
import Home from './Home/Home'
import About from './About/About'
import Work from './Work/Work'
import Contact from './Contact/Contact'

class Desktop extends Component{
    constructor(props){
        super(props)
        this.state={
            lang: this.props.lang
        }
    }
    render(){
        return(
            <div>
               <Default changeLang={this.props.changeLang} title={this.props.lang.titles} langs={this.props.lang.langs}/>
                <div id="Content" style={{top:"60px", position: "absolute", width:"calc(100vw - 90px)"}}>
                    <Home/>
                    <About title={this.props.lang.titles.about} description={this.props.lang.about}/>
                    <Work title={this.props.lang.titles.work} description={this.props.lang.works}/>
                    <Contact lang={this.props.lang} sendMail={this.props.sendMail} title={this.props.lang.titles.contact} description={this.props.lang.contact}/>
                </div>
            </div>
        )
    }
}

export default Desktop



