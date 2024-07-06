import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img className={styles.img} src="./vector4.svg" alt="" />
        <p className={styles.contact}>(+1) 3344 999 999</p>
        <img className={styles.img} src="./vector2.svg" alt="" />
        <p className={styles.contact}>info@reactheme.com</p>
      </div>
      <div className={styles.right}>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  );
};

export default Header;
