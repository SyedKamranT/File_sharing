import React from 'react'
import background from './assets/background.png'
import Navbar from './components/Navbar.jsx'
import { IoMdAdd } from "react-icons/io";
import { useState, useMemo } from 'react';




//dropzone

import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',

  alignItems: 'center',

  borderColor: '#DD5E3F',
  borderWidth: '2px',
  borderRadius: '30px',


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
    multiple: true,
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFileName(acceptedFiles[0].name); // Store the selected file name
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
    <div className="container flex justify-between   w-[327px] ">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} className=' rounded-[30px]' />
        <div className=' flex justify-between items-center flex-row w-full  p-[10px]'>
          <p className='text-[#DD5E3F] inter-bold text-[16px]' >{fileName || "Browse your files"}</p>
          <button className=' bg-[#DD5E3F] w-[69px] h-[40px] rounded-[25px] flex justify-center items-center'><input {...getInputProps()} /><IoMdAdd className=' text-[20px] text-white' /></button></div>
      </div>
    </div>
  );
}








const Home = () => {


  return (
    <div className=" flex flex-col gap-20 bg-cover bg-center h-screen pt-10" style={{ backgroundImage: `url(${background})` }} >
      {/* <img src={background} alt="background" className="w-full h-full object-cover" /> */}
      {/* Navbar */}

      <Navbar />


      {/* Content */}
      <div className="flex flex-row items-center justify-between mx-[120px] ">
        <div className="flex flex-col gap-[15px]  ">
          <p className='text-[#EDDFB5] font-[400]  text-[64px] leading-[83px] tracking-[1px] merriweather-regular ' >Let's Wrap<br /> Up Your Files</p>
          <p className='text-[#EDDFB5] text-[24px] inter-medium font-[500] leading-[36px]  '>Drag. Drop. Done<br />Seamless file management at your fingertips!</p>
          <button className='mt-[60px]   cursor-pointer bg-[#EDDFB5] w-[190px] h-[60px] rounded-[10px] merriweather-bold text-[18px] text-[#D85131] items-center justify-center text-1xl'>
            See Pricing
          </button>

        </div>
        <div className="w-[387px] h-[462px] bg-[#EDDFB5] rounded-[16px]  ">
          <form action="" className=' flex flex-col gap-[30px] p-[30px]'>
            <StyledDropzone />
            <input type="email" name="" id="" placeholder='Your email' className='  w-full outline-none border-b-2 border-[#DD5E3F] pb-[10px]' />
            <input type="email" name="" id="" placeholder='Email to' className='  w-full outline-none border-b-2 border-[#DD5E3F] pb-[10px]' />
            <input type="text" name="" id="" placeholder='Title' className='  w-full outline-none border-b-2 border-[#DD5E3F] pb-[10px]' />
            <input type="text" name="" id="" placeholder='Message' className='  w-full outline-none border-b-2 border-[#DD5E3F] pb-[10px]' />
            <input type="submit" value="Transfer Files" className=' bg-[#DD5E3F]  w-full h-[60px] rounded-[10px] text-center text-[16px] merriweather-regular  text-[#EDDFB5] ' />

          </form>


        </div>
      </div>
    </div>
  );
};

export default Home;





