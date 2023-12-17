import { useState } from "react";
import contactImg from "../assets/contact.png"
import { addingContactUs } from "../api/blogs";
import { useMutation } from "react-query";
import { errorToast, successToast } from "../universal/toastify";
import { GrayLoaderMini } from "../universal/Loader";


const Contact = () => {


  
  const [contactObj, setContactObj] = useState({});

  const inputChange = (e) => {
    const { name, value } = event.target;
    setContactObj((prevState) => ({ ...prevState, [name]: value }));
  };


  const fullyAddingContact = useMutation(addingContactUs, {
    onSuccess: (res) => {
      successToast("Message Added Successfully");
      window.location.reload();
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
      fullyAddingContact.mutate(contactObj);
    }
  };









  return (
    <div className='text-white'>
      <div className='py-40 bg-black text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Contact Us</h1>
      </div>

      {/* contact content */}
      <div className="my-20 max-w-7xl mx-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <img src={contactImg} alt="" />
          </div>
          <div class="mx-auto w-full max-w-[550px]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                onChange={inputChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                onChange={inputChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="subject"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Subject
                </label>
                <input
                onChange={inputChange}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="message"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                onChange={inputChange}
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  
                  onClick={handleSubmit}
                  disabled={fullyAddingContact.isLoading}
                  class="hover:shadow-form rounded-md bg-[#6A64F1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  {fullyAddingContact.isLoading ? (
              <>
                {" "}
                <GrayLoaderMini /> <span className="text-sm">
                  {" "}
                  Sending Message
                </span>{" "}
              </>
            ) : (
              "Submit"
            )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact