import React from 'react'
import {  ImBook, ImHome, ImUser } from 'react-icons/im'
import {SiLinuxcontainers} from 'react-icons/si';
import {AiFillMessage} from 'react-icons/ai'
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><ImUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><ImBook/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><SiLinuxcontainers/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiFillMessage/></a>
      </nav>
  )
}

export default Navbar