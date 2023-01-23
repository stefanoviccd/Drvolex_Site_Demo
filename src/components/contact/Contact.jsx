import React from 'react'
import { FaAddressCard } from 'react-icons/fa';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { RiMailSendLine } from 'react-icons/ri';
function Contact() {
  return (
   <div className='contactCover'>
     <div className='contact_info scale-up-hor-center'>
       <div className='details'><div ><FaAddressCard className='icon'></FaAddressCard></div><div>
         Dragoljuba Kulezića Boljševika 49, 15000 Šabac</div></div>
       <div className='details'>   <div className='details'><BsTelephoneOutbound className='icon-tel'></BsTelephoneOutbound>
       </div><div className='short-text'>064/2099225 Nenad Despotović 065/2481177 Vlada Despotović</div></div>
         <div className='details'>   <div className='details'><RiMailSendLine className='icon-mail'>
          </RiMailSendLine></div>
          <div className='short-text email-text'>drvolex@gmail.com
          <button className='send-mail-btn'><a href="mailto: drvolex015@gmail.com">Pošalji poruku</a></button></div>
        </div>
       
       </div>
    </div>
      
  )
}

export default Contact