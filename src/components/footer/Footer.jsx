import React from 'react';
import {RiMapPin2Line} from "react-icons/ri";

function Footer() {
 
       return (
        <div className='footer-div'>
            <div className='footer-logo'>
                <img className='logo-img' src='../company/nenadex12.png'></img>
               
            </div>
               
    <div className='info tel'><b><p className='footer-title'><RiMapPin2Line></RiMapPin2Line> Poslovna jedinica u Šapcu</p></b><p>Dragomira Kulezića Boljševika 51</p></div>
    <div className='info'><p className='footer-title'><b>Kontaktirajte nas</b></p>
    <p>Email: drvoleks@gmail.com</p>
    <p>Kontakt tel: 0650000000</p>
    </div>
</div>
    );

}

export default Footer;
