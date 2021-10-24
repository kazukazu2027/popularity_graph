import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PrefectureNames.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularityDataAction } from 'redux/Action/Action';
import { toggleItem } from 'pages/function/toggleItem';
import { RootState } from 'redux/Store/Store';

type PrefectureNameArray = {
  prefCode: number;
  prefName: string;
};

const PrefectureNames = () => {
  const [prefectureNames, setPrefectureNames] = useState<PrefectureNameArray[]>([]);
  const dispatch = useDispatch();
  const popularityData = useSelector((state: RootState) => state.popularityData);
  const handleCheck = (event: any) => {
    const key = {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
      },
      params: {
        prefCode: String(event.target.value),
        cityCode: '-',
      },
    };
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear', key)
      .then((response: any) => {
        const data = response.data.result.data[0].data.map((data) => {
          return data.value;
        });
        const name = prefectureNames.filter(
          (prefectureName) => prefectureName.prefCode === Number(event.target.value),
        )[0].prefName;
        const newPopularityData = toggleItem(popularityData, { name: name, data: data });
        dispatch(getPopularityDataAction(newPopularityData));
      })
      .catch((error) => {
        console.log(error);
        alert('データの取得に失敗しました');
      });
  };

  useEffect(() => {
    const key = {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
      },
    };
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', key)
      .then((response: any) => {
        setPrefectureNames(response.data.result);
      })
      .catch((error) => {
        console.log(error);
        alert('データの取得に失敗しました');
      });
  }, []);

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
