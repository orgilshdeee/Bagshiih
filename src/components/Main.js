import "../App.css";
import Player from "./Player";
import Header from "./Header";
import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";

export default function Main() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.players);
        setPlayers(res.players);
      });
  }, []);

  return (
    <>
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={players.length} />
        {players.map((player) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id.toString()}
          />
        ))}
      </div>
    </>
  );
}
