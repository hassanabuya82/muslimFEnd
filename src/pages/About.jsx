import React from 'react'
import aboutImg from "../assets/about.png"
import UserImage from "../assets/user_image.png"

const About = () => {
  return (
    <div className='text-white'>
      <div className='py-40 bg-black text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>About Us Page</h1>
      </div>

      {/* about content */}
      <div className='max-w-7xl mx-auto px-4 my-20 text-black'>

        {/* top content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='md:w-1/2'>
            <img src={aboutImg} alt="" className='w-full' />
          </div>
          <div className='md:w-1/2'>
            <h5 className='text-orange-500 text-xl font-medium mb-4'>Top Author</h5>
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-[40px] text-darkmb-4 mb-8"
            >
              Usthadh Hussein Muhammad Al Moddy
            </h2>
            <p className='text-lg text-gray-600'>Our mission is to present a comprehensive and accurate account of Islamic history, covering major events, figures, and cultural heritage. Our aim is to provide a rich understanding of the religion and its impact on the world. However, if we have made any mistakes in regards to dates or names, we welcome feedback and corrections. We are dedicated to constantly improving and ensuring the authenticity of our information.
              <br /> <br />
              By doing so, we strive to provide a trustworthy resource for individuals seeking knowledge about Islamic history.</p>
          </div>
        </div>

        {/* Author section */}
        <div className='mt-20'>
          <h2 className='text-5xl font-bold mb-8 '>Watu Niliopata Usaidizi Kutoka Kwao</h2>
          <hr className='my-5' />

          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-between items-center w-full mx-5 gap-12 mt-12'>
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Muhammad Bin Shariff Said Al-Beidh</h5>
                
                
              </div>
            </div>

            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Al-Allamah Usthadh HArith Swaleh Al-Maa'wy</h5>
                
              </div>
            </div>

            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Swaleh Sheikh Bahssan Jamalul Layl</h5>
                
                
              </div>
            </div>

            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Swaleh Al-Arif Bin Seyyid Muhammad Al-Beidh</h5>
                
                
              </div>
            </div>

            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Usthadh Said Ali Hassan</h5>
                
                
              </div>
            </div>

            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Usthadh Salim Omar Dima</h5>
                
                
              </div>
            </div>

            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Usthadh Ali Bin Muhammad Bin Abubakar</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Naseer Ghalib Al-Husseiny</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Usthadh Said Baraza</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Dr Yaqub Ahmad Sheikh</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Al-Akh Ramadhan Ali Muhani An-Nabahani</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Muhammad Swibty Khatwab An-Nadhiri</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Sheikha Ummu Al-Muhajir Shazmin Ahmed</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Muhammad Baqir bin Mwenye Muadham Al-Rudainy</h5>
                
                
              </div>
            </div>

          
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Dr Sheikh Mbarak Ahmed Aweis</h5>
                
                
              </div>
            </div>
            
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={UserImage} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Seyyid Usthadh Jaffar Bin Seyyid Muhammad bin Seyyid Shariff Said Al-Beidh</h5>
                
                
              </div>
            </div>

          
          </div>

        </div>
      </div>
    </div>
  )
}

export default About