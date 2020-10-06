import React, {Component} from 'react'
import RightBar from './RightBar'
import TopBarLogo from './TopBarLogo'


class Default extends Component{
    render(){
        return(
            <div style={{zIndex: "999"}}>
                <RightBar langs={this.props.langs} changeLang={this.props.changeLang} title={this.props.title}/>
                <TopBarLogo/>
            </div>
        )
    }
}


export default Default