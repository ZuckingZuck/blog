import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: null,
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        addBlog: (state, action) => {
            state.blogs.unshift(action.payload);
        },
        changeBlog: (state, action) => {
            state.blogs = state.blogs.map(item => {
                if(item._id === action.payload._id){
                    return action.payload;
                }else{
                    return item;
                }
            })
        }
    }
})



export const { getBlogs, addBlog, changeBlog } = blogSlice.actions
export default blogSlice.reducer