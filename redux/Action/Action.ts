export type PopularityData = {
  name: string;
  data: number[];
  code: string;
};

export type PrefectureNameArrayType = {
  prefCode: number;
  prefName: string;
};

export const GET_POPULARITY_DATA_ACTION = 'get popularity data action';
export const getPopularityDataAction = (popularityData: PopularityData[]) => {
  return {
    type: GET_POPULARITY_DATA_ACTION as typeof GET_POPULARITY_DATA_ACTION,
    popularityData,
  };
};

export const GET_PREF_NAME_ACTION = 'get pref name action';
export const getPrefNameAction = (prefName: PrefectureNameArrayType[]) => {
  return {
    type: GET_PREF_NAME_ACTION as typeof GET_PREF_NAME_ACTION,
    prefName,
  };
};

export const GET_PREF_CODE_ACTION = 'get pref code action';
export const getPrefCodeAction = (prefCode: string) => {
  return {
    type: GET_PREF_CODE_ACTION as typeof GET_PREF_CODE_ACTION,
    prefCode,
  };
};

export type ActionType =
  | ReturnType<typeof getPopularityDataAction>
  | ReturnType<typeof getPrefNameAction>
  | ReturnType<typeof getPrefCodeAction>;
