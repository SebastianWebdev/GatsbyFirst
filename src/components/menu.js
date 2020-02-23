import React from 'react';
import { Link } from 'gatsby';
import styles from '../styles/menu.module.css'
const Menu = props => {
    return (
        <nav className={`${styles.container} ${styles.menu}`}>
            <ul className={styles.container}>
                <li className={styles.item}><Link to="about">O mnie</Link></li>
                <li className={styles.item} ><Link to="blog">Blog</Link></li>
                <li className={styles.item} >Item 3</li>
            </ul>
        </nav>
    );
}

export default Menu;