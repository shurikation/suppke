/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_order_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/order-input.component */ \"./js/components/order-input.component.js\");\n/* harmony import */ var _js_components_order_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/order-button.component */ \"./js/components/order-button.component.js\");\n\r\n\r\n\r\nconst orderInput = new _js_components_order_input_component__WEBPACK_IMPORTED_MODULE_0__[\"OrderInput\"](\r\n    '.count-button__input',\r\n    '.count-button__minus',\r\n    '.count-button__plus');\r\n\r\nconst orderButton = new _js_components_order_button_component__WEBPACK_IMPORTED_MODULE_1__[\"OrderButton\"](\r\n    '.add-to-card-button',\r\n    '.count-button__input',\r\n    '.chosen-product__img',\r\n    'data-id');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/components/current-product.data.js":
/*!***********************************************!*\
  !*** ./js/components/current-product.data.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CURRENT_PRODUCT_DATA = {\r\n  id: '',\r\n  qty: ''\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CURRENT_PRODUCT_DATA);\n\n//# sourceURL=webpack:///./js/components/current-product.data.js?");

/***/ }),

/***/ "./js/components/order-button.component.js":
/*!*************************************************!*\
  !*** ./js/components/order-button.component.js ***!
  \*************************************************/
/*! exports provided: OrderButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrderButton\", function() { return OrderButton; });\n/* harmony import */ var _current_product_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-product.data */ \"./js/components/current-product.data.js\");\n\r\n\r\nclass OrderButton {\r\n  constructor(button, input, product, dataID) {\r\n    this.$button = document.querySelector(button);\r\n    this.input = input;\r\n    this.product = product;\r\n    this.dataID = dataID;\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.$button.addEventListener('click', () => this.generateCurrentProductData());\r\n  }\r\n\r\n  generateCurrentProductData() {\r\n    const $currentProduct = document.querySelector(this.product);\r\n    _current_product_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].id = $currentProduct.getAttribute(this.dataID);\r\n    _current_product_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].qty = document.querySelector(this.input).value;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/components/order-button.component.js?");

/***/ }),

/***/ "./js/components/order-input.component.js":
/*!************************************************!*\
  !*** ./js/components/order-input.component.js ***!
  \************************************************/
/*! exports provided: OrderInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrderInput\", function() { return OrderInput; });\nclass OrderInput {\r\n  constructor(input, minus, plus) {\r\n    this.$input = document.querySelector(input);\r\n    this.$minus = document.querySelector(minus);\r\n    this.$plus = document.querySelector(plus);\r\n    this.counter = parseInt(this.$input.value);\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.$minus.addEventListener('click', () => this.goodsQuantityCounter(1));\r\n    this.$plus.addEventListener('click', () => this.goodsQuantityCounter(-1));\r\n  }\r\n\r\n  goodsQuantityCounter(toggler) {\r\n    this.counter -= toggler;\r\n    if(this.counter <= 0) {\r\n      this.counter = 0;\r\n    }\r\n    this.$input.value = this.counter.toString();\r\n    console.log(this.$input.value);\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/components/order-input.component.js?");

/***/ })

/******/ });