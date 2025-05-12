import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import toast from 'react-hot-toast';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => toast.success('Logout successful'))
      .catch(err => toast.error(`Error: ${err}`));
  };

  return (
    <div className={styles.menu}>
      <p className={styles.text}>Welcome, {name}</p>
      <button className={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;