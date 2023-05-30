import { useEffect } from 'react';
import styles from './Preloader.module.css';

function Preloader({delayTimeHide}) {
  useEffect(() => {
    setTimeout(() => {
      const preloader = document.querySelector('#preloader')
      preloader.style.opacity = '0'
      preloader.style.height = '0'
      preloader.style.transition = 'all .2s'
    }, delayTimeHide)
  }, [delayTimeHide])
 
  return (
    <>
      <div className={styles.preloader} id='preloader'>
        <div className={styles.spinner}>
          <div className={styles.cube1}></div>
          <div className={styles.cube2}></div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
