import catFacts from "../data";

import { FETCH_FACT, ADD_FAVORITE } from "../actions/index";

const initialState = {
  catFacts: catFacts,
  fact: {
    text: "",
    isFavorite: false,
    id: 0
  },
  favorites: []
};

export const catReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case FETCH_FACT:
      return {
        ...state,
        fact: catFacts[Math.floor(Math.random() * catFacts.length + 1)]
      };
    case ADD_FAVORITE:
      return {
        ...state,
        fact: {
          ...state.fact,
          isFavorite: !state.isFavorite
        },
        favorites: [...state.favorites, catFacts[action.payload - 1]]
      };
    default:
      return state;
  }
};
