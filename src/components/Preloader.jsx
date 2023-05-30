import styles from './Preloader.module.css';

function Preloader() {
  return (
    <>
      <div className={styles.preloader}>
        <div className={styles.spinner}>
          <div className={styles.cube1}></div>
          <div className={styles.cube2}></div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
