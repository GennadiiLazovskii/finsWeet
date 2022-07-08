import React from 'react';
import styles from './BenefitsJoining.module.scss';
import Woman from '../../../resources/img/BenefitsJoining/icon1.png'
import Book from '../../../resources/img/BenefitsJoining/icon2.png'
import Man from '../../../resources/img/BenefitsJoining/icon3.png'
import Pict from '../../../resources/img/BenefitsJoining/icon4.png'

const BenefitsJoining = () => {

    const benefitsBoxItem = [
        {
            img: Woman,
            descrImg: 'Woman',
            title: 'WATCH AND LISTEN TO OUR SERMONS',
        },
        {
            img: Book,
            descrImg: 'Book',
            title: 'WATCH AND LISTEN TO OUR SERMONS',
        },
        {
            img: Man,
            descrImg: 'Man',
            title: 'WATCH AND LISTEN TO OUR SERMONS',
        },
        {
            img: Pict,
            descrImg: 'Pict',
            title: 'WATCH AND LISTEN TO OUR SERMONS',
        },
    ]

    return (
        <div className={styles.BenefitsJoining}>
            <div className={styles.BenefitsJoining__wrapper}>
                <div className={styles.BenefitsJoining__title}>THE benefits of joining our church</div>
                <div className={styles.BenefitsJoining__box}>
                    {benefitsBoxItem.map((item, idx) => (
                        <div key={`benefitsBoxItem ${idx}`} className={styles.BenefitsJoining__box_item}>
                            <div className={styles.BenefitsJoining__box_itemImg}>
                                <img src={item.img} alt={item.descrImg} />
                            </div>
                            <div className={styles.BenefitsJoining__box_itemTitle}>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitsJoining;