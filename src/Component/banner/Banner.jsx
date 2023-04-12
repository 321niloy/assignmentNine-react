import React from 'react';
import './Banner.css'
import Bannerimage from "../../image/main.jpg"
const Banner = () => {
    return (
        <div className='lg:flex  bg-sky-500/[.06]'>
            <div>
            <h1 className='text-8xl mb-3'>Hey , Are you <br />
                Ready for your <br />
                <span className='text-purple-700'>dream job</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                   Aliquid beatae sed esse omnis veniam magnam, qui aperiam, cupiditate, <br />
                   nulla asperiores repellat.</p>

                   <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white rounded-lg mt-3'>Get Started</button>
            </div>
                <div>
                   <img className='image' src={Bannerimage} alt="" />
                </div>
        </div>
    );
};

export default Banner;