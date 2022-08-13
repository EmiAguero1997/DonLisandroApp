import Image from 'next/image';
import styles from '../styles/pampasection.module.css';

export default function PampaSection(){
    return(
        <>
            <div className={styles.container}>
            <Image
            src='/images/imagesWeb/BP17.jpg' alt="pampaSection" layout='fill' objectFit='cover' quality={100}/>
            </div>
            
        </>
    )
}