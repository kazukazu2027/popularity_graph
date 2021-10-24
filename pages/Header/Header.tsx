import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>都道府県別の総人口推移グラフ</h1>
    </div>
  );
};

export default Header;
