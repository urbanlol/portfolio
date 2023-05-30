import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <footer className={styles.footerArea}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright-text">
                <p className="text-white">
                  &copy; 2015 -{' '}
                  <span id="currentYear">{new Date().getFullYear()}</span>.{' '}
                  Dmyro Svyatodukh. Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
