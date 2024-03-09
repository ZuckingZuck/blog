import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  console.log(user);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordAgain) {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nickname, password }),
        }
      );
      
      const user = await response.json();
      if(response.ok){
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(userLogin(user));
        navigate("/");
      }
      console.log(user);
    }else {
      setError("Parolalar uyuşmuyor!");
    }
  };
  return (
    <div className="text-white flex flex-col items-center mt-20">
      <div className="bg-gray-800 w-[700px] p-5">
        <div className="flex flex-col items-center">
          <img src="img/signup.svg" alt="login" className="w-52" />
          <h1 className="text-3xl font-bold my-2">IPSS Blog / Kayıt Ol</h1>
        </div>
        <div className="">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="nickname">Kullanıcı Adı</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              className="bg-black text-green-700 p-1 mb-2"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <label htmlFor="password">Parola</label>
            <input
              id="password"
              name="password"
              type="password"
              className="bg-black text-green-700 p-1 mb-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Parola Tekrar</label>
            <input
              id="passwordAgain"
              name="passwordAgain"
              type="password"
              className="bg-black text-green-700 p-1"
              onChange={(e) => {
                setPasswordAgain(e.target.value);
              }}
            />
            <button type="submit">Kayıt Ol</button>
          </form>
        </div>
        <p className="mt-2">
          Zaten bir hesabın var mı?{" "}
          <NavLink to="/login">
            <span className="hover:cursor-pointer hover:text-blue-400 transition text-blue-500">
              Giriş Yap!
            </span>
          </NavLink>
        </p>
        {
          error && <div className="bg-red-700 text-center p-1 rounded mt-3">{error}</div>
        }
        
      </div>
    </div>
  );
};

export default Login;
