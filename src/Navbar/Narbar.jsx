import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.Navbar} ${isSticky ? styles.sticky : ''}`}>
      <div>
        <img src="./echooling.png" alt="Echooling Logo" />
      </div>
      <ul className={styles.homes}>
        <li className={`${styles.homeItem} ${styles.hoo}`}>
          Home
          <ul className={styles.dropdownContent}>
            <li>Home One</li>
            <li>Home Two</li>
            <li>Home Three</li>
          </ul>
        </li>
        <li className={styles.homeItem}>
          Pages
          <ul className={styles.dropdownContent}>
            <li>About</li>
            <li>Instructor</li>
            <li>Profile</li>
            <li>Login</li>
            <li>Signup</li>
            <li>Events</li>
          </ul>
        </li>
        <li className={styles.homeItem}>
          Courses
          <ul className={styles.dropdownContent}>
            <li>Course</li>
            <li>Right Sidebar</li>
            <li>Courses List</li>
            <li>Courses Single</li>
          </ul>
        </li>
        <li className={styles.homeItem}>
          Blog
          <ul className={styles.dropdownContent}>
            <li>Blog</li>
            <li>Blog Single</li>
          </ul>
        </li>
        <li className={styles.homeItem}>
          Contact
        </li>
        <ul>
          <input className={styles.search} type="search" name="" id="" placeholder='Search Courses' />
          <img className={styles.searchicon} src="./vector5.svg" alt="" />
        </ul>
      </ul>
    </div>
  );
};

export default Navbar;
