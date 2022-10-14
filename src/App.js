
import React  from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';

import BasicExample from './Components/RegisterBootstrap';


const router =createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<BasicExample></BasicExample>,
      },
      {
        path:'/register',
        element:<BasicExample></BasicExample>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      }
    ]
  }
])


function App() {
  return (
    <div className="App">


<RouterProvider router={router}></RouterProvider>
   


          
    </div>
  );
}

export default App;
