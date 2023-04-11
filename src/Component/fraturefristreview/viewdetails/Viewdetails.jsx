import React, { useContext, useEffect, useState } from 'react';
import './viewde.css'
import { useLoaderData, useParams } from 'react-router-dom';
import FRist from '../../sideViewdetails/FRist';
import Second from '../../sideViewdetails/Second';


const Viewdetails = () => {
    const {id} = useParams();
    

    const [feature,setfeature] = useState([])
    const [viewdetails,setviewdetails]=useState({})
   

        useEffect(()=>{
        fetch('/public/featured.json')
        .then(res => res.json())
        .then(data => {
          setfeature(data);
           
        const remain = data.find(p => p.id === id);
        setviewdetails(remain)     
        });
    }
        ,[id])
    return (
       
        <div className=' lg:grid lg:grid-cols-2'>
          <div className='lg:col-start-1 lg:col-span-4 '>
           <FRist></FRist>
          </div>
          <div className='bg-teal-200 p-5 lg:w-60 lg:col-start-5 lg:col-span-7 '>
            <Second viewdetails={viewdetails} key={viewdetails.id}></Second>
          </div>
            
        </div>
    );
};

export default Viewdetails;