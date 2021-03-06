import React from 'react';
import PropTypes from "prop-types"
import Head from 'next/head'
import Manifest from 'next-manifest/manifest'

import Navbar from "./Navbar"

/**
 * 
 * Takes Meta information
 * Renders page header.
 * @prop title | page title
 * @prop meta | all named meta tags with content
 * @prop moreMeta | a valid React node
 */    
const Header = ({ title, meta, moreMeta, showHero}) => {
    {
        return <>
            <Head>
                <title>{ title }</title>
                <link href="./static/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="./static/app.css" rel="stylesheet" type="text/css" />
                <link rel="shortcut icon" href="./static/favicon.ico" type="image/x-icon" />
                <Manifest />
                {
                    meta.map((metaProp, i) => <meta key={ `meta-${i}` } { ...metaProp } />
                    )
                }
                { moreMeta }
            </Head>
            <Navbar showHero={ showHero }></Navbar>
        </>;
      }
}

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired)
    ),
    moreMeta: PropTypes.node,
    showHero: PropTypes.bool
}

Header.defaultProps = {
    title: "Coupon It",
    meta: [],
    moreMeta: null,
    showHero: false,
}