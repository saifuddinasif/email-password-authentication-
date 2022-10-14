import {getAuth} from 'firebase/auth';

import React  from 'react';
import './App.css';
import app from './Firebase/Firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Components/RegisterBootstrap';


const auth = getAuth(app)

const handleRegister = (e) =>  {

  e.preventDefault();

const email = e.target.email.value;

const password = e.target.password.value;

console.log(email, password)


}

const email = (e) => {

console.log(e.target.value);
}

const pass = (e) => {
  console.log(e.target.value);

}


function App() {
  return (
    <div className="App">
   
   <BasicExample></BasicExample>
  


          
    </div>
  );
}

export default App;
