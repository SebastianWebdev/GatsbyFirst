import React from 'react';
import Menu from '../components/menu'
import styles from '../styles/header.module.css'
import { graphql, useStaticQuery } from 'gatsby';
const Header = props => {
    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata{
            tittle
            
          }
        }
      }
    `)
    return (
        <header>
            <h1 className={styles.tittle}>{data.site.siteMetadata.tittle}</h1>
            <Menu />
        </header>
    );
}

export default Header;