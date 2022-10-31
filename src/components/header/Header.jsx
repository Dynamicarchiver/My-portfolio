import React from 'react';
import CTA from './CTA';
import './header.css'; 
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I,m</h5>
        <h1>Adeyemi Boluwatife</h1>
        <h5 className='typed-out'>I am a Frontend web developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src="/assets/images/header2.jpg" alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header