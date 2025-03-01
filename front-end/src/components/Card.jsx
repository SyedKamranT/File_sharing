import { useAuth } from "../AuthContext";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {SyncLoader} from 'react-spinners'

const Card = ({ title, desc, price, lists, planId }) => {
  const { isAuthenticated } = useAuth();
   const [loading,setLoading] = useState(false)
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      user = decoded.userId;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  } else {
    console.warn("No token found in localStorage.");
  }

  const handleSubscribe = async () => {
    
    
    if (!isAuthenticated) {
      alert("You need to be logged in to subscribe!");
      return;
    }
    setLoading(true)
    try {
      const response = await axios.post("https://flowfiles.onrender.com/razorpay/subscribe", {
        planId: planId,
        userId: user,
      });

      if (response.data) {
        const { subscriptionId, orderId, razorpayKey } = response.data;

        const options = {
          key: razorpayKey,
          subscription_id: subscriptionId,
          name: "File Sharing Service",
          description: title,
          handler: function (response) {
            alert("Payment Successful!");
            console.log(response);
          
           
          },
          prefill: {
            name: "User",
            email: "user@example.com",
          },
          theme: {
            color: "#DD5E3F",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error("Subscription Error: ", error);
      alert("Subscription failed! Check console for details.");
    }finally{
      setLoading(false)
    }
  };

  return (
    <><div className="flex justify-center items-center">
        <div className=" p-6 sm:p-8 w-full lg:h-[475px] max-w-[400px] bg-[#EDDFB5] shadow-lg rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-5 max-md:hover:translate-x-5 hover:shadow-2xl">
        {loading ?<div  className="flex text-center justify-center items-center   min-w-[400px]  h-[50vh]  relative left-[41%] lg:h-[100vh]  "> <SyncLoader speedMultiplier ="0.7"  color='#DD5E3F' className=" w-full"/></div> :
        <><div>
          <h1 className="text-3xl md:text-4xl text-[#DD5E3F] font-bold merriweather-regular">{title}</h1>
          <p className="pt-3 md:pt-4 text-base md:text-lg inter-light">{desc}</p>
          <p className="text-2xl md:text-3xl mt-6 font-bold merriweather-regular">
            ${price}/<span className="text-lg md:text-xl font-normal">month</span>
          </p>
          <p className="mt-2 text-[#00000099] text-sm md:text-base">Billed monthly</p>
          <ul className="mt-4 list-disc list-inside text-sm md:text-base inter-light">
            {lists.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleSubscribe}
          className="merriweather-regular cursor-pointer w-full mt-4 bg-[#DD5E3F] h-[48px] md:h-14 rounded-md text-white text-lg md:text-xl font-semibold hover:bg-[#D85131] transition-all duration-300"
        >
          Subscribe
        </button></>}
       
      </div>
    </div></>
   
  );
};

export default Card;
