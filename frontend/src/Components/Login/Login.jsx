import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import axios from "../API/axios";
// import {motion} from 'framer-motion/dist/es/index'
import imgLeft from "./images/img.svg";

function Login() {

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", { user, pwd });
    // localStorage.setItem("token", response.data.token)
    console.log(response)
  };

  

  return (
    <div className="login">

          <section class="side">
              <img src= {imgLeft} alt=""/>
          </section>

          <section class="main">
              <div class="login-container">
                  <p class="title">Welcome back</p>
                  <div class="separator"></div>
                  <p class="welcome-message">Please, provide login credential to proceed and have access to all our services</p>

                  <form class="login-form">
                      <div class="form-control">
                          <input type="text" placeholder="Username"/>
                          <FontAwesomeIcon className="icon" icon={faUser} color="white" size="2x"/>
                      </div>
                      <div class="form-control">
                          <input type="password" placeholder="Password"/>
                          <FontAwesomeIcon className="icon" icon={faLock} color="white" size="2x"/>
                      </div>
                      <button class="submit">Login</button>
                      <div className="other">
                        <a href="">Forget Password?</a>
                        <a href="">Creat an account</a>
                      </div>
                      <div id="google">
                        <h5>or</h5>
                        <h5>Login with</h5>
                        <a href="#" class="facebook">
                          <FontAwesomeIcon icon={faGoogle} color="white" size="2x"/>
                        </a>
                      </div>
                  </form>
              </div>
          </section>

    </div>
  );
}

export default Login;
