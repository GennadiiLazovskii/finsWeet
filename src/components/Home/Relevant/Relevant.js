import React from 'react';
import style from '../Relevant/Relevant.module.scss';
import Palm from '../../../resources/img/relevantImg/Icon.png';
import Involved from '../../../resources/img/relevantImg/icon(2).png';
import Like from '../../../resources/img/relevantImg/icon(3).png';

const Relevant = () => {

    const descrCard = [
        {
            img: Palm,
            photoDescr: 'Palm',
            title: 'About us',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            img: Involved,
            photoDescr: 'Involved',
            title: 'Get involved',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            img: Like,
            photoDescr: 'Like',
            title: 'Giving back',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <div className={style.relevant}>
            <div className={style.relevant__wrapper}>
                <div className={style.relevant__title}>a church that's relevant</div>
                <div className={style.relevant__boxWrap}>
                    {descrCard.map((item, idx) => (
                        <div key={`descrCard item ${idx}`} className={style.relevant__boxWrap_item}>
                            <div className={style.relevant__boxWrap_itemIcons}>
                                <img src={item.img} alt={item.photoDescr} />
                            </div>
                            <div className={style.relevant__boxWrap_itemTitle}>{item.title}</div>
                            <div className={style.relevant__boxWrap_itemDescr}>{item.descr}</div>
                            <span></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Relevant;