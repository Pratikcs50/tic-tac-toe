import React from 'react'
import './NewGame.scss'
import ActionBar from '../../components/ActionBar/ActionBar';
import StyledTextField from '../../components/StyledTextField/StyledTextField';
import StyledButton from '../../components/StyledButton';

function NewGame() {
  return (
    <div className='newgame_container'>
      <ActionBar to='' />
      <div className='text_container'>
        <div className='sub_heading'>Start a new game</div>
        <div className='heading'>Whom do you want to play with?</div>
      </div>
      <div className='form_container'>
        <StyledTextField
          inputTitle='Email'
          type='email'
          placeholder='Type your email here'
        />
      </div>
      <div className='action_container'>
        <StyledButton title='Start game' />
      </div>
    </div>
  );
}

export default NewGame
