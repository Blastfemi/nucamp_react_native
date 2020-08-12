// Week 2: Exercise 6 - Redux Adding Favorites - Import All ActionTypes
import * as ActionTypes from  './ActionTypes'

// Week 2: Exercise 6 - Redux Adding Favorites - Set up reducer function as an exported constant
export const favorites = (state = [], action ) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      if (state.includes(action.payload)) {
        return state;
      }
      return state.concat(action.payload);

    default:
      return state;
  }
};