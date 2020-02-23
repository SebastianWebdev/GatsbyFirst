import React from 'react';
import styles from './footer.module.css'
import { graphql, useStaticQuery } from 'gatsby';
const Footer = props => {
    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata{
            author
            
          }
        }
      }`)
    return (
        <footer className={styles.footer}>
            <h4>{data.site.siteMetadata.author} © {new Date().getFullYear()}</h4>
        </footer>
    );
}

export default Footer;