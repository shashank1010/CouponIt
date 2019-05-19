import React from "react"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const Widget1 = ({ name }) => {
    return (
        <Card text="white">
            <Card.Img variant="top" src="./static/header-img.png" />
            <div className="widget-1 px-2">
                <Card.Body className="py-2 border-0 px-2"><Card.Subtitle as="small" className="m-0">Related Topics</Card.Subtitle></Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-white border-top-0 pt-0 px-2">Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className="text-white px-2">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className="text-white px-2">Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        </Card>
    )
}
const Widget2 = ({ name, list }) => (
    <ListGroup className="widget-2 flex-row" variant="flush">
        {
            list.map((item, i) => (
                <ListGroup.Item key={i} className="p-0 border-0 d-flex flex-column justify-content-center" style={{ backgroundImage: `url(./static/${ i+1 }.png)`}}>
                    { item.split(" ").map((word) => <span  key={ word } className="py-3 prop-name">{ word }</span>) }
                </ListGroup.Item>
            ))
        }
    </ListGroup>
)
const Widget3 = ({ name }) => {
    return <Image fluid src="./static/ad-img.png" />
}

const Widget = ({ component: Component, ...otherProps }) => <aside className="widget my-4"><Component {...otherProps} /></aside>

const Widgets = () => {
    return <div className="widgets">
        <h1 className="section-header">&nbsp;</h1>
        <Widget component={ Widget1 } name="Widget1" />
        <Widget component={ Widget2 } name="Widget2" list={[ "Beaches", "City Tours", "Deserts" ]} />
        <Widget component={ Widget3 } name="Widget3" />
    </div>
}

export default Widgets