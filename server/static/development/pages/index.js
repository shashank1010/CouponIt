module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.jsx");

var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/Header.jsx";





/**
 * 
 * Takes Meta information
 * Renders page header.
 * @prop title | page title
 * @prop meta | all named meta tags with content
 * @prop moreMeta | a valid React node
 */

const Header = ({
  title,
  meta,
  moreMeta,
  showHero
}) => {
  {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      href: "./static/app.css",
      rel: "stylesheet",
      type: "text/css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }), meta.map((metaProp, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: `meta-${i}`
    }, metaProp, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }))), moreMeta), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showHero: showHero,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Header);
Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired)),
  moreMeta: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  showHero: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
Header.defaultProps = {
  title: "Coupon It",
  meta: [],
  moreMeta: null,
  showHero: false
};

/***/ }),

/***/ "./components/HomeGrid.jsx":
/*!*********************************!*\
  !*** ./components/HomeGrid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomeGridCells__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeGridCells */ "./components/HomeGridCells.jsx");
var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/HomeGrid.jsx";




class HomeGrid extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "d-flex section-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, this.props.label, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./static/header-style.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeGridCells__WEBPACK_IMPORTED_MODULE_2__["default"], {
      api: this.props.api,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeGrid);
HomeGrid.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  api: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./components/HomeGridCell.jsx":
/*!*************************************!*\
  !*** ./components/HomeGridCell.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Figure */ "react-bootstrap/Figure");
/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_nameTrimmer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/nameTrimmer */ "./helpers/nameTrimmer.js");
var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/HomeGridCell.jsx";








const HomeGridCell = ({
  cell
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
  className: "w-100 py-2 px-3 my-3 justify-content-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_5___default.a, {
  as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a,
  className: "d-flex align-items-center px-0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "figure-image pr-0 text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_5___default.a.Image, {
  className: "m-0",
  alt: cell,
  src: `./static/${Object(_helpers_nameTrimmer__WEBPACK_IMPORTED_MODULE_6__["nameTrimmer"])(cell)}.png`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_5___default.a.Caption, {
  as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, cell)));

/* harmony default export */ __webpack_exports__["default"] = (HomeGridCell);
HomeGridCell.propTypes = {
  cell: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./components/HomeGridCells.jsx":
/*!**************************************!*\
  !*** ./components/HomeGridCells.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HomeGridCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomeGridCell */ "./components/HomeGridCell.jsx");

var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/HomeGridCells.jsx";








const Spinner = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
  bg: "dark",
  className: "p-5 my-4",
  text: "white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: "./static/loader.svg",
  width: "50",
  className: "mx-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: "m-0 mt-3 text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Loading"));

const getRandomIndex = list => Math.floor(Math.random() * list.length);

const getRandom = list => {
  let listClone = [...list];
  const newList = [];

  do {
    const index = getRandomIndex(listClone);
    newList.push(listClone[index]);
    listClone.splice(index, 1);
  } while (listClone.length > 0);

  return newList;
};

class HomeGridCells extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      loaded: false,
      cells: [],
      loadedCount: 8
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "clickedCount", 0);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      loaded: false
    });
    fetch(this.props.api).then(res => res.json()).then(cells => {
      const newCells = getRandom(cells);
      const randomCount = this.clickedCount < 5 ? getRandomIndex(newCells) : 0;
      this.clickedCount++;
      newCells.splice(0, this.state.loadedCount);
      setTimeout(() => {
        this.setState({
          loaded: true,
          loadedCount: randomCount,
          cells: [...this.state.cells, ...newCells]
        });
      }, 2000);
    });
    return false;
  }

  render() {
    const {
      loaded,
      cells,
      loadedCount
    } = this.state;
    const cellMap = cells.map((cell, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "d-flex justify-content-stretch",
      xs: "6",
      sm: "3",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HomeGridCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      cell: cell,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })));
    const hasCells = cellMap.length > 0;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, hasCells && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "mx-n3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, cellMap), !loaded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Spinner, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), loaded && hasCells && loadedCount !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "link",
      onClick: this.fetchData.bind(this),
      style: {
        color: 'inherit'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Load More")) : loaded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      text: "white",
      bg: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "link",
      disabled: true,
      onClick: () => false,
      style: {
        color: 'inherit'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, " ", hasCells ? "All Items Loaded" : "No Items Found", " ")));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (HomeGridCells);
HomeGridCells.propTypes = {
  api: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "react-bootstrap/Jumbotron");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "react-bootstrap/InputGroup");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helpers_nameTrimmer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helpers/nameTrimmer */ "./helpers/nameTrimmer.js");
var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/Navbar.jsx";
















class CouponItNavbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const categories = ["Apparel", "Automotive", "Computers", "Credit Cards", "Electronics", "Games", "Grocery", "Travel", "More"];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        zIndex: 1021
      },
      bg: "white",
      variant: "light",
      className: "position-sticky sticky-top shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
      src: "./static/logo.png",
      alt: "Coupon Logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a.Collapse, {
      className: "ml-auto",
      id: "coupons-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "ml-auto open-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Deals"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
      active: true,
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Coupons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Tips"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Contests"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default.a, {
      inline: true,
      className: "search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
      src: "./static/ico-search.svg",
      className: "search-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13___default.a, {
      type: "text",
      placeholder: "Search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_12___default.a.Append, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Search")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      className: "px-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
      src: "./static/flash-offer.png",
      alt: "Flash offer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a.Toggle, {
      as: "span",
      className: "d-block border-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6___default.a, {
      src: "./static/ico-menu.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), " Menu"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      style: {
        top: 77
      },
      bg: "white",
      variant: "light",
      className: "position-sticky sticky-top shadow-sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, categories.map(category => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      className: "px-3 py-2 text-center",
      key: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "d-block mx-auto mb-1",
      height: "36",
      src: `./static/categories/${Object(_helpers_nameTrimmer__WEBPACK_IMPORTED_MODULE_14__["nameTrimmer"])(category)}.svg`,
      alt: "Flash offer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, category))))), this.props.showHero && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_10___default.a, {
      fluid: true,
      className: "page-hero position-relative text-center text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: "py-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Cashback offers + Discount Offers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "my-5 d-sm-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      sm: {
        span: 8,
        offset: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "p-1 bg-white d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Toggle, {
      variant: "light",
      id: "dropdown-basic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Dropdown Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Menu, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, categories.map(category => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
      key: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, category)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_13___default.a, {
      placeholder: "Search offers and discount coupons",
      className: "border-0 outline-0 shadow-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "danger",
      className: "text-nowrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Find Coupons")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Explore more to start earning offers and discounts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./static/mouse.svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CouponItNavbar);
CouponItNavbar.propTypes = {
  showHero: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
CouponItNavbar.defaultProps = {
  showHero: false
};

/***/ }),

/***/ "./components/Widgets.jsx":
/*!********************************!*\
  !*** ./components/Widgets.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "react-bootstrap/ListGroup");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/components/Widgets.jsx";





const Widget1 = ({
  name
}) => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    text: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Img, {
    variant: "top",
    src: "./static/header-img.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "widget-1 px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Body, {
    className: "py-2 border-0 px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default.a.Subtitle, {
    as: "small",
    className: "m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Related Topics")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "flush",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    className: "text-white border-top-0 pt-0 px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    className: "text-white px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Dapibus ac facilisis in"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    className: "text-white px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Vestibulum at eros"))));
};

const Widget2 = ({
  name,
  list
}) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "widget-2 flex-row",
  variant: "flush",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, list.map((item, i) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
  key: i,
  className: "p-0 border-0 d-flex flex-column justify-content-center",
  style: {
    backgroundImage: `url(./static/${i + 1}.png)`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, item.split(" ").map(word => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
  key: word,
  className: "py-3 prop-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, word)))));

const Widget3 = ({
  name
}) => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fluid: true,
    src: "./static/ad-img.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  });
};

const Widget = (_ref) => {
  let {
    component: Component
  } = _ref,
      otherProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
    className: "widget my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })));
};

const Widgets = () => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "widgets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "section-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Widget, {
    component: Widget1,
    name: "Widget1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Widget, {
    component: Widget2,
    name: "Widget2",
    list: ["Beaches", "City Tours", "Deserts"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Widget, {
    component: Widget3,
    name: "Widget3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Widgets);

/***/ }),

/***/ "./helpers/nameTrimmer.js":
/*!********************************!*\
  !*** ./helpers/nameTrimmer.js ***!
  \********************************/
/*! exports provided: nameTrimmer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameTrimmer", function() { return nameTrimmer; });
const nameTrimmer = string => string.toLowerCase().split(' ').join("-");



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HomeGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeGrid */ "./components/HomeGrid.jsx");
/* harmony import */ var _components_Widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Widgets */ "./components/Widgets.jsx");
var _jsxFileName = "/shashank/Projects/tests/direct-i/coupon-it/pages/index.js";








function Home() {
  const moreMeta = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "charset",
    content: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
  const meta = [{
    "name": "keyword",
    "content": "keywords Test"
  }, {
    "name": "description",
    "content": "HURRAY"
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    moreMeta: moreMeta,
    title: "Home",
    meta: meta,
    showHero: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    md: "9",
    sm: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Popular Coupon Categories",
    api: "./static/mock.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomeGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Brands",
    api: "./static/mock.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    md: "3",
    sm: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Widgets__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /shashank/Projects/tests/direct-i/coupon-it/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-bootstrap/Figure":
/*!*****************************************!*\
  !*** external "react-bootstrap/Figure" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Figure");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/InputGroup":
/*!*********************************************!*\
  !*** external "react-bootstrap/InputGroup" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/InputGroup");

/***/ }),

/***/ "react-bootstrap/Jumbotron":
/*!********************************************!*\
  !*** external "react-bootstrap/Jumbotron" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Jumbotron");

/***/ }),

/***/ "react-bootstrap/ListGroup":
/*!********************************************!*\
  !*** external "react-bootstrap/ListGroup" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map