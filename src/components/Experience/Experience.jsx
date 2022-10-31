import React from 'react'
import { BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experienced__details-icons'/>
            <div><h4>HTML</h4>
            <small>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experienced__details-icons'/>
           <div> <h4>CSS</h4>
            <small>Experienced</small></div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experienced__details-icons'/>
           <div> <h4>JAVASCRIPT</h4>
            <small>Experienced</small></div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experienced__details-icons'/>
          <div> <h4>BOOTSRAP 5</h4>
            <small>Experienced</small></div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experienced__details-icons'/>
           <div><h4>REACT</h4>
            <small>Experienced</small></div>
          </article>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Experience