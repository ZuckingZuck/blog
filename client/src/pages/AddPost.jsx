import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { addBlog } from "../redux/blogSlice";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../hooks/useDocumentTitle";
const AddPost = () => {
  useDocumentTitle("IPSS Blog - Paylaşım Yap")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/blog/addblog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.user.token}`,
        },
        body: JSON.stringify({ title, content, img }),
      }
    );

    const json = await response.json();
    if (response.ok) {
      dispatch(addBlog(json));
      navigate(`/p/${json._id}`);
    }
  };

  
  return (
    <div className="text-white mt-5 container mx-auto">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <label htmlFor="title">Başlık</label>
        <input
          type="text"
          className="bg-gray-800 rounded p-2"
          placeholder="Bir başlık ekleyin..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="img">Görsel</label>
        <input
          type="text"
          className="bg-gray-800 rounded p-2"
          placeholder="Bir görsel adresi ekleyin..."
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <label htmlFor="content">İçerik</label>
        <div className="text-black">
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(e, editor) => {
            setContent(editor.getData());
          }}
        />
        </div>
        <button className="bg-cyan-950 p-2 rounded" type="submit">
          <i className="fa-solid fa-share"></i> Paylaş
        </button>
      </form>
    </div>
  );
};

export default AddPost;
