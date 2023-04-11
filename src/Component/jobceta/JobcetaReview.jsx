import React from 'react';
import './jobcetareview.css'

const JobcetaReview = ({job}) => {
    const{id,img,availabel}=job
    return (
        <div className='bg-sky-500/[.06] p-10 mt-6 rounded-md'>
            <img src={img} alt="" />
            <h1 className='font-bold pt-2'>{id}</h1>
            <h2 className='pt2'>{availabel}</h2>
            
        </div>
    );
};

export default JobcetaReview;