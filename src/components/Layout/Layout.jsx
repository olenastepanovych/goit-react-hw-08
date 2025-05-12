import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
