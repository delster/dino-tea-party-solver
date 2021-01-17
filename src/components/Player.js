import React, { useEffect, useState } from "react";
import DINOS from "./Dinos";
import TRAITS from "./Traits";
import { TraitButton } from "./TraitButton";

const Player = ({ name, deletePlayer }) => {
  const [traitStates, setTraitStates] = useState({});

  const updateTrait = (traitKV) =>
    setTraitStates((traitStates) => ({ ...traitStates, ...traitKV }));

  const clearTraits = () => {
    const emptyTraits = {};
    Object.keys(TRAITS).map((t) => {
      emptyTraits[TRAITS[t]] = "";
    });
    setTraitStates(emptyTraits);
  };

  const getYesTraits = () =>
    Object.keys(traitStates).filter((ts) => traitStates[ts] === "yes");
  const getNoTraits = () =>
    Object.keys(traitStates).filter((ts) => traitStates[ts] === "no");

  const checkDino = (traits) => {
    // Dino lacks a "yes" trait. || Dino contains "no" traits.
    if (
      getYesTraits().some((trait) => !traits.includes(trait)) ||
      getNoTraits().some((trait) => traits.includes(trait))
    )
      return false;

    return true;
  };

  useEffect(() => {
    clearTraits();
  }, []);

  return (
    <section>
      <h2>{name}</h2>
      <div>
        <button onClick={clearTraits}>Clear</button>
        <button onClick={deletePlayer}>Delete</button>
      </div>
      <div>
        {Object.keys(traitStates).map((trait, idx) => (
          <TraitButton key={trait} trait={trait} traitId={idx+1} onChange={updateTrait} />
        ))}
      </div>
      <p>Has: {getYesTraits().join(", ")}</p>
      <p>Doesn't Have: {getNoTraits().join(", ")}</p>
      <h3>Possible Dinos:</h3>
      {DINOS.filter((d) => checkDino(d.traits)).map((dino) => (
        <p key={dino.name}>
          <strong>{dino.name}</strong> <br />
          {dino.traits.join(', ')}
        </p>
      ))}
    </section>
  );
};

export default Player;
