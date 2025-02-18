import React from 'react';
import vector from '../src/assets/uploadvector.svg';
import logo from '../src/assets/logo.svg';
import google from '../src/assets/google.svg';
import github from '../src/assets/github.svg';




const Login = () => {
    return (
        <div className='flex items-center justify-center m-0 p-0 w-screen h-screen max-md:flex-col'>
            <div className="bg-[#DD5E3F] w-1/2 h-full flex flex-col items-center justify-center relative gap-8 max-md:w-full">
                <div className='flex justify-center w-full mt-[60px]'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex justify-center w-full mt-[120px]'>
                    <img src={vector} alt="illustrator" className="w-[501px] h-[427px]" />
                </div>
                <div className='flex justify-center mt-[500px]'>
                    <h1 className='text-[#EDDFB5] merriweather-regular text-[48px] text-center'>
                        Your Files, Your Way <br />
                        Anytime, Anywhere
                    </h1>
                </div>
                <div className='flex justify-center mt-[30px]'>
                    <p className='text-[#EDDFB5] inter-thin tracking-[1px] text-center text-[18px]'>
                        "FlowFiles is your ultimate file-sharing and syncing solution, <br />
                        designed for speed and simplicity."
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center w-1/2 h-screen max-md:w-full '>
                <div className='h-full flex flex-col items-center justify-center gap-6'>
                    <h1 className='text-[#000000] merriweather-regular text-[32px] mt-[270px]'>
                        Welcome Back!
                    </h1>
                    <form className='flex flex-col items-center justify-center gap-4 mt-[70px]'>
                        <input
                            className='border-none inter-regular bg-[#EDDFB5] rounded-md w-[377px] h-[60px] placeholder:pl-[24px] placeholder:text-left focus:outline-none focus:ring-0 text-center'
                            type="text"
                            placeholder='Username'
                        />
                        <input
                            className='inter-regular bg-[#EDDFB5] rounded-md w-[377px] h-[60px] placeholder:pl-[24px] placeholder:text-left focus:outline-none focus:ring-0 text-center'
                            type="text"
                            placeholder='Password'
                        />
                        <button className='cursor-pointer bg-[#DD5E3F] w-[377px] h-[60px] rounded-md inter-medium text-[18px] text-white hover:bg-[#D85131]'>
                            Login
                        </button>
                    </form>

                    <div className="merriweather-regular text-center text-[#DD5E3F] mt-[30px]"> ──────────────  Or  ──────────────
                    </div>

                    <div className="flex justify-center gap-4 mt-[40px]">
                        <button className='cursor-pointer bg-[#DD5E3F] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#D85131]'>
                            <img src={google} alt="google" />
                        </button>
                        <button className='cursor-pointer bg-[#DD5E3F] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#D85131]'>
                            <img src={github} alt="github" />
                        </button>
                    </div>

                    <div className='merriweather-medium text-[18px] mt-[40px]'>
                        Don't have an account? <a className='text-[#DD5E3F] underline' href="#">SignIn</a>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Login