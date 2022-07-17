import React from "react";
import styles from './BlogFirstsScrin.module.scss';
import ChildrenImg from '../../resources/img/Blog/children.png'

const BlogFirstsScrin = () => {

    return (
        <div className={styles.blogFirstsScrin}>
            <div className={styles.blogFirstsScrin__wrapper}>
                <div className={styles.blogFirstsScrin__title}>most recent post</div>
                <div className={styles.blogFirstsScrin__mainPost}>
                    <div className={styles.blogFirstsScrin__mainPost_img}>
                        <img src={ChildrenImg} alt="ChildrenImg" />
                    </div>
                    <div className={styles.blogFirstsScrin__mainPost_dscr}>
                        <div className={styles.blogFirstsScrin__mainPost_dscrTilte}>Church was doing what he often did when dropped An oracle </div>
                        <div className={styles.blogFirstsScrin__mainPost_dscrText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div>
                        <div className={styles.blogFirstsScrin__mainPost_dscrBtn}>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogFirstsScrin;