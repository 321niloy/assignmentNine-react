

import Banner from './banner/Banner';
import Job from './job/Job';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const All = useLoaderData();
    return (
        <div>
          
                
                <Banner></Banner>
                 <Job All={All} id={All.id} ></Job>
                
            
        </div>
    );
};

export default Home;