import { useState } from "react";
import { fetchingCategories } from "../api/blogs";
import { useQuery } from "react-query";
import { GrayLoaderMini } from "../universal/Loader";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {

    const categories = useQuery("categories_data", fetchingCategories);
    console.log(categories.data);  
  

    return (
        <div className="px-4 mb-8 lg:space-x-16 gap-12 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
            <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 p-1 rounded-md border  ${activeCategory ? '' : 'active-button'}`}>All</button>
            
            {categories.isLoading ? (
            <GrayLoaderMini />
          ) : (
            categories.data &&
            
            

                categories.data.map((category) => (
                    <button
                        key={category.id}
                        className={`mr-2 space-x-16  ${activeCategory === category.id ? 'active-button' : ''}`}
                        onClick={() => onSelectCategory(category.id)}
                    >
                        {category.name}
                    </button>
                ))
            
            )}
            
        </div>
    );
};


export default CategorySelection;