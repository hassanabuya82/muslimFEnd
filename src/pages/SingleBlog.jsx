import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaClock } from 'react-icons/fa6';
import Sidebar from '../components/Sidebar';
import { useMutation, useQuery } from 'react-query';
import { addingComments, fetchBlogDetail } from '../api/blogs';
import { GrayLoaderBlock, GrayLoaderMini } from '../assets/universal/Loader';
import moment from 'moment';

import UserImage from "../assets/user_image.png"
import { errorToast, successToast } from '../assets/universal/toastify';

const SingleBlog = () => {
  const params = useParams();
  const blogId = params.blogId;


  const [commentObj, setCommentObj] = useState({});

  const inputChange = (e) => {
    const { name, value } = event.target;
    setCommentObj((prevState) => ({ ...prevState, [name]: value }));
  };


  const fullyAddingComment = useMutation(addingComments, {
    onSuccess: (res) => {
      successToast("Comment Added Successfully");
      window.location.reload();
    },
    onError: (error) => {
      errorToast("Opps! Something went Wrong");
      console.log(error);
    },
  });

  const handleSubmit = () => {
    if (!commentObj) {
      errorToast("Empty Fields Present");
    } else {
        const fullObj = {...commentObj,post:blogId}
      fullyAddingComment.mutate(fullObj);
    }
  };






    // fetchBlogDetail
    const fetched_blog = useQuery(["fetching_blog_detail",blogId], ()=> fetchBlogDetail(blogId));
    console.log(fetched_blog.data);
    return (
        <div>
            {fetched_blog.isFetching ? (
            <GrayLoaderBlock />
          ) : (
            fetched_blog.data && 
                <>
                <div className='lg:py-36 bg-black text-white text-center px-4'>
                    <h1 className='text-5xl leading-snug font-bold mb-5'>Single Blog</h1>
                </div>

            <div className='max-w-7xl my-12 flex flex-col md:flex-row gap-12'>
<div className="my-4 lg:ml-6 mx-3 border rounded-md w-2/3">
    <div className="bg-white rounded-lg shadow-md">
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{fetched_blog.data.title}</h2>
            <p>
                <b>Category : </b>
                {fetched_blog.data.category_name}
                <b> Posted on </b>
                {moment(fetched_blog.data.created_on).format("YYYY-MM-DD hh:mm A")}
                
            </p>
            <hr className="my-2"/>

            <img className="rounded-lg w-full" src={fetched_blog.data.image} alt={fetched_blog.data.title} />

            <p className="mt-4" dangerouslySetInnerHTML={{ __html: fetched_blog.data.content }} />    
        
        </div>
        <hr />
        <div className=" p-4">
             <div className="mt-8">
                <div className="">
                    <div className="bg-white shadow-md rounded-md">
                    <h5 className="bg-gray-200 text-gray-800 font-bold py-2 px-4">Leave a Comment:</h5>
                    <div className="p-4">
                        <div className="mb-4">
                            <input type="text" onChange={inputChange} name="name" className="border rounded-md w-full py-2 px-3 text-gray-700" placeholder="Enter your fullname" required />
                        </div>
                        <div className="mb-4">
                            <input type="email" onChange={inputChange} name="email" className="border rounded-md w-full py-2 px-3 text-gray-700" placeholder="Enter your Valid email" required />
                        </div>
                        <div className="mb-4">
                            <textarea onChange={inputChange} className="border rounded-md w-full py-2 px-3 text-gray-700" name="content" rows="3" placeholder="Comment" required></textarea>
                        </div>
                        
          <button
            onClick={handleSubmit}
            disabled={fullyAddingComment.isLoading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            {fullyAddingComment.isLoading ? (
              <>
                {" "}
                <GrayLoaderMini /> <span className="text-sm">
                  {" "}
                  Adding Comment
                </span>{" "}
              </>
            ) : (
              "Submit"
            )}
          </button>
        
                    </div>
                    </div>
                </div>
            </div>

        </div>
        <hr />
        <div className='mt-3 ml-3 py-4'>
  {fetched_blog.data.comments.map((comment, index) => (
    <div key={index} className="border-b border-gray-300 py-3 flex items-center pl-3">
      <div className='w-1/4 pl-5'>
      <img src={UserImage} alt="" className='rounded-full w-24 h-24'/>
      </div>
      <div className='w-3/4'>
        <p className="text-gray-700 font-bold">{comment.name}</p>
        <p className="text-gray-700">{comment.content}</p>
        <p className="text-xs pt-1 text-blue-600">{moment(comment.created_on).format("YYYY-MM-DD hh:mm A")}</p>
      </div>
    </div>
  ))}
</div>

    </div>
</div>




    <div className='lg:w-1/2 lg:mx-auto mx-3 md:mx-0'>
        <Sidebar/>
    </div>
</div>

                </>
            )}
            
        </div>
    )
}

export default SingleBlog