import React from 'react';
import background from './assets/background.png';
import Navbar from './components/Navbar.jsx';
import { IoMdAdd } from 'react-icons/io';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
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
  width: '100%',
 
  height: '60px',
};

const focusedStyle = { borderColor: '#2196f3' };
const acceptStyle = { borderColor: '#00e676' };
const rejectStyle = { borderColor: '#ff1744' };

function StyledDropzone() {
  const [fileName, setFileName] = useState(null);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    multiple: true,
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFileName(acceptedFiles[0].name);
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container w-full ">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} className="rounded-[30px] w-full" />
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-[#DD5E3F] text-[16px] inter-bold">{fileName || 'Browse your files'}</p>
          <button className="bg-[#DD5E3F] w-[69px] h-[40px] rounded-[25px] flex justify-center items-center">
            <IoMdAdd className="text-[20px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col gap-20 bg-cover bg-center px-4 md:px-10 pt-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:max-lg:gap-14   lg:gap-20 lg:max-xl:mx-[80px] xl:mx-[100px] ">
        <div className="text-center md:text-left  ">
          <p className="text-[#EDDFB5] text-5xl leading-[65px]  xl:text-[64px] lg:max-xl:text-[45px]  lg:max-xl:leading-[70px] font-bold  merriweather-regular lg:leading-[83px] ">
            Let's Wrap Up <br />Your Files
          </p>
          <p className="text-[#EDDFB5] text-lg md:text-xl mt-4 inter-medium">
            Drag. Drop. Done<br />Seamless file management at your fingertips!
          </p>
          <button
            onClick={() => navigate('/pricing')}
            className="mt-12 bg-[#EDDFB5] w-48 h-15 rounded-lg text-[#D85131] text-lg font-semibold merriweather-bold "
          >
            See Pricing
          </button>
        </div>
        <div className=" max-w-md bg-[#EDDFB5] rounded-[16px] p-7.5 shadow-lg md:min-h-[462px] md:min-w-[387px] max-md:w-full">
          <form className="flex flex-col h-full justify-between gap-[20px]">
            <StyledDropzone />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
            />
            <input
              type="email"
              placeholder="Email to"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
            />
            <input
              type="text"
              placeholder="Title"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
            />
            <input
              type="submit"
              value="Transfer Files"
              className="bg-[#DD5E3F] w-full h-15 rounded-lg text-[#EDDFB5] text-lg font-semibold cursor-pointer merriweather-regular "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
