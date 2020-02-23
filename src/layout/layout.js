import React from 'react';
import Footer from '../components/footer'
import Aside from '../components/asside'
import Header from '../components/header'
import styles from './layout.module.css'
const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>

                <main className={`${styles.column} ${styles.main}`}>
                    {props.children}
                </main>
                <Aside class={styles.column} />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;