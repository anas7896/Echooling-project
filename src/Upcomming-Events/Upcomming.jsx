// src/Upcomming.jsx
import React from 'react';
import styles from './Upcomming.module.css';
import Academics from '../Academics/Academics';
import Button from '../Button/Button';

const Upcomming = () => {
  const cardsData = [
    {
      date: '10',
      monthYear: 'January, 2022',
      time: '10:30AM - 12:00PM',
      title: 'A Better Alternative To Grading Student Writing.',
    },
    {
      date: '14',
      monthYear: 'April, 2022',
      time: '12:00PM - 01:30PM',
      title: '12 Things Successful Mompreneurs.',
    },
    {
      date: '26',
      monthYear: 'March, 2022',
      time: '01:30PM - 02:30PM',
      title: 'Ethics in AI Live Event Machines Judging.',
    },
    {
      date: '10',
      monthYear: 'April, 2022',
      time: '03:00AM - 04:30PM',
      title: 'The Importance  of Intrinsic Motivation.',
    },
  ];

  return (
    <div className={styles.Upcomming}>
        <div className={styles.bott}>
        <Academics text="Upcomming Events" immm="./download.png" />
        </div>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.upcard}>
            <h1>{card.date}</h1>
            <p className={styles.janu}>{card.monthYear}</p>
            <p className={styles.am}>{card.time}</p>
            <h6>{card.title}</h6>
            <p className={styles.newyork}>
              <i className="fa-solid fa-location-dot"></i> New York, USA
            </p>
            <Button tittle="Find Out More" />
            <div className={styles.upbtnarr}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.circle}>
        <div className={styles.cir}>
            <i className="fa-solid fa-circle"></i>
        </div>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </div> 

    </div>
  );
};

export default Upcomming;
