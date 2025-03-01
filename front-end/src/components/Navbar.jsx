import React, { useEffect, useState } from 'react';
import logoOrange from '../assets/logoOrange.svg';
import logoIcon from '../assets/logoIcon.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import UserProfile from './UserProfile';
import axios from 'axios';







const Navbar = () => {
  const { login, logout, isAuthenticated } = useAuth();
 


  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-start w-full ">
      <nav className="p-3 flex justify-between items-center bg-[#EDDFB5] w-[85%] md:max-xl:w-[100%] rounded-[107px] shadow-md mx-auto max-md:w-full">
        <div>
         <button onClick={() => navigate('/')}> <img src={window.innerWidth < 640 ? logoIcon : logoOrange} alt='logo' className="cursor-pointer border-none max-sm:w-fit max-sm:h-[48px] max-sm:pl-[10px] w-[220px] h-[33px] " /></button>
        </div>

        <div className="space-x-4">
          {isAuthenticated ? 
          <div className='flex gap-[10px]'>
                  <UserProfile />
                  <button onClick={() => { logout(); }} className="text-[#DD5E3F] text-[14px] w-[119px] max-sm:w-[85px]  inter-bold h-[50px] px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer outline-none">
                    Logout
                  </button>
          </div> : 
          <div className='flex gap-[10px]'>
          <button onClick={() => navigate('/login')} className="text-[#DD5E3F] max-sm:w-[85px] text-[14px] w-[119px] inter-bold h-[50px] px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer outline-none">
            Login
          </button>
          <button onClick={()=>navigate('/signup')} className="text-[#EDDFB5] max-sm:w-[85px] text-[14px] w-[119px] h-[50px] inter-bold  px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer bg-[#DD5E3F] outline-none">
            Signup
          </button>
          </div>
          }
         

        </div>
      </nav>
    </div>




  );
};

export default Navbar;

