import React from 'react';
import styles from './WatchAndListen.module.scss';

const WatchAndListen = () => {

    const watchAndListenBox = [
        {
            itemRelation: 'Relationship',
            itemTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            itemTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            itemName: 'By Mathew Johnson',
            itemDay: 'Tuesday 13 May, 2021',
        },
        {
            itemRelation: 'Relationship',
            itemTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            itemTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            itemName: 'By Mathew Johnson',
            itemDay: 'Tuesday 13 May, 2021',
        },
        {
            itemRelation: 'Relationship',
            itemTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            itemTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            itemName: 'By Mathew Johnson',
            itemDay: 'Tuesday 13 May, 2021',
        },
        {
            itemRelation: 'Relationship',
            itemTitle: 'WATCH AND LISTEN TO OUR SERMONS',
            itemTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            itemName: 'By Mathew Johnson',
            itemDay: 'Tuesday 13 May, 2021',
        }
    ]

    return (
        <div className={styles.watchAndListen}>
            <div className={styles.watchAndListen__wrapper}>
                <div className={styles.watchAndListen__title}>SHARE, INSPIRE, INNOVATE</div>
                <div className={styles.watchAndListen__box}>
                    {watchAndListenBox.map((item, idx) => (
                        <div key={`watchAndListen item ${idx}`} className={styles.watchAndListen__box_item}>
                            <div className={styles.watchAndListen__box_itemRelation}>{item.itemRelation}</div>
                            <div className={styles.watchAndListen__box_itemTitle}>{item.itemTitle}</div>
                            <div className={styles.watchAndListen__box_itemTxt}>{item.itemTxt}</div>
                            <div className={styles.watchAndListen__box_itemName}>{item.itemName}</div>
                            <div className={styles.watchAndListen__box_itemDay}>{item.itemDay}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WatchAndListen;