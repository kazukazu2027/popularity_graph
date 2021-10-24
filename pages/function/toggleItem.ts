import { PopularityData } from 'redux/Action/Action';

export const toggleItem = (popularityDatas: PopularityData[], popularityData: PopularityData) => {
  return popularityDatas.some((data) => data.name === popularityData.name)
    ? popularityDatas.filter((data) => data.name !== popularityData.name)
    : [...popularityDatas, popularityData];
};
