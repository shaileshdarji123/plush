import React from 'react';
import './SignUp.scss';
import { Typography } from '@mui/material';
import { validateEmail, validatePassword } from '../../utils/helper';
import { GoogleLogin } from '@react-oauth/google';

function SignUp({
  formData,
  setFormData,
  handleSubmit,
  loading,
  handleGoogleLoginSuccess,
}) {
  return (
    <div className="layout">
      <div className="leftSideBar">
        <div className="leftSideContainer">
          <div className="header">
            <span>Support Creators, Own Unique Plush Collectibles</span>
          </div>
          <div className="description">
            Crowdfund time-limited and exclusive plush toys from your favorite creators. You will not be charged if the project doesn't reach its goal.
          </div>
          <div className="relationManagementIllustrationWrapper">
            <img
              src="./img/Basket1.png"
              className="relationManagementIllustration"
              alt="Illustration"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="authParent">
          <div className="d-flex justify-content-center h-100 w-100">
            <div className="innerView">
              <svg
                fill="none"
                height="70"
                width="154"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Content */}
              </svg>
              <h3 className="authHeader">Sign Up in 30 seconds</h3>
              <div className="other">
                Already have an account?{' '}
                <a href="/loginpage" className="textButton">
                  Log in now
                </a>
              </div>
              <div className="root">
                    <div id="googleSignupButton">
                     <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </div>
                  </div>
              <div className="d-flex flex-column align-items-center justify-content-center w-100 formMargins">
                
                <div className="w-100 breaker">
                  <div className="line"></div>
                  <div className="text">or</div>
                  <div className="line"></div>
                </div>
                <form
                  className="w-100"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                >
                  <div className="formField marginBottom">
                    <Typography variant="subtitle1" color={'red'}>
                      {formData.err}{' '}
                    </Typography>
                    <div className="root">
                      <label htmlFor="full-name" className="label">
                        <span>Full name (will be used for the shipment)</span>
                      </label>
                      <div className="inputWrap">
                        <input
                          type="text"
                          name="username"
                          autoComplete="name"
                          id="full-name"
                          disabled={loading}
                          value={formData.username}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              err: '',
                              username: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="formField marginBottom">
                    <div className="root">
                      <label htmlFor="email-address" className="label">
                        <span>Email address</span>
                      </label>
                      <div className="inputWrap">
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          id="email-address"
                          disabled={loading}
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              err: '',
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="formField marginBottom">
                    <div className="position">
                      <div className="root">
                        <label htmlFor="form-input-2" className="label">
                          <span>Password</span>
                        </label>
                        <div className="inputWrap">
                          <input
                            type="password"
                            name="password"
                            placeholder='Password must contain lowercase, uppercase, digit and a special character'
                            autoComplete="new-password"
                            id="form-input-2"
                            disabled={loading}
                            value={formData.password}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                err: '',
                                password: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button main">
                    <button type="submit" className="w-100 btn_auth">
                      Sign me up
                    </button>
                  </div>
                  <div className="tos">
                    By signing up, I agree to the{' '}
                    <a
                      href="https://www.plush.fun/legal/privacy-policy"
                      target="_blank"
                      className="textButton secondary"
                    >
                      Privacy Policy
                    </a>{' '}
                    &nbsp;and&nbsp;{' '}
                    <a
                      href="https://www.plush.fun/legal/terms-of-service"
                      target="_blank"
                      className="textButton secondary"
                    >
                      Terms of Service
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
