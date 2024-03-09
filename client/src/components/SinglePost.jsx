import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Parser } from "html-to-react";
import { NavLink, useNavigate } from "react-router-dom";
import { changeBlog } from "../redux/blogSlice";
const SinglePost = ({ post }) => {
  console.log("bupost", post)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const formattedDate = moment(post.createdDate).format("DD.MM.YYYY HH:mm");
  const icerik = post.content.trim();

  const handleLike = async () => {
    if (user.user) {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/blog/likepost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.user.token}`,
          },
          body: JSON.stringify({ postid: "1" }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch(changeBlog(json));
      }
    } else {
      navigate("/login");
    }
  };

  const handleUnlike = async () => {
    if (user.user) {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/blog/unlikepost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.user.token}`,
          },
          body: JSON.stringify({ postid: "1" }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch(changeBlog(json));
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-800">
      <div className="md:w-1/2">
        <img className="w-full h-64 md:h-full rounded object-cover" src={post.img} alt="" />
      </div>
      <div className="flex flex-col md:w-1/2 p-3 rounded mt-3 md:mt-0">
        <div className="card-header mb-3 flex flex-col justify-between border-white">
          <NavLink to={`/p/${post._id}`}>
            <h3 className="text-bold text-2xl hover:cursor-pointer">
              {post.title}
            </h3>
          </NavLink>
          <NavLink to={`/u/${post.ownerId}`}>
            <h5 className="text-slate-400">@{post.ownerId}</h5>
          </NavLink>
        </div>
        <div className="postcontent flex-grow">
          {icerik.length >= 250
            ? Parser().parse(icerik.substring(0, 250) + "...")
            : Parser().parse(icerik)}
        </div>
        <div className="card-footer mt-3 flex justify-between">
          <div className="flex items-center">
            <div className="mr-3 text-2xl">
              {post.likes.includes(user?.user?.nickname) ? (
                <i
                  onClick={handleUnlike}
                  className="fa-solid fa-heart text-red-500 hover:cursor-pointer mr-1"
                ></i>
              ) : (
                <i
                  onClick={handleLike}
                  className="likebtn text-red-500 fa-regular fa-heart mr-1 hover:cursor-pointer"
                ></i>
              )}
              {post.likes.length}
            </div>
            <div>
              <i className="text-blue-500 text-2xl fa-solid fa-share hover:cursor-pointer"></i>
            </div>
          </div>
          <div className="text-slate-400">
            <i className="fa-solid fa-calendar-days"></i> {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
