import React from 'react'
import styles from './Justin.module.css'
import Academics from '../Academics/Academics'

const newsData = [
  {
    img: './1.987e87b22a8f90492eb4.jpg',
    date: 'April 18',
    title: 'Kids future Schools &<br /> Corona Prevent to Growth',
  },
  {
    img: './2.8f0076f5a86838542c39.jpg',
    date: 'April 18',
    title: 'Echooling future Schools &<br /> social Innovation',
  },
  {
    img: './3.356c9579b8137ed75a03.jpg',
    date: 'April 18',
    title: '7 Learning system design<br /> tips For better eLearning',
  },
  {
    img: './1.987e87b22a8f90492eb4.jpg',
    date: 'April 18',
    title: 'Why schools should<br /> continue remote study',
  }
];

const Justin = () => {
  return (
    <div>
      <div className={styles.what}>
        <Academics text="What our student saying" immm="./download.png" />
      </div>

      <div className={styles.justin}>
        <img src="./testimonial.b4a97b69f2bf8c02fc4f.png" alt="" />
        <div className={styles.case}>
          <h3>Justine Case</h3>
          <p className={styles.student}>Student</p>
          <p className={styles.nulla}>Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>

          <div className={styles.star}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"><span className={styles.rewiew}> <strong>4.9</strong> (14 Reviews)</span></i>
          </div>
        </div>
      </div>

      <div className={styles.News}> 
        <Academics text="Echooling News and Blogs" immm="./download.png"/>
      </div>
      <div className={styles.newsContainer}>
        {newsData.map((news, index) => (
          <div key={index} className={styles.newscard}>
            <img className={styles.newsimg} src={news.img} alt="" />
            <p className={styles.aaa}>{news.date}</p>
            <div className={styles.paa}> 
              <p className={styles.edu}>Education</p>
              <p className={styles.kids} dangerouslySetInnerHTML={{ __html: news.title }}></p>
              <p className={styles.charli}><i className="fa-solid fa-user-large"></i>Charlie Doyle</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Justin;
