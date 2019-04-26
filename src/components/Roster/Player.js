import React from "react";
import PlayerAPI from "../../api";
import { Link } from "react-router-dom";

const backBtnStyle = {
  padding: ".5em",
  color: "#333",
  textDecoration: "none",
  border: "solid 1px #333"
};

const Player = props => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div>Player was not found</div>;
  }
  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>Position: {player.position}</h2>
      <Link to="/roster" style={backBtnStyle}>
        Back
      </Link>
    </div>
  );
};

export default Player;
