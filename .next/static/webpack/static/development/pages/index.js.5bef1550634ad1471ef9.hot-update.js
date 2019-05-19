webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/Row.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "./node_modules/react-bootstrap/Jumbotron.js");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/InputGroup.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/FormControl.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/Navbar.jsx";














class Portal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "appRoot", null);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.appRoot = document.getElementById('root');
    this.appRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.appRoot.removeChild(this.el);
  }

  render() {
    return react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.createPortal(this.props.children, this.el);
  }

}

class CouponItNavbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mainHeader", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      showPortal: false
    });

    this.mainHeader = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  }

  componentDidMount() {
    console.log(this.mainHeader);
  }

  handleToggleClick() {
    this.setState({
      showPortal: !this.state.showPortal
    });
  }

  render() {
    const categories = ["Apparel", "Automotive", "Computers", "Credit Cards", "Electronics", "Games", "Grocery", "Travel", "More"];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        zIndex: 1021
      },
      bg: "white",
      ref: this.mainHeader,
      variant: "light",
      className: "position-sticky sticky-top shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/logo.png",
      alt: "Coupon Logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a.Collapse, {
      className: "ml-auto",
      id: "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      href: "#home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Deals"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      href: "#link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Coupons"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      href: "#link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Tips"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      href: "#link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Contests"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a, {
      inline: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13___default.a, {
      type: "text",
      placeholder: "Search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Append, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Search")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/flash-offer.png",
      alt: "Flash offer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a.Toggle, {
      as: "span",
      className: "d-block border-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "./static/ico-menu.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), " Menu"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        top: 77
      },
      bg: "white",
      variant: "light",
      className: "position-sticky sticky-top shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, categories.map(category => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      className: "px-3 py-2 text-center",
      key: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "d-block mx-auto mb-1",
      height: "36",
      src: `./static/categories/${category.toLowerCase().split(' ').join("-")}.svg`,
      alt: "Flash offer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, category))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10___default.a, {
      fluid: true,
      className: "page-hero position-relative text-center text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Cashback offers + Discount Offers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      sm: {
        span: 8,
        offset: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "p-1 bg-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Prepend, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Toggle, {
      onClick: this.handleToggleClick.bind(this),
      variant: "light",
      id: "dropdown-basic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Dropdown Button"), this.state.showPortal && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Portal, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, categories.map(category => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
      key: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, category)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13___default.a, {
      placeholder: "Search offers and discount coupons",
      className: "border-0 outline-0 shadow-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Append, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Find Coupons")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Explore more to start earning offers and discounts"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CouponItNavbar);

/***/ })

})
//# sourceMappingURL=index.js.5bef1550634ad1471ef9.hot-update.js.map