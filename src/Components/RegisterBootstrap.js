import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './../Firebase/Firebase.init';
import { useState } from 'react';


const auth =getAuth(app);

function BasicExample() {

  const [passwordError ,setPasswordError] =useState('');


    const handleRegister = (e) => {
 e.preventDefault()
    const email =e.target.email.value;
    const password =e.target.password.value;
    console.log(email, password);
    if(password.length < 6){

      setPasswordError('password should be atleast six character ')
      return;

    }
        if(!/("^(?=.*[A-Z]).{1,}$")/.test(password)){

          setPasswordError('please pr0vide upper case ')
          return;

        }
    
        setPasswordError('')

  createUserWithEmailAndPassword(auth,email,password)
     

  .then(result => {

  const user =result.user;

  console.log(user);

  })
  .catch(error => {
    console.log("first", error);

  })

    }

  return (
    <Form  onSubmit={handleRegister} className='w-50 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email"  required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
         <p className='text-danger'> {passwordError}</p>
      <Button variant="primary" type="submit">
            Register
      </Button>
    </Form>
  );
}

export default BasicExample;