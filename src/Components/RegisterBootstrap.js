import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from './../Firebase/Firebase.init';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const auth =getAuth(app);

function BasicExample() {

  const [passwordError ,setPasswordError] =useState('');

  const [success, setSuccess] = useState(false)

    const handleRegister = (e) => {

      const form =e.target;
  setSuccess(false)
 e.preventDefault()
    const email =form.email.value;
    const password =form.password.value;
    console.log(email, password);
    if(password.length < 6){

      setPasswordError('password should be atleast six character ')
      return;

    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError('Please provide at least two uppercase');
      return;
  }
    
        setPasswordError('')

  createUserWithEmailAndPassword(auth,email,password)
     

  .then(result => {

  const user =result.user;
  setSuccess(true)
  verifyEmail()
  form.reset()
  console.log(user);

  })
  .catch(error => {
    console.log("first", error);
    setPasswordError(error.message)

  })

    }

    const  verifyEmail = () =>{

      sendEmailVerification(auth.currentUser)
      .then(() => {
          alert('plz verify email')
      })
  }

  return (
    <>
    <Form  onSubmit={handleRegister} className='w-50 mx-auto'>
      <p className='text-primary fs-3' > PLEASE REGISTER HERE </p>
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
         <p className='text-danger'> {passwordError} </p>
         {success && <p className='text-success fs-3'> User Created Successfully </p>}
      <Button variant="primary" type="submit">
            Register
      </Button>
    </Form>

 
        <p>Already a member: Click <Link to='/login'>Login</Link></p>
        </>
  );
}

export default BasicExample;