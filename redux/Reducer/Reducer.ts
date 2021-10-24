import { PopularityData } from '../Action/Action';
import * as Actions from '../Action/Action';

export const initialState = {
  popularityData: [] as PopularityData[],
};

export const data = (state = initialState, action: Actions.ActionType): typeof initialState => {
  switch (action.type) {
    case Actions.GET_POPULARITY_DATA_ACTION: {
      const { popularityData } = action;
      return { ...state, popularityData };
    }
    default:
      return state;
  }
};
