import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'
  //Login User with email and password
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    navigate (from,{replace: true});
  }

  //submit form
  const handleLoginFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 border-0 shadow">
            <Form onSubmit={handleLoginFrom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
              </Form.Group>
              
              <p className='mb-0 mt-1'>New Form Onion Site? <Link to='/signup' className='register'>Registation</Link></p>
              <p className='mb-3 mt-1'>Unknown Your Password? <Link to='/signup' className='register'>Forget Password</Link></p>
              <p className='text-danger mt-2 mb-2'>{error}</p>
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