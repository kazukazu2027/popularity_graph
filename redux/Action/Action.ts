export type PopularityData = {
  name: string;
  data: number[];
};

export const GET_POPULARITY_DATA_ACTION = 'get popularity data action';
export const getPopularityDataAction = (popularityData: PopularityData[]) => {
  return {
    type: GET_POPULARITY_DATA_ACTION as typeof GET_POPULARITY_DATA_ACTION,
    popularityData,
  };
};

export type ActionType = ReturnType<typeof getPopularityDataAction>;
