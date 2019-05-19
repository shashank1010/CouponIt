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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1la3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nameTrimmer; });
var nameTrimmer = function nameTrimmer(string) {
  return string.toLowerCase().split(' ').join("-");
};



/***/ }),

/***/ "2S/i":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6rvL":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "9Fh0":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Figure");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Cgje":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__("6rvL");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);

// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__("flur");
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);

// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__("tfHl");
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);

// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__("2S/i");
var Form_default = /*#__PURE__*/__webpack_require__.n(Form_);

// EXTERNAL MODULE: external "react-bootstrap/Image"
var Image_ = __webpack_require__("REKQ");
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__("vVTy");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__("lFrT");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);

// EXTERNAL MODULE: external "react-bootstrap/Dropdown"
var Dropdown_ = __webpack_require__("SibU");
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown_);

// EXTERNAL MODULE: external "react-bootstrap/Jumbotron"
var Jumbotron_ = __webpack_require__("SR8o");
var Jumbotron_default = /*#__PURE__*/__webpack_require__.n(Jumbotron_);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__("vDuQ");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "react-bootstrap/InputGroup"
var InputGroup_ = __webpack_require__("zUlE");
var InputGroup_default = /*#__PURE__*/__webpack_require__.n(InputGroup_);

// EXTERNAL MODULE: external "react-bootstrap/FormControl"
var FormControl_ = __webpack_require__("djS3");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: ./helpers/nameTrimmer.js
var nameTrimmer = __webpack_require__("1la3");

// CONCATENATED MODULE: ./components/Navbar.jsx




















var Navbar_CouponItNavbar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(CouponItNavbar, _React$Component);

  function CouponItNavbar() {
    Object(classCallCheck["a" /* default */])(this, CouponItNavbar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CouponItNavbar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CouponItNavbar, [{
    key: "render",
    value: function render() {
      var categories = ["Apparel", "Automotive", "Computers", "Credit Cards", "Electronics", "Games", "Grocery", "Travel", "More"];
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Navbar_default.a, {
        style: {
          zIndex: 1021
        },
        bg: "white",
        variant: "light",
        className: "position-sticky sticky-top shadow-sm"
      }, external_react_default.a.createElement(Container_default.a, null, external_react_default.a.createElement(Navbar_default.a.Brand, null, external_react_default.a.createElement(Image_default.a, {
        src: "./static/logo.png",
        alt: "Coupon Logo"
      })), external_react_default.a.createElement(Navbar_default.a.Collapse, {
        className: "ml-auto",
        id: "coupons-nav"
      }, external_react_default.a.createElement(Nav_default.a, {
        className: "ml-auto open-menu"
      }, external_react_default.a.createElement(Nav_default.a.Link, {
        className: "px-3"
      }, "Deals"), external_react_default.a.createElement(Nav_default.a.Link, {
        active: true,
        className: "px-3"
      }, "Coupons"), external_react_default.a.createElement(Nav_default.a.Link, {
        className: "px-3"
      }, "Tips"), external_react_default.a.createElement(Nav_default.a.Link, {
        className: "px-3"
      }, "Contests"))), external_react_default.a.createElement(Form_default.a, {
        inline: true,
        className: "search"
      }, external_react_default.a.createElement(Image_default.a, {
        src: "./static/ico-search.svg",
        className: "search-icon"
      }), external_react_default.a.createElement(InputGroup_default.a, null, external_react_default.a.createElement(FormControl_default.a, {
        type: "text",
        placeholder: "Search"
      }), external_react_default.a.createElement(InputGroup_default.a.Append, null, external_react_default.a.createElement(Button_default.a, {
        variant: "danger"
      }, "Search")))), external_react_default.a.createElement(Nav_default.a.Item, {
        className: "px-3"
      }, external_react_default.a.createElement(Image_default.a, {
        src: "./static/flash-offer.png",
        alt: "Flash offer"
      })), external_react_default.a.createElement(Navbar_default.a.Toggle, {
        as: "span",
        className: "d-block border-0"
      }, external_react_default.a.createElement(Image_default.a, {
        src: "./static/ico-menu.svg"
      }), " Menu"))), external_react_default.a.createElement(Navbar_default.a, {
        style: {
          top: 77
        },
        bg: "white",
        variant: "light",
        className: "position-sticky sticky-top shadow-sm"
      }, external_react_default.a.createElement(Container_default.a, null, categories.map(function (category) {
        return external_react_default.a.createElement(Nav_default.a.Item, {
          className: "px-3 py-2 text-center",
          key: category
        }, external_react_default.a.createElement("img", {
          className: "d-block mx-auto mb-1",
          height: "36",
          src: "./static/categories/".concat(Object(nameTrimmer["a" /* nameTrimmer */])(category), ".svg"),
          alt: "Flash offer"
        }), external_react_default.a.createElement("small", null, category));
      }))), this.props.showHero && external_react_default.a.createElement(Jumbotron_default.a, {
        fluid: true,
        className: "page-hero position-relative text-center text-white"
      }, external_react_default.a.createElement(Container_default.a, {
        className: "py-5"
      }, external_react_default.a.createElement("h1", null, "Cashback offers + Discount Offers"), external_react_default.a.createElement(Row_default.a, {
        className: "my-5 d-sm-none"
      }, external_react_default.a.createElement(Col_default.a, {
        sm: {
          span: 8,
          offset: 2
        }
      }, external_react_default.a.createElement(Form_default.a, {
        className: "p-1 bg-white d-flex"
      }, external_react_default.a.createElement(Dropdown_default.a, null, external_react_default.a.createElement(Dropdown_default.a.Toggle, {
        variant: "light",
        id: "dropdown-basic"
      }, "Dropdown Button"), external_react_default.a.createElement(Dropdown_default.a.Menu, null, categories.map(function (category) {
        return external_react_default.a.createElement(Dropdown_default.a.Item, {
          key: category
        }, category);
      }))), external_react_default.a.createElement(FormControl_default.a, {
        placeholder: "Search offers and discount coupons",
        className: "border-0 outline-0 shadow-none"
      }), external_react_default.a.createElement(Button_default.a, {
        variant: "danger",
        className: "text-nowrap"
      }, "Find Coupons")))), external_react_default.a.createElement("p", null, "Explore more to start earning offers and discounts"), external_react_default.a.createElement("img", {
        src: "./static/mouse.svg"
      }))));
    }
  }]);

  return CouponItNavbar;
}(external_react_default.a.Component);

/* harmony default export */ var Navbar = (Navbar_CouponItNavbar);
Navbar_CouponItNavbar.defaultProps = {
  showHero: false
};
// CONCATENATED MODULE: ./components/Header.jsx





/**
 * 
 * Takes Meta information
 * Renders page header.
 * @prop title | page title
 * @prop meta | all named meta tags with content
 * @prop moreMeta | a valid React node
 */

var Header_Header = function Header(_ref) {
  var title = _ref.title,
      meta = _ref.meta,
      moreMeta = _ref.moreMeta,
      showHero = _ref.showHero;
  {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title), external_react_default.a.createElement("link", {
      href: "./static/app.css",
      rel: "stylesheet",
      type: "text/css"
    }), external_react_default.a.createElement("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }), meta.map(function (metaProp, i) {
      return external_react_default.a.createElement("meta", _extends({
        key: "meta-".concat(i)
      }, metaProp));
    }), moreMeta), external_react_default.a.createElement(Navbar, {
      showHero: showHero
    }));
  }
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);
Header_Header.defaultProps = {
  title: "Coupon It",
  meta: [],
  moreMeta: null,
  showHero: false
};

/***/ }),

/***/ "H3JU":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "Kjtv":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "REKQ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header.jsx + 2 modules
var Header = __webpack_require__("Cgje");

// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__("flur");
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);

// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__("tfHl");
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__("vDuQ");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "react-bootstrap/Card"
var Card_ = __webpack_require__("TKrA");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__("vVTy");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "react-bootstrap/Figure"
var Figure_ = __webpack_require__("9Fh0");
var Figure_default = /*#__PURE__*/__webpack_require__.n(Figure_);

// EXTERNAL MODULE: ./helpers/nameTrimmer.js
var nameTrimmer = __webpack_require__("1la3");

// CONCATENATED MODULE: ./components/HomeGridCell.jsx







var HomeGridCell_HomeGridCell = function HomeGridCell(_ref) {
  var cell = _ref.cell;
  return external_react_default.a.createElement(Card_default.a, {
    className: "w-100 py-2 px-3 my-3 justify-content-center"
  }, external_react_default.a.createElement(Figure_default.a, {
    as: Row_default.a,
    className: "d-flex align-items-center px-0"
  }, external_react_default.a.createElement(Col_default.a, {
    className: "figure-image pr-0 text-center"
  }, external_react_default.a.createElement(Figure_default.a.Image, {
    className: "m-0",
    alt: cell,
    src: "./static/".concat(Object(nameTrimmer["a" /* nameTrimmer */])(cell), ".png")
  })), external_react_default.a.createElement(Figure_default.a.Caption, {
    as: Col_default.a
  }, cell)));
};

/* harmony default export */ var components_HomeGridCell = (HomeGridCell_HomeGridCell);
// CONCATENATED MODULE: ./components/HomeGridCells.jsx















var HomeGridCells_Spinner = function Spinner() {
  return external_react_default.a.createElement(Card_default.a, {
    bg: "dark",
    className: "p-5 my-4",
    text: "white"
  }, external_react_default.a.createElement("img", {
    src: "./static/loader.svg",
    width: "50",
    className: "mx-auto"
  }), external_react_default.a.createElement("p", {
    className: "m-0 mt-3 text-center"
  }, "Loading"));
};

var getRandomIndex = function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
};

var HomeGridCells_getRandom = function getRandom(list) {
  var listClone = _toConsumableArray(list);

  var newList = [];

  do {
    var index = getRandomIndex(listClone);
    newList.push(listClone[index]);
    listClone.splice(index, 1);
  } while (listClone.length > 0);

  return newList;
};

var HomeGridCells_HomeGridCells =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(HomeGridCells, _React$Component);

  function HomeGridCells() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, HomeGridCells);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(HomeGridCells)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      loaded: false,
      cells: [],
      loadedCount: 8
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "clickedCount", 0);

    return _this;
  }

  Object(createClass["a" /* default */])(HomeGridCells, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      this.setState({
        loaded: false
      });
      fetch(this.props.api).then(function (res) {
        return res.json();
      }).then(function (cells) {
        var newCells = HomeGridCells_getRandom(cells);
        var randomCount = _this2.clickedCount < 5 ? getRandomIndex(newCells) : 0;
        _this2.clickedCount++;
        newCells.splice(0, _this2.state.loadedCount);
        setTimeout(function () {
          _this2.setState({
            loaded: true,
            loadedCount: randomCount,
            cells: [].concat(_toConsumableArray(_this2.state.cells), _toConsumableArray(newCells))
          });
        }, 2000);
      });
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loaded = _this$state.loaded,
          cells = _this$state.cells,
          loadedCount = _this$state.loadedCount;
      var cellMap = cells.map(function (cell, i) {
        return external_react_default.a.createElement(Col_default.a, {
          className: "d-flex justify-content-stretch",
          xs: "6",
          sm: "3",
          key: i
        }, external_react_default.a.createElement(components_HomeGridCell, {
          cell: cell
        }));
      });
      var hasCells = cellMap.length > 0;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, hasCells && external_react_default.a.createElement(Row_default.a, {
        className: "mx-n3"
      }, cellMap), !loaded && external_react_default.a.createElement(HomeGridCells_Spinner, null), loaded && hasCells && loadedCount !== 0 ? external_react_default.a.createElement(Card_default.a, null, external_react_default.a.createElement(Button_default.a, {
        variant: "link",
        onClick: this.fetchData.bind(this),
        style: {
          color: 'inherit'
        }
      }, "Load More")) : loaded && external_react_default.a.createElement(Card_default.a, {
        text: "white",
        bg: "info"
      }, external_react_default.a.createElement(Button_default.a, {
        variant: "link",
        disabled: true,
        onClick: function onClick() {
          return false;
        },
        style: {
          color: 'inherit'
        }
      }, " ", hasCells ? "All Items Loaded" : "No Items Found", " ")));
    }
  }]);

  return HomeGridCells;
}(external_react_default.a.Component);

;
/* harmony default export */ var components_HomeGridCells = (HomeGridCells_HomeGridCells);
// CONCATENATED MODULE: ./components/HomeGrid.jsx








var HomeGrid_HomeGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(HomeGrid, _React$Component);

  function HomeGrid() {
    Object(classCallCheck["a" /* default */])(this, HomeGrid);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(HomeGrid).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(HomeGrid, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        className: "mb-5"
      }, external_react_default.a.createElement("h1", {
        className: "d-flex section-header"
      }, external_react_default.a.createElement("span", null, this.props.label, " "), external_react_default.a.createElement("span", {
        className: "ml-2"
      }, external_react_default.a.createElement("img", {
        src: "./static/header-style.svg"
      }))), external_react_default.a.createElement(components_HomeGridCells, {
        api: this.props.api
      }));
    }
  }]);

  return HomeGrid;
}(external_react_default.a.Component);

/* harmony default export */ var components_HomeGrid = (HomeGrid_HomeGrid);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "react-bootstrap/ListGroup"
var ListGroup_ = __webpack_require__("H3JU");
var ListGroup_default = /*#__PURE__*/__webpack_require__.n(ListGroup_);

// EXTERNAL MODULE: external "react-bootstrap/Image"
var Image_ = __webpack_require__("REKQ");
var Image_default = /*#__PURE__*/__webpack_require__.n(Image_);

// CONCATENATED MODULE: ./components/Widgets.jsx






var Widgets_Widget1 = function Widget1(_ref) {
  var name = _ref.name;
  return external_react_default.a.createElement(Card_default.a, {
    text: "white"
  }, external_react_default.a.createElement(Card_default.a.Img, {
    variant: "top",
    src: "./static/header-img.png"
  }), external_react_default.a.createElement("div", {
    className: "widget-1 px-2"
  }, external_react_default.a.createElement(Card_default.a.Body, {
    className: "py-2 border-0 px-2"
  }, external_react_default.a.createElement(Card_default.a.Subtitle, {
    as: "small",
    className: "m-0"
  }, "Related Topics")), external_react_default.a.createElement(ListGroup_default.a, {
    variant: "flush"
  }, external_react_default.a.createElement(ListGroup_default.a.Item, {
    className: "text-white border-top-0 pt-0 px-2"
  }, "Cras justo odio"), external_react_default.a.createElement(ListGroup_default.a.Item, {
    className: "text-white px-2"
  }, "Dapibus ac facilisis in"), external_react_default.a.createElement(ListGroup_default.a.Item, {
    className: "text-white px-2"
  }, "Vestibulum at eros"))));
};

var Widgets_Widget2 = function Widget2(_ref2) {
  var name = _ref2.name,
      list = _ref2.list;
  return external_react_default.a.createElement(ListGroup_default.a, {
    className: "widget-2 flex-row",
    variant: "flush"
  }, list.map(function (item, i) {
    return external_react_default.a.createElement(ListGroup_default.a.Item, {
      key: i,
      className: "p-0 border-0 d-flex flex-column justify-content-center",
      style: {
        backgroundImage: "url(./static/".concat(i + 1, ".png)")
      }
    }, item.split(" ").map(function (word) {
      return external_react_default.a.createElement("span", {
        key: word,
        className: "py-3 prop-name"
      }, word);
    }));
  }));
};

var Widgets_Widget3 = function Widget3(_ref3) {
  var name = _ref3.name;
  return external_react_default.a.createElement(Image_default.a, {
    fluid: true,
    src: "./static/ad-img.png"
  });
};

var Widgets_Widget = function Widget(_ref4) {
  var Component = _ref4.component,
      otherProps = _objectWithoutProperties(_ref4, ["component"]);

  return external_react_default.a.createElement("aside", {
    className: "widget my-4"
  }, external_react_default.a.createElement(Component, otherProps));
};

var Widgets_Widgets = function Widgets() {
  return external_react_default.a.createElement("div", {
    className: "widgets"
  }, external_react_default.a.createElement("h1", {
    className: "section-header"
  }, "\xA0"), external_react_default.a.createElement(Widgets_Widget, {
    component: Widgets_Widget1,
    name: "Widget1"
  }), external_react_default.a.createElement(Widgets_Widget, {
    component: Widgets_Widget2,
    name: "Widget2",
    list: ["Beaches", "City Tours", "Deserts"]
  }), external_react_default.a.createElement(Widgets_Widget, {
    component: Widgets_Widget3,
    name: "Widget3"
  }));
};

/* harmony default export */ var components_Widgets = (Widgets_Widgets);
// CONCATENATED MODULE: ./pages/index.js








function Home() {
  var moreMeta = external_react_default.a.createElement("meta", {
    name: "charset",
    content: "utf-8"
  });
  var meta = [{
    "name": "keyword",
    "content": "keywords Test"
  }, {
    "name": "description",
    "content": "HURRAY"
  }];
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Header["a" /* default */], {
    moreMeta: moreMeta,
    title: "Home",
    meta: meta,
    showHero: true
  }), external_react_default.a.createElement(Container_default.a, null, external_react_default.a.createElement(Row_default.a, null, external_react_default.a.createElement(Col_default.a, {
    md: "9",
    sm: "8"
  }, external_react_default.a.createElement(components_HomeGrid, {
    label: "Popular Coupon Categories",
    api: "./static/mock.json"
  }), external_react_default.a.createElement(components_HomeGrid, {
    label: "Brands",
    api: "./static/mock.json"
  })), external_react_default.a.createElement(Col_default.a, {
    md: "3",
    sm: "4"
  }, external_react_default.a.createElement(components_Widgets, null)))));
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "SR8o":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Jumbotron");

/***/ }),

/***/ "SibU":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TKrA":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("r7XW");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "djS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "flur":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "r7XW":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tfHl":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "vDuQ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "vVTy":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kjtv");

/***/ }),

/***/ "zUlE":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/InputGroup");

/***/ })

/******/ });