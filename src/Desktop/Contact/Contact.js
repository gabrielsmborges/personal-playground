import React,{Component} from "react"
import Title from "../Default/Title"
import anime from 'animejs/lib/anime.es.js';
import swal from "sweetalert"


class Contact extends Component{
    render(){
        return(
            <div id="contact-box" style={{marginTop: "100px", marginBottom:"300px", height:"100vh"}}>
                <Title name="Contact"/>
                <div style={{marginLeft: "145px", marginRight: "50px", marginTop:"100px"}}>
                    <div className="row">
                        <div id="contact-txt-container-col" className="col montserrat" style={{maxWidth: "400px", minWidth:"400px", marginLeft: "20px"}}>
                            <div className="row row-flex bold">
                                <p>
                                    {this.props.description.invit}
                                </p>
                            </div>
                            <div className="row row-flex">
                                <p>
                                    <div style={{width: "100%", fontSize:"9px"}}>{this.props.description.help}</div>
                                    <div className="bold" style={{width: "100%"}}>
                                        <a className="text-white" href="mailto:gabrielsmborges@gmail.com">
                                            gabrielsmborges@gmail.com
                                        </a>
                                    </div>
                                </p>
                            </div>
                            <div className="row row-flex" style={{marginBottom: "10px", bottom:"0", position:"relative"}}>
                                <a href="https://instagram.com/gabrielsmborges" target="_blank" rel="noopener noreferrer" style={{color: "white"}}><img src="https://img.icons8.com/metro/26/FFFFFF/instagram-new.png" style={{marginRight: "20px"}} alt=""/></a>
                                <a href="https://www.linkedin.com/in/gabrielsmborges/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}><img src="https://img.icons8.com/metro/26/FFFFFF/linkedin.png" style={{marginRight: "20px"}} alt=""/></a>
                                <a href="https://github.com/gabrielsmborges" target="_blank" rel="noopener noreferrer" style={{color: "white"}}><img src="https://img.icons8.com/metro/26/FFFFFF/github.png" style={{marginRight: "20px"}} alt=""/></a>
                            </div>
                        </div>
                        <div id="contact-fil-container-col" className="col montserrat bold" style={{minWidth: "480px"}}>
                            <form style={{maxWidth: "90%"}}>
                                <p style={{alignContent:"right"}}>
                                    <div id="contact-name-box" style={{
                                        height: "45px",
                                        background: "rgba(255,255,255,0.3)",
                                        display: "flex", 
                                        borderRadius : "12px"
                                    }} onMouseOver={()=>{
                                        var el = document.getElementById('contact-name')
                                        anime({
                                            targets: el.parentElement,
                                            border:'3px solid white',
                                            duration: 200,
                                            easing: 'linear'
                                        })
                                    }} onMouseOut={()=>{
                                        var el = document.getElementById('contact-name')
                                        if (el.value === ""){
                                            anime({
                                                targets: el.parentElement,
                                                border:'0px solid white',
                                                duration: 200,
                                                easing: 'linear'
                                            })
                                        }
                                    }}>
                                        <input id="contact-name" className="contact" placeholder={this.props.description.name} type="text" style={{margin:"auto auto", height: "80%", width: "90%", background:'rgba(255, 255, 255, 0)', border: "none", color: "white", borderBottom:"1.6px solid white"}}></input>
                                    </div>
                                </p>
                                <p>
                                    <div id="contact-mail-box" style={{
                                        height: "45px",
                                        background: "rgba(255,255,255,0.3)",
                                        display: "flex", 
                                        borderRadius : "12px"
                                    }}onMouseOver={()=>{
                                        var el = document.getElementById('contact-mail')
                                        anime({
                                            targets: el.parentElement,
                                            border:'3px solid white',
                                            duration: 200,
                                            easing: 'linear'
                                        })
                                    }} onMouseOut={()=>{
                                        var el = document.getElementById('contact-mail')
                                        if (el.value === ""){
                                            anime({
                                                targets: el.parentElement,
                                                border:'0px solid white',
                                                duration: 200,
                                                easing: 'linear'
                                            })
                                        }else{
                                            if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(el.value) === false){
                                                anime({
                                                    targets: el.parentElement,
                                                    border:'3px solid red',
                                                    duration: 200,
                                                    easing: 'linear'
                                                }) 
                                            }
                                        }
                                    }}>
                                        <input id="contact-mail" className="contact" placeholder={this.props.description.mail} type="text" style={{margin:"auto auto", height: "80%", width: "90%", background:'rgba(255, 255, 255,0)', border: "none", color: "white", borderBottom:"1.6px solid white"}}></input>
                                    </div>
                                </p>
                                <p>
                                    <div style={{
                                        display: "flex", 
                                        borderRadius : "12px",
                                        background: "white", 
                                    }}>
                                        <textarea id="contact-message" style={{fontSize:"12px", margin:"10px auto", height: "270px", width: "90%", border: "none", color: "black", resize:"none"}}></textarea>
                                    </div>
                                </p>
                                <div style={{marginRight: "0", textAlign: "right"}}>
                                    <button type="button" className="green bold send" onMouseEnter={()=>{
                                        anime({
                                            targets: ".send",
                                            background: "rgb(14, 90, 71)",
                                            duration : 500,
                                            loop: false,
                                            easing: 'easeOutQuad',
                                            fontSize: "13px",
                                            border: "3px solid white"
                                        })
                                    }}
                                    onMouseOut={()=>{
                                        anime({
                                            targets: ".send",
                                            background: "#1DE9B6",
                                            duration : 500,
                                            loop: false,
                                            easing: 'easeOutQuad',
                                            fontSize: "12px",
                                            border:"0px solid white"
                                        })
                                    }}
                                    onClick={()=>{
                                        var mailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                                        var elname = document.getElementById('contact-name');
                                        var elmail = document.getElementById('contact-mail');
                                        var elmessage = document.getElementById('contact-message');
                                        if (elname.value !== ""){
                                            if(mailregex.test(elmail.value)){
                                                if(elmessage.value === "" || elmessage.value === "Dear Gabriel..."){
                                                    swal({
                                                        icon: "warning",
                                                        text: this.props.lang.alerts.message
                                                      });
                                                }else{
                                                    this.props.sendMail(elname, elmail, elmessage)
                                                }
                                            }else{
                                                
                                                swal({
                                                    icon: "warning",
                                                    text: this.props.lang.alerts.mail
                                                  });
                                            }

                                        }else{
                                            swal({
                                                icon: "warning",
                                                text: this.props.lang.alerts.name
                                              });
                                        }
                                    }} 
                                    
                                    style={{border:"none", width: "100px", height: "30px", fontSize: "12px", color:" white", borderRadius: "20px", marginRight: "10px"}}>
                                        {this.props.description.send}
                                    </button>
                                </div>
                            </form>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact