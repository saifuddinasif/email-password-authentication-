import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>


<nav>
           <Link className='text-danger m-4 text-bg-light text-decoration-none   fs-1 ' to='/login'>login</Link>
            <Link  className='text-danger m-4 text-bg-light text-decoration-none   fs-1 ' to='/register'>Register</Link>
</nav>
<Outlet></Outlet>
        </div>
    );
};

export default Main;