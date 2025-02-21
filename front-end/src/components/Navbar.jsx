import React, { useEffect, useState } from 'react';
import logoOrange from '../assets/logoOrange.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import UserProfile from './UserProfile';
import axios from 'axios';







const Navbar = () => {
  const { login, logout, isAuthenticated } = useAuth();
  const { profilepic, setProfilepic } = useState()

  useEffect(() => {



  }, [])


  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-start w-full ">
      <nav className="p-3 flex justify-between items-center bg-[#EDDFB5] w-[85%] rounded-[107px] shadow-md mx-auto">
        <div>
          <img src={logoOrange} alt="Logo" className="w-[220px] h-[33px] " />
        </div>

        <div className="space-x-4">
          {isAuthenticated ? 
          <div className='flex gap-[10px]'>
                  <UserProfile />
                  <button onClick={() => { logout(); }} className="text-[#DD5E3F] text-[14px] w-[119px] inter-bold h-[50px] px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer">
                    Logout
                  </button>
          </div> : 
          <div className='flex gap-[10px]'>
          <button onClick={() => navigate('/login')} className="text-[#DD5E3F] text-[14px] w-[119px] inter-bold h-[50px] px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer">
            Login
          </button>
          <button onClick={()=>navigate('/signup')} className="text-[#EDDFB5] text-[14px] w-[119px] h-[50px] inter-bold  px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer bg-[#DD5E3F]">
            Signup
          </button>
          </div>
          }
          {/* <button className="text-[#DD5E3F] text-[14px] w-[119px] inter-bold h-[50px] px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer">
            Login
          </button> */}

        </div>
      </nav>
    </div>




  );
};

export default Navbar;

