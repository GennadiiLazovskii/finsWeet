import React from 'react';
import styles from './BenefitsJoining.module.scss';
import Woman from '../../../resources/img/BenefitsJoining/icon1.png'
import Book from '../../../resources/img/BenefitsJoining/icon2.png'
import Man from '../../../resources/img/BenefitsJoining/icon3.png'
import Pict from '../../../resources/img/BenefitsJoining/icon4.png'

const BenefitsJoining = () => {

    return (
        <div className={styles.BenefitsJoining}>
            <div className={styles.BenefitsJoining__wrapper}>
                <div className={styles.BenefitsJoining__title}>THE benefits of joining our church</div>
                <div className={styles.BenefitsJoining__box}>
                    <div className={styles.BenefitsJoining__box_item}>
                        <div className={styles.BenefitsJoining__box_itemImg}>
                            <img src={Woman} alt="Woman" />
                        </div>
                        <div className={styles.BenefitsJoining__box_itemTitle}>
                        WATCH AND LISTEN TO OUR SERMONS
                        </div>
                    </div>
                    <div className={styles.BenefitsJoining__box_item}>
                        <div className={styles.BenefitsJoining__box_itemImg}>
                            <img src={Book} alt="Book" />
                        </div>
                        <div className={styles.BenefitsJoining__box_itemTitle}>
                        WATCH AND LISTEN TO OUR SERMONS
                        </div>
                    </div>
                    <div className={styles.BenefitsJoining__box_item}>
                        <div className={styles.BenefitsJoining__box_itemImg}>
                            <img src={Man} alt="Man" />
                        </div>
                        <div className={styles.BenefitsJoining__box_itemTitle}>
                        WATCH AND LISTEN TO OUR SERMONS
                        </div>
                    </div>
                    <div className={styles.BenefitsJoining__box_item}>
                        <div className={styles.BenefitsJoining__box_itemImg}>
                            <img src={Pict} alt="Pict" />
                        </div>
                        <div className={styles.BenefitsJoining__box_itemTitle}>
                        WATCH AND LISTEN TO OUR SERMONS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsJoining;