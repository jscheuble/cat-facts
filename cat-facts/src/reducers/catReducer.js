import catFacts from "../data";

import { FETCH_FACT } from "../actions/index";

const initialState = {
  catFacts: catFacts,
  fact: [],
  favorites: []
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FACT:
      return {
        ...state,
        fact: catFacts[Math.floor(Math.random() * 32 + 1)]
      };
    default:
      return state;
  }
};
