import React from 'react';

const Card = () => {
    return (
        <div className="items-center h-screen ">
            <div className="p-[30px] w-[411px] h-[558px] bg-[#EDDFB5] shadow-lg rounded-2xl  flex flex-col justify-between">
                <div>
                    <h1 className='text-4xl text-[#DD5E3F] merriweather-regular'>Starter</h1>

                    <p className='pt-5 w-[351px] h-[46px] top-[406px] '>The ultimate choice for power users who send big files all day, every day.</p>
                    <p className='text-3xl mt-9 merriweather-regular'>
                        $9/<span className='text-xl'>month</span>
                    </p>
                    <p className='mt-2 text-[#00000099]'>Billed monthly</p>
                    <div className='mt-5'></div>
                    <ul className='list-disc list-inside'>
                        <li>Share and receive limitless</li>
                        <li>Unlimited transfers per month</li>
                        <li>Transfer expiry up to 1 year</li>
                        <li>Custom branding per transfer</li>
                    </ul>
                </div>
                <button className='max-lg:w-[300px] cursor-pointer bg-[#DD5E3F] w-[351px] h-[60px] rounded-md inter-medium text-[18px] text-white hover:bg-[#D85131] merriweather-regular  '>
                    Subscribe
                </button>
            </div>


        </div>
    );
};

export default Card;
