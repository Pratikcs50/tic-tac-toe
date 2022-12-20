import React from 'react'
import './Entry.scss'
import StyledButton from '../../components/StyledButton'

function Entry() {
  return (
    <div className='container'>
      <div className="text_container">
        <div className="sub_heading">asyn</div>
        <div className="heading">tic tac toe</div>
      </div>
      <div className="action_container">
      <StyledButton title="Login" />
      <StyledButton title="Register" color="secondary"/>
      </div>
    </div>
  )
}

export default Entry
