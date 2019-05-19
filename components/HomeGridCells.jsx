import React from "react"
import PropTypes from "prop-types"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import HomeGridCell from "./HomeGridCell"

const Spinner = () => (
    <Card bg="dark" className="p-5 my-4" text="white">
        <img src="./static/loader.svg" width="50" className="mx-auto" />
        <p className="m-0 mt-3 text-center">Loading</p>
    </Card>
)

const getRandomIndex = (list) => Math.floor(Math.random() * list.length)
const getRandom = (list) => {
    let listClone = [ ...list  ]
    const newList = []

    do{
        const index = getRandomIndex(listClone)
        newList.push(listClone[index])
        listClone.splice(index, 1)
    } while (listClone.length > 0)

    return newList
}

class HomeGridCells extends React.Component{
    state ={
        loaded: false,
        cells: [],
        loadedCount: 8
    }

    clickedCount = 0

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        this.setState({
            loaded: false
        })
        fetch(this.props.api)
        .then(res => res.json())
        .then(cells => {
            const newCells = getRandom(cells)
            const randomCount = this.clickedCount < 5 ? getRandomIndex(newCells) : 0

            this.clickedCount++
            newCells.splice(0, this.state.loadedCount)

            setTimeout(() => {
                this.setState({
                    loaded: true,
                    loadedCount: randomCount,
                    cells: [ ...this.state.cells, ...newCells]
                })
            }, 2000)

        });

        return false;
    }

    render() {
        const {loaded, cells, loadedCount} = this.state;
        const cellMap = cells.map((cell, i) => <Col className="d-flex justify-content-stretch" xs="2" sm="3" key={i}><HomeGridCell cell={ cell } /></Col>)
        const hasCells = cellMap.length > 0

        return (
            <>
                {
                    hasCells &&
                    <Row className="mx-n3">
                        { cellMap }
                    </Row>
                }
                {
                    !loaded &&
                    <Spinner /> 
                }
                {
                    loaded && hasCells && loadedCount !== 0
                    ? (
                        <Card>
                            <Button variant="link" onClick={ this.fetchData.bind(this) } style={{ color: 'inherit' }}>Load More</Button>
                        </Card>
                    ) : 
                        loaded && (
                            <Card text="white" bg="info">
                                <Button variant="link" disabled={true} onClick={ () => false } style={{ color: 'inherit' }}> {hasCells ? "All Items Loaded" : "No Items Found"} </Button>
                            </Card>
                        )
                }
            </>
        )
    }
};

export default HomeGridCells

HomeGridCells.propTypes = {
    api: PropTypes.string.isRequired
}