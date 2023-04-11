import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='shadow-md'><h1 className='font-extrabold'>When should use Contex Api???</h1>
                 <p><span className='font-bold'>Ans:</span>You should use the React Context API when you have data
                                     that needs to be accessed by multiple components at different
                                      levels of the component tree, such as themes, authentication
                                       status, localization, or as a replacement for Redux in small apps.
                                        It helps avoid "prop drilling," but should be used judiciously to 
                                        avoid making code harder to understand and maintain.</p>
            </div>
        </div>
    );
};

export default Blog;