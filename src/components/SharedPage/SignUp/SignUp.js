import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
  const navigate = useNavigate();
  //Create a new user firebaseHooks
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  //Update User Profile

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(password.length < 6){
      alert('please at list 6 character password');
    }else{
      createUserWithEmailAndPassword(email, password);
      alert('User Added Successful!');
      navigate('/login');
    }
  } 
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow border-0 p-4">
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <p>Already have an account? <Link to='/login' className='login'>Login</Link></p>
              <p className='text-danger'>{error?.message}</p>
              {
                loading && <p>Loading.....{loading}</p> 
              }
              <Button variant="primary" type="submit">
                Registation
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;