import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplideView from '../ApplidView/ApplideView';

const Applied = () => {
    const Everything = useLoaderData()
    
    return (
        <>
         {
            Everything.map(Everything=> <ApplideView key={Everything.id} Everything={Everything}></ApplideView>)
         }
        </>
    );
};

export default Applied;