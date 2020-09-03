// [DozSearchfield]  Build version: 1.1.6  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozSearchfield", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozSearchfield"] = factory(require("doz"));
	else
		root["DozSearchfield"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_doz__) {
return /******/ (function(modules) { // webpackBootstrap
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _doz = __webpack_require__(/*! doz */ \"doz\");\n\nvar _doz2 = _interopRequireDefault(_doz);\n\nvar _lib = __webpack_require__(/*! ./lib */ \"./lib/index.js\");\n\nvar _lib2 = _interopRequireDefault(_lib);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// expose component to global scope\nif (typeof window !== 'undefined') {\n    _doz2.default.component('doz-searchfield', _lib2.default);\n}\n\nexports.default = _lib2.default;\n\n//# sourceURL=webpack://DozSearchfield/./index.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n            <input\\n                placeholder=\"', '\"\\n                class=\"', '\"\\n                type=\"', '\"\\n                name=\"', '\"\\n                oninput=\"this.$onInput()\"\\n                onkeyup=\"this.$onKeyUp()\"\\n                d-ref=\"input\"\\n                d-bind=\"value\"\\n                id=\"', '\"\\n            >\\n            <button \\n                class=\"', '\" \\n                style=\"display: ', '\" \\n                onclick=\"this.$search()\"\\n            >', '</button>\\n        '], ['\\n            <input\\n                placeholder=\"', '\"\\n                class=\"', '\"\\n                type=\"', '\"\\n                name=\"', '\"\\n                oninput=\"this.$onInput()\"\\n                onkeyup=\"this.$onKeyUp()\"\\n                d-ref=\"input\"\\n                d-bind=\"value\"\\n                id=\"', '\"\\n            >\\n            <button \\n                class=\"', '\" \\n                style=\"display: ', '\" \\n                onclick=\"this.$search()\"\\n            >', '</button>\\n        ']);\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nexports.default = {\n\n    props: {\n        name: '',\n        value: '',\n        showButton: false,\n        buttonLabel: 'Search',\n        placeholder: 'Search here...',\n        buttonClass: '',\n        inputClass: '',\n        inputId: '',\n        showClearButton: true,\n        typeahead: 0\n    },\n\n    template: function template(h) {\n        return h(_templateObject, this.props.placeholder, this.props.inputClass, this.props.showClearButton ? 'search' : 'text', this.props.name, this.props.inputId, this.props.buttonClass, this.props.showButton ? 'inline' : 'none', this.props.buttonLabel);\n    },\n    onCreate: function onCreate() {\n        this.$isSearching = false;\n        this.$lastValue = '';\n        this.$overTypehead = false;\n    },\n    $onInput: function $onInput(e) {\n        if (e.target.value === '') this.$clear();\n        if (this.props.typeahead && this.props.value.length >= this.props.typeahead) this.$overTypehead = true;\n    },\n    $onKeyUp: function $onKeyUp(e) {\n        if (e.keyCode === 13 || e.keyCode === 8 && this.props.typeahead && this.$overTypehead || this.props.typeahead && this.props.value.length >= this.props.typeahead) {\n            this.$search();\n        }\n    },\n    $search: function $search(value) {\n        if (typeof value !== 'undefined') {\n            this.$lastValue = null;\n            //this.props.value = value;\n            //workaround\n            /*setTimeout(() => {\r\n                this.ref.input.value = value;\r\n            })*/\n        }\n\n        if (this.$lastValue === this.props.value) return;\n        this.$lastValue = this.props.value;\n        this.$isSearching = true;\n        this.emit('search', this.props.value);\n    },\n    $clear: function $clear() {\n        this.props.value = '';\n        this.$lastValue = '';\n        this.$overTypehead = false;\n        this.$isSearching = false;\n        this.emit('clear');\n    }\n};\n\n//# sourceURL=webpack://DozSearchfield/./lib/index.js?");

/***/ }),

/***/ "doz":
/*!******************************************************************************!*\
  !*** external {"commonjs":"doz","commonjs2":"doz","amd":"doz","root":"Doz"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_doz__;\n\n//# sourceURL=webpack://DozSearchfield/external_%7B%22commonjs%22:%22doz%22,%22commonjs2%22:%22doz%22,%22amd%22:%22doz%22,%22root%22:%22Doz%22%7D?");

/***/ })

/******/ });
}); 