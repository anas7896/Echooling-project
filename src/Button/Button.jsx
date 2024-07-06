import React from 'react'
import styles from './Button.module.css'

const Button = ({tittle}) => {
  return (
    <div>
      <button className={styles.button}>
        {tittle}
      </button>
    </div>
  )
}

export default Button;
