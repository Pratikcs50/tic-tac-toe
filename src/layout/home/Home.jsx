import React from "react";
import "./Home.scss";
import StyledButton from "../../components/StyledButton/StyledButton";
import { useNavigate } from "react-router-dom";
// import GameInfoCard from "../../components/GameInfoCard/GameInfoCard";

function Home() {
  const navigate = useNavigate();

  return (
    <div className='home_container'>
      <div className='text_container'>
        <div className='sub_heading'>Your Games</div>
        <div className='heading'>No Games Found</div>
      </div>
      {/* <div className='cards_container'>
        <GameInfoCard />
      </div> */}
      <div className='action_container'>
        <StyledButton
          title='Start a new game'
          onClick={() => navigate("/new_game")}
        />
      </div>
    </div>
  );
}

export default Home;
