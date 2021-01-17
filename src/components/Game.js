import React, { useState } from "react";
import tw from "twin.macro";
import Player from "./Player";

const Game = () => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    setPlayers((players) => [...players, newPlayerName]);
    setNewPlayerName("");
  };

  const removePlayer = (idx) =>
    setPlayers((players) => players.filter((p) => players.indexOf(p) !== idx));

  return (
    <div>
      <NewPlayerForm id="new-player">
        <NewPlayerInput
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <AddPlayerButton onClick={addPlayer}>Add Player</AddPlayerButton>
      </NewPlayerForm>
      <section>
        {players.map((p, idx) => (
          <Player key={p} name={p} deletePlayer={() => removePlayer(idx)} />
        ))}
      </section>
    </div>
  );
};

const NewPlayerForm = tw.div``
const NewPlayerInput = tw.input`
  p-2
  text-xs
  font-semibold tracking-widest
  border border-gray-700
  rounded`;
const AddPlayerButton = tw.button`
  px-6 py-2
  text-white text-xs
  font-semibold tracking-widest
  bg-blue-400
  rounded-sm`;

export default Game;
