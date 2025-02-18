import React from 'react'
import logo from '../assests/Vector.svg'
import picture from '../assets/uploadvector.svg'
import google from '../assets/google.svg'
import github from '../assests/github.svg'




const Signup = () => {
    return (
        <div className='h-screen w-screen grid grid-cols-2'>
            
            <div className='bg-[#EDDFB5] w-full h-full flex flex-col items-center relative justify-between p-9 ' >
                <div className=' top-[40px] flex justify-center w-full'>
                    <img src={logo} alt='logo'  className='w-[250px] h-[35px]'/>
                </div>
                <div className=' top-[80px] flex justify-center '>
                    <img src={picture} alt="upload" className='w-[340px] h-[340px]'/> 
                </div>
                <div className=' top-[400px] flex justify-center w-full '>
                    <h1 className='text-black text-[38px] leading-[50px]'>Your Files, Your May <br/> Anytime, Anywhere</h1>

                </div>
                <div className='flex justify-center mt-3'>
                    <p className='text-black text-[12px] text-center'>FlowFiles is your ultimate file-sharing and syncing solution, <br/> designed for speed and simplicity.</p>

                </div>
            </div>


            
    <div className='flex items-center justify-center h-screen '>
      <div className='bg-white rounded-lg p-8 w-full max-w-md'>
        <h1 className='text-2xl  text-center mb-6'>Create Account</h1>
        <form className='flex flex-col gap-4'>
          <input type='text' placeholder='Username' className='w-full p-3 bg-[#EDDFB5] rounded-lg'/>
          
          
          <input type='password' placeholder='Password' className='w-full p-3 bg-[#EDDFB5] rounded-lg'/>

          <input type='submit' value='Create Account' className='w-full bg-[#DD5E3F] text-white p-3 rounded-lg '/>

          <div className='flex items-center justify-center my-2'>
            <p className='text-[#DD5E3F]'>━━━━━━━━━━━ or ━━━━━━━━━━━</p>


          </div>
          <div className='flex justify-center gap-4'>
            <button className='bg-[#DD5E3F] p-3 rounded-lg'><img src={google} alt='google' className='w-6'/></button>
            <button className='bg-[#DD5E3F] p-3 rounded-lg'><img src={github} alt='github' className='w-6'/></button>
          </div>
          <p className='text-center text-gray-600'>
            Already have an account? <a href='#' className='text-[#DD5E3F]'>Sign in</a>
          </p>
        </form>
      </div>
    </div>




        









        </div>




    )
}

export default Signup



