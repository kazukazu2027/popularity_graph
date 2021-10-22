import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PrefectureNames.module.css';

type PrefectureNameArray = {
  prefCode: number;
  prefName: string;
};

const PrefectureNames = () => {
  const [prefectureNames, setPrefectureNames] = useState<PrefectureNameArray[]>([]);
  const handleCheck = (event: any) => {
    console.log(event.target.value);
  };

  useEffect(() => {
    const key = {
      headers: {
        'X-API-KEY': 'tujaQDp5XYgUZCycSWPG8AVeEfqQo8ysLxrC0yA7',
      },
    };
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', key)
      .then((response: any) => {
        setPrefectureNames(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>都道府県</p>
      <div className={styles.prefectureNamesContainer}>
        {prefectureNames.map((prefectureName) => {
          return (
            <div key={prefectureName.prefCode} className={styles.prefectureNameContainer}>
              <input
                type="checkbox"
                id={prefectureName.prefName}
                value={prefectureName.prefCode}
                onChange={handleCheck}
              />
              <label htmlFor={prefectureName.prefName}>
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
