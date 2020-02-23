import React from 'react';
import Layout from '../layout/layout'
import Post from '../components/post'
import { graphql, useStaticQuery } from 'gatsby'
const Blog = (props) => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                tittle
                date
              }
              html
              excerpt
            }
          }
        }
      }
`)
    const { edges } = data.allMarkdownRemark
    const posts = edges.map(item => {
        const { tittle, date } = item.node.frontmatter
        return <Post tittle={tittle} date={date} />

    })


    return (
        <Layout>
            <h1>Tutaj jest strona główna w blogu</h1>
            <section>
                {posts}
            </section>
        </Layout>
    );
}

export default Blog;