import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../resources/img/VectorFooter.png';
import Facebook from '../../resources/img/social/Facebook.png';
import Linkedln from '../../resources/img/social/Linkedln.png';
import Twitter from '../../resources/img/social/Twitter.png';

const Footer = () => {


    return(
        <div className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__contacts}>
                    <div className={styles.footer__contacts_logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.footer__contacts_descr}>© Copyright Finsweet 2022</div>
                    <div className={styles.footer__contacts_text}>
                        <p>(480) 555-0103</p>
                        <p>4517 Washington Ave.</p>
                        <p>finsweet@example.com</p>
                    </div>
                </div>
                <div className={styles.footer__quicklinks}>
                    <div className={styles.footer__quicklinks_header}>Quicklinks</div>
                    <p>About us</p>
                    <p>Sermons</p>
                    <p>Events</p>
                    <p>Blog</p>
                </div>
                <div className={styles.footer__connect}>
                    <div className={styles.footer__connect_header}>Connect </div>
                    <div className={styles.footer__connect_socialWrap}>
                        <img src={Facebook} alt="Facebook" />
                        <img src={Twitter} alt="Twitter" />
                        <img src={Linkedln} alt="Linkedln" />
                    </div>
                </div>
                <div className={styles.footer__subscribe}>
                    <div className={styles.footer__subscribe_header}>Subscribe to get Latest Updates and News</div>
                    <div className={styles.footer__subscribe_forms}>
                        <form>
                            <label>
                                <input type="text" name='email'  placeholder='Yourmail@gmail.com'/>
                                <button>Subscribe</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;