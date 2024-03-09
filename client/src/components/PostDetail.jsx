import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { Parser } from "html-to-react";
import useDocumentTitle from "../hooks/useDocumentTitle";
const PostDetail = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  useDocumentTitle(`IPSS Blog - ${post?.title}`)

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/api/blog/getsingleblog/${params.pid}`
      );
      const json = await response.json();

      if (response.ok) {
        setPost(json);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      <div className="flex text-white ipss-font">
        <div className="container mx-auto my-8 p-8 bg-gray-800 text-white rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap mb-4">
            <span className="bg-purple-900 text-gray-300 py-1 px-2 rounded mr-2">#etiket</span>
          </div>
          <p className="text-gray-300 mb-4 text-lg">{Parser().parse(post.content)}</p>
          <div className="text-right text-gray-500">
            <NavLink to={`/u/${post.ownerId}`}>
              <span className="text-red-700">Paylaşan: {post.ownerId}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
