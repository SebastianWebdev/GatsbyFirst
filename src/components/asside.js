import React from 'react';
import styles from '../styles/aside.module.css'
const Aside = props => {
    return (
        <aside className={`${props.class} ${styles.container}`}>
            <ul>
                <li>Jakiś tam artykuł</li>
                <li>Jakiś tam artykuł</li>
                <li>Jakiś tam artykuł</li>
            </ul>
            <div className="ficzer">

            </div>
        </aside>
    );
}

export default Aside;