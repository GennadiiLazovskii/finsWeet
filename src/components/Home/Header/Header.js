import React from "react";
import logo from '../../../resources/img/Vector.png';
import styles from './Header.module.scss';

const Header = () => {

    const menu = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'About us',
            link: '/',
        },
        {
            title: 'Sermon',
            link: '/',
        },
        {
            title: 'Blog',
            link: '/',
        },
    ]

    return (
        <div className={styles.header}> 
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.header__main}>
                    <ul>
                        {menu.map((item, idx) => (
                            <li key={`menu item ${idx}`}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.header__btn}>
                    <button>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Header;