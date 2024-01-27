import React, { useState, useEffect } from "react";
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  const initialValues = { Name: "", Email: "", Password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);

   
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.Name) {
      errors.Name = "Username is required";
    }
    if (!values.Email) {
      errors.Email = "Email is required";
    } else if (!regex.test(values.Email)) {
      errors.Email = "Invalid email format";
    }
    if (!values.Password) {
      errors.Password = "Password is required";
    } else if (values.Password.length < 6) {
      errors.Password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  return (
  
  
    <div className="container">
      <div className="header">
       
        <div className="text">Login Page</div>
        <div className="underline"> </div>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={formValues.Name}
                onChange={handleChange}
                required
              />
              <p>{formErrors.Name}</p>
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={formValues.Email}
                onChange={handleChange}
                required
              />
              <p>{formErrors.Email}</p>
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                name="Password"
                placeholder="Password"
                value={formValues.Password}
                onChange={handleChange}
                required
              />
              <p>{formErrors.Password}</p>
            </div>
          </div>

          <div className="forgot-password">
            Lost Password? <span>Click Here</span>
          </div>

          <div className="submit-container">
          {/*  <button type="submit" className="submit">
              Sign Up
  </button> */}
            <button type="submit" className="submit">
              Log in
            </button>
          </div>
        </form>

       
      </div>
    </div>
    
  );
};

export default LoginSignup;
