import React from 'react'
import Posts from '../components/Posts'
import useDocumentTitle from '../hooks/useDocumentTitle'
const Home = () => {
  useDocumentTitle("IPSS Blog - Ana Sayfa")
  return (
    <div className='text-white mt-5 mb-10 container mx-auto'>
        <Posts />
    </div>
  )
}

export default Home




