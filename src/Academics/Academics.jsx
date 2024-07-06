import React from 'react'
import styles from './Academics.module.css'

const Academics = ({text, immm}) => {
  return (
    <div className={styles.Aca}>
      <h1 className={styles.academics}>{text}</h1>
      <img className={styles.down} src={immm} alt="" />
    </div>
  )
}

export default Academics;
