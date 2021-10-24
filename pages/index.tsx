import React from 'react';
import Graph from './Graph/Graph';
import Header from './Header/Header';
import Layout from './Layout/Layout';
import PrefectureNames from './PrefectureNames/PrefectureNames';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <PrefectureNames />
        <div className={styles.container}>
          <Graph />
        </div>
      </Layout>
    </div>
  );
}
