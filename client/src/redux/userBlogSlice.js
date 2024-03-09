import { createSlice } from "@reduxjs/toolkit";

const userBlogSlice = createSlice({
    name: "ublog",
    initialState: {
        blogs: null,
    },
    reducers: {
        getuBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        adduBlog: (state, action) => {
            state.blogs.push(action.payload);
        },
        changeuBlog: (state, action) => {
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



export const { getuBlogs, adduBlog, changeuBlog } = userBlogSlice.actions
export default userBlogSlice.reducer