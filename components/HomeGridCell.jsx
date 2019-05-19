import React from "react"
import PropTypes from "prop-types"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Figure from "react-bootstrap/Figure"
import { nameTrimmer } from "../helpers/nameTrimmer"

const HomeGridCell = ({ cell }) => (
    <Card className="w-100 py-2 px-3 my-3 justify-content-center">
        <Figure as={ Row } className="d-flex align-items-center px-0">
            <Col className="figure-image pr-0 text-center">
                <Figure.Image
                    className="m-0"
                    alt={ cell }
                    src={ `./static/${ nameTrimmer(cell) }.png` }
                />
            </Col>
            <Figure.Caption as={Col}>
                { cell }
            </Figure.Caption>
        </Figure>
    </Card>
)


export default HomeGridCell

HomeGridCell.propTypes = {
    cell: PropTypes.string.isRequired
}