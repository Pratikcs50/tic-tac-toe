import React from 'react'
import './Register.scss'
import StyledButton from '../../components/StyledButton';

function Register() {
  return (
    <div className='container'>
      <div className='text_container'>
        <div className='sub_heading'>Create account</div>
        <div className='heading'>Let's get to know you better!</div>
      </div>
      <div className='form_container'>
        
      </div>
      <div className='action_container'>
        <StyledButton title='Register' />
      </div>
    </div>
  );
}

export default Register
