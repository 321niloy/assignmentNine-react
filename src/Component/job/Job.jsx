import React, { useEffect, useState } from 'react';
import './JOB.css'
import JobcetaReview from '../jobceta/JobcetaReview';
import FatureRe from '../fraturefristreview/FatureRe';

const Job = ({All}) => {
    const [jobceta,setJobCetagory] = useState([])
    const[showall,setshowall]=useState(false)

const handleshowall = () =>{
    setshowall(true)
    }

useEffect(() =>{
fetch('cetagory.json')
.then(res => res.json())
.then(data => setJobCetagory(data))

}
,[])
    return (
        <div className='m-5 '>
            <h1 className='text-center font-extrabold text-5xl'>Job Cetagory List</h1>
            <p className='text-center mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quisquam.</p>
           <div className='lg:flex md:flex items-center justify-center space-x-4 gap-10'>
           { 
                jobceta.map(job => <JobcetaReview  key={jobceta.id} job={job}></JobcetaReview>)
            }
           </div>
           <h1 className='text-center font-bold text-4xl mt-3'>Featured Jobs</h1>
            <p className='text-center mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quisquam.</p>
           <div className='grid lg:grid-cols-2  items-center justify-items-center'>
            
           {
             Array.isArray(All) && All ?.slice(0,showall ? 12 :4).map(all => <FatureRe all={all} key={all.id} ></FatureRe> )
           }
          
           </div>
           
         {!showall &&
            (
                <span className='seemore grid place-items-center' onClick={handleshowall}>
            <button className='py-2 bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 text-white rounded-lg mx-auto'>See all Jobs</button>
            </span>
            )
         }
          
        </div>
    );
};

export default Job;