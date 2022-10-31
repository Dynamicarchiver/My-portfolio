import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Competitor and Customer Analysis.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>User and Design Reasearch.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Adapdation to all device screen sizes</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Branding,Prototypiing and wireframing</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Cordination and Implementation with developers</p>
            </li>
          </ul>
        </article>
       { /****************END OF UI/UX ***************/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Competitor and Customer Analysis.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>User and Design Reasearch.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Adapdation to all device screen sizes</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Branding,Prototypiing and wireframing</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Cordination and Implementation with developers</p>
            </li>
          </ul>
        </article>
       { /******************END OF WEB DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services