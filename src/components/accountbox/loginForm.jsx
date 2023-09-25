import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../imgs/logo3.png';

function LoginForm() {
  const [UserEmail, setEmail] = useState('');
  const [UserPassword, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        UserEmail,
        UserPassword,
      });

      console.log(response.data);

      // Replace '/seeAppointment' with the actual route you want to navigate to upon successful sign-in
      navigate('/seeAppointment');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page when the button is clicked
    navigate('/signup');
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src={logo}
                        style={{ width: '185px', marginTop: '0' }}
                        alt="logo"
                        className="mb-0"
                      />
                      <h4 className="mt-1 mb-4 pb-1 fw-bold text-black">We are The Tooth Specialists</h4>
                    </div>

                    <form onSubmit={handleSignIn}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="Email"
                          name="Email"
                          value={UserEmail}
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="Email">
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="Password"
                          name="Password"
                          value={UserPassword}
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="Password">
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                          onClick={handleSignIn}
                          style={{ marginRight: '10px' }}
                        >
                          Log in
                        </button>
                      </div>
                    </form>

                    <div className="text-center">
                      <button
                        className="btn btn-link text-muted"
                        onClick={handleSignUp}
                      >
                        Do you have an account? Sign up here.
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{ backgroundColor: '#4cacb4' }}>
  <div className="text-black px-3 py-4 p-md-5 mx-md-4">
    <h4 className="mb-4">We are more than just a company</h4>
    <p className="small mb-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
