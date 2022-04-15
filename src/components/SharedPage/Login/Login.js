import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  let errorElement;
  //Login User with email and password
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  //Reset Password
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );

  if(user){
    navigate (from,{replace: true});
  }

  if(error){
    errorElement = <p className='text-danger mt-2 mb-2'>{error?.message}</p>  
  }

  //submit form
  const handleLoginFrom = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  //Forgat your password
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }else{
      toast('please enter your email');
    }
  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 border-0 shadow">
          <ToastContainer />
            <Form onSubmit={handleLoginFrom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
              </Form.Group>
              
              <p className='mb-0 mt-1'>New Form Onion Site? <Link to='/signup' className='register'>Registation</Link></p>
              <p className='mb-3 mt-1'>Unknown Your Password? <Link onClick={resetPassword} to='' className='register'>Forget Password</Link></p>
              {errorElement}
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;