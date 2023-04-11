import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
    
        <div className='lg:grid lg:grid-cols-3  p-10 mt-0 bg-sky-500/[.06] items-center'>
        <Link to="/"><h2 className='text-2xl font-extrabold lg:col-start-1 '>NavHUB</h2></Link>
        <div className='lg:col-start-2 lg:col-span-4  text-xl'>
            <Link className='lg:pl-5 pl-1  text-purple-700' to="/">Home</Link>
            <Link className='lg:pl-5 pl-1' to="statics">Statictis</Link>
            <Link className='lg:pl-5 pl-1' to="applied">Applied jobs</Link>
            <Link className='lg:pl-5 pl-1' to="blog">Blog</Link>
        </div>
        <div className='lg:col-start-6 lg:col-span-7'>
            <Link><button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white rounded-lg '>Start Applying</button></Link>
        </div>
        
    </div>
    );
};

export default Main;