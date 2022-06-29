import React from 'react';
import styles from './UpcomingEvent.module.scss';
import WomanMan from '../../../resources/img/UpcomingEvent/WomanMan.png';
import Circle from '../../../resources/img/UpcomingEvent/circle.png';
import Clock from '../../../resources/img/UpcomingEvent/Clock icon.png';
import NextIcon from '../../../resources/img/UpcomingEvent/next.png';

const UpcomingEvent = () => {

    return(
        <div className={styles.UpcomingEvent}>
            <div className={styles.UpcomingEvent__wrapper}>
                <div className={styles.UpcomingEvent__title}>
                join us and become part of something great
                </div>
            <div className={styles.UpcomingEvent__box}>
                <div className={styles.UpcomingEvent__box_descr}></div>
                <div className={styles.UpcomingEvent__box_img}>
                    <img src={WomanMan} alt="WomanMan" />
                </div>
            </div>
            <div className={styles.UpcomingEvent__link}>
                View all Sermons
                <img src={NextIcon} alt="NextIcon" />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent;