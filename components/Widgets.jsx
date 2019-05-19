import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Widget1 = ({ name }) => {
    console.log(name)
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
            </Card>
            <Card>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
            </Card>
        </Accordion>
    )
}
const Widget2 = ({ name }) => {
    console.log(name)
    return null
}
const Widget3 = ({ name }) => {
    console.log(name)
    return null
}

const Widget = ({ component: Component, ...otherProps }) => <Component {...otherProps} />

const Widgets = () => {
    return <>
        <Widget component={ Widget1 } name="Widget1" />
        <Widget component={ Widget2 } name="Widget2" />
        <Widget component={ Widget3 } name="Widget3" />
    </>
}

export default Widgets