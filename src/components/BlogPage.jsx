import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import { displayingMCQQuestions } from "../api/blogs";
import { useQuery } from "react-query";
import moment from "moment";
import { FullPageBlogCardLoader, FullPageCardLoader } from "../universal/Loader";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; 
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log(selectedCategory);
    const [activeCategory, setActiveCategory] = useState(null);

  const blogsData = useQuery(['blog_data', currentPage, pageSize, selectedCategory], () => {
    if (selectedCategory) {
      return displayingMCQQuestions(currentPage, pageSize, selectedCategory);
    } else {
      return displayingMCQQuestions(currentPage, pageSize);
    }
  });
  
  console.log(blogsData.data);
  
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); 
        setActiveCategory(category)
    };


    return (
        <div className="">
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 ml-5 pl-5 mr-3 pr-3">
            {blogsData.isLoading ? (
            <FullPageBlogCardLoader />
          ) : (
            blogsData.data &&
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
          blogsData.data.results.map((blog) => (
            <div key={blog.id}>
            <Helmet>
              <title>East Africa Muslim Scholars</title>
              <meta name='description' content={blog.category_name}/>
            </Helmet>
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="block p-5 shadow-lg rounded cursor-pointer">
                <div>
                    <img src={blog.image} alt="" className='w-full rounded-md'/>
                </div>
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
                <p className='mb-2'><span className="font-bold">Category: </span> {blog.category_name}</p>
                <button className="mt-2 mb-2 font-bold hover:text-blue-600 cursor-pointer bg-blue-500 hover:bg-white text-white border p-2 rounded-md border-blue-500">Read More</button>
                <p className='text-sm text-gray-500'>Published: {moment(blog.created_on).format("YYYY-MM-DD hh:mm A")}</p>
                
                  <div className="flex flex-wrap items-center">
                  <div className='text-gray-500 mt-3 text-3xl flex flex-wrap items-center mr-3'>
                    <div>
                      <FaRegHeart className="mr-2 text-red-500"/>  
                    </div> 
                    <div className="text-lg">
                    {blog.like_count ? blog.like_count : 0}
                    </div>
                </div>
                
                <div className='text-gray-500 mt-3 text-3xl flex flex-wrap items-center'>
                  <div>
                    <FaRegComment className="mr-2"/>  
                  </div> 
                  <div className="text-lg">
                    {blog.comment_count ? blog.comment_count : 0}
                  </div>
                </div>
                  </div>

            </Link>
            </div>
        ))  
        }
    </div>
            )}

  
          
                
                <div className="lg:w-1/2">
                    <Sidebar/>
                </div>
            </div>

            {blogsData.isLoading ? (
            <FullPageCardLoader />
          ) : (
            blogsData.data &&
            
            
            // <Pagination
            //     currentPage={currentPage}
            //     onPageChange={handlePageChange}
            //     blogs={blogsData.data.results}
            //     pageSize={pageSize}
            // />
            <Pagination
            pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalPages={blogsData.data ? blogsData.data.count : 1} // Use total_pages from data
            />
            )}
        </div>
    );
};


export default BlogPage;
