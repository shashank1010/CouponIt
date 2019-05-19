import React, { Suspense } from "react"
import PropTypes from "prop-types"

import HomeGridCells from "./HomeGridCells"

class HomeGrid extends React.Component{
    render() {
        return (
            <section className="mb-5">
                <h1 className="d-flex section-header">
                    <span>{ this.props.label } </span>
                    <span className="ml-2"><img src="./static/header-style.svg" /></span>
                </h1>
                <HomeGridCells api={this.props.api} />
            </section>
        )
    }
}

export default HomeGrid

HomeGrid.propTypes = {
    label: PropTypes.string.isRequired,
    api: PropTypes.string.isRequired
}