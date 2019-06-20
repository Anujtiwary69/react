/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Slider from './slider';
import Booking from './Booking';
import HotDeals from './HotDeals';
import Stay from './Stay';
import FineDine from './FineDine';
import Guest from './Guest';
import LiveFeeds from './LiveFeeds';
import Footer from './Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Slider />
        <Booking/>
        <HotDeals/>
        <Stay/>
        <FineDine/>
        <Guest/>
        <LiveFeeds/>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
