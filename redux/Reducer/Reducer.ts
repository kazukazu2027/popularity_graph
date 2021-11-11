import { PopularityData } from '../Action/Action';
import * as Actions from '../Action/Action';

export const initialState = {
  popularityData: [] as PopularityData[],
  prefName: [] as Actions.PrefectureNameArrayType[],
  prefCode: '' as string,
};

export const data = (state = initialState, action: Actions.ActionType): typeof initialState => {
  switch (action.type) {
    case Actions.GET_POPULARITY_DATA_ACTION: {
      const { popularityData } = action;
      return { ...state, popularityData };
    }
    case Actions.GET_PREF_NAME_ACTION: {
      const { prefName } = action;
      return { ...state, prefName };
    }
    case Actions.GET_PREF_CODE_ACTION: {
      const { prefCode } = action;
      return { ...state, prefCode };
    }
    default:
      return state;
  }
};
