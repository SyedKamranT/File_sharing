import React from 'react'
import logo from '../assets/logo.svg';
import logoOrange from '../assets/logoOrange.svg';
import vector from '../assets/uploadvector.svg';
import picture from '../assets/uploadvector.svg';
import google from '../assets/google.svg';
import github from '../assets/github.svg';
import { useState,useEffect ,useMemo} from 'react';
import axios from 'axios';
import { IoMdAdd } from "react-icons/io";
import { useAuth } from '../AuthContext';

import {useNavigate} from 'react-router-dom'

//here we have the dropzone to upload profile picture
import { useDropzone } from 'react-dropzone';





const baseStyle = {
  flex: 1,
  display: 'flex',

  alignItems: 'center',

  


  backgroundColor: 'transparent',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  width: '327px',
  height: '60px',
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function StyledDropzone(props) {
  const [fileName, setFileName] = useState(null);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    // multiple: true,
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFileName(acceptedFiles[0].name); // Store the selected file name
        props.setProfilePicture(acceptedFiles[0]);  // Store file in state
      }
    }
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container flex justify-between max-lg:w-[300px] border-none inter-regular bg-[#EDDFB5] rounded-tr-[90px] rounded-br-[90px]  w-full h-[60px] ">
      <div {...getRootProps({ style })}>
        <input  placeholder='Add Profile picture' {...getInputProps()} className=' rounded-[30px]' />
        <div className=' flex justify-between items-center flex-row w-full max-lg:w-[300px]  p-[10px]'>
          <p className='text-[#808080] pl-[14px] capitalize w-[280px] overflow-hidden overflow-ellipsis whitespace-nowrap  ' >{fileName ? fileName : 'Add Profile picture'}</p>
          <button className=' bg-[#DD5E3F] min-w-[50px] min-h-[50px] rounded-[90px] flex justify-center items-center'><input {...getInputProps()} /><IoMdAdd className=' text-[20px] text-white' /></button>
          </div>
      </div>
    </div>
  );
}



const Signup = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture ,setProfilePicture] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
 const navigate = useNavigate();
 const {signup} = useAuth()

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture); 

    try {
      const response = await axios.post("http://localhost:5000/auth/signup",formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Important for file upload
            },
        });


       
      // Save token in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);

      

      setMessage(response.data.message);
     navigate("/")
      setError("");
      
signup(response.data.token)
      // Update authentication state
      setUsername("");
        setPassword("");
        setProfilePicture(null);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
      setMessage("");
    }
  };
  const handleOAuthLogin = (provider) => {
    window.location.href = `http://localhost:5000/auth/${provider}`;
  };

    return (
      <div className='flex items-center justify-center m-0 p-0  h-screen max-md:flex-col'>
                  {/* left div */}
                  <div className="  bg-[#EDDFB5] w-1/2 h-full flex flex-col items-center justify-center  px-10 max-lg:px-10 py-10 max-md:w-full max-md:h-fit max-sm:bg-white  ">
                      <div className=' flex items-center justify-center '>
                      <img className=" max-sm:w-[40%] md:max-lg:w-[80%]" src={logoOrange} alt="logo" />
                      </div>
                      <div className='w-[480px] max-sm:hidden max-lg:w-[80%] lg:max-xl:w-[90%] h-fit mt-[50px] mb-[30px] object-cover max-md:mt-[30px] max-md:mb-[18px]'>
                          <img src={vector} alt="illustrator" className="" />
                      </div>
                      <div className=''>
                          <h1 className='text-black max-lg:text-3xl md:max-lg:text-2xl merriweather-regular  font-bold text-4xl text-center max-sm:text-[#DD5E3F] max-sm:text-[22px] max-sm:mt-5'>
                              Your Files, Your Way <br />
                              Anytime, Anywhere
                          </h1>
                      </div>
                      <div className=' max-sm:hidden'>
                          <p className='max-lg:mt-[16px] max-lg:text-[12px]  text-black inter-thin tracking-[1px] mt-[20px] text-center text-md'>
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
                          Create Account
                          </h1>
                          {error && <div className='text-red-500 text-sm'>{error}</div>}
                          <form onSubmit={handleSignup} className='flex flex-col items-center justify-center gap-5'>
                          <StyledDropzone profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
                              <input value={username} onChange={(e)=> setUsername(e.target.value)}
                                  className=' max-lg:w-[300px] border-none inter-regular bg-[#EDDFB5] rounded-md w-[377px] h-[60px]  placeholder:pl-[24px] placeholder:text-left focus:outline-none focus:ring-0 text-center'
                                  type="text"
                                  placeholder='Username'
                              />
                              <input value={password} onChange={(e)=> setPassword(e.target.value)}
                                  className=' max-lg:w-[300px] inter-regular bg-[#EDDFB5] rounded-md w-[377px] h-[60px] placeholder:pl-[24px] placeholder:text-left focus:outline-none focus:ring-0 text-center'
                                  type="password"
                                  placeholder='Password'
                              />
                              
                              <button className='max-lg:w-[300px] cursor-pointer bg-[#DD5E3F] w-[377px] h-[60px] rounded-md inter-medium text-[18px] text-white hover:bg-[#D85131]'>
                                  Create Account
                              </button>

                          </form>
      
                          <div className="max-lg:text-[12px] merriweather-regular text-center text-[#DD5E3F] "> ──────────────  Or  ──────────────
                          </div>
      
                          <div className="flex justify-center gap-4">
                              <button onClick={() => handleOAuthLogin("google")} className='cursor-pointer bg-[#DD5E3F] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#D85131]'>
                                  <img src={google} alt="google" />
                              </button>
                              <button onClick={() => handleOAuthLogin("github")} className='cursor-pointer bg-[#DD5E3F] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#D85131]'>
                                  <img src={github} alt="github" />
                              </button>
                          </div>
      
                          <div className='max-lg:text-[14px] merriweather-medium text-[18px] '>
                              Already have an account? <a className='text-[#DD5E3F] underline' href='/login' >SignIn</a>
                          </div>
                      </div>
                  </div>
      
              </div>

    )
}

export default Signup



