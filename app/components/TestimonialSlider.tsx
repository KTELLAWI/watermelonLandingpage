
"use client"
import React, { useEffect, useRef } from 'react';
// import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css'; // Import the Keen Slider styles
import KeenSlider, { KeenSliderOptions, KeenSliderHooks } from 'keen-slider';
import { StaticImageData } from 'next/image';
import { feedback, testimonilasheadertitle } from '../constants';



interface SlideContent {
  id:string;
  quote: string;
  author: string;
  title:string;
  img:StaticImageData;
}

interface SliderProps {
  slides: SlideContent[];
}

const TestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstance = useRef<typeof KeenSlider | null>(null);  // Use typeof KeenSlider

  useEffect(() => {
    if (sliderRef.current && feedback.length > 0) {
      sliderInstance.current = new KeenSlider(sliderRef.current, 
        {
            loop: true,
            slides: {
              origin: 'center',
              perView: 1.25,
              spacing: 16,
            },
            breakpoints: {
              '(min-width: 1024px)': {
                slides: {
                  origin: 'auto',
                  perView: 1.0,
                  spacing: 32,
                },
              },
            },
          },[]
    //     {
    //     loop: true,
    //     slidesPerView: 3, // Set the total number of slides you want to display
    //   slidesPerGroup: 1.5, // Show one and a half slides at a time
    //   mode: 'free-snap',
    //   }
      
      
      );
    }

    return () => {
      // if (sliderInstance.current) {
      //   sliderInstance.current.destroy();
      // }
    };
  }, [feedback]);
  
  const handleNextSlide = () => {
    if (sliderInstance.current) {
      // @ts-ignore
      sliderInstance.current.next();
    }
  };

  const handlePrevSlide = () => {
    if (sliderInstance.current) {
      // @ts-ignore
      sliderInstance.current.prev();
    }
  };

  return (
    <section  dir="rtl" className=" rounded-2xl  testimonial-section ptb-100">

<div className="testimonial-shape ">
                <img className='z-0'
               
                src="../testimonial-shape-1.png" alt="main-image"/>
            </div>
            <div className="testimonial-shape-img1  ">
                {/* <img src="../testimonial-shape-2.png" alt="image"/> */}
            </div>
            <div className="testimonial-shape-img2">
                <img src="../testimonial-shape-3.png" alt="image"/>
            </div>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold font-tajawal  tracking-tight text-black sm:text-white sm:text-4xl">
              {testimonilasheadertitle}
            </h2>

            <p className="mt-4 text-white">
              
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrevSlide}
                id="keen-slider-previous-desktop"
                className="rounded-full border border-white p-3 text-white transition hover:bg-primarTwo hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={handleNextSlide}
                id="keen-slider-next-desktop"
                className="rounded-full border border-white p-3 text-white transition hover:bg-primarTwo hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            {/* Render the Slider component here */}
            <div ref={sliderRef} className="keen-slider" id="keen-slider">
              {feedback.map((slide, index) => (
                <div key={index} className="keen-slider__slide rounded-2xl 100 p-5">
                  <blockquote className="flex h-full  flex-col justify-between bg-white mx-auto rounded-2xl p-6 shadow-lg sm:p-8 lg:p-12 overflow-hidden">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                      <svg
                    className="h-5 w-5"
                    fill="#0F9887"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="#0F9887"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="#0F9887"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="#0F9887"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    className="h-5 w-5"
                    fill="#0F9887"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                      </div>

                      <div className="mt-4">
                        {/* <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p> */}
                        <p className="mt-4 leading-relaxed text-gray-700">{slide.quote}</p>
                      </div>
                    </div>

                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {slide.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div  dir ="ltr"className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            onClick={handlePrevSlide}
            id="keen-slider-previous"
            className="rounded-full border border-white p-3 text-whitetransition hover:bg-primarTwo hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={handleNextSlide}
            id="keen-slider-next"
            className="rounded-full border border-white p-3 text-white transition hover:bg-primarTwo hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    
  </section>
);
}

export default TestimonialSlider;

