import React from 'react';
import { Link } from 'react-router-dom';

const ApplideView = ({Everything}) => {
    const{img,name,id,location,salary}=Everything
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className='w-72 h-56' src={img} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{id}</p>
          <span className='flex gap-4'>
            <button className='btn btn-outline btn-secondary'>Remote</button>
            <button className='btn btn-outline btn-secondary'>FullTime</button>
          </span>
          <span className='flex gap-4'>
            <span>{location}</span>
            <p>{salary}</p>
          </span>
          <div className="card-actions justify-end">
           <Link to={`/viewdetails/${id}`}><button className="btn btn-primary">View details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ApplideView;