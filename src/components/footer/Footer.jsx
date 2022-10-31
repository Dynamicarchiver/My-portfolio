import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href='#' className='footer__logo'>Dynamic</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; boluwatifeadeyemi. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer