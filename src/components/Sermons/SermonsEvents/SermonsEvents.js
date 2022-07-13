import React from "react";
import styles from './SermonsEvents.module.scss';
import Clock from '../../../resources/img/UpcomingEvent/Clock icon.png';
import Circle from '../../../resources/img/UpcomingEvent/circle.png';

const SermonsEvents = () => {

    const events = [
        {
            descrEvent: 'Upcoming Event',
            descrTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            descrText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            time: 'Friday 23:39 IST Saturday 11:20 ISD',
            place: 'No 233 Main St. New York, United States',
        },
        {
            descrEvent: 'Upcoming Event',
            descrTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            descrText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            time: 'Friday 23:39 IST Saturday 11:20 ISD',
            place: 'No 233 Main St. New York, United States',
        },
        {
            descrEvent: 'Upcoming Event',
            descrTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            descrText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            time: 'Friday 23:39 IST Saturday 11:20 ISD',
            place: 'No 233 Main St. New York, United States',
        },
        {
            descrEvent: 'Upcoming Event',
            descrTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            descrText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            time: 'Friday 23:39 IST Saturday 11:20 ISD',
            place: 'No 233 Main St. New York, United States',
        },
    ]

    return (
        <div className={styles.sermonsEvents}>
            <div className={styles.sermonsEvents__wrapper}>
                <div className={styles.sermonsEvents__box}>
                    {events.map((item, idx) => (
                        <div key={`events item ${idx}`} className={styles.sermonsEvents__box_descr}>
                            <div className={styles.sermonsEvents__box_descrEvent}>{item.descrEvent}</div>
                            <div className={styles.sermonsEvents__box_descrTitle}>{item.descrTitle}</div>
                            <div className={styles.sermonsEvents__box_descrText}>{item.descrText}</div>
                            <div className={styles.sermonsEvents__box_descrClock}>
                                <img src={Clock} alt="Clock" />
                                <p>{item.time}</p>
                                <img src={Circle} alt="Circle" />
                                <p>{item.place}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default SermonsEvents;