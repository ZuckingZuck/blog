import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import blogSlice from "./blogSlice";
import userBlogSlice from "./userBlogSlice";
export default configureStore({
    reducer: {
        user: userSlice,
        blog: blogSlice,
        ublog: userBlogSlice,
    }
})