import { useState } from 'react'

import Signup from './components/Signup'
import Login from './components/Login'
import Home from './Home'
import { createBrowserRouter ,RouterProvider} from "react-router-dom"
import { useAuth } from "./AuthContext";; //now added
import { AuthProvider } from "./AuthContext";
import AuthSuccess from './AuthSuccess'
import Pricing from './Pricing'


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
    },{
      path:"/auth-success",
      element:<AuthSuccess />
    },{
      path:'/pricing',
      element: <Pricing/>
    }]
   
  )
  

  return (

    <>
     <AuthProvider>
    <div className="">
        <RouterProvider router={router} />
    </div>
    </AuthProvider>
   

    </>
  )
}

export default App
