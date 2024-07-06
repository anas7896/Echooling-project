// src/Popular.jsx
import React from 'react';
import styles from './Popular.module.css';
import Academics from '../Academics/Academics';
import Button from '../Button/Button';

const Popular = () => {
  const images = [
    './1.2b718c64abf3cba58c0a.png',
    './2.0f4fbbe4e32c8eec212e.png',
    './3.2f7b3c10359c070cae98.png',
    './4.1e8ed20eff0c42a15afb.png'
  ];

  return (
    <div className={styles.popularContainer}>
      <div className={styles.popular}>
        <Academics text="Popular Courses" immm="./download.png" />
      </div>

      <div className={styles.cards}>
        {images.map((image, index) => (
          <div key={index} className={styles.poimg}>
            <img src={image} alt="" />
            <div className={styles.ux}>
              <p className={styles.less}><i className="fa-solid fa-circle"> </i> UX Design</p>
              <p className={styles.lesson}><i className="fa-solid fa-circle"></i> 5 Lessons</p>
            </div>
            <div className={styles.dave}>
              <h5>Dave conservatoire is the Entirely free online</h5>
            </div>
            <hr />
            <div className={styles.stu}>
              <p><i className="fa-solid fa-user-group"></i>56 Students</p>
              <h2>$72.00</h2>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.btncourse}>
        <Button tittle="View All Courses" />
        <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div className={styles.enroll}>
        <p>
            <span className={styles.trained}>Successfully <br />
            Trained</span>
                <br /> <br />
            <span className={styles.num}>1478</span>
                <br /> <br />
            <span className={styles.enrolled}>ENROLLED LEARNERS</span>
        </p>

        <hr />

        <p>
            <span className={styles.trained}>Successfully <br />
            Trained</span>
                <br /> <br />
            <span className={styles.num}>1731</span>
                <br /> <br />
            <span className={styles.enrolled}>ENROLLED LEARNERS</span>
        </p>

        <hr />

        <p>
            <span className={styles.trained}>Successfully <br />
            Trained</span>
                <br /> <br />
            <span className={styles.num}>280</span>
                <br /> <br />
            <span className={styles.enrolled}>ENROLLED LEARNERS</span>
        </p>

        <hr />

        <p>
            <span className={styles.trained}>Successfully <br />
            Trained</span>
                <br /> <br />
            <span className={styles.num}>1045</span>
                <br /> <br />
            <span className={styles.enrolled}>ENROLLED LEARNERS</span>
        </p>

      </div>

    </div>
  );
};

export default Popular;
