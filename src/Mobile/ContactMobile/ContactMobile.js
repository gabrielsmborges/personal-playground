import React, {Component} from "react"
import anime from "animejs"
import swal from"sweetalert"



class ContactMobile extends Component{
    render(){
        return(
            <div id="ContactMobileBox" style={{minHeight: "100vh"}}>
                <h1  style={{fontSize:"5vw", marginLeft:"15vw"}}>{this.props.lang.titles.contact}</h1>
                <div className="container montserrat" style={{marginTop: "40px"}}>
                    <div className="row" style={{margin: "0 40px"}}>
                        <div className="container">
                        <p style={{fontSize:"12px", fontWeight:"600"}}>
                            {this.props.lang.contact.invit}
                        </p>
                        <div>
                            <h6 style={{fontSize:"3px", marginBottom:"0"}}>{this.props.lang.contact.help}</h6>
                            <div style={{fontSize:"10px", fontWeight:"bold"}}>
                                <a className="text-white" href="mailto:gabrielsmborges@gmail.com">
                                    gabrielsmborges@gmail.com
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row" style={{margin: "0 40px"}}>
                        <div className="container">
                            <input id="contact-name-mobile" placeholder={this.props.lang.contact.name} className="margininput" type="text" style={{width: "100%"}}
                            onChange={()=>{
                                if (document.getElementById('contact-name-mobile').value === ""){
                                    anime({
                                        targets: "#contact-name-mobile",
                                        border: "0px white solid", 
                                        duration: 1000
                                    })
                                }else{
                                    anime({
                                        targets: "#contact-name-mobile",
                                        border: "3px white solid", 
                                        duration: 1000
                                    })
                                }
                            }}
                            />
                            <input id="contact-mail-mobile" placeholder={this.props.lang.contact.mail}  className="margininput" type="text" style={{width: "100%"}}
                            onChange={()=>{
                                if (document.getElementById('contact-mail-mobile').value === ""){
                                    anime({
                                        targets: "#contact-mail-mobile",
                                        border: "0px white solid", 
                                        duration: 1000
                                    })
                                }else{
                                    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(document.getElementById('contact-mail-mobile').value)){
                                        anime({
                                            targets: "#contact-mail-mobile",
                                            border: "3px white solid", 
                                            duration: 1000
                                        })
                                    }else{
                                        anime({
                                            targets: "#contact-mail-mobile",
                                            border: "3px red solid", 
                                            duration: 1000
                                        })
                                    }
                                }
                            }}
                            />
                            <textarea id="contact-message-mobile" style={{width: "100%", height: "150px", marginTop: "20px", borderRadius:"6px", border:"none", padding:"10px"}}></textarea>
                            <p style={{textAlign:"right"}}>
                                <button className="green bold" style={{borderRadius: "25px", marginRight:"10px", width:"100px", color: "white", border:"none", fontSize:"12px"}}
                                onClick={()=>{
                                    var mailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                                    var elname = document.getElementById('contact-name-mobile');
                                    var elmail = document.getElementById('contact-mail-mobile');
                                    var elmessage = document.getElementById('contact-message-mobile');
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
                                >
                                    {this.props.lang.contact.send} 
                                </button>
                            </p>
                        </div>
                        <div className="container" style={{marginTop:"20px"}}>
                            <div className="row" style={{textAlign:"center"}}>
                                <div className="col-2"></div>
                                <div className="col">
                                    <p>
                                        <a href="https://github.com/gabrielsmborges/" target="_blank" rel="noopener noreferrer">
                                            <img alt="" style={{width: "5vw", maxWidth:"80px"}} src="https://img.icons8.com/material-outlined/128/FFFFFF/github.png"/>
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <p>
                                        <a href="https://instagram.com/gabrielsmborges/" target="_blank" rel="noopener noreferrer">
                                            <img alt="" style={{width: "5vw", maxWidth:"80px"}} src="https://img.icons8.com/metro/128/FFFFFF/instagram-new.png"/>
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <p>
                                        <a href="https://linkedin.com/in/gabrielsmborges/" target="_blank" rel="noopener noreferrer">
                                            <img alt="" style={{width: "5vw", maxWidth:"80px"}} src="https://img.icons8.com/metro/128/FFFFFF/linkedin.png"/>
                                        </a>
                                    </p>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMobile