import React from 'react'
import background from './assets/background.png'
import Navbar from './components/Navbar.jsx'






const Home = () => {
  return (
    <div className="relative h-screen bg-cover">
      <img src={background} alt="background" className="w-full h-full object-cover" />
      {/* Navbar */}
      <div className="absolute top-5 left-0 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-row items-center justify-center space-y-4 gap-5">
        <div className="w-[519px] h-[388px] top-[318px] left-[121px]  ">
        <p className='text-[#EDDFB5] w-[445px] h-[166px] top-[318px] left-[121px] font-{Merriweather} text-5xl font-bold' >Let's Wrap<br/> Up Your Files</p>
        <p className='text-[#EDDFB5] text-2xl'>Drag. Drop. Done<br/>Seamless file management at your fingertips!</p>
        <button className='p-[30px]  mt-[20px]  cursor-pointer bg-[#EDDFB5] w-[190px] h-[60px] rounded-md inter-medium text-[18px] text-[#D85131] items-center justify-center text-1xl'>
        See Pricing
        </button>
        
        </div>
        <div className="w-[387px] h-[462px] top-[281px] left-[933px] border-2 border-black  "></div>
      </div>
    </div>
  );
};

export default Home;





