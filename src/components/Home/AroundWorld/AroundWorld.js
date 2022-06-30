import React from 'react';
import styles from './AroundWorld.module.scss';
import Quote from '../../../resources/img/AroundWorld/QuoteIcon.png';

const AroundWorld = () => {

    return (
        <div className={styles.aroundWorld}>
            <div className={styles.aroundWorld__wrapper}>
                <div className={styles.aroundWorld__box}>
                    <div className={styles.aroundWorld__box_descr}>
                        <div className={styles.aroundWorld__box_descr_title}>We want to serve the world around us</div>
                        <div className={styles.aroundWorld__box_descr_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</div>
                        <div className={styles.aroundWorld__box_descr_btn}>
                            <button>Visit</button>
                        </div>
                    </div>
                    <div className={styles.AroundWorld__box_descrQuote}>
                        <img src={Quote} alt="Quote" />
                    </div>
                </div>
                <span></span>
            </div>
        </div>
    )
}

export default AroundWorld;
