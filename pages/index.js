import Header from "../components/Header"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import HomeGrid from "../components/HomeGrid"
import Widgets from "../components/Widgets"

function Home() {
    const moreMeta = <meta name="charset" content="utf-8" />
    const meta = [
        { "name": "keyword", "content": "keywords Test" },
        { "name": "description", "content": "HURRAY"}
    ]
    return <>
        <Header moreMeta={ moreMeta } title="Home" meta={ meta } showHero={ true }></Header>
        <Container>
            <Row>
                <Col md="9" sm="8">
                    <HomeGrid label="Popular Coupon Categories" api="./static/mock.json"></HomeGrid>
                    <HomeGrid label="Brands" api="./static/mock.json"></HomeGrid>
                </Col>
                <Col md="3" sm="4">
                    <Widgets />
                </Col>
            </Row>
        </Container>
    </>;
}

export default Home;