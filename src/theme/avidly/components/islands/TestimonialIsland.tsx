"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  text: string;
  rating: number;
  customerName: string;
  role: string;
}

interface TestimonialIslandProps {
  testimonials?: Testimonial[];
}

export default function TestimonialIsland({
  testimonials = [],
}: TestimonialIslandProps) {
  if (testimonials.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">No testimonials available.</p>
      </div>
    );
  }

  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      slidesPerView={2}
      navigation={{
        prevEl: '.testimonial-four-button-prev',
        nextEl: '.testimonial-four-button-next',
      }}
      pagination={{
        el: '.testimonial-pagination-four',
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      }}
      className="swiper testimonial-swiper-four"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card-four">
            <div className="quote-icon">
              <svg width="64" height="64">
                <use href="#quoteIcon"></use>
              </svg>
            </div>
            <div className="testimonial-info">
              <div 
                className="testimonial-text mb-4"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              />
              <div className="rating mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="ti ti-star-filled"></i>
                ))}
              </div>
              <h5 className="mb-1">{testimonial.customerName}</h5>
              <p className="mb-0">{testimonial.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
