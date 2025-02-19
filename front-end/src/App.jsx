import { useState } from 'react'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './Home'
import { createBrowserRouter ,RouterProvider} from "react-router-dom"
import { useAuth } from "./AuthContext";; //now added
import { AuthProvider } from "./AuthContext";


function App() {


  const router = createBrowserRouter(
    [
    {
      path: "/",
      element : <> <Home/> </>
    },
    {
      path: "/signup",
      element : <> <Signup/> </>
    },
    {
      path : "/login",
      element : <> <Login/> </>
    }]
   
  )
  

  return (

    <>
     <AuthProvider>
    <div className="bg-[#EFF2F0]">
        <RouterProvider router={router} />
    </div>
    </AuthProvider>
   

    </>
  )
}

export default App
