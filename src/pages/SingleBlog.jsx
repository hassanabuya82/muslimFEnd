import React, {  useRef, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addingComments, addingLikes, fetchBlogDetail } from '../api/blogs';
import moment from 'moment';
import UserImage from "../assets/user_image.png"
import { errorToast, successToast } from '../universal/toastify';
import { GrayLoaderBlock, GrayLoaderMini } from '../universal/Loader';
import { FaRegComment, FaRegHeart } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';

const SingleBlog = () => {
  const params = useParams();
  const blogId = params.blogId;

  const commentSectionRef = useRef(null);

  // Function to scroll to the comment section
  const scrollToCommentSection = () => {
    commentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Inside your functional component
const initialFormState = {
  name: '',
  email: '',
  content: '',
};


const resetForm = () => {
  setCommentObj(initialFormState);
};

  const [commentObj, setCommentObj] = useState(initialFormState);

  const inputChange = (e) => {
    const { name, value } = event.target;
    setCommentObj((prevState) => ({ ...prevState, [name]: value }));
  };


  const fullyAddingComment = useMutation(addingComments, {
    onSuccess: (res) => {
      successToast("Comment Added Successfully");
      resetForm();
      queryClient.refetchQueries('fetching_blog_detail');
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


  


  const queryClient = useQueryClient();


  const fullyAddingLike = useMutation(addingLikes, {
    onSuccess: (res) => {
      successToast("Post Liked");
      queryClient.refetchQueries('fetching_blog_detail');
    },
    onError: (error) => {
      errorToast("Opps! Something went Wrong");
      console.log(error);
    },
  });

  const handleLikeSubmit = () => {
    
      const fullObj = {post:blogId}
      fullyAddingLike.mutate(fullObj);
    
  };






    // fetchBlogDetail
    const fetched_blog = useQuery(["fetching_blog_detail",blogId], ()=> fetchBlogDetail(blogId));
    console.log(fetched_blog.data);
    return (
        <div>
            {fetched_blog.isFetching && fetched_blog.isLoading ? (
            <GrayLoaderBlock />
          ) : (
            fetched_blog.data && 
                <>
                <Helmet>
                <title>{fetched_blog.data.title}</title>
                <meta name='description' content='Muslim Scholars'/>
                </Helmet>
        
                <div className='lg:py-36 bg-black text-white text-center px-4'>
                    <h1 className='text-5xl leading-snug font-bold mb-5'>Single Blog</h1>
                </div>

            <div className='max-w-7xl mx-5  my-12 flex flex-col md:flex-row gap-12 '>
<div className="my-4 lg:ml-6 lg:mx-3  border rounded-md w-full lg:w-2/3">
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
            

            <div className="flex flex-wrap items-center mt-3 ml-2">
                  <p
                  onClick={handleLikeSubmit}
                  disabled={fullyAddingLike.isLoading} 
                  className='text-gray-500 mt-3 text-3xl flex flex-wrap items-center mr-5 cursor-pointer'>
                  <div>
                      
                    {fullyAddingLike.isLoading ? (
              <>
                {" "}
                <div className='bg-yellow-600 rounded-full'>
                <svg className="animate-spin h-5 w-5 text-red-500" viewBox="0 0 24 24">
                  
                </svg>{" "}
                </div>
              </>
            ) : (
              <FaRegHeart className="mr-2 text-red-500"/>
            )}
                  </div> 
                  <div className="text-lg">
                  {fetched_blog.data.like_count ? fetched_blog.data.like_count : 0}
                  </div>
                </p>
                
                <p className='text-gray-500 mt-3 text-3xl flex flex-wrap items-center cursor-pointer' onClick={scrollToCommentSection}>
                  <div>
                    <FaRegComment className="mr-2"/>  
                  </div> 
                  <div className="text-lg">
                    {fetched_blog.data.comment_count ? fetched_blog.data.comment_count : 0}
                  </div>
                </p>
                  </div>


            <hr className='mt-14 mb-3'/>
            <p className="" dangerouslySetInnerHTML={{ __html: fetched_blog.data.content }} />    
        
        </div>
        <hr />
        <div className=" p-4" ref={commentSectionRef}>
             <div className="mt-8">
                <div className="">
                    <div className="bg-white shadow-md rounded-md">
                    <h5 className="bg-gray-200 text-gray-800 font-bold py-2 px-4" >Leave a Comment:</h5>
                    <div className="p-4">
                        <div className="mb-4">
                            <input type="text" value={commentObj.name} onChange={inputChange} name="name" className="border rounded-md w-full py-2 px-3 text-gray-700" placeholder="Enter your fullname" required />
                        </div>
                        <div className="mb-4">
                            <input type="email" value={commentObj.email} onChange={inputChange} name="email" className="border rounded-md w-full py-2 px-3 text-gray-700" placeholder="Enter your Valid email" required />
                        </div>
                        <div className="mb-4">
                            <textarea onChange={inputChange} value={commentObj.content} className="border rounded-md w-full py-2 px-3 text-gray-700" name="content" rows="3" placeholder="Comment" required></textarea>
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
      <div className='w-1/4 pl-auto'>
      <img src={UserImage} alt="" className='rounded-full w-auto h-24'/>
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




    <div className='lg:w-1/2 lg:mx-auto w-full mx-3 md:mx-0'>
        <Sidebar/>
    </div>
</div>

                </>
            )}
            
        </div>
    )
}

export default SingleBlog