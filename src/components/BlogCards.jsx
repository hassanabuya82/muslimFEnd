import moment from 'moment';
import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BlogCards = ({blogsData, currentPage, pageSize, selectedCategory}) => {
  // console.log(blogs);
  
  const filteredBlogs = blogsData && blogsData.data ? blogsData.data.blogs.filter((blogs) => !selectedCategory || blogs.category === selectedCategory).slice((currentPage - 1) * pageSize, currentPage * pageSize) : null;
  console.log(filteredBlogs);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
          filteredBlogs.map((blog) => (
            <>
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="block p-5 shadow-lg rounded cursor-pointer">
                <div>
                    <img src={blog.image} alt="" className='w-full rounded-md'/>
                </div>
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
                <p className='mb-2'><span className="font-bold">Category: </span> {blog.category_name}</p>
                <p className='text-sm text-gray-500'>Published: {moment(blog.created_on).format("YYYY-MM-DD hh:mm A")}</p>
            </Link>
            </>
        ))  
        }
    </div>
  )
}

export default BlogCards