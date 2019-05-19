import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import PropTypes from "prop-types"
import Head from 'next/head'

import Navbar from "./Navbar"

/**
 * 
 * Takes Meta information
 * Renders page header.
 * @prop title | page title
 * @prop meta | all named meta tags with content
 * @prop moreMeta | a valid React node
 */    
class Header extends React.Component {
  render() {
    console.log(this.props)
    return <>
        <Head>
            <title>{ this.props.title }</title>
            <link href="./static/app.css" rel="stylesheet" type="text/css" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {
                this.props.meta.map((metaProp, i) => <meta key={ `meta-${i}` } { ...metaProp } />
                )
            }
            { this.props.moreMeta }
        </Head>
        <Navbar showHero={ true }></Navbar>

    </>;
  }
}

export default Header;

Header.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired)
    ),
    moreMeta: PropTypes.node
}

Header.defaultProps = {
    title: "Coupon It",
    meta: [],
    moreMeta: null
}