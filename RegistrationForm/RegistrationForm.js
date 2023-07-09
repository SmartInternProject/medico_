import React, { useState } from 'react';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGooglePlus,
} from "react-icons/ti";
import styles from './RegistrationForm.module.css';
import { Button } from '../components/componentsindex';
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
const RegistrationForm = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  

  const [formData, setFormData] = useState({
    ssn: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    weight: '',
    height: '',
    bloodGroup: '',
    phoneNo: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    relationshipStatus: '',
  });

  const [account, setAccount] = useState({
    userName: '',
    password: '',
    patient: formData
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({
    userName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Perform login functionality or API call here
    console.log(loginForm);
    axios.get("http://localhost:8080/api/patientAccount",loginForm)
    .then((response)=>{console.log(response.data);localStorage.setItem("id",response.data)})
    .catch((error)=>{console.error(error)})


    // Reset the login form after submission
    setLoginForm({
      userName: '',
      password: ''
    });

    // You can add the necessary logic for login functionality here
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Perform form submission or API call here
    console.log(formData);

    axios.post("http://localhost:8080/api/patientAccount", account)
      .then((response) => {
        console.log(response);
        setRegistered(true);
        setShowLogin(true);
      })
      .catch((error) => console.error(error));
    // Reset the form after submission
    setFormData({
      ssn: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      weight: '',
      height: '',
      bloodGroup: '',
      phoneNo: '',
      email: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      relationshipStatus: '',
    });
    // Close the form after submission
    setFormOpen(false);
  };

  const handleOpenForm = () => {
    setFormOpen(true);
    setShowLogin(true);
  };

  const handleCloseForm = () => {
    setShowLogin(false);
    setFormOpen(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    //setFormOpen(false);
    setShowLogin(false);
  };


  return (
    <div>
      {!isFormOpen ? (
        <Button btnName="Login" handleClick={handleOpenForm} />
        //<button onClick={handleOpenForm}>Register</button>
      ) : (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={handleCloseForm}>
              <AiOutlineClose />
            </button>
            <div className={styles.container}>
              {
                !showLogin ? (
                  <div>
                    <h1 className={styles.registrationFormTitle}>Registration</h1>
                    <form onSubmit={handleSubmit} className={styles.registerForm}>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="userName">UserName:</label>
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          value={account.userName}
                          onChange={handleAccountChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="password">Password:</label>
                        <div className={styles.passwordField}>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={account.password}
                            onChange={handleAccountChange}
                            required
                          />
                          <span className={styles.showPasswordIcon} onClick={handleTogglePassword}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                          </span>
                        </div>
                      </div>

                      <div className={styles.registerFormDiv}>
                        <label htmlFor="ssn">SSN:</label>
                        <input
                          type="text"
                          id="ssn"
                          name="ssn"
                          value={formData.ssn}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="dateOfBirth">Date of Birth:</label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="gender">Gender:</label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="weight">Weight:</label>
                        <input
                          type="number"
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="height">Height:</label>
                        <input
                          type="number"
                          id="height"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="bloodGroup">Blood Group:</label>
                        <input
                          type="text"
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="phoneNo">Phone Number:</label>
                        <input
                          type="tel"
                          id="phoneNo"
                          name="phoneNo"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="address">Address:</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="city">City:</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="state">State:</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="postalCode">Postal Code:</label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="country">Country:</label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.registerFormDiv}>
                        <label htmlFor="relationshipStatus">Relationship Status:</label>
                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Relationship Status</option>
                          <option value="Male">Single</option>
                          <option value="Female">Married</option>
                        </select>
                      </div>
                      <div className={styles.buttons}>
                        <button type="submit">Register</button>

                      </div>
                    </form>
                  </div>
                ) : (

                  <div>
                    <h1 className={styles.loginFormTitle}>Login</h1>
                    <form onSubmit={handleLoginFormSubmit}>
                      <div className={styles.loginFormField}>
                        <label htmlFor="loginUsername">Username:</label>
                        <input
                          type="text"
                          id="loginUsername"
                          name="loginUsername"
                          value={loginForm.username}
                          onChange={handleLoginFormChange}
                          required
                        />
                      </div>
                      <br></br>
                      <div className={styles.loginFormField}>
                        <label htmlFor="loginPassword">Password:</label>
                        <div className={styles.passwordField}>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="loginPassword"
                            name="loginPassword"
                            value={loginForm.password}
                            onChange={handleLoginFormChange}
                            required
                          />
                          <span className={styles.showPasswordIcon} onClick={handleTogglePassword}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                          </span>
                        </div>
                      </div>
                      <div className={styles.buttons}>
                        <button type="submit">Login</button>
                        <br></br>
                        <div className={styles.centerHorizantal}>
                          <span className={styles.centerHorizantal}>
                            or login Using
                          </span>
                          <br></br>
                          <div className={styles.footer_social}>
                            <a href="#">
                              <TiSocialFacebook />
                            </a>
                            <a href="#">
                              <TiSocialTwitter />
                            </a>
                            <a href="#">
                              <TiSocialGooglePlus />
                            </a>
                          </div>
                        </div>
                        <span className={styles.centerHorizantal}>Don't have an account? <a onClick={handleRegister} className={styles.registerButton}>Register</a></span>
                      </div>
                    </form>
                  </div>


                )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
