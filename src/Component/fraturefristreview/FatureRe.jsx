import React from 'react';
import "./feature.css";
import { Link } from 'react-router-dom';

const FatureRe = ({all}) => {
    const{img,name,id,location,salary}=all
    return (
      <div className='card w-96 bg-base-100 shadow-xl mb-5 p-10'>
        <figure><img src={img} alt="" /></figure>
  <div className="card-body">
    <h1 >{name} </h1>
    <h1>{id}</h1>
    <span className='flex gap-4'>
        <button className="btn btn-outline btn-success"> remote</button>
        <button className="btn btn-outline btn-success"> Full time </button>
    </span>
    <span className='flex gap-3'>
    <h1>{location}</h1>
    <h1>{salary}</h1>
    </span>
    
  </div>
    <Link className='mx-auto' to={`/viewdetails/${id}`}><button className='p-4 text-white rounded-lg bg-indigo-700 mx-auto'>View details</button></Link>
            
        </div>
    );
};

export default FatureRe;