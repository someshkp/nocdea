import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const { email, userName, password } = data;
  //     let userSignup = localStorage.getItem("user");

  //     // let users = localStorage.getItem("user")
  //     // users = JSON.parse(users)
  //     // if (!users) {
  //     //   users = []
  //     // }
  //     // localStorage.setItem("user", JSON.stringify([...users, data]));
  //     // navigate("/");
  //     // alert("Registration Successful!");
  //     if (userSignup && userSignup.length) {
  //       const userdata = JSON.parse(userSignup);
  //       const userCheck = userdata.filter((elem, index) => {
  //         return (
  //           elem.userName === userName &&
  //           elem.email === email
  //         );
  //       });
  //       if (userCheck.length === 0) {
  //         let users = localStorage.getItem("user")
  //         users = JSON.parse(users)

  //         localStorage.setItem("user", JSON.stringify(val));
  //         navigate("/");
  //         alert("Registration Successful!");

  //       // } else {
  //       //   alert("user name or email already exist!");
  //       // }

  //       setData({
  //         userName: "",
  //         email: "",
  //         password: "",
  //       });
  //     }else{
  //       localStorage.setItem("user", JSON.stringify(data));
  //         navigate("/");
  //         alert("Registration Successful!");
  //         setData({
  //           userName: "",
  //           email: "",
  //           password: "",
  //         });
  //     }
  //   };
  // }

  const signup = (e) => {
    e.preventDefault();
    const { email, userName, password } = data;
    let users = localStorage.getItem("users");
    if (!users) {
      users = {
        list: [data],
      };
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
      alert("Registration Successful!");
    } else {
      users = JSON.parse(users);
      const userCheck = users.list.filter((elem) => {
        console.log(elem);
        return elem.userName === userName;
      });
      if (userCheck.length === 0) {
        console.log(users);
        users = {
          list: [...users.list, data],
        };
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/");
        alert("Registration Successful!");
      } else {
        alert("Username already exist");
      }

      // console.log(users)
      // users = {
      //   list : [...users.list, data]
      // }
    }

    // localStorage.setItem("users", JSON.stringify(users))
  };

  return (
    <div className="singup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/">
            <button type="button" className="white_btn">
              Sign in
            </button>
          </Link>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={signup}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={handleChange}
              value={data.userName}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
