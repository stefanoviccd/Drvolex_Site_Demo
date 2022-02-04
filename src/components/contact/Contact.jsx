import React from 'react';
import {RiMapPin2Line} from "react-icons/ri";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs"; 

function Contact() {
  return <div>
      <div className='emptySpace'></div>
      <div className='title'> 
      <div className="subtitle1">Tu smo za sva vaša pitanja.</div>
      <div className="subtitle2">Radnim danima i subotom od 08:00 do 19:00 časova.</div>
      <div >
         <button className='mail'>Pošaljite nam poruku</button>
      </div>
      </div>
      <div className='grid-template'>
           <div className="left-align">
              <div className='contact-info'>
              <div className='kontakt-heading'>Kontakt informacije</div>
                  <div className='kontakt'><RiMapPin2Line></RiMapPin2Line>  Dragomira Kulerića Boljševika 51, 15000 Šabac</div>
                  <div className='kontakt'><BsFillTelephoneFill ></BsFillTelephoneFill> 064/2099225</div>
                  <div className='kontakt'><AiOutlineMail ></AiOutlineMail> drvolex@gmail.com</div>
                  </div></div>
            <div className='logo-img'>
                <img className="shadow-drop-2-br"src='../company/nenadex12.png'></img>
            </div>

            </div>
        
      

      
     
  </div>;
}

export default Contact;
