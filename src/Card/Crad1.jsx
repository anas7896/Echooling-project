import React from 'react';
import styles from './Card1.module.css';

const Card1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card1img}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.cimg} src="./1.045ce5893b04f4bde993.png" alt="Let's Talk Science" />
            <div className={styles.gradientOverlay}></div>
          </div>
          <h1 className={styles.hov}>Let’s Talk Science</h1>
          <p className={styles.hov}>Learn More <img src="vector.svg" alt="Arrow Icon" /></p>
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.cimg} src="./2.ec9d013b7d4f44fa4112.png" alt="Innovative Courses" />
            <div className={styles.gradientOverlay}></div>
          </div>
          <h1 className={styles.hov}>Innovative Courses</h1>
          <p className={styles.hov}>Learn More <img src="vector.svg" alt="Arrow Icon" /></p>
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.cimg} src="./3.0cf44447da5e6fb16e49.png" alt="Cloud Storage" />
            <div className={styles.gradientOverlay}></div>
          </div>
          <h1 className={styles.hov}>Cloud Storage</h1>
          <p className={styles.hov}>Learn More <img src="vector.svg" alt="Arrow Icon" /></p>
        </div>

        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <img className={styles.cimg} src="./4.3d31b426e478a4d304b8.png" alt="Online Education" />
            <div className={styles.gradientOverlay}></div>
          </div>
          <h1 className={styles.hov}>Online Education</h1>
          <p className={styles.hov}>Learn More <img src="vector.svg" alt="Arrow Icon" /></p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
