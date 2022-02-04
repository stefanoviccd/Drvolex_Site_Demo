import React, {useState, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {Link} from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
  return ( 
  <nav className='slide-left'>
    {(toggleMenu || screenWidth > 500) && (<ul className="list">
    

      <li className="items"><a href='/'>POČETNA</a></li>
      <li className="items">O NAMA</li>
      <li className="items">GALERIJA</li>
      <li className="items"><a href='/kontakt'>KONTAKT</a></li>
       
    </ul>

    )}
  
  <button onClick={toggleNav} className="btn"><AiOutlineMenu></AiOutlineMenu></button>
</nav> )
    
}

export default Navbar;
