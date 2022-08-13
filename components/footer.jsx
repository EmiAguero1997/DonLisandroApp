import styles from '../styles/footer.module.css';

export default function Footer(){
    return (
      <>
        <div className={styles.backgroundColor}>
          <div className={styles.container}>
            <div>
              <p>
                Calle San Martín 441 (Este) Frente a Gendarmería Nacional A 50
                mts. de la Terminal de BUS
              </p>
              ​ <p>Barreal - San Juan - Argentina ​</p>
              <p>donlisandro@gmail.com </p>
              <p> © TODOS LOS DERECHOS RESERVADOS / DON LISANDRO</p>
            </div>
            
          </div>
        </div>
      </>
    );
}