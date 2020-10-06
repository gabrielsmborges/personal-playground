import React from 'react';
import Mobile from "./Mobile/Mobile"
import Desktop from './Desktop/Desktop'
import './App.css';
import emailjs from "emailjs-com"
import swal from"sweetalert"

class App extends React.Component{



  changeLang = () => {
    if(this.state.language === "English"){
      this.setState((contrary)=>({
        language: "French"
      }))
    }else if(this.state.language === "French"){
      this.setState(()=>({
        language: "English"
      }))
    }
  }

  sendMail(name ,mail, message){
    emailjs.init("user_gbImfsnkuq7b9ZdNXmtir");
    var template_params = {
        "name_contact": `${name.value}`,
        "message_content": `${message.value}`,
        "mail_contact": `${mail.value}`
     }
     
     var service_id = "default_service";
     var template_id = "my_site_contact";
     
     emailjs.send(service_id, template_id, template_params)
     .then(res => {
        swal({
          icon: "success",
        });
     })
     .catch(err => {
        swal({
          icon: "error",
        });
     })

  }


  constructor(props){
    super(props);
    this.state={
      language: "English",

      //---------------------------English--------------------------



      "English":{
        inverseLang: "French",
        actualLang: "English",
        langs:{
          actual: "En",
          inverse: "Fr"
        },
        titles:{
          about: "About Me",
          work: "Work", 
          contact: "Contact"
        },
        about: {
          1: "I’m a junior developer. I am a huge enthusiast of technology in every aspect, from video games to artificial intelligence. I grew up in four different countries: Portugal, Spain, Brazil, and France. As a consequence, I have a huge understanding of the world, I speak four languages, and I have an open mind.",
          2: "I’m in my senior year of high school, and I’ll start a Computer Science (Artificial Intelligence) degree next year at Brunel University, London.",
          3: "If you want to hit me up go to the contact section."
        },
        works:{
          lyrics:{
            title: "LyricsLP",
            description: {
              1: " - a OpenLP plugin ",
              2: "The app takes lyrics from vagalume.com api and converts it into a OpenLp xml file."
            }
          },
          tello:{
            title: "Tello Face Track",
            description: "Python app that adds face tracking to the DJI® Tello Drone using the OpenCv library."
          },
          attestation:{
            title: "Attestation Sortie - COVID-19",
            description: "Android App that generates French certificates required for leaving home during the 2020 quarantine in France."
          }
        },
        contact:{
          invit: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
          help: "Need Help ? ",
          name: "Name",
          mail: "Mail", 
          send: "Send"
        },
        alerts:{
          name: "Complete your name!",
          mail: "Enter a valid mail!",
          message: "Your message should contain 1 character or more!"
        }
      },


      

      ///-------------------------Français-----------------------------





      "French":{
        inverseLang: "English",
        actualLang: "French",
        langs:{
          actual: "Fr",
          inverse: "En"
        },
        titles:{
          about: "Infos",
          work: "Projets", 
          contact: "Contact"
        },
        about: {
          1: "Je suis développeur junior. Je suis un grand passionné de technologie dans tous les domaines, des jeux vidéo à l'intelligence artificielle. J'ai grandi dans quatre pays différents: Portugal, Espagne, Brésil et France. Par conséquent, j'ai une grande compréhension du monde, je parle quatre langues et j'ai un esprit ouvert.",
          2: "Je suis en dernière année de lycée et je commencerai l’année prochaine un diplôme en informatique (intelligence artificielle) à l’université Brunel à Londres.",
          3: "Si vous voulez me contacter, n'hésitez pas à aller dans la section contact."
        },
        works:{
          lyrics:{
            title: "LyricLP",
            description: {
              1: " - un plugin OpenLp",
              2: "L'application prend les paroles de l'api vagalume.com et les convertit en un fichier xml OpenLp."
            }
          },
          tello:{
            title: "Tello Face Track",
            description: "Application Python qui ajoute la fonctionnalité Face Tracking au DJI® Tello Drone à l'aide de la bibliothèque OpenCV."
          }, 
          attestation:{
            title: "Attestation Sortie - COVID-19",
            description: "Application Android permettant créer et stocker ses attestations dérogatoires de sortie, pendant la période de quarantaine de 2020 dû au COVID-19"
          }
        },
        contact:{
          invit: "N'hésitez pas à me contacter. Je suis toujours ouvert pour discuter de nouveaux projets, d'idées créatives ou d'opportunités pour faire partie de vos visions.",
          help: "Besoin d'Aide ?",
          name: "Nom / Prénom",
          mail: "Mail", 
          send: "Envoyer"
        },
        message:"",
        alerts:{
          name: "Complétez votre nom!",
          mail: "Entrez un mail valide!",
          message: "Votre message doit contenir au moins 1 caractère!"
        }
      }
    }
  }
  //---------------------------------RENDER---------------------------------------------------------------------------
  render(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile){
      return <Mobile sendMail={this.sendMail.bind(this)} changeLang={this.changeLang.bind(this)} lang={this.state[this.state.language]}/>
    }else{
      return <Desktop sendMail={this.sendMail.bind(this)} changeLang={this.changeLang.bind(this)} lang={this.state[this.state.language]}/>
    }
  }
}

export default App;