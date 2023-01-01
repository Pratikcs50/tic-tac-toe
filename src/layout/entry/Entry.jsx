import React from "react";
import "./Entry.scss";
import StyledButton from "../../components/StyledButton/StyledButton";
import { useNavigate } from "react-router-dom";

function Entry() {
  const navigate = useNavigate();

  return (
    <div className='entry_container'>
      <div className='text_container'>
        <div className='sub_heading'>asyn</div>
        <div className='heading'>tic tac toe</div>
      </div>
      <div className='action_container'>
        <StyledButton title='Login' onClick={() => navigate("/login")} />
        <StyledButton
          title='Register'
          color='secondary'
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
}

export default Entry;
