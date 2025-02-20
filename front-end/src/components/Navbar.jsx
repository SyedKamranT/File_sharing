import React from 'react';
import logoOrange from '../assets/logoOrange.svg';







const Navbar = () => {
    return (
      <div className="flex justify-center items-start w-full ">
      <nav className="p-3 flex justify-between items-center bg-[#EDDFB5] w-[85%] rounded-[107px] shadow-md mx-auto">
        <div>
          <img src={logoOrange} alt="Logo" className="w-[220px] h-[33px] " />
        </div>

        <div className="space-x-4">
          <button className="text-[#DD5E3F] text-[14px] w-[119px] inter-bold h-[50px] px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer">
            Login
          </button>
          <button className="text-[#EDDFB5] text-[14px] w-[119px] h-[50px] inter-bold  px-4 py-2 rounded-full border border-[#DD5E3F] cursor-pointer bg-[#DD5E3F]">
            Signup
          </button>
        </div>
      </nav>
    </div>



        
    );
};

export default Navbar;

