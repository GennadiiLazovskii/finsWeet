import React from 'react';
import styles from './UpcomingEvent.module.scss';
import WomanMan from '../../../resources/img/UpcomingEvent/WomanMan.png';
import Circle from '../../../resources/img/UpcomingEvent/circle.png';
import Clock from '../../../resources/img/UpcomingEvent/Clock icon.png';
import NextIcon from '../../../resources/img/UpcomingEvent/next.png';

const UpcomingEvent = () => {

    return(
        <div className={styles.upcomingEvent}>
            <div className={styles.upcomingEvent__wrapper}>
                <div className={styles.upcomingEvent__title}>
                join us and become part of something great
                </div>
            <div className={styles.upcomingEvent__box}>
                <div className={styles.upcomingEvent__box_descr}>
                    <div className={styles.upcomingEvent__box_descrEvent}>Upcoming Event</div>
                    <div className={styles.upcomingEvent__box_descrTitle}>WATCH AND LISTEN TO OUR SERMONS</div>
                    <div className={styles.upcomingEvent__box_descrText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
                    <div className={styles.upcomingEvent__box_descrClock}>
                        <img src={Clock} alt="Clock" />
                        <p>Friday 23:39 IST Saturday 11:20 ISD</p>
                        <img src={Circle} alt="Circle" />
                        <p>No 233 Main St. New York, United States</p>
                    </div>
                    <div className={styles.upcomingEvent__box_descrBtn}>
                        <button>Register</button>
                    </div>
                </div>
                <div className={styles.upcomingEvent__box_img}>
                    <img src={WomanMan} alt="WomanMan" />
                </div>
            </div>
            <div className={styles.upcomingEvent__link}>
                View all Sermons
                <img src={NextIcon} alt="NextIcon" />
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent;