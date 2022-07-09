import React from 'react';
import styles from './AboutUsInspirationalTeam.module.scss';
import User1 from '../../../resources/img/AboutUsInspirationalTeam/user1.png';
import User2 from '../../../resources/img/AboutUsInspirationalTeam/user2.png';
import User3 from '../../../resources/img/AboutUsInspirationalTeam/user3.png';
import User4 from '../../../resources/img/AboutUsInspirationalTeam/user4.png';
import Facebook from '../../../resources/icons/Facebook.png';
import LinkedIn from '../../../resources/icons/LinkedIn.png';
import Twitter from '../../../resources/icons/Twitter.png';


const AboutUsInspirationalTeam = () => {

    const user = [
        {
            avatar: User1,
            imgName: "User Foto",
            name: "Kim Bowen",
            jobPost: "Pastor, Church",
            Facebook: Facebook,
            LinkedIn: LinkedIn,
            Twitter: Twitter,
        },
        {
            avatar: User2,
            imgName: "User Foto",
            name: "Kim Bowen",
            jobPost: "Pastor, Church",
            Facebook: Facebook,
            LinkedIn: LinkedIn,
            Twitter: Twitter,
        },
        {
            avatar: User3,
            imgName: "User Foto",
            name: "Santos Payne",
            jobPost: "Pastor, Church",
            Facebook: Facebook,
            LinkedIn: LinkedIn,
            Twitter: Twitter,
        },
        {
            avatar: User4,
            imgName: "User Foto",
            name: "Naomi Craig",
            jobPost: "Pastor, Church",
            Facebook: Facebook,
            LinkedIn: LinkedIn,
            Twitter: Twitter,
        },
    ]

    return (
        <div className={styles.aboutUsInspirationalTeam}>
            <div className={styles.aboutUsInspirationalTeam__wrapper}>
                <div className={styles.aboutUsInspirationalTeam__title}>meet our Inspirational team</div>
                <div className={styles.aboutUsInspirationalTeam__box}>
                    {user.map((item, idx) => (
                        <div key={`user item ${idx}`} className={styles.aboutUsInspirationalTeam__boxItem}>
                            <div className={styles.aboutUsInspirationalTeam__boxItem_avatar}>
                                <img src={item.avatar} alt={item.imgName} />
                            </div>
                            <div className={styles.aboutUsInspirationalTeam__boxItem_name}>{item.name}</div>
                            <div className={styles.aboutUsInspirationalTeam__boxItem_jobPost}>{item.jobPost}</div>
                            <div className={styles.aboutUsInspirationalTeam__boxItem_link}>
                                <img src={item.Facebook} alt="link" />
                                <img src={Twitter} alt="link" />
                                <img src={LinkedIn} alt="link" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUsInspirationalTeam;