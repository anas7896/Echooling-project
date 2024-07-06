import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.fo}>
      <div className={styles.footer}>
        <ul>
          <li className={styles.footimg}>
            <img src="./echooling.png" alt="" />
          </li>
          <li>
            <p className={styles.there}>
              There are course and event custom <br />
              post types so you can easily create and <br />
              manage course, events.
            </p>
          </li>
          <li>
            <p className={styles.phone}>
              <i className="fa-solid fa-phone"></i>
              <span className={styles.com}>+(402) 762 441 83 </span>
            </p>
          </li>
          <li>
            <p className={styles.email}>
              <i className="fa-regular fa-envelope"></i>
              <span className={styles.com}>info@echooling.com</span> <br />
            </p>
          </li>
        </ul>
        <ul className={styles.aboutul}>
          <h2>About Us</h2>
          <li>About</li>
          <li>Courses</li>
          <li>Events</li>
          <li>Career</li>
          <li>Become a Teacher</li>
          <li>Contact</li>
        </ul>
        <ul className={styles.useful}>
          <h2>Useful Links</h2>
          <li>Browse Library</li>
          <li>Library</li>
          <li>Partners</li>
          <li>News & Blog</li>
          <li>FAQ</li>
          <li>Tutorials</li>
        </ul>
        <ul className={styles.letter}>
          <h2>Newsletter</h2>
          <li className={styles.get}>
            Get the latest Echooling news <br />
            delivered to your inbox
          </li>
          <li className={styles.searchli}>
            <input type="text" placeholder="Enter your email" /> <i className="fa-solid fa-arrow-right"></i>
          </li>
        </ul>
      </div >

      <div className={styles.all}>
      <hr className={styles.hrrrrr}/>
      <p>© 2022 <span className={styles.ec}>Echooling</span>. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
