import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {userName,password} = data;
    const getUser = localStorage.getItem("users");
    // console.log(getUser); 
    if(getUser && getUser.length){
      const userdata = JSON.parse(getUser);
      console.log(userdata)
      const userlogin = userdata.list.filter((elem,index) => {
        return elem.userName === userName && elem.password === password
      })
      if(userlogin.length === 0){
        alert("Invalid email or password")
      }else{
        console.log("user login successssfully");
        localStorage.setItem("token",JSON.stringify(userlogin));
        navigate("/home");
      }
    }
    setData({
      userName: "",
      password: "",
    })
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="login_left">
          <form className="login_form_input_container" onSubmit={handleSubmit}>
            <h1>Login to your Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={handleChange}
              value={data.userName}
              required
              className="login_input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="login_input"
            />
            
            <button type="submit" className="white_btn">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New here?</h1>
          <Link to="/signup">
            <button type="button" className="green_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
