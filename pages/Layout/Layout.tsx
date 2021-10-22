import React, { ReactNode } from 'react';
import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
