import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLogged && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;