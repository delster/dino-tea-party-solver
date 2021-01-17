import React, { useState } from "react";
import Icon from "./Icon";

const STATES = {
  YES: "yes",
  NO: "no",
  CLEAR: "",
};

const TraitButton = ({ trait, traitId, onChange }) => {
  const [traitState, setTraitState] = useState(STATES.CLEAR);

  const toggleState = () => {
    const newState =
      traitState === STATES.YES
        ? STATES.NO
        : traitState === STATES.NO
        ? STATES.CLEAR
        : traitState === STATES.CLEAR
        ? STATES.YES
        : null;
    updateTrait(newState);
  };

  const updateTrait = (state) => {
    const traitStateKV = { [`${trait}`]: state };
    setTraitState(state);
    onChange(traitStateKV);
  };

  return <Icon traitId={traitId} state={traitState} onClick={toggleState} />;
};

export { STATES, TraitButton };
