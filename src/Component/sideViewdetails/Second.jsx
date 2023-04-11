import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Second = ({viewdetails}) => {
    const {name,id,location,salary,email,phone}=viewdetails;

const addid = (id) =>{
 addToDb(id)
}
    return (
        <div>
            <h1 className='font-extrabold'>Job Details</h1> <br />
            <hr className='w-56 font-bold'/>
            <h1><span className='font-bold'>Salary:</span>{salary}</h1>
            <h1><span className='font-bold'>Job  title:</span>{name}</h1> <br />
            <h1>Contact Information</h1> <br />
            <hr className='w-56' />
            <h1><span className='font-bold'>Phone:</span>{phone}</h1>
            <h1><span className='font-bold'>Email:</span>{email}</h1>
            <h1><span className='font-bold'>Address : </span>{location}</h1>
            <span onClick={() => addid(id)}>
            <button className='bg-purple-800 text-white w-full rounded-lg border-blue-200 p-3'>Apply Now</button>
            </span>
        </div>
    );
};

export default Second;