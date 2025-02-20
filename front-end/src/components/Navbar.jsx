import React from 'react';
import logo from '../assets/logo.svg';







const Navbar = () => {
    return (
      <div className="flex justify-center items-start w-full fixed top-10 z-50">
      <nav className="p-3 flex justify-between items-center bg-[#EDDFB5] w-[1200px] rounded-[107px] shadow-md mx-auto">
        <div>
          <img src={logo} alt="Logo" className="h-8 invert-[0.4]" />
        </div>

        <div className="space-x-4">
          <button className="text-[#DD5E3F] px-4 py-2 rounded-full border border-[#DD5E3F]">
            Login
          </button>
          <button className="text-[#EDDFB5] px-4 py-2 rounded-full border border-[#DD5E3F] bg-[#DD5E3F]">
            Signup
          </button>
        </div>
      </nav>
    </div>



        
    );
};

export default Navbar;

