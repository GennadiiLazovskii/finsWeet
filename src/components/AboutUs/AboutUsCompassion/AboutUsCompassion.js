import React from 'react';
import styles from './AboutUsCompassion.module.scss';
import Man from '../../../resources/img/compassion/icon1.png';
import WomanMan from '../../../resources/img/compassion/icon2.png';
import Woman from '../../../resources/img/compassion/icon3.png';

const AboutUsCompassion = () => {
    return (
        <div className={styles.aboutUsCompassion}>
            <div className={styles.aboutUsCompassion__wrapper}>
                <div className={styles.aboutUsCompassion__title}>love and compassion</div>
                <div className={styles.aboutUsCompassion__descr}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                </div>
                <div className={styles.aboutUsCompassion__box}>
                    <div className={styles.aboutUsCompassion__box_imgMan}>
                        <img src={Man} alt="Man" />
                    </div>
                    <div className={styles.aboutUsCompassion__box_btnImg}>
                        <img src={WomanMan} alt="WomanMan" />
                    </div>
                    <div className={styles.aboutUsCompassion__box_imgWoman}>
                        <img src={Woman} alt="Woman" />
                    </div>
                </div>
                <div className={styles.aboutUsCompassion__footerDescrWrapper}>
                    <div className={styles.aboutUsCompassion__footerBox}>
                        <div className={styles.aboutUsCompassion__footerTitle}>STRIVING FOR A BETTER TOMORROW</div>
                        <div className={styles.aboutUsCompassion__footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                    </div>
                    <div className={styles.aboutUsCompassion__footerBox}>
                        <div className={styles.aboutUsCompassion__footerTitle}>BRINgING PEACE AND JOY TO THE WORLD</div>
                        <div className={styles.aboutUsCompassion__footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsCompassion;