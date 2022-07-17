import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={styles.header__main}>
                    <ul>
                        {menu.map((item, idx) => (
                            <li key={`menu item ${idx}`}>
                                <NavLink 
                                end 
                                activeStyle={{'color' : 'red'}} 
                                style={({isActive}) => ({color: isActive ? '#FFD2A4' : 'white'})}
                                to={item.link}>{item.title}</NavLink>
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