import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../Compassion/Compassion.module.scss';
import Man from '../../../resources/img/compassion/icon1.png';
import WomanMan from '../../../resources/img/compassion/icon2.png';
import Woman from '../../../resources/img/compassion/icon3.png';

const Compassion = () => {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/AboutUs");
    }

    return (
        <div className={styles.compassion}>
            <div className={styles.compassion__wrapper}>
                <div className={styles.compassion__title}>love and compassion</div>
                <div className={styles.compassion__descr}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                </div>
                <div className={styles.compassion__box}>
                    <div className={styles.compassion__box_imgMan}>
                        <img src={Man} alt="Man" />
                    </div>
                    <div className={styles.compassion__box_btnImg}>
                        <button onClick={handleClick}>Read more</button>
                        <img src={WomanMan} alt="WomanMan" />
                    </div>
                    <div className={styles.compassion__box_imgWoman}>
                        <img src={Woman} alt="Woman" />
                    </div>
                </div>
                <div className={styles.compassion__titleFooter}>celebrate WITH US</div>
                <div className={styles.compassion__descrFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className={styles.compassion__linkFooter}>Read More</div>
            </div>
        </div>
    );
};

export default Compassion;
