import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/userSlice";
const Navbar = () => {
  const location = useLocation().pathname;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  if(location === "/login" || location === "/register" || location === "/admin") return null;

  return (
    <div className="flex justify-between py-3 text-white container mx-auto">
      <NavLink to="/">
        <div className="text-3xl logo">IPSS Blog</div>
      </NavLink>

      <div>
        {user.user === null ? (
          <NavLink to="/login">
            <button className="loginbtn p-1 px-3 font-bold">Giriş Yap</button>
          </NavLink>
        ) : (
          <div>
            {
              user.user.role === "admin" ? <NavLink to="/admin">
              <button className="addbtn p-1 px-3 font-bold !rounded-full mr-2">
                <i className="fa-solid fa-gears"></i>
              </button>
            </NavLink> : null
            }
            {
              user.user.role === "writer" || user.user.role === "admin" ? <NavLink to="/addpost">
              <button className="addbtn p-1 px-3 font-bold !rounded-full mr-2">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </NavLink> : null
            }
            
            <NavLink to={`/u/${user.user.nickname}`}>
              <button className="loginbtn p-1 px-3 font-bold !rounded-full mr-2">
                <i className="fa-solid fa-user"></i>
              </button>
            </NavLink>
            <button
              onClick={handleLogout}
              className="logoutbtn p-1 px-3 font-bold !rounded-full mr-2"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
