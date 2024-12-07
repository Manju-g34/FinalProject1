/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./SocioConnect.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb2474114fa2eaffcac66bbe3afbec7dcc29a5c0b8d8b8e0d83966fd9897e03?placeholderIfAbsent=true&apiKey=f27a7f6532b3469a891700e4c6f63d48"
          alt="Socio Connect Logo"
          className={styles.logoImage}
        />
        <h1 className={styles.logoText}>Socio Connect</h1>
      </div>
      <nav className={styles.nav}>
        <a href="viewupdates" className={styles.navItem}>
          view updates
        </a>
        <a href="raise-issue" className={styles.navItem}>
          Raise Issue
        </a>
        <a href="track-issue" className={styles.navItem}>
          Track Issue
        </a>
        <a href="logout" className={styles.navItem}>
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;