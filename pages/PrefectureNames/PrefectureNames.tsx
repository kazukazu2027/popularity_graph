import React from 'react';
import axios from 'axios';
import styles from './PrefectureNames.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularityDataAction, getPrefNameAction } from 'redux/Action/Action';
import { RootState } from 'redux/Store/configureStore';
import usePrefectureNames from 'function/usePrefectureNames';

const PrefectureNames = () => {
  const dispatch = useDispatch();
  const { data, error } = usePrefectureNames();
  if (error) {
    alert('データの取得に失敗しました');
  }

  if (data) {
    dispatch(getPrefNameAction(data.result));
  }

  const popularityData = useSelector((state: RootState) => state.data.popularityData);
  const prefectureNames = useSelector((state: RootState) => state.data.prefName);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
      },
      params: {
        prefCode: String(event.target.value),
        cityCode: '-',
      },
    };

    if (popularityData.some((data) => data.code === event.target.value)) {
      const newPopularityData = popularityData.filter((data) => data.code !== event.target.value);
      dispatch(getPopularityDataAction(newPopularityData));
    } else {
      axios
        .get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear', key)
        .then((response: any) => {
          const data = response.data.result.data[0].data.map((data) => {
            return data.value;
          });
          const name = prefectureNames.filter(
            (prefectureName) => prefectureName.prefCode === Number(event.target.value),
          )[0].prefName;
          const newPopularityData = [
            ...popularityData,
            { name: name, data: data, code: event.target.value },
          ];
          dispatch(getPopularityDataAction(newPopularityData));
        })
        .catch((error) => {
          console.log(error);
          alert('データの取得に失敗しました');
        });
    }
  };

  return (
    <div>
      <h2 className={styles.text}>都道府県</h2>
      <div className={styles.prefectureNamesContainer}>
        {prefectureNames.map((prefectureName) => {
          return (
            <div key={prefectureName.prefCode} className={styles.prefectureNameContainer}>
              <input
                type="checkbox"
                id={prefectureName.prefName}
                value={prefectureName.prefCode}
                onChange={handleCheck}
                className={styles.checkbox}
              />
              <label htmlFor={prefectureName.prefName} className={styles.label}>
                <span>{prefectureName.prefName}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrefectureNames;
