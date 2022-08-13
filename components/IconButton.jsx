import React from 'react'
import styles from '../styles/iconbutton.module.css'
import Image from 'next/image'


const IconButton = ({url, svgURL}) => {
    return (
            <button onClick={event => window.open(url)} className={styles.svgButton}>
                <Image src={svgURL} height={30} width={30} />
            </button>
    )
}

export default IconButton