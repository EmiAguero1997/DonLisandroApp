import React from 'react'
import styles from '../styles/cardhospedaje.module.css'

const CardHospedaje = ({imgURL, index, description, title}) => {
  return (
    <div className={styles.cardHospedajeContainer}>
        <div className={styles.topCardHospedajeContainer}>
            <img className={styles.cardHospedajeImg} src={imgURL}/>
        </div>
        <div className={styles.botCardHospedajeContainer}>
            <div className={styles.botCardHospedajeContainer1}>
                <h3 className={styles.botCardHospedajeIndex}>{index}</h3>
            </div>
            <div className={styles.botCardHospedajeContainer2}>
                <p className={styles.botCardHospedajeDescription}>{description}</p>
                <p className={styles.botCardHospedajeTitle}>{title}</p>
            </div>
            <div className={styles.botCardHospedajeContainer3}>
                <button className={styles.botCardHospedajeButton}>+ INFO</button>
            </div>
        </div>
    </div>
  )
}

export default CardHospedaje