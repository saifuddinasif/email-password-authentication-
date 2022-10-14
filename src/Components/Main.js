import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>


<nav>
    <Link to='/login'></Link>
    <Link to='/register'></Link>
</nav>
<Outlet></Outlet>
        </div>
    );
};

export default Main;