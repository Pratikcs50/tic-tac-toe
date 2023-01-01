import React from "react";
import "./Register.scss";
import StyledButton from "../../components/StyledButton/StyledButton";
import StyledTextField from "../../components/StyledTextField/StyledTextField";
import ActionBar from "../../components/ActionBar/ActionBar";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className='register_container'>
      <ActionBar to='/' />
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
        <StyledButton title='Register' onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}

export default Register;
