import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  let errorElement;
  //Create a new user firebaseHooks
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  //update your name
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //Update User Profile

  // error handle
  if(error || updateError){
    errorElement = <p className='text-danger'>{error?.message}</p>
  }

  if(user){
    console.log(user);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(password.length < 6){
      alert('please at list 6 character password');
    }else{
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName});
      alert('Updated profile');
      navigate('/home');
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
                <Form.Control ref={nameRef} name='name' type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={() => setAgree(!agree)} name='terms' id='terms' type="checkbox" label="Accept Terms and Condition" />
              </Form.Group>

              <p>Already have an account? <Link to='/login' className='login'>Login</Link></p>
              {errorElement}
              {
                loading && <p>Loading.....{loading}</p> 
              }
              <button disabled={!agree} className='btn btn-primary'>Registation</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;