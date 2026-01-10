import React from 'react'

const BlogCard = () => {

    const { title, description,category, image, _id}= blog; 

  return (
    <div 
    className='w-full rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-primary/25 transition-all duration-300 cursor-pointer bg-white '
    >
      

      {/*  Image */}

      <img src={image} alt={title} className='w-full aspect-video object-cover ' />
      {/* Category */}
      <span className='ml-4 mt-4 px-3 inline-block bg-primary/20 rounded-full text-primary text-x font-medium'>
            {category}
      </span>


      {/*  Content  */}

      <div className='p-5'>
        <h4 className='mb-2 font-semibold text-gray-900 line-clamp-2 '> {title} </h4>
      </div>

      <p className='text-sm text-gray-600 line-clamp-3 '>
        {description.slice(0,120)}
      </p>
    </div>
  )
}

export default BlogCard
