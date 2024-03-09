import React from 'react'
import SinglePost from './SinglePost'
import { useSelector } from 'react-redux'
const Posts = () => {
  const blog = useSelector((state) => state.blog)
  console.log(blog)
  return (
    <div className='grid lg:grid-cols-2 gap-5 justify-items-center w-full'>
      {
        blog?.blogs?.map(item => {
          return(
            <SinglePost post={item} key={item._id}/>
          )
        })
      }
    </div>
  )
}

export default Posts