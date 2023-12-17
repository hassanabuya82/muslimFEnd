import React, { useEffect } from 'react';
import { Carousel, initTE } from 'tw-elements';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import islam1 from '../assets/islam.webp';
import islam2 from '../assets/islam2.jpg';
import islam3 from '../assets/hero.avif';

const Banner = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);


  return (
    // <div className=' bg-black px-4 py-32 mx-auto flex items-center justify-center'>
    //     <div className='text-white text-center'>
    //         <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Welcome to Muslim Scholars</h1>
    //         <p className='text-gray-100 lg:w-3/4 mx-auto mb-5'><p className='text-lg '>Our mission is to present a comprehensive and accurate account of Islamic history, covering major events, figures, and cultural heritage. Our aim is to provide a rich understanding of the religion and its impact on the world. However, if we have made any mistakes in regards to dates or names, we welcome feedback and corrections. We are dedicated to constantly improving and ensuring the authenticity of our information.
    //           <br /> <br />
    //           By doing so, we strive to provide a trustworthy resource for individuals seeking knowledge about Islamic history.</p></p>

    //         {/* btn here */}
    //         <div>
    //             <Link to="/about" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
    //         </div>
    //     </div>
    // </div>
   
<div
  id="carouselDarkVariant"
  className="relative mx-auto mt-[59px]"
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
        src={islam3}
        className="block w-full lg:h-[700px] h-auto"
        alt="Islam" />
      <div
        className="absolute  text-white inset-x-[15%] bottom-5 hidden py-5 text-center md:block">
        <h5 className="text-4xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[60ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src={islam1}
        className="block w-full lg:h-[700px] h-auto"
        alt="Islam" />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-4xl">Second slide label</h5>
        <p>
          Some representative placeholder content for the second slide.
        </p>
      </div>
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[60ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <img
        src={islam2}
        className="block w-full lg:h-[700px] h-auto"
        alt="Islam" />
      <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-4xl">Third slide label</h5>
        <p>
          Some representative placeholder content for the third slide.
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
        stroke-width="1.5"
        stroke="currentColor"
        className="h-10 w-10 font-bold">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke="currentColor"
        className="h-10 w-10 font-bold">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
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