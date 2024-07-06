import React from 'react';
import styles from './Welcome.module.css';
import Button from '../Button/Button';
import Academics from '../Academics/Academics';

const Welcome = () => {
  return (
    <div className={styles.wel}>

        <div className={styles.well}>
            <img className={styles.school} src="./school.png" alt="" />
        </div>

        <div className={styles.axb}>
            <img src="axb.png" alt="" />
        </div>

        <div className={styles.LMS}> 
            <h1>
                Welcome to <br /> <strong>Echooling LMS Platform</strong>
            </h1>
            <p className={styles.LMSP}>
                Education is both the act of teaching knowledge to others and <br />
                the act of receiving knowledge from someone else.
            </p>

            <p className={styles.questions}>
                Have questions? <a href="#">Get Free Guide</a>
            </p>

            <hr className={styles.hrs} />

            <p className={styles.education}>
                Education also refers to the knowledge received through schooling instruction <br />
                and to the institution of teaching as a whole. The main purpose of education <br />
                is the integral development of a person.
            </p>

            <div className={styles.bb}>
                <Button className={styles.bbb} tittle="Read More"/> 
                <img className={styles.btnarr} src="./vector.svg" alt="" />
            </div>


            <p className={styles.support}>
                <i className="fa-regular fa-comment-dots"></i>
                <span>Get Support</span> <br />
                <strong className={styles.st}>support@react.com</strong>

            </p>
        </div>

        <div className={styles.campus}>
            <Academics text="Campus Life" immm="./download.png"/>
        </div>

        <div className={styles.domore}>
            <img src="pencil.svg" alt="" />
            <h3 className={styles.do}>Do More, Stress Less</h3>
            <p className={styles.dom}>Why I say old chap that is spiffing he legged <br />
            it in my flat easy peasy.</p>

            <div className={styles.doar}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

            <hr className={styles.dohr} />

            <img src="./bussniss.svg" alt="" />
            <h3 className={styles.do}>The Business Intelligence</h3>
            <p className={styles.dom}>Why I say old chap that is spiffing he legged <br />
            it in my flat easy peasy.</p>

            <div className={styles.doar}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

            <hr className={styles.dohr} />

            <img src="./setting.svg" alt="" />
            <h3 className={styles.do}>System Administration</h3>
            <p className={styles.dom}>Why I say old chap that is spiffing he legged <br />
            it in my flat easy peasy.</p>

            <div className={styles.doar}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

            <div className={styles.campusimg}>
                <img src="./campus.png" alt="" />
            </div>

            <div className={styles.baga}>
                <div className={styles.baga1}>
                <Button className={styles.bbb} tittle="More about Campus Life"/> 
                <img className={styles.baga2} src="./vector.svg" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Welcome;
