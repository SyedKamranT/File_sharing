import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import vector from '../assets/uploadvector.svg';
import logo from '../assets/logo.svg';
import logoOrange from '../assets/logoOrange.svg';

import google from '../assets/google.svg';
import github from '../assets/github.svg';

import {useNavigate} from 'react-router-dom'




const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
  
    const { login } = useAuth(); // Using login function from AuthContext

    const navigate = useNavigate();
    
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:5000/auth/login", {
          username,
          password,
         
         
        });
  
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
  
        setMessage("Login successful!");
        setError("");
  
        // Call login function from AuthContext
        login(response.data.token);
        console.log("Nvaigation is running")
  
        // Navigate to home page
        navigate("/");
      } catch (err) {
        setError("Invalid username or password");
        setMessage("");
      }
    };
  

    

    return (
        <div className='flex items-center justify-center m-0 p-0  h-screen max-md:flex-col'>
            {/* left div */}
            <div className="  bg-[#DD5E3F] w-1/2 h-full flex flex-col items-center justify-center  px-10 max-lg:px-10 py-10 max-md:w-full max-md:h-fit max-sm:bg-white  ">
                <div className=' flex items-center justify-center '>
                <img className=" max-sm:w-[40%] md:max-lg:w-[80%]" src={window.innerWidth < 640 ? logoOrange : logo} alt="logo" />
                </div>
                <div className='w-[480px] max-sm:hidden max-lg:w-[80%] lg:max-xl:w-[90%] h-fit mt-[50px] mb-[30px] object-cover max-md:mt-[30px] max-md:mb-[18px]'>
                    <img src={vector} alt="illustrator" className="" />
                </div>
                <div className=''>
                    <h1 className='text-[#EDDFB5] max-lg:text-3xl md:max-lg:text-2xl merriweather-regular  font-bold text-4xl text-center max-sm:text-[#DD5E3F] max-sm:text-[22px] max-sm:mt-5'>
                        Your Files, Your Way <br />
                        Anytime, Anywhere
                    </h1>
                </div>
                <div className=' max-sm:hidden'>
                    <p className='max-lg:mt-[16px] max-lg:text-[12px] max-lg: text-[#EDDFB5] inter-thin tracking-[1px] mt-[20px] text-center text-md'>
                        "FlowFiles is your ultimate file-sharing and syncing solution, <br />
                        designed for speed and simplicity."
                    </p>
                </div>
            </div>
            <div className='md:hidden  text-black/20'> ──────────── </div>

             {/* right div */}
            <div className='w-1/2 h-full flex flex-col items-center justify-evenly lg:p-20 max-md:w-full '>
                <div className=' flex flex-col items-center justify-center gap-5 max-md:py-[30px] '>
                    <h1 className='text-[#000000] merriweather-regular font-[700] text-[32px] '>
                        Welcome Back!
                    </h1>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {message && <p style={{ color: "green" }}>{message}</p>}

                    <form onSubmit={handleLogin} className='flex flex-col items-center justify-center gap-5'>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)}
                            className=' max-lg:w-[300px] border-none inter-regular bg-[#EDDFB5] rounded-md w-[377px] h-[60px]  placeholder:pl-[24px] placeholder:text-left focus:outline-none focus:ring-0 text-center'
                            type="text"
                            placeholder='Username'
                        />
                        <input value={password} onChange={(e)=>setPassword(e.target.value)}
                            className=' max-lg:w-[300px] inter-regular bg-[#EDDFB5] rounded-md w-[377px] h-[60px] placeholder:pl-[24px] placeholder:text-left focus:outline-none focus:ring-0 text-center'
                            type="password"
                            placeholder='Password'
                        />
                        <button  className='max-lg:w-[300px] cursor-pointer bg-[#DD5E3F] w-[377px] h-[60px] rounded-md inter-medium text-[18px] text-white hover:bg-[#D85131]'>
                            Login
                        </button>
                    </form>

                    <div className="max-lg:text-[12px] merriweather-regular text-center text-[#DD5E3F] "> ──────────────  Or  ──────────────
                    </div>

                    <div className="flex justify-center gap-4">
                        <button className='cursor-pointer bg-[#DD5E3F] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#D85131]'>
                            <img src={google} alt="google" />
                        </button>
                        <button className='cursor-pointer bg-[#DD5E3F] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#D85131]'>
                            <img src={github} alt="github" />
                        </button>
                    </div>

                    <div className='max-lg:text-[14px] merriweather-medium text-[18px] '>
                        Don't have an account? <a className='text-[#DD5E3F] underline' href="/signup">SignUp</a>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Login