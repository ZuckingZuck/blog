import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getuBlogs } from '../redux/userBlogSlice'
import ProfileCard from '../components/ProfileCard'
import UserPosts from '../components/UserPosts'
import useDocumentTitle from '../hooks/useDocumentTitle'
const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  useDocumentTitle(`IPSS Blog - ${user?.nickname}`)
  const blog = useSelector((state) => state.ublog);
  const params = useParams();

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch("http://localhost:8080"+`/api/user/${params.nickname}`);
      const json = await response.json();
      if(response.ok){
        setUser(json);
      }
    }
    const getUserBlogs = async () => {
      const response = await fetch("http://localhost:8080"+`/api/user/getblogs/${params.nickname}`);
      const json = await response.json();
      if(response.ok){
        dispatch(getuBlogs(json));
      }
    }
    getUserInfo();
    getUserBlogs();
  }, [params.nickname])

  return (
    <div className='container mx-auto'>
      <ProfileCard blogs={blog.blogs} user={user} params={params}/>
      <UserPosts blogs={blog.blogs} params={params}/>
    </div>
  )
}

export default Profile