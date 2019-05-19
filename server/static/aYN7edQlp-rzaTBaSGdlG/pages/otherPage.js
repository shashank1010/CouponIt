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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WuBs");


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

/***/ "6rvL":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

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

/***/ "REKQ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

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

/***/ "WuBs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Cgje");



function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Other"
  }), "Other Page!");
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



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

/***/ "zUlE":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/InputGroup");

/***/ })

/******/ });