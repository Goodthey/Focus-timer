import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <img
            src="/digital_clock_icon.svg"
            alt="Clock"
            className={styles.clockIcon}
          />
        </div>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li>Таймеры</li>
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li>Статистика</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <li>Профиль</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
