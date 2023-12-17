import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { useMutation } from 'react-query';
import { addingContactEmail } from '../api/blogs';
import { errorToast, successToast } from '../universal/toastify';
import { GrayLoaderMini } from '../universal/Loader';

const Footer = () => {


  const [contactObj, setContactObj] = useState({});

  const inputChange = (e) => {
    const { name, value } = event.target;
    setContactObj((prevState) => ({ ...prevState, [name]: value }));
  };


  const fullyAddingContactEmail = useMutation(addingContactEmail, {
    onSuccess: (res) => {
      successToast("You are now an official subscriber");
      window.location.reload();
      successToast("You are now an official subscriber");
    },
    onError: (error) => {
      errorToast("Opps! Something went Wrong");
      console.log(error);
    },
  });

  const handleSubmit = () => {
    if (!contactObj) {
      errorToast("Empty Fields Present");
    } else {
      fullyAddingContactEmail.mutate(contactObj);
    }
  };






  return (
        <div className="bg-gray-900">
          <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex justify-center flex-wrap">
              <div className="lg:w-2/3 w-full my-2">
              <p className='text-base text-gray-400 mb-3 mr-6 pr-5'>Our mission is to present a comprehensive and accurate account of Islamic history, covering major events, figures, and cultural heritage. Our aim is to provide a rich understanding of the religion and its impact on the world. However, if we have made any mistakes in regards to dates or names, we welcome feedback and corrections. We are dedicated to constantly improving and ensuring the authenticity of our information.
              <br /> <br />
              By doing so, we strive to provide a trustworthy resource for individuals seeking knowledge about Islamic history.
              </p>
                </div>
              <div className="lg:w-1/3 w-full my-3">
                <span className="text-base font-medium tracking-wide text-gray-300">
                  Subscribe for updates
                </span>
                <div className="flex flex-col mt-4 md:flex-row">
                  <input
                    placeholder="Email"
                    required
                    type="text"
                    name="email"
                    onChange={inputChange}
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                  onClick={handleSubmit}
                  disabled={fullyAddingContactEmail.isLoading}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md border hover:bg-orange-500 focus:shadow-outline focus:outline-none"
                  >
                    {fullyAddingContactEmail.isLoading ? (
              <>
                {" "}
                <GrayLoaderMini /> <span className="text-sm">
                  {" "}
                  Requesting Subscription
                </span>{" "}
              </>
            ) : (
              "Subscribe"
            )}
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Become a subscriber and get notified whenever a blog is posted!! Via email 
                </p>
              </div>
            </div>


            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
              <p className="text-sm text-gray-500">
                © Copyright 2023 . All rights reserved.
              </p>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-2xl">
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                >
                 <FaTwitter className='h-6 w-6 hover:text-orange-300 cursor-pointer'/>
                </a>
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <FaInstagram className='h-6 w-6 hover:text-orange-300 cursor-pointer'/>
                </a>
                <a
                  href="/"
                  className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <FaFacebook className='h-6 w-6 hover:text-orange-300 cursor-pointer'/>
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer