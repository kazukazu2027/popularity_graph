import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';
import styles from './Graph.module.css';
import { RootState } from 'redux/Store/Store';

const Graph = () => {
  const popularityData = useSelector((state: RootState) => state.popularityData);
  const options = {
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    xAxis: {
      title: {
        text: '年度',
      },
      tickInterval: 5,
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointInterval: 5,
        pointStart: 1965,
      },
    },
    series: popularityData,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      {popularityData.length === 0 ? (
        <p className={styles.attentionText}>都道府県を選択してください</p>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </div>
  );
};

export default Graph;
