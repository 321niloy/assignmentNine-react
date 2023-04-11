import React from 'react';
import Main from './Main/Main';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Main></Main>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Header;