import React from 'react';
import styles from './AboutUsJoiningOurChurch.module.scss';
import Man from '../../../resources/img/AboutUsJoiningOurChurch/man.png';
import Book from '../../../resources/img/AboutUsJoiningOurChurch/book.png';
import Woman from '../../../resources/img/AboutUsJoiningOurChurch/woman.png';
import Icon from '../../../resources/img/AboutUsJoiningOurChurch/icon.png';


const AboutUsJoiningOurChurch = () => {

    

    return (
        <div className={styles.aboutUsJoiningOurChurch}>
            <div className={styles.aboutUsJoiningOurChurch__wrapper}>
                <div className={styles.aboutUsJoiningOurChurch__title}>The benefits of joining our church</div>
                <div className={styles.aboutUsJoiningOurChurch__boxLeft}>
                    <div className={styles.aboutUsJoiningOurChurch__boxLeftDescr}>
                        <div className={styles.aboutUsJoiningOurChurch__boxLeftDescr_titleLeft}>find fulfillment and joy</div>
                        <div className={styles.aboutUsJoiningOurChurch__boxLeftDescr_descrLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</div>
                    </div>
                    <div className={styles.aboutUsJoiningOurChurch__boxLeft_imgLeft}>
                        <img src={Man} alt="Man" />
                    </div>
                </div>
                <div className={styles.aboutUsJoiningOurChurch__boxRight}>
                    <div className={styles.aboutUsJoiningOurChurch__boxRight_imgRight}>
                        <img src={Book} alt="Book" />
                    </div>
                    <div className={styles.aboutUsJoiningOurChurch__boxRightDescr}>
                        <div className={styles.aboutUsJoiningOurChurch__boxRightDescr_titleRight}>shared values</div>
                        <div className={styles.aboutUsJoiningOurChurch__boxRightDescr_descrRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</div>
                    </div>
                </div>
                <div className={styles.aboutUsJoiningOurChurch__boxLeft}>
                    <div className={styles.aboutUsJoiningOurChurch__boxLeftDescr}>
                        <div className={styles.aboutUsJoiningOurChurch__boxLeftDescr_titleLeft}>charity events</div>
                        <div className={styles.aboutUsJoiningOurChurch__boxLeftDescr_descrLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</div>
                    </div>
                    <div className={styles.aboutUsJoiningOurChurch__boxLeft_imgLeft}>
                        <img src={Woman} alt="Woman" />
                    </div>
                </div>
                <div className={styles.aboutUsJoiningOurChurch__boxRight}>
                    <div className={styles.aboutUsJoiningOurChurch__boxRight_imgRight}>
                        <img src={Icon} alt="Icon" />
                    </div>
                    <div className={styles.aboutUsJoiningOurChurch__boxRightDescr}>
                        <div className={styles.aboutUsJoiningOurChurch__boxRightDescr_titleRight}>All are welcome</div>
                        <div className={styles.aboutUsJoiningOurChurch__boxRightDescr_descrRight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsJoiningOurChurch;