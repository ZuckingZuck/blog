import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PostDetail from '../components/PostDetail';
import AddPost from '../pages/AddPost';
//Admin Routes
import AdminHome from '../pages/Admin/AdminHome';

//Auth
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from "../pages/NotFound";
const AppRouter = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/u/:nickname" element={<Profile />}/>
          <Route path="/p/:pid" element={<PostDetail />}/>
          <Route path="/addpost" element={ user ? <AddPost /> : <Navigate to="/login"/>}/>
          <Route path="/login" element={ !user ? <Login /> : <Navigate to="/"/>} />
          <Route path="/admin" element={ user?.role === "admin" ? <AdminHome /> : <Navigate to="/"/>} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  )
}

export default AppRouter