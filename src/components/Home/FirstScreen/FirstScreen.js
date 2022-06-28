import React from 'react';
import styles from './FirstScreen.module.scss';

const FirstScreen = () => {
    
    return(
        <div className={styles.firstScreen}>
            <div className={styles.firstScreen__wrapper}>
                <div className={styles.firstScreen__text}>Welcome to our CHURCH</div>
                <div className={styles.firstScreen__title}>Become a part of our community</div>
                <div className={styles.firstScreen__btn}>
                    <button>Learn more</button>
                </div>
                <div className={styles.firstScreen__descr}>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </div>
    )
}
export default FirstScreen;