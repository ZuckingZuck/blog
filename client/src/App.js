import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { useDispatch } from "react-redux";
import { getBlogs } from "./redux/blogSlice";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080" + "/api/blog/getblogs");
      const json = await response.json();
      if(response.ok){
        dispatch(getBlogs(json));
      }
    }

    fetchPosts();
  }, [dispatch])
  return (
    <div className="">
      <Router>
        <AppRouter />
      </Router>
      
    </div>
  );
}

export default App;
