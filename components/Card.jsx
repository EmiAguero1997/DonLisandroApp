import React from 'react'
import styles from '../styles/card.module.css'

const Card = ({title, imgURL, imgALT, topIcon , description, botIcon}) => {



  return (
    <div className={styles.cardContainer}>
        <div className={styles.topContainer}>
            {topIcon ? <img className={styles.cardLogo} src={topIcon} /> : null }
            <h2 className={styles.cardTitle}>{title}</h2>
        </div>
        <div className={styles.botContainer}>
            <img className={styles.cardImg} src={imgURL} alt={imgALT}/>
            <div className={styles.cardOptionalInfo}>
                {description ? <h5 className={styles.cardDescription}>{description}</h5> : null}
                {botIcon ? <img className={styles.cardBotLogo} src={botIcon} /> : null}
            </div>
        </div>
    </div>
  )
}

export default Card