import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-10">
        {blogCategories.map((item) => {
          const isActive = menu === item;

          return (
            <div key={item} className="relative">
              <button
                onClick={() => setMenu(item)}
                className={`relative z-0 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-700 hover:text-white"
                }`}
              >
                {item}
                <span
                  className={`absolute inset-0 rounded-full bg-primary transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>



      {/*  Blog Card  */}
      <div>
      
      </div>
    </div>
  );
};

export default BlogList;
