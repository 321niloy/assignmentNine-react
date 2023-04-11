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
            <div className='shadow-md mt-10'><h1 className='font-extrabold'>What is custom hook in react?????</h1>
                 <p><span className='font-bold'>Ans:</span>A custom hook in React is a function that uses built-in hooks to encapsulate and reuse <br />
                                                           stateful logic across multiple components. It allows you to abstract complex logic into <br />
                                                            reusable functions that can be shared throughout your application.</p>
            </div>

            <div className='shadow-md mt-10'><h1 className='font-extrabold'>what is UseReference in react???????</h1>
                 <p><span className='font-bold'>Ans:</span>useRef is a built-in hook in React that returns a mutable ref object. Its primary use case is <br /> 
                                                           to access DOM nodes or other mutable values that are managed outside the component's state. <br />
                                                           The .current property of the ref object can hold a value across renders and can be used to access <br />
                                                            or modify the referenced value.</p>
            </div>

            <div className='shadow-md mt-10'><h1 className='font-extrabold'>what is UseMemo in react???????</h1>
                 <p><span className='font-bold'>Ans:</span>useMemo is a built-in hook in React that allows you to memoize expensive computations <br />
                                                           so that they are only recomputed when their dependencies change. It helps improve performance <br />
                                                            by reducing unnecessary re-renders.</p>
            </div>
        </div>
    );
};

export default Blog;
