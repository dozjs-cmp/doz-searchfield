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
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {
        name: '',
        value: '',
        showButton: false,
        buttonLabel: 'Search',
        placeholder: 'Search here...',
        buttonClass: '',
        inputClass: '',
        inputId: '',
        showClearButton: true,
        typeahead: 0
    },

    template: function template() {
        return '\n            <input\n                placeholder="' + this.props.placeholder + '"\n                class="' + this.props.inputClass + '"\n                type="' + (this.props.showClearButton ? 'search' : 'text') + '"\n                name="' + this.props.name + '"\n                value="' + this.props.value + '"\n                oninput="this.$onInput()"\n                onkeyup="this.$onKeyUp()"\n                d-ref="input"\n                d-bind="value"\n                id="' + this.props.inputId + '"\n            >\n            <button \n                class="' + this.props.buttonClass + '" \n                style="display: ' + (this.props.showButton ? 'inline' : 'none') + '" \n                onclick="this.$search()"\n            >' + this.props.buttonLabel + '</button>\n        ';
    },
    onCreate: function onCreate() {
        this.$isSearching = false;
        this.$lastValue = '';
        this.$overTypehead = false;
    },
    $onInput: function $onInput(e) {
        if (e.target.value === '') this.$clear();
        if (this.props.typeahead && this.props.value.length >= this.props.typeahead) this.$overTypehead = true;
    },
    $onKeyUp: function $onKeyUp(e) {
        if (e.keyCode === 13 || e.keyCode === 8 && this.props.typeahead && this.$overTypehead || this.props.typeahead && this.props.value.length >= this.props.typeahead) {
            this.$search();
        }
    },
    $search: function $search(value) {
        var _this = this;

        if (typeof value !== 'undefined') {
            this.$lastValue = null;
            this.props.value = value;
            //workaround
            setTimeout(function () {
                _this.ref.input.value = value;
            });
        }

        if (this.$lastValue === this.props.value) return;
        this.$lastValue = this.props.value;
        this.$isSearching = true;
        this.emit('search', this.props.value);
    },
    $clear: function $clear() {
        this.props.value = '';
        this.$lastValue = '';
        this.$overTypehead = false;
        this.$isSearching = false;
        this.emit('clear');
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(1);

var _doz2 = _interopRequireDefault(_doz);

var _lib = __webpack_require__(0);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
if (typeof window !== 'undefined') {
    _doz2.default.component('doz-searchfield', _lib2.default);
}

exports.default = _lib2.default;

/***/ })
/******/ ]);
}); 