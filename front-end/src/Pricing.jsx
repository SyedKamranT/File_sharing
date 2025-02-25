import React from "react";
import Card from "./components/Card";
import background from "./assets/background.png";
import Navbar from "./components/Navbar";


const Pricing = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const pricings = [
    {
      id: 1,
      title: "Starter",
      desc: "The ultimate choice for power users who send big files all day, every day.",
      price: 9,
      lists: ["Unlimited transfers per month", "Transfer expiry up to 1 year", "Custom branding per transfer"],
      planId: "plan_Pzt4xcHMI1UsjQ",
    },
    {
      id: 2,
      title: "Ultimate",
      desc: "The ultimate choice for power users who send big files all day, every day.",
      price: 23,
      lists: ["Unlimited transfers per month", "Transfer expiry up to 1 year", "Custom branding per transfer", "Unlimited reviews and portals"],
      planId: "plan_Pzt5O1TkyreS4S",
    },
    {
      id: 3,
      title: "Ultimate Pro",
      desc: "The ultimate choice for power users who send big files all day, every day.",
      price: 33,
      lists: ["Unlimited transfers per month", "Transfer expiry up to 1 year", "Custom branding per transfer", "Unlimited reviews and portals", "Subscribers benefits"],
      planId: "plan_Pzt5xPbDbEmROo",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col gap-10 px-4 md:px-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="mt-6">
        <Navbar />
      </div>

      <h1 className="merriweather-regular  text-center text-4xl md:text-5xl lg:text-6xl font-bold  text-[#EDDFB5] tracking-wide">
        Pricings
      </h1>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14">
      {pricings.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        desc={item.desc}
        price={item.price}
        lists={item.lists}
        planId={item.planId}
        userId={user ? user._id : null} // Prevent errors if user is not logged in
      />
    ))}
      </div>
    </div>
  );
};

export default Pricing;
