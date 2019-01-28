import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
            edges {
                node {
                    title
                    url
                    createdAt
                }
            }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
            title = {data.site.siteMetadata.title}
            meta = {[
                { name : 'description', content: data.site.siteMetadata.description },
                { name: 'keyword', content : data.site.siteMetadata.keywords}
            ]}
        />
        <Header/>
        {children}
        <Footer data={data}>
            Backgrounds made in Chinese 4D, iOS app in Swift, site in React.<a href='mailto:viduy@outlook.com'>Email us</a> to ask anything.© 2019
        </Footer>
      </>
    )}
  />
)

// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header/>
//     {children}
//   </div>
// )

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `


