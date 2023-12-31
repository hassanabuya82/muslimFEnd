import React, { useEffect } from 'react';
import { Carousel, initTE } from 'tw-elements';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import islam1 from '../assets/islam.webp';
import islam2 from '../assets/islam2.jpg';
import islam3 from '../assets/hero.avif';
import islam4 from '../assets/islam4.jpg'
import islam5 from '../assets/islam5.jpg'
import islam6 from '../assets/islam6.jpg'

const Banner = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);


  return (
<div
  id="carouselDarkVariant"
  className="relative mx-auto"
  data-te-carousel-init
  data-te-ride="carousel">
    

  <div
    className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      data-te-target="#carouselDarkVariant"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="1"
      aria-label="Slide 1"></button>
    <button
      data-te-target="#carouselDarkVariant"
      className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[60ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-te-slide-to="2"
      aria-label="Slide 1"></button>
  </div>


  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    
    

    <div
      className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[60ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={islam5}
        className="block w-full lg:h-[700px] h-auto"
        alt="Islam" />
      <div
        className="absolute  text-white inset-x-[15%] bottom-5  py-5 text-center md:block">
        <h5 className="text-4xl">Look at them with</h5>
        <p>
        outmost respect you will receive from Allah the secret of intense live.
        </p>
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[60ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src={islam4}
        className="block w-full lg:h-[700px] h-auto"
        alt="Islam" />
      <div
        className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 className="text-4xl">
          {/* title */}
        </h5>
        <p>
          {/* paragraph */}
        </p>
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[60ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src={islam6}
        className="block w-full lg:h-[700px] h-auto"
        alt="Islam" />
      <div
        className="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 className="text-4xl">
          {/* Title */}
        </h5>
        <p>
          {/* paragraph */}
        </p>
      </div>
    </div>
  </div>

  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselDarkVariant"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8 dark:grayscale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-10 w-10 font-bold">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  


  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselDarkVariant"
    data-te-slide="next">
    <span className="inline-block h-8 w-8 dark:grayscale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-10 w-10 font-bold">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
  )
}

export default Banner