import React from "react";
import "./Register.scss";
import StyledButton from "../../components/StyledButton";
import StyledTextField from "../../components/StyledTextField/StyledTextField";

function Register() {
  return (
    <div className='container'>
      <div className='text_container'>
        <div className='sub_heading'>Create account</div>
        <div className='heading'>Let's get to know you better!</div>
      </div>
      <div className='form_container'>
        <StyledTextField
          inputTitle='Your name'
          type='text'
          placeholder='Type your name here'
        />
        <StyledTextField
          inputTitle='Username'
          type='text'
          placeholder='Type your username here'
        />
        <StyledTextField
          inputTitle='Email'
          type='email'
          placeholder='Type your email here'
        />
        <StyledTextField
          inputTitle='Password'
          type='password'
          placeholder='Type your password here'
        />
      </div>
      <div className='action_container'>
        <StyledButton title='Register' />
      </div>
    </div>
  );
}

export default Register;

// added text field for name input in register page layout
