import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";
import useDocumentTitle from "../hooks/useDocumentTitle";
const Login = () => {
  useDocumentTitle(`IPSS Blog - Giriş Yap`)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:8080" + "/api/auth/login",
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
  };
  return (
    <div className="text-white flex flex-col items-center mt-20">
      <div className="bg-gray-800 w-[700px] p-5">
        <div className="flex flex-col items-center">
          <img src="img/logim.svg" alt="login" className="w-52" />
          <h1 className="text-3xl font-bold my-2">IPSS Blog / Giriş Yap</h1>
        </div>
        <div className="">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="nickname">Kullanıcı Adı</label>
            <input id="nickname" name="nickname" type="text" className="bg-black text-green-700 p-1 mb-2" onChange={(e) => {setNickname(e.target.value)}}/>
            <label htmlFor="password">Parola</label>
            <input id="password" name="password" type="password" className="bg-black text-green-700 p-1" onChange={(e) => {setPassword(e.target.value)}}/>
            <button type="submit">Giriş Yap</button>
          </form>
        </div>
        <p className="mt-2">
          Hesabın yok mu?{" "}
          <NavLink to="/register">
            <span className="hover:cursor-pointer hover:text-blue-400 transition text-blue-500">
              Kayıt Ol!
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
