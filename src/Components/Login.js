import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import app from './../Firebase/Firebase.init';
import { useState } from 'react';


const auth =getAuth(app)






const Login = () => {


    const [success,setSuccess] = useState(false)
    const  handleSubmit = (e) => {
                e.preventDefault();

                  setSuccess(false)


        const form = e.target;
        const email = form.email.value;
        const password =form.password.value;

signInWithEmailAndPassword(auth,email,password)

.then(result =>  {


    const user = result.user;

    setSuccess(true)
     console.log(user)

})

.catch(error => {
    console.log("error", error);
})


    }


const  verifyEmail = () =>{

    sendEmailVerification(auth.currentUser)
    .then(() => {
        alert('plz verify email')
    })
}

    return (
        <div className='w-50 mx-auto'>
            <h1 className='fs-1'>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                <input type="email" className="form-control" id="formGroupExampleInput" placeholder="your email" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="your password"  required/>
                </div>

                <button className='btn btn-primary' type='submit'> Button</button>
                </form>

                {
                    success && <p>login successfull</p>
                }
              <p>new herer click <Link to='/register'>register</Link></p>
        </div>
    );
};

export default Login;