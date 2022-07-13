import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../resources/img/Vector.png';
import styles from './Header.module.scss';

const Header = () => {

    const menu = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'About us',
            link: '/AboutUs',
        },
        {
            title: 'Sermon',
            link: '/Sermon',
        },
        {
            title: 'Blog',
            link: '/Blog',
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
                                <NavLink exact activeStyle={{'color' : 'red'}} to={item.link}>{item.title}</NavLink>
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