import React from 'react'
import aboutImg from "../assets/usthadhHussein.jpg"
import UserImage from "../assets/user_image.png"
import islam3 from "../assets/islam3.jpg"
import islam7 from "../assets/islam7.jpg"
import islam8 from "../assets/islam8.jpg"
import islam9 from "../assets/islam9.jpg"
import islam10 from "../assets/islam10.jpg"
import islam11 from "../assets/islam11.jpg"
import islam12 from "../assets/islam12.jpg"
import { Helmet } from 'react-helmet'

const About = () => {

  const authors_list = [
    {id:1, name: "Seyyid Muhammad Bin Shariff Said Al-Beidh" , img:islam11},
    {id:2, name: "Al-Allamah Usthadh Harith Swaleh Al-Maa'wy" , img:islam12},
    {id:3, name: "Seyyid Swaleh Sheikh Bahssan Jamalul Layl" , img:UserImage},
    {id:4, name: "Seyyid Swaleh Al-Arif Bin Seyyid Muhammad Al-Beidh" , img:islam3},
    {id:5, name: "Usthadh Said Ali Hassan" , img:UserImage},
    {id:6, name: "Usthadh Salim Omar Dima" , img:UserImage},
    {id:7, name: "Usthadh Ali Bin Muhammad Bin Abubakar" , img:UserImage},
    {id:8, name: "Seyyid Naseer Ghalib Al-Husseiny" , img:UserImage},
    {id:9, name: "Usthadh Said Baraza" , img:islam7},
    {id:10, name: "Dr Yaqub Ahmad Sheikh" , img:UserImage},
    {id:11, name: "Al-Akh Ramadhan Ali Muhani An-Nabahani" , img:UserImage},
    {id:12, name: "Seyyid Muhammad Swibty Khatwab An-Nadhiri" , img:islam8},
    {id:13, name: "Sheikha Ummu Al-Muhajir Shazmin Ahmed" , img:UserImage},
    {id:14, name: "Seyyid Muhammad Baqir bin Mwenye Muadham Al-Rudainy" , img:UserImage},
    {id:15, name: "Dr Sheikh Mbarak Ahmed Aweis" , img:islam9},
    {id:16, name: "Seyyid Usthadh Jaffar Bin Seyyid Muhammad bin Seyyid Shariff Said Al-Beidh" , img:islam10},
  ]


  return (
    <div className='text-white'>

            <Helmet>
              <title>About East African Muslim Scholars | Muslim Scholars</title>
              <meta name='description' content='Muslim Scholars'/>
            </Helmet>
            
      <div className='py-40 bg-black text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>About Us Page</h1>
      </div>

      {/* about content */}
      <div className='max-w-7xl mx-auto px-4 my-20 text-black'>

        {/* top content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='md:w-1/2'>
            <img src={aboutImg} alt="" className='w-full rounded-md' />
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

          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  items-center w-8/10 mx-5 gap-12 mt-12 justify-center'>
            
            {
              authors_list.map((user) => 
              
            <div key={user.id} className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={user.img} alt="" className='mb-4 w-[100px] h-[100px] mx-auto rounded-full' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1 p-4'>{user.name}</h5>
                
                
              </div>
            </div>
              )
            }




          
          </div>

        </div>
      </div>
    </div>
  )
}

export default About