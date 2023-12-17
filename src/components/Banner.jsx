import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';


const user = useSelector((state) => state.user.user);
  console.log(user);

  const Banner = () => {
  return (
    <div className=' bg-black px-4 py-32 mx-auto flex items-center justify-center'>
        <div className='text-white text-center'>
            <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Welcome to Muslim Scholars</h1>
            <p className='text-gray-100 lg:w-3/4 mx-auto mb-5'><p className='text-lg '>Our mission is to present a comprehensive and accurate account of Islamic history, covering major events, figures, and cultural heritage. Our aim is to provide a rich understanding of the religion and its impact on the world. However, if we have made any mistakes in regards to dates or names, we welcome feedback and corrections. We are dedicated to constantly improving and ensuring the authenticity of our information.
              <br /> <br />
              By doing so, we strive to provide a trustworthy resource for individuals seeking knowledge about Islamic history.</p></p>

            {/* btn here */}
            <div>
                <Link to="/about" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner