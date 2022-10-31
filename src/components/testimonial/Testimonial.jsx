import React from "react";
import "./testimonial.css";
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
            <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src='https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-has-thoughtful-expression-keeps-hand-chin-has-gentle-tender-look-smiles-politely-waits-client-shop-dressed-fashionable-attire-isolated-purple-wall_273609-26900.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697' alt="avatar" />
            </div>
            <h5 className="client-name">Jack Smith</h5>
            <small className="client-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem consequuntur odio deleniti dolorum sit suntsimilique eaque officia dolor fuga culpa quos, at, rerum animi eosconsectetur magnam pariatur!</small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src="https://img.freepik.com/free-photo/happy-satisfied-female-customer-holding-cellphone_74855-2299.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697" alt="avatar" />
            </div>
            <h5 className="client-name">Dynamic Archiver</h5>
            <small className="client-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem consequuntur odio deleniti dolorum sit suntsimilique eaque officia dolor fuga culpa quos, at, rerum animi eosconsectetur magnam pariatur!</small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src="https://img.freepik.com/premium-photo/happy-boy-receives-package-from-online-shop-order-happy-surprised-expression_207634-30.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697" alt="avatar" />
            </div>
            <h5 className="client-name">Shatt Wale</h5>
            <small className="client-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem consequuntur odio deleniti dolorum sit suntsimilique eaque officia dolor fuga culpa quos, at, rerum animi eosconsectetur magnam pariatur!</small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src="https://img.freepik.com/free-photo/happy-female-professional-glasses-suit-holding-tablet-making-winner-gesture-while-two-businessmen-working-glass-wall-copy-space-communication-concept_74855-14248.jpg?size=626&ext=jpg&uid=R79322624&ga=GA1.2.973770838.1663292697" alt="avatar" />
            </div>
            <h5 className="client-name">Great Archiver</h5>
            <small className="client-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem consequuntur odio deleniti dolorum sit suntsimilique eaque officia dolor fuga culpa quos, at, rerum animi eosconsectetur magnam pariatur!</small>
          </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
