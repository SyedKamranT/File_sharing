import React from "react";

const Card = ({ title, desc, price, lists }) => {
  return (
    <div className="flex justify-center">
      <div className="p-6 sm:p-8 w-full lg:h-[475px] max-w-[400px] bg-[#EDDFB5] shadow-lg rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-5 max-md:hover:translate-x-5 hover:shadow-2xl">
        <div>
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

        <button className=" merriweather-regular w-full mt-4 bg-[#DD5E3F] h-[48px] md:h-14 rounded-md text-white text-lg md:text-xl font-semibold hover:bg-[#D85131] transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Card;
