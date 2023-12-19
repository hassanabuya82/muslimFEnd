import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { fetchingLatestBlogs, fetchingMostLiked } from '../api/blogs';
import { useQuery } from 'react-query';
import { CardBlockLoader } from '../universal/Loader';

const Sidebar = () => {
    
  const latest_blogs = useQuery("latest_blogs_data", fetchingLatestBlogs);
  const most_liked_blogs = useQuery("most_liked_blogs_data", fetchingMostLiked);
//   console.log(latest_blogs.data);  


  return (
        <div className=''>

            {/* Most Liked */}
            <div>
            <div>
                <h3 className='text-2xl font-semibold mt-20 px-4'>Most Liked</h3>
                <div>
                {most_liked_blogs.isLoading ? (
            <CardBlockLoader />
          ) : (
            most_liked_blogs.data && 
            <div>

                {
                    most_liked_blogs.data.slice(0, 5).map(blog => <div className='my-5 border-b-2 border-spacing-2 px-4' key={blog.id}>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to={`/blogs/${blog.id}`} className='inline-flex items-center pb-2 text-base hover:text-orange-500'>Read now <FaArrowRight className='mt-1 ml-2'/></Link>
                    </div>)
                }

            </div>
            
            )}
                </div>
            </div>
            </div>




            <div>
                <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
                <div>
                {latest_blogs.isLoading ? (
            <CardBlockLoader />
          ) : (
            latest_blogs.data && 
            <div>

                {
                    latest_blogs.data.slice(0, 5).map(blog => <div className='my-5 border-b-2 border-spacing-2 px-4' key={blog.id}>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link to={`/blogs/${blog.id}`} className='inline-flex items-center pb-2 text-base hover:text-orange-500'>Read now <FaArrowRight className='mt-1 ml-2'/></Link>
                </div>)
                }
            
            </div>
            )}
                    
                </div>
            </div>
            
            {/* Popular Blogs */}
            <div>
            <div>
                <h3 className='text-2xl font-semibold mt-20 px-4'>Popular Now</h3>
                <div>
                {latest_blogs.isLoading ? (
            <CardBlockLoader />
          ) : (
            latest_blogs.data && 
            <div>

                {
                    latest_blogs.data.slice(6, 10).map(blog => <div className='my-5 border-b-2 border-spacing-2 px-4' key={blog.id}>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to={`/blogs/${blog.id}`} className='inline-flex items-center pb-2 text-base hover:text-orange-500'>Read now <FaArrowRight className='mt-1 ml-2'/></Link>
                    </div>)
                }

            </div>
            
            )}
                </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default Sidebar