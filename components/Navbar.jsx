import React from 'react'
import PropTypes from "prop-types"

import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"
import Dropdown from "react-bootstrap/Dropdown"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

class CouponItNavbar extends React.Component {
	mainHeader = null
	constructor(props) {
		super(props)
		this.mainHeader = React.createRef()
	}
	componentDidMount() {
		console.log(this.mainHeader)
	}
	render() {
		const categories = [
			"Apparel", "Automotive", "Computers", "Credit Cards", "Electronics", "Games",
			"Grocery", "Travel", "More"
		]

		return <>
			<Navbar style={{ zIndex: 1021 }} bg="white" ref={this.mainHeader} variant="light" className="position-sticky sticky-top shadow-sm">
				<Container>
					<Navbar.Brand>
						<img src="./static/logo.png" alt="Coupon Logo" />
					</Navbar.Brand>
					<Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Deals</Nav.Link>
							<Nav.Link href="#link">Coupons</Nav.Link>
							<Nav.Link href="#link">Tips</Nav.Link>
							<Nav.Link href="#link">Contests</Nav.Link>
						</Nav>
					</Navbar.Collapse>

					<Form inline>
						<InputGroup>
							<FormControl type="text" placeholder="Search" />
							<InputGroup.Append>
								<Button variant="danger">Search</Button>
							</InputGroup.Append>
						</InputGroup>
					</Form>
					<Nav.Item className="px-3">
						<img src="./static/flash-offer.png" alt="Flash offer" />
					</Nav.Item>
					<Navbar.Toggle as="span" className="d-block border-0">
						<img src="./static/ico-menu.svg" /> Menu
					</Navbar.Toggle>
				</Container>
			</Navbar>
			{/* this.mainHeader ? this.mainHeader.current.height : */}
			<Navbar style={{ top: 77 }} bg="white" variant="light" className="position-sticky sticky-top shadow-sm">
				<Container>
					{
						categories.map((category) => (
							<Nav.Item className="px-3 py-2 text-center" key={category}>
								<img className="d-block mx-auto mb-1" height="36" src={`./static/categories/${category.toLowerCase().split(' ').join("-")}.svg`} alt="Flash offer" />
								<small>{category}</small>
							</Nav.Item>
						))
					}
				</Container>
			</Navbar>

			{
			this.props.showHero &&
			<Jumbotron fluid className="page-hero position-relative text-center text-white">
				<Container className="py-5">
					<h1>Cashback offers + Discount Offers</h1>
					<Row className="my-5">
						<Col sm={{ span: 8, offset: 2 }}>
							<Form className="p-1 bg-white d-flex">
								<Dropdown>
									<Dropdown.Toggle variant="light" id="dropdown-basic">
										Dropdown Button
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{
											categories.map((category) => <Dropdown.Item key={category}>{category}</Dropdown.Item>)
										}
									</Dropdown.Menu>
								</Dropdown>
								<FormControl placeholder="Search offers and discount coupons" className="border-0 outline-0 shadow-none"></FormControl>
								<Button variant="danger" className="text-nowrap">Find Coupons</Button>
							</Form>
						</Col>
					</Row>
					<p>
						Explore more to start earning offers and discounts
					</p>
					<img src="./static/mouse.svg" />
				</Container>
			</Jumbotron>
			}
		</>
	}
}

export default CouponItNavbar
CouponItNavbar.propTypes = {
	showHero: PropTypes.bool
}

CouponItNavbar.defaultProps = {
	showHero: false
}