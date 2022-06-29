import React from 'react';
import style from '../Relevant/Relevant.module.scss';
import Palm from '../../../resources/img/relevantImg/Icon.png';
import Involved from '../../../resources/img/relevantImg/icon(2).png';
import Like from '../../../resources/img/relevantImg/icon(3).png';

const Relevant = () => {


    return(
        <div className={style.relevant}>
            <div className={style.relevant__wrapper}>
                <div className={style.relevant__title}>a church that's relevant</div>
                <div className={style.relevant__boxWrap}>
                    <div className={style.relevant__boxWrap_item}>
                        <div className={style.relevant__boxWrap_itemIcons}>
                            <img src={Palm} alt="Palm" />
                        </div>
                        <div className={style.relevant__boxWrap_itemTitle}>About us</div>
                        <div className={style.relevant__boxWrap_itemDescr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <span></span>
                    </div>
                    <div className={style.relevant__boxWrap_item}>
                        <div className={style.relevant__boxWrap_itemIcons}>
                            <img src={Involved} alt="Involved" />
                        </div>
                        <div className={style.relevant__boxWrap_itemTitle}>Get involved</div>
                        <div className={style.relevant__boxWrap_itemDescr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <span></span>
                    </div>
                    <div className={style.relevant__boxWrap_item}>
                        <div className={style.relevant__boxWrap_itemIcons}>
                            <img src={Like} alt="Like" />
                        </div>
                        <div className={style.relevant__boxWrap_itemTitle}>Giving back</div>
                        <div className={style.relevant__boxWrap_itemDescr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relevant;