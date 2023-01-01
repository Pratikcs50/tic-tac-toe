import React from "react";
import "./Login.scss";
import StyledTextField from "../../components/StyledTextField/StyledTextField";
import StyledButton from "../../components/StyledButton/StyledButton";
import ActionBar from "../../components/ActionBar/ActionBar";

function Login() {
  return (
    <div className='login_container'>
      <ActionBar to='/' />
      <div className='text_container'>
        <div className='sub_heading'>Login</div>
        <div className='heading'>Please enter your details</div>
      </div>
      <div className='form_container'>
        <StyledTextField
          inputTitle='Username'
          type='text'
          placeholder='Type your username here'
        />
        <StyledTextField
          inputTitle='Password'
          type='password'
          placeholder='Type your password here'
        />
      </div>
      <div className='action_container'>
        <StyledButton title='Login' />
      </div>
    </div>
  );
}

export default Login;
