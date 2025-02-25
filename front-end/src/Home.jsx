import React from 'react';
import background from './assets/background.png';
import Navbar from './components/Navbar.jsx';
import { IoMdAdd } from 'react-icons/io';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
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


const rejectStyle = { borderColor: '#ff1744' };

function StyledDropzone({setAcceptedFiles}) {
  const [fileNames, setFileNames] = useState(null);
  
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    multiple: true,
   
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
       setFileNames(acceptedFiles[0].name)
       
        
        setAcceptedFiles(acceptedFiles)
        
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
 

  return (
    <div className="container w-full ">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} className="rounded-[30px] w-full" />
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-[#DD5E3F] text-[16px] w-[70%] whitespace-nowrap overflow-hidden overflow-ellipsis inter-bold">{fileNames || 'Browse your files'}</p>
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
  const [acceptedFiles, setAcceptedFiles] = useState([])
  
  const [yourEmail, setYourEmail] = useState("");
  const [emailTo, setEmailTo] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();
    
    if (!yourEmail || !emailTo || !title || !message || acceptedFiles.length === 0) {
      alert("Please fill all fields and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("yourEmail", yourEmail);
    formData.append("emailTo", emailTo);
    formData.append("title", title);
    formData.append("message", message);
    
    acceptedFiles.forEach((files) => {
      formData.append("files", files); // `file` is a File object
    });

    try {
      const response = await axios.post("http://localhost:5000/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("File uploaded successfully:", response.data);
      alert("Files transferred successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to transfer files.");
    }
  };


  console.log(acceptedFiles)

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
        <div className=" max-w-[387px] bg-[#EDDFB5] rounded-[16px] p-7.5 shadow-lg md:min-h-[462px] md:min-w-[387px] max-md:w-full">
          <form onSubmit={handleTransfer} className="flex flex-col h-full justify-between gap-[20px]" >
            <StyledDropzone setAcceptedFiles = {setAcceptedFiles} />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email to"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Title"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full border-b-2 border-[#DD5E3F] p-2 outline-none inter-regular"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
