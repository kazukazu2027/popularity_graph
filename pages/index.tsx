import React from 'react';
import Header from './Header/Header';
import Layout from './Layout/Layout';
import PrefectureNames from './PrefectureNames/PrefectureNames';

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <PrefectureNames />
      </Layout>
    </div>
  );
}
