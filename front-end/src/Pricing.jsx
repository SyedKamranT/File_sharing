import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import background from "./assets/background.png";
import Navbar from "./components/Navbar";
import axios from "axios";
import { SyncLoader } from "react-spinners";

const Pricing = () => {
  const [loading, setLoading] = useState(false);
  const [pricings, setPricings] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPricing = async () => {
      setLoading(true);
      try {
        const result = await axios.get("https://flowfiles.onrender.com/api/pricing");
        setPricings(result.data);
      } catch (e) {
        console.log("Error while retrieving the data", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []); // ✅ Runs only once when component mounts

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <SyncLoader speedMultiplier="0.7" color="#DD5E3F" />
        </div>
      ) : (
        <div
          className="min-h-screen bg-cover bg-center flex flex-col gap-10 px-4 md:px-10 pb-10"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="mt-6">
            <Navbar />
          </div>

          <h1 className="merriweather-regular text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#EDDFB5] tracking-wide">
            Pricings
          </h1>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14">
            {pricings.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                desc={item.description}
                price={item.price}
                lists={item.features}
                planId={item.planId}
                userId={user ? user._id : null}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Pricing;
