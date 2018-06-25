// [DozSearchfield]  Build version: 0.0.0  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DozSearchfield", [], factory);
	else if(typeof exports === 'object')
		exports["DozSearchfield"] = factory();
	else
		root["DozSearchfield"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(0);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".my-component {\r\n    font-size: 24px;\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(4);

exports.default = {

    props: {
        name: '',
        value: '',
        showButton: false,
        buttonLabel: 'Search',
        placeholder: 'Search here...',
        buttonClass: '',
        inputClass: '',
        inputId: 'search-field-id',
        showClearButton: false,
        _showCross: false
    },

    template: function template() {
        return '\n            <input\n                placeholder="' + this.props.placeholder + '"\n                class="' + this.props.inputClass + '"\n                type="text"\n                name="' + this.props.name + '"\n                value="' + this.props.value + '"\n                oninput="this.$onInput()"\n                onkeydown="this.$onKeyDown()"\n                d-bind="value"\n                id="' + this.props.inputId + '"\n            >\n            <button \n                class="' + this.props.buttonClass + '" \n                style="display: ' + (this.props._showCross ? 'inline' : 'none') + '" \n                onclick="this.$clear()"\n            >X</button>\n            \n            <button \n                class="' + this.props.buttonClass + '" \n                style="display: ' + (this.props.showButton ? 'inline' : 'none') + '" \n                onclick="this.$search()"\n            >' + this.props.buttonLabel + '</button>\n        ';
    },
    onCreate: function onCreate() {
        this.props._showCross = this.$canCross();
    },


    $isSearching: false,

    $canCross: function $canCross() {
        return this.props.value.length > 0 && this.props.showClearButton;
    },
    $onInput: function $onInput() {
        this.props._showCross = this.$canCross();
        if (this.props.value.length === 0 && this.$isSearching) this.$clear();
    },
    $onKeyDown: function $onKeyDown(e) {
        if (e.keyCode === 13) {
            this.$search();
        }
    },
    $search: function $search() {
        this.emit('search', { search: this.props.value });
        this.$isSearching = true;
    },
    $clear: function $clear() {
        this.props.value = '';
        this.props._showCross = false;
        this.emit('clear', { search: '' });
        this.$isSearching = false;
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [DOZ]  Build version: 1.1.1  
(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 12);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = {
                ROOT: '__DOZ_GLOBAL_COMPONENTS__',
                INSTANCE: '__DOZ_INSTANCE__',
                CMP_INSTANCE: '__DOZ_CMP_INSTANCE__',
                NS: {
                    SVG: 'http://www.w3.org/2000/svg'
                },
                TAG: {
                    ROOT: 'doz-root',
                    EACH: 'doz-each-root',
                    APP: 'doz-app',
                    EMPTY: 'doz-empty',
                    MOUNT: 'doz-mount',
                    SUFFIX_ROOT: '-root'
                },
                REGEX: {
                    IS_CUSTOM_TAG: /^\w+-[\w-]+$/,
                    IS_CUSTOM_TAG_STRING: /<\w+-[\w-]+/,
                    IS_BIND: /^d-bind$/,
                    IS_REF: /^d-ref$/,
                    IS_ALIAS: /^d:alias$/,
                    IS_STORE: /^d:store$/,
                    IS_COMPONENT_LISTENER: /^d:on-(\w+)$/,
                    IS_LISTENER: /^on/,
                    IS_ID_SELECTOR: /^#[\w-_:.]+$/,
                    IS_PARENT_METHOD: /^parent.(.*)/,
                    IS_STRING_QUOTED: /^"\w+"/,
                    GET_LISTENER: /^this.(.*)\((.*)\)/,
                    TRIM_QUOTES: /^["'](.*)["']$/
                },
                ATTR: {
                    // Attributes for HTMLElement
                    BIND: 'd-bind',
                    REF: 'd-ref',
                    // Attributes for Components
                    ALIAS: 'd:alias',
                    STORE: 'd:store',
                    LISTENER: 'd:on',
                    ID: 'd:id',
                    FORCE_UPDATE: 'forceupdate'
                }
            };

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _require = __webpack_require__(0),
                ROOT = _require.ROOT;

            /**
             * Get or create global collection
             * @returns {{}|components|{InjectAsComment: boolean, InjectByTag: boolean}|{InjectAsComment, InjectByTag}|Array|*}
             */

            function getOrCreate() {
                window[ROOT] = window[ROOT] || { components: {} };
                return window[ROOT].components;
            }

            /**
             * Register a component to global
             * @param cmp
             */
            function register(cmp) {
                var collection = getOrCreate();

                var tag = cmp.tag.toUpperCase();

                if (!collection.hasOwnProperty(tag)) {
                    collection[tag] = cmp;
                } else {
                    throw new Error('Component ' + tag + ' already defined');
                }
            }

            function removeAll() {
                if (window[ROOT]) window[ROOT].components = {};
            }

            /**
             * Get component from global
             * @param tag
             * @returns {*}
             */
            function get(tag) {
                if (typeof tag !== 'string') throw new TypeError('tag must be a string');

                tag = tag.toUpperCase();

                var collection = getOrCreate();
                return collection[tag];
            }

            module.exports = {
                register: register,
                get: get,
                removeAll: removeAll
            };

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            /**
             * Copies deep missing properties to the target object
             * @param targetObj {Object} target object
             * @param defaultObj {Object} default object
             * @param exclude {Array} exclude properties from copy
             * @returns {*}
             */

            function extend(targetObj, defaultObj) {
                var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

                for (var i in defaultObj) {
                    /* istanbul ignore else  */
                    if (defaultObj.hasOwnProperty(i) && exclude.indexOf(i) === -1) {
                        if (!targetObj.hasOwnProperty(i) || typeof targetObj[i] === 'undefined') {
                            targetObj[i] = defaultObj[i];
                        } else if (_typeof(targetObj[i]) === 'object') {
                            extend(targetObj[i], defaultObj[i]);
                        }
                    }
                }
                return targetObj;
            }

            /**
             * Creates new target object and copies deep missing properties to the target object
             * @param args[0] {Object} target object
             * @param args[1] {Object} default object
             * @param args[2] {Array} exclude properties from copy
             * @returns {*}
             */
            function copy() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                args[0] = Object.assign({}, args[0]);
                return extend.apply(this, args);
            }

            module.exports = extend;
            module.exports.copy = copy;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var extend = __webpack_require__(2);

            var _require = __webpack_require__(1),
                register = _require.register;

            var html = __webpack_require__(4);

            var _require2 = __webpack_require__(0),
                REGEX = _require2.REGEX,
                TAG = _require2.TAG,
                INSTANCE = _require2.INSTANCE,
                CMP_INSTANCE = _require2.CMP_INSTANCE;

            var collection = __webpack_require__(1);
            var observer = __webpack_require__(16);
            var hooks = __webpack_require__(6);

            var _require3 = __webpack_require__(8),
                transform = _require3.transform,
                serializeProps = _require3.serializeProps;

            var update = __webpack_require__(11).updateElement;
            var store = __webpack_require__(22);
            var ids = __webpack_require__(23);

            var _require4 = __webpack_require__(24),
                extract = _require4.extract;

            var proxy = __webpack_require__(5);

            function component(tag) {
                var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                if (typeof tag !== 'string') {
                    throw new TypeError('Tag must be a string');
                }

                if (!REGEX.IS_CUSTOM_TAG.test(tag)) {
                    throw new TypeError('Tag must contain a dash (-) like my-component');
                }

                var cmp = {};

                cmp.tag = tag;

                cmp.cfg = extend.copy(cfg, {
                    autoCreateChildren: true,
                    updateChildrenProps: true,
                    props: {},
                    template: function template() {
                        return '';
                    }
                });

                register(cmp);
            }

            function getInstances() {
                var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                cfg.template = typeof cfg.template === 'string' ? html.create(cfg.template) : cfg.template;

                cfg.root.appendChild(cfg.template);

                var component = null;
                var parentElement = void 0;
                var trash = [];

                function walk(child) {
                    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                    while (child) {

                        var cmpName = child.nodeName.toLowerCase();
                        var localComponents = {};

                        if (parent.cmp && parent.cmp._components) {
                            localComponents = parent.cmp._components;
                        }

                        var cmp = cfg.autoCmp || localComponents[cmpName] || cfg.app._components[cmpName] || collection.get(child.nodeName);

                        if (cmp) {

                            if (parent.cmp) {
                                var rawChild = child.outerHTML;
                                parent.cmp.rawChildren.push(rawChild);
                            }

                            if (parent.cmp && parent.cmp.autoCreateChildren === false) {
                                trash.push(child);
                                child = child.nextSibling;
                                continue;
                            }

                            var props = serializeProps(child);
                            var dProps = extract(props);

                            var newElement = createInstance(cmp, {
                                root: child,
                                app: cfg.app,
                                props: props,
                                dProps: dProps,
                                parentCmp: parent.cmp
                            });

                            if (!newElement) {
                                child = child.nextSibling;
                                continue;
                            }

                            if (hooks.callBeforeMount(newElement) !== false) {
                                newElement.render(true);

                                if (!component) {
                                    component = newElement;
                                }

                                newElement._rootElement[CMP_INSTANCE] = newElement;

                                child.insertBefore(newElement._rootElement, child.firstChild);
                                hooks.callRender(newElement);
                                hooks.callMount(newElement);
                            }

                            parentElement = newElement;

                            if (parent.cmp) {
                                var n = Object.keys(parent.cmp.children).length;
                                parent.cmp.children[newElement.alias ? newElement.alias : n++] = newElement;
                            }

                            cfg.autoCmp = null;
                        }

                        if (child.hasChildNodes()) {
                            walk(child.firstChild, { cmp: parentElement });
                        }

                        child = child.nextSibling;
                    }
                }

                walk(cfg.template);

                trash.forEach(function (child) {
                    return child.remove();
                });

                return component;
            }

            function createInstance(cmp, cfg) {

                var props = extend.copy(cfg.props, typeof cmp.cfg.props === 'function' ? cmp.cfg.props() : cmp.cfg.props);

                var instance = Object.defineProperties({}, {
                    _isCreated: {
                        value: false,
                        writable: true
                    },
                    _prevTpl: {
                        value: null,
                        writable: true
                    },
                    _prev: {
                        value: null,
                        writable: true
                    },
                    _prevProps: {
                        value: null,
                        writable: true
                    },
                    _rootElement: {
                        value: null,
                        writable: true
                    },
                    _boundElements: {
                        value: {},
                        writable: true
                    },
                    _callback: {
                        value: cfg.dProps['callback'],
                        writable: true
                    },
                    _cache: {
                        value: new Map()
                    },
                    _loops: {
                        value: {},
                        writable: true
                    },
                    _components: {
                        value: {},
                        writable: true
                    },
                    _publicProps: {
                        value: Object.assign({}, cfg.props)
                    },
                    _processing: {
                        value: [],
                        writable: true
                    },
                    _dynamicChildren: {
                        value: [],
                        writable: true
                    },
                    _unmounted: {
                        value: false,
                        writable: true
                    },
                    _unmountedParentNode: {
                        value: null,
                        writable: true
                    },
                    beginSafeRender: {
                        value: function value() {
                            proxy.beginRender(this.props);
                        },
                        enumerable: true
                    },
                    endSafeRender: {
                        value: function value() {
                            proxy.endRender(this.props);
                        },
                        enumerable: true
                    },
                    app: {
                        value: cfg.app,
                        enumerable: true
                    },
                    parent: {
                        value: cfg.parentCmp,
                        enumerable: true
                    },
                    ref: {
                        value: {},
                        writable: true,
                        enumerable: true
                    },
                    children: {
                        value: {},
                        writable: true,
                        enumerable: true
                    },
                    rawChildren: {
                        value: [],
                        writable: true,
                        enumerable: true
                    },
                    tag: {
                        value: cmp.tag,
                        enumerable: true
                    },
                    emit: {
                        value: function value(name) {
                            if (this._callback && this._callback[name] !== undefined && this.parent[this._callback[name]] !== undefined && typeof this.parent[this._callback[name]] === 'function') {
                                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                    args[_key - 1] = arguments[_key];
                                }

                                this.parent[this._callback[name]].apply(this.parent, args);
                            }
                        },
                        enumerable: true
                    },
                    each: {
                        value: function value(obj, func) {
                            var safe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                            var res = void 0;
                            if (Array.isArray(obj)) {
                                if (safe) this.beginSafeRender();
                                res = obj.map(func).map(function (stringEl) {
                                    if (typeof stringEl === 'string') {

                                        return stringEl.trim();
                                    }
                                }).join('');
                                if (safe) this.endSafeRender();
                            }
                            return res;
                        },
                        enumerable: true
                    },
                    getStore: {
                        value: function value(storeName) {
                            return this.app.getStore(storeName);
                        },
                        enumerable: true
                    },
                    getComponentById: {
                        value: function value(id) {
                            return this.app.getComponentById(id);
                        },
                        enumerable: true
                    },
                    action: {
                        value: cfg.app.action,
                        enumerable: true
                    },
                    render: {
                        value: function value(initial) {
                            this.beginSafeRender();
                            var template = this.template().trim();
                            this.endSafeRender();

                            var tpl = html.create(template, TAG.ROOT);
                            var next = transform(tpl);

                            var rootElement = update(cfg.root, next, this._prev, 0, this, initial);

                            drawDynamic(this);

                            if (!this._rootElement && rootElement) {
                                this._rootElement = rootElement;
                            }

                            this._prev = next;
                        },
                        enumerable: true
                    },
                    mount: {
                        value: function value(template) {
                            var _this = this;

                            var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                            if (this._unmounted) {
                                if (hooks.callBeforeMount(this) === false) return this;

                                this._unmountedParentNode.appendChild(this._rootElement.parentNode);
                                this._unmounted = false;
                                this._unmountedParentNode = null;

                                hooks.callMount(this);

                                Object.keys(this.children).forEach(function (child) {
                                    _this.children[child].mount();
                                });

                                return this;
                            } else if (template) {
                                if (this._rootElement.nodeType !== 1) {
                                    var newElement = document.createElement(this.tag + TAG.SUFFIX_ROOT);
                                    this._rootElement.parentNode.replaceChild(newElement, this._rootElement);
                                    this._rootElement = newElement;
                                    this._rootElement[CMP_INSTANCE] = this;
                                }

                                var root = this._rootElement;

                                if (typeof cfg.selector === 'string') root = root.querySelector(cfg.selector);else if (cfg.selector instanceof HTMLElement) root = cfg.selector;

                                this._unmounted = false;
                                this._unmountedParentNode = null;

                                return this.app.mount(template, root, this);
                            }
                        },
                        enumerable: true
                    },
                    unmount: {
                        value: function value() {
                            var onlyInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                            var _this2 = this;

                            var byDestroy = arguments[1];
                            var silently = arguments[2];

                            if (!onlyInstance && (Boolean(this._unmountedParentNode) || !this._rootElement || !this._rootElement.parentNode || !this._rootElement.parentNode.parentNode)) {
                                return;
                            }

                            if (hooks.callBeforeUnmount(this) === false) return false;

                            this._unmountedParentNode = this._rootElement.parentNode.parentNode;

                            if (!onlyInstance) {
                                this._rootElement.parentNode.parentNode.removeChild(this._rootElement.parentNode);
                            } else this._rootElement.parentNode.innerHTML = '';

                            this._unmounted = !byDestroy;

                            if (!silently) hooks.callUnmount(this);

                            Object.keys(this.children).forEach(function (child) {
                                _this2.children[child].unmount(onlyInstance, byDestroy, silently);
                            });

                            return this;
                        },
                        enumerable: true
                    },
                    destroy: {
                        value: function value(onlyInstance) {
                            var _this3 = this;

                            if (this.unmount(onlyInstance, true) === false) return;

                            if (!onlyInstance && (!this._rootElement || hooks.callBeforeDestroy(this) === false || !this._rootElement.parentNode)) {
                                return;
                            }

                            Object.keys(this.children).forEach(function (child) {
                                _this3.children[child].destroy();
                            });

                            hooks.callDestroy(this);
                        },
                        enumerable: true
                    }
                });

                // Assign cfg to instance
                extendInstance(instance, cmp.cfg, cfg.dProps);

                var beforeCreate = hooks.callBeforeCreate(instance);
                if (beforeCreate === false) return undefined;

                // Create observer to props
                observer.create(instance, props);
                // Create shared store
                store.create(instance);
                // Create ID
                ids.create(instance);
                // Add callback to ready queue
                queueReadyCB(instance);
                // Call create
                hooks.callCreate(instance);
                // Now instance is created
                instance._isCreated = true;

                return instance;
            }

            function extendInstance(instance, cfg, dProps) {
                Object.assign(instance, cfg, dProps);

                // Add local components
                if (Array.isArray(cfg.components)) {
                    cfg.components.forEach(function (cmp) {
                        if ((typeof cmp === 'undefined' ? 'undefined' : _typeof(cmp)) === 'object' && typeof cmp.tag === 'string' && _typeof(cmp.cfg) === 'object') {
                            instance._components[cmp.tag] = cmp;
                        }
                    });
                    delete instance.components;
                } else if (_typeof(cfg.components) === 'object') {
                    Object.keys(cfg.components).forEach(function (objName) {
                        instance._components[objName] = {
                            tag: objName,
                            cfg: cfg.components[objName]
                        };
                    });
                    delete instance.components;
                }
            }

            function queueReadyCB(instance) {
                if (typeof instance.onAppReady === 'function') {
                    instance.onAppReady._instance = instance;
                    instance.app._onAppReadyCB.push(instance.onAppReady);
                }
            }

            function clearDynamic(instance) {
                var index = instance._dynamicChildren.length - 1;

                while (index >= 0) {
                    var item = instance._dynamicChildren[index];

                    if (!document.body.contains(item) && item[INSTANCE]) {
                        item[INSTANCE].destroy(true);
                        instance._dynamicChildren.splice(index, 1);
                    }
                    index -= 1;
                }
            }

            function drawDynamic(instance) {
                clearDynamic(instance);

                var index = instance._processing.length - 1;

                while (index >= 0) {
                    var item = instance._processing[index];
                    var root = item.node.parentNode;

                    if (item.node[INSTANCE]) {
                        item.node[INSTANCE].destroy(true);
                    }

                    var dynamicInstance = getInstances({ root: root, template: item.node.outerHTML, app: instance.app });

                    if (dynamicInstance) {
                        instance._dynamicChildren.push(dynamicInstance._rootElement.parentNode);

                        root.replaceChild(dynamicInstance._rootElement.parentNode, item.node);
                        dynamicInstance._rootElement.parentNode[INSTANCE] = dynamicInstance;
                        instance._processing.splice(index, 1);
                    }
                    index -= 1;
                }
            }

            module.exports = {
                component: component,
                getInstances: getInstances
            };

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var regexN = /\n/g;
            var regexS = /\s+/g;
            var replace = ' ';

            var html = {
                /**
                 * Create DOM element
                 * @param str html string
                 * @param wrapper tag string
                 * @returns {Element | Node | null}
                 */
                create: function create(str, wrapper) {
                    var element = void 0;
                    str = str.replace(regexN, replace);
                    str = str.replace(regexS, replace);

                    var template = document.createElement('div');
                    template.innerHTML = str;

                    if (template.childNodes.length > 1) {
                        element = document.createElement(wrapper);
                        //console.log('TEMPLATE',template.innerHTML);
                        element.innerHTML = template.innerHTML;
                    } else {
                        //console.log('TEMPLATE',template.innerHTML);
                        element = template.firstChild || document.createTextNode('');
                    }

                    if (!this.isValidNode(element)) throw new Error('Element not valid');
                    return element;
                },

                /**
                 * Check if is a valid Node
                 * @param {*} el
                 * @returns {Boolean}
                 */
                isValidNode: function isValidNode(el) {
                    return el && 'nodeType' in el;
                },

                getAllNodes: function getAllNodes(el) {

                    var nodes = [];

                    function scanner(n) {
                        while (n) {
                            nodes.push(n);
                            if (n.hasChildNodes()) {
                                scanner(n.firstChild);
                            }
                            n = n.nextSibling;
                        }
                    }

                    scanner(el);

                    return nodes;
                }
            };

            module.exports = html;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            /*
             * 	Originally was Observable Slim
             *	Version 0.0.4
             * 	https://github.com/elliotnb/observable-slim
             *
             * 	Licensed under the MIT license:
             * 	http://www.opensource.org/licenses/MIT
             *
             *	Observable Slim is a singleton that allows you to observe changes made to an object and any nested
             *	children of that object. It is intended to assist with one-way data binding, that is, in MVC parlance,
             *	reflecting changes in the model to the app. Observable Slim aspires to be as lightweight and easily
             *	understood as possible. Minifies down to roughly 3000 characters.
             */

            function sanitize(str) {
                return typeof str === 'string' ? str.replace(/&(?!\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : str;
            }

            /**
             * ObservableSlim
             * @type {{create, observe, pause, resume, remove, beforeChange}}
             */
            var ObservableSlim = function () {
                // An array that stores all of the observables created through the public create() method below.
                var observables = [];
                // An array of all the objects that we have assigned Proxies to
                var targets = [];

                // An array of arrays containing the Proxies created for each target object. targetsProxy is index-matched with
                // 'targets' -- together, the pair offer a Hash table where the key is not a string nor number, but the actual target object
                var targetsProxy = [];

                // this variable tracks duplicate proxies assigned to the same target.
                // the 'set' handler below will trigger the same change on all other Proxies tracking the same target.
                // however, in order to avoid an infinite loop of Proxies triggering and re-triggering one another, we use dupProxy
                // to track that a given Proxy was modified from the 'set' handler
                var dupProxy = null;

                var _getProperty = function _getProperty(obj, path) {
                    return path.split('.').reduce(function (prev, curr) {
                        return prev ? prev[curr] : undefined;
                    }, obj || self);
                };

                /**
                 * _create
                 * @description Private internal function that is invoked to create a new ES6 Proxy whose changes we can observe through the Observerable.observe() method.
                 * @param target {Object} required, plain JavaScript object that we want to observe for changes.
                 * @param domDelay {Boolean} batch up changes on a 10ms delay so a series of changes can be processed in one DOM update.
                 * @param originalObservable {Object} the original observable created by the user, exists for recursion purposes, allows one observable to observe change on any nested/child objects.
                 * @param originalPath {String} the path of the property in relation to the target on the original observable, exists for recursion purposes, allows one observable to observe change on any nested/child objects.
                 * @returns {Object}
                 * @private
                 */
                var _create = function _create(target, domDelay, originalObservable, originalPath) {

                    var observable = originalObservable || null;
                    var path = originalPath || '';

                    var changes = [];

                    var _getPath = function _getPath(target, property) {
                        if (target instanceof Array) {
                            return path !== '' ? path : property;
                        } else {
                            return path !== '' ? path + '.' + property : property;
                        }
                    };

                    var _notifyObservers = function _notifyObservers(numChanges) {

                        // if the observable is paused, then we don't want to execute any of the observer functions
                        if (observable.paused === true) return;

                        // execute observer functions on a 10ms settimeout, this prevents the observer functions from being executed
                        // separately on every change -- this is necessary because the observer functions will often trigger UI updates
                        if (domDelay === true) {
                            setTimeout(function () {
                                if (numChanges === changes.length) {
                                    // invoke any functions that are observing changes
                                    for (var i = 0; i < observable.observers.length; i++) {
                                        observable.observers[i](changes);
                                    }changes = [];
                                }
                            }, 10);
                        } else {
                            // invoke any functions that are observing changes
                            for (var i = 0; i < observable.observers.length; i++) {
                                observable.observers[i](changes);
                            }changes = [];
                        }
                    };

                    var handler = {
                        get: function get(target, property) {

                            // implement a simple check for whether or not the object is a proxy, this helps the .create() method avoid
                            // creating Proxies of Proxies.
                            if (property === '__getTarget') {
                                return target;
                            } else if (property === '__isProxy') {
                                return true;
                                // from the perspective of a given observable on a parent object, return the parent object of the given nested object
                            } else if (property === '__getParent') {
                                return function (i) {
                                    if (typeof i === 'undefined') i = 1;
                                    var parentPath = _getPath(target, '__getParent').split('.');
                                    parentPath.splice(-(i + 1), i + 1);
                                    return _getProperty(observable.parentProxy, parentPath.join('.'));
                                };
                            }

                            // for performance improvements, we assign this to a variable so we do not have to lookup the property value again
                            var targetProp = target[property];

                            // if we are traversing into a new object, then we want to record path to that object and return a new observable.
                            // recursively returning a new observable allows us a single Observable.observe() to monitor all changes on
                            // the target object and any objects nested within.
                            if (targetProp instanceof Object && targetProp !== null && target.hasOwnProperty(property)) {

                                // if we've found a proxy nested on the object, then we want to retrieve the original object behind that proxy
                                if (targetProp.__isProxy === true) targetProp = targetProp.__getTarget;

                                // if we've previously setup a proxy on this target, then...
                                //let a = observable.targets.indexOf(targetProp);
                                var a = -1;
                                var observableTargets = observable.targets;
                                for (var i = 0, l = observableTargets.length; i < l; i++) {
                                    if (targetProp === observableTargets[i]) {
                                        a = i;
                                        break;
                                    }
                                }
                                if (a > -1) return observable.proxies[a];

                                // if we're arrived here, then that means there is no proxy for the object the user just accessed, so we
                                // have to create a new proxy for it
                                var newPath = path !== '' ? path + '.' + property : property;

                                return _create(targetProp, domDelay, observable, newPath);
                            } else {
                                return observable.renderMode ? sanitize(targetProp) : targetProp;
                            }
                        },
                        deleteProperty: function deleteProperty(target, property) {

                            // was this change an original change or was it a change that was re-triggered below
                            var originalChange = true;
                            if (dupProxy === proxy) {
                                originalChange = false;
                                dupProxy = null;
                            }

                            // in order to report what the previous value was, we must make a copy of it before it is deleted
                            var previousValue = Object.assign({}, target);

                            // get the path of the property being deleted
                            var currentPath = _getPath(target, property);

                            // record the deletion that just took place
                            changes.push({
                                type: 'delete',
                                target: target,
                                property: property,
                                newValue: null,
                                previousValue: previousValue[property],
                                currentPath: currentPath,
                                proxy: proxy
                            });

                            if (typeof observable.beforeChange === 'function' && observable.checkBeforeChange !== currentPath) {
                                observable.checkBeforeChange = currentPath;
                                var res = observable.beforeChange(changes);
                                if (res === false) {
                                    observable.checkBeforeChange = '';
                                    return false;
                                }
                            }

                            observable.checkBeforeChange = '';

                            if (originalChange === true) {
                                var a = void 0,
                                    l = void 0;
                                for (a = 0, l = targets.length; a < l; a++) {
                                    if (target === targets[a]) break;
                                } // loop over each proxy and see if the target for this change has any other proxies
                                var currentTargetProxy = targetsProxy[a];

                                var b = currentTargetProxy.length;
                                while (b--) {
                                    // if the same target has a different proxy
                                    if (currentTargetProxy[b].proxy !== proxy) {
                                        // !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
                                        // prevent a change on dupProxy from re-triggering the same change on other proxies)
                                        dupProxy = currentTargetProxy[b].proxy;

                                        // make the same delete on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
                                        // on any other proxies so that the previousValue can show up correct for the other proxies
                                        delete currentTargetProxy[b].proxy[property];
                                    }
                                }

                                // perform the delete that we've trapped
                                delete target[property];
                            }

                            _notifyObservers(changes.length);

                            return true;
                        },
                        set: function set(target, property, value, receiver) {

                            // was this change an original change or was it a change that was re-triggered below
                            var originalChange = true;
                            if (dupProxy === proxy) {
                                originalChange = false;
                                dupProxy = null;
                            }

                            // improve performance by saving direct references to the property
                            var targetProp = target[property];

                            // only record a change if the new value differs from the old one OR if this proxy was not the original proxy to receive the change
                            if (targetProp !== value || originalChange === false) {

                                var typeOfTargetProp = typeof targetProp === 'undefined' ? 'undefined' : _typeof(targetProp);

                                // get the path of the object property being modified
                                var currentPath = _getPath(target, property);

                                // determine if we're adding something new or modifying somethat that already existed
                                var type = 'update';
                                if (typeOfTargetProp === 'undefined') type = 'add';

                                // store the change that just occurred. it is important that we store the change before invoking the other proxies so that the previousValue is correct
                                changes.push({
                                    type: type,
                                    target: target,
                                    property: property,
                                    newValue: value,
                                    previousValue: receiver[property],
                                    currentPath: currentPath,
                                    proxy: proxy
                                });

                                if (typeof observable.beforeChange === 'function' && observable.checkBeforeChange !== currentPath) {
                                    observable.checkBeforeChange = currentPath;
                                    var res = observable.beforeChange(changes);
                                    if (res === false) {
                                        observable.checkBeforeChange = '';
                                        return false;
                                    }
                                }

                                observable.checkBeforeChange = '';

                                // !!IMPORTANT!! if this proxy was the first proxy to receive the change, then we need to go check and see
                                // if there are other proxies for the same project. if there are, then we will modify those proxies as well so the other
                                // observers can be modified of the change that has occurred.
                                if (originalChange === true) {

                                    var a = void 0,
                                        l = void 0;
                                    for (a = 0, l = targets.length; a < l; a++) {
                                        if (target === targets[a]) break;
                                    } // loop over each proxy and see if the target for this change has any other proxies
                                    var currentTargetProxy = targetsProxy[a];
                                    if (currentTargetProxy) for (var b = 0, _l = currentTargetProxy.length; b < _l; b++) {
                                        // if the same target has a different proxy
                                        if (currentTargetProxy[b].proxy !== proxy) {

                                            // !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
                                            // prevent a change on dupProxy from re-triggering the same change on other proxies)
                                            dupProxy = currentTargetProxy[b].proxy;

                                            // invoke the same change on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
                                            // on any other proxies so that the previousValue can show up correct for the other proxies
                                            currentTargetProxy[b].proxy[property] = value;
                                        }
                                    }

                                    // if the property being overwritten is an object, then that means this observable
                                    // will need to stop monitoring this object and any nested objects underneath the overwritten object else they'll become
                                    // orphaned and grow memory usage. we excute this on a setTimeout so that the clean-up process does not block
                                    // the UI rendering -- there's no need to execute the clean up immediately
                                    setTimeout(function () {

                                        if (typeOfTargetProp === 'object' && targetProp !== null) {

                                            // check if the to-be-overwritten target property still exists on the target object
                                            // if it does still exist on the object, then we don't want to stop observing it. this resolves
                                            // an issue where array .sort() triggers objects to be overwritten, but instead of being overwritten
                                            // and discarded, they are shuffled to a new position in the array
                                            var keys = Object.keys(target);
                                            for (var i = 0, _l2 = keys.length; i < _l2; i++) {
                                                if (target[keys[i]] === targetProp) {
                                                    //console.log('target still exists');
                                                    return;
                                                }
                                            }

                                            // loop over each property and recursively invoke the `iterate` function for any
                                            // objects nested on targetProp
                                            (function iterate(obj) {

                                                var keys = Object.keys(obj);
                                                for (var _i = 0, _l3 = keys.length; _i < _l3; _i++) {
                                                    var objProp = obj[keys[_i]];
                                                    if (objProp instanceof Object && objProp !== null) iterate(objProp);
                                                }

                                                // if there are any existing target objects (objects that we're already observing)...
                                                //let c = targets.indexOf(obj);
                                                var c = -1;
                                                for (var _i2 = 0, _l4 = targets.length; _i2 < _l4; _i2++) {
                                                    if (obj === targets[_i2]) {
                                                        c = _i2;
                                                        break;
                                                    }
                                                }
                                                if (c > -1) {

                                                    // ...then we want to determine if the observables for that object match our current observable
                                                    var _currentTargetProxy = targetsProxy[c];
                                                    var d = _currentTargetProxy.length;

                                                    while (d--) {
                                                        // if we do have an observable monitoring the object thats about to be overwritten
                                                        // then we can remove that observable from the target object
                                                        if (observable === _currentTargetProxy[d].observable) {
                                                            _currentTargetProxy.splice(d, 1);
                                                            break;
                                                        }
                                                    }

                                                    // if there are no more observables assigned to the target object, then we can remove
                                                    // the target object altogether. this is necessary to prevent growing memory consumption particularly with large data sets
                                                    if (_currentTargetProxy.length === 0) {
                                                        targetsProxy.splice(c, 1);
                                                        targets.splice(c, 1);
                                                    }
                                                }
                                            })(targetProp);
                                        }
                                    }, 10000);

                                    // because the value actually differs than the previous value
                                    // we need to store the new value on the original target object
                                    target[property] = value;

                                    // TO DO: the next block of code resolves test case #24, but it results in poor IE11 performance. Find a solution.

                                    // if the value we've just set is an object, then we'll need to iterate over it in order to initialize the
                                    // observers/proxies on all nested children of the object
                                    if (value instanceof Object && value !== null) {
                                        (function iterate(proxy) {
                                            var target = proxy.__getTarget;
                                            var keys = Object.keys(target);
                                            for (var i = 0, _l5 = keys.length; i < _l5; i++) {
                                                var _property = keys[i];
                                                if (target[_property] instanceof Object && target[_property] !== null) iterate(proxy[_property]);
                                            }
                                        })(proxy[property]);
                                    }
                                }
                                // notify the observer functions that the target has been modified
                                _notifyObservers(changes.length);
                            }
                            return true;
                        }
                    };

                    // create the proxy that we'll use to observe any changes
                    var proxy = new Proxy(target, handler);

                    // we don't want to create a new observable if this function was invoked recursively
                    if (observable === null) {
                        observable = {
                            parentTarget: target,
                            domDelay: domDelay,
                            parentProxy: proxy,
                            observers: [],
                            targets: [target],
                            proxies: [proxy],
                            paused: false,
                            path: path
                        };
                        observables.push(observable);
                    } else {
                        observable.targets.push(target);
                        observable.proxies.push(proxy);
                    }

                    // store the proxy we've created so it isn't re-created unnecessary via get handler
                    var proxyItem = { target: target, proxy: proxy, observable: observable };

                    //let targetPosition = targets.indexOf(target);
                    var targetPosition = -1;
                    for (var i = 0, l = targets.length; i < l; i++) {
                        if (target === targets[i]) {
                            targetPosition = i;
                            break;
                        }
                    }

                    // if we have already created a Proxy for this target object then we add it to the corresponding array
                    // on targetsProxy (targets and targetsProxy work together as a Hash table indexed by the actual target object).
                    if (targetPosition > -1) {
                        targetsProxy[targetPosition].push(proxyItem);
                        // else this is a target object that we have not yet created a Proxy for, so we must add it to targets,
                        // and push a new array on to targetsProxy containing the new Proxy
                    } else {
                        targets.push(target);
                        targetsProxy.push([proxyItem]);
                        targetPosition = targets.length - 1;
                    }

                    return proxy;
                };

                return {
                    /**
                     * Create
                     * @description Public method that is invoked to create a new ES6 Proxy whose changes we can observe through the Observerable.observe() method.
                     * @param target {Object} required, plain JavaScript object that we want to observe for changes.
                     * @param domDelay {Boolean} if true, then batch up changes on a 10ms delay so a series of changes can be processed in one DOM update.
                     * @param observer {Function} optional, will be invoked when a change is made to the proxy.
                     * @returns {Object}
                     */
                    create: function create(target, domDelay, observer) {

                        // test if the target is a Proxy, if it is then we need to retrieve the original object behind the Proxy.
                        // we do not allow creating proxies of proxies because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
                        if (target.__isProxy === true) {
                            target = target.__getTarget;
                            //if it is, then we should throw an error. we do not allow creating proxies of proxies
                            // because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
                            //throw new Error('ObservableSlim.create() cannot create a Proxy for a target object that is also a Proxy.');
                        }

                        // fire off the _create() method -- it will create a new observable and proxy and return the proxy
                        var proxy = _create(target, domDelay);

                        // assign the observer function
                        if (typeof observer === 'function') this.observe(proxy, observer);

                        // recursively loop over all nested objects on the proxy we've just created
                        // this will allow the top observable to observe any changes that occur on a nested object
                        (function iterate(proxy) {
                            var target = proxy.__getTarget;
                            var keys = Object.keys(target);
                            for (var i = 0, l = keys.length; i < l; i++) {
                                var property = keys[i];
                                if (target[property] instanceof Object && target[property] !== null) iterate(proxy[property]);
                            }
                        })(proxy);

                        return proxy;
                    },

                    /**
                     * observe
                     * @description This method is used to add a new observer function to an existing proxy.
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method. We want to observe changes made to this object.
                     * @param observer {Function} this function will be invoked when a change is made to the observable (not to be confused with the observer defined in the create() method).
                     */
                    observe: function observe(proxy, observer) {
                        // loop over all the observables created by the _create() function
                        var i = observables.length;
                        while (i--) {
                            if (observables[i].parentProxy === proxy) {
                                observables[i].observers.push(observer);
                                break;
                            }
                        }
                    },

                    /**
                     * Pause
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method
                     */
                    pause: function pause(proxy) {
                        var i = observables.length;
                        var foundMatch = false;
                        while (i--) {
                            if (observables[i].parentProxy === proxy) {
                                observables[i].paused = true;
                                foundMatch = true;
                                break;
                            }
                        }
                        if (foundMatch === false) throw new Error('DOZ could not pause observable -- matching proxy not found.');
                    },

                    /**
                     * Resume
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method
                     */
                    resume: function resume(proxy) {
                        var i = observables.length;
                        var foundMatch = false;
                        while (i--) {
                            if (observables[i].parentProxy === proxy) {
                                observables[i].paused = false;
                                foundMatch = true;
                                break;
                            }
                        }
                        if (foundMatch === false) throw new Error('DOZ could not resume observable -- matching proxy not found.');
                    },

                    /**
                     * Remove
                     * @description this method will remove the observable and proxy thereby preventing any further callback observers for changes occuring to the target object.
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method
                     */
                    remove: function remove(proxy) {

                        var matchedObservable = null;
                        var foundMatch = false;

                        var c = observables.length;
                        while (c--) {
                            if (observables[c].parentProxy === proxy) {
                                matchedObservable = observables[c];
                                foundMatch = true;
                                break;
                            }
                        }
                        var a = targetsProxy.length;
                        while (a--) {
                            var b = targetsProxy[a].length;
                            while (b--) {
                                if (targetsProxy[a][b].observable === matchedObservable) {
                                    targetsProxy[a].splice(b, 1);
                                    if (targetsProxy[a].length === 0) {
                                        targetsProxy.splice(a, 1);
                                        targets.splice(a, 1);
                                    }
                                }
                            }
                        }
                        if (foundMatch === true) {
                            observables.splice(c, 1);
                        }
                    },

                    /**
                     * beforeChange
                     * @description This method accepts a function will be invoked before changes.
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
                     * @param callback {Function} will be invoked before every change is made to the proxy, if it returns false no changes will be made.
                     */
                    beforeChange: function beforeChange(proxy, callback) {
                        if (typeof callback !== 'function') throw new Error('Callback function is required');

                        var i = observables.length;
                        var foundMatch = false;
                        while (i--) {
                            if (observables[i].parentProxy === proxy) {
                                observables[i].beforeChange = callback;
                                foundMatch = true;
                                break;
                            }
                        }
                        if (foundMatch === false) throw new Error('DOZ -- matching proxy not found.');
                    },

                    /**
                     * beginRender
                     * @description This method set renderMode to true so the param in get is sanitized.
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
                     */
                    beginRender: function beginRender(proxy) {
                        var i = observables.length;
                        var foundMatch = false;
                        while (i--) {
                            if (observables[i].parentProxy === proxy) {
                                observables[i].renderMode = true;
                                foundMatch = true;
                                break;
                            }
                        }
                        if (foundMatch === false) throw new Error('DOZ -- matching proxy not found.');
                    },

                    /**
                     * endRender
                     * @description This method set renderMode to false.
                     * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
                     */
                    endRender: function endRender(proxy) {
                        var i = observables.length;
                        var foundMatch = false;
                        while (i--) {
                            if (observables[i].parentProxy === proxy) {
                                observables[i].renderMode = false;
                                foundMatch = true;
                                break;
                            }
                        }
                        if (foundMatch === false) throw new Error('DOZ -- matching proxy not found.');
                    }
                };
            }();

            module.exports = ObservableSlim;

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var deprecate = __webpack_require__(17);

            function callBeforeCreate(context) {
                if (typeof context.onBeforeCreate === 'function') {
                    return context.onBeforeCreate.call(context);
                }
            }

            function callCreate(context) {
                if (typeof context.onCreate === 'function') {
                    context.onCreate.call(context);
                }
            }

            function callRender(context) {
                if (typeof context.onRender === 'function') {
                    deprecate.once('onRender is deprecated since v. 1.0.0, use onMount instead');
                    context.onRender.call(context);
                }
            }

            function callBeforeMount(context) {
                if (typeof context.onBeforeMount === 'function') {
                    return context.onBeforeMount.call(context);
                }
            }

            function callMount(context) {
                if (typeof context.onMount === 'function') {
                    context.onMount.call(context);
                }
            }

            function callBeforeUpdate(context, changes) {
                if (typeof context.onBeforeUpdate === 'function') {
                    return context.onBeforeUpdate.call(context, changes);
                }
            }

            function callUpdate(context, changes) {
                if (typeof context.onUpdate === 'function') {
                    context.onUpdate.call(context, changes);
                }
            }

            function callBeforeUnmount(context) {
                if (typeof context.onBeforeUnmount === 'function') {
                    return context.onBeforeUnmount.call(context);
                }
            }

            function callUnmount(context) {
                if (typeof context.onUnmount === 'function') {
                    context.onUnmount.call(context);
                }
            }

            function callBeforeDestroy(context) {
                if (typeof context.onBeforeDestroy === 'function') {
                    return context.onBeforeDestroy.call(context);
                }
            }

            function callDestroy(context) {
                if (typeof context.onDestroy === 'function') {
                    context.onDestroy.call(context);
                    context = null;
                }
            }

            module.exports = {
                callBeforeCreate: callBeforeCreate,
                callCreate: callCreate,
                callRender: callRender,
                callBeforeMount: callBeforeMount,
                callMount: callMount,
                callBeforeUpdate: callBeforeUpdate,
                callUpdate: callUpdate,
                callBeforeUnmount: callBeforeUnmount,
                callUnmount: callUnmount,
                callBeforeDestroy: callBeforeDestroy,
                callDestroy: callDestroy
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function delay(cb) {
                if (window.requestAnimationFrame !== undefined) return window.requestAnimationFrame(cb);else return window.setTimeout(cb);
            }

            module.exports = delay;

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var castStringTo = __webpack_require__(9);
            var dashToCamel = __webpack_require__(10);

            var _require = __webpack_require__(0),
                REGEX = _require.REGEX,
                ATTR = _require.ATTR;

            function serializeProps(node) {
                var props = {};
                if (node.attributes) {
                    var attributes = Array.from(node.attributes);
                    for (var j = attributes.length - 1; j >= 0; --j) {
                        var attr = attributes[j];
                        var isComponentListener = attr.name.match(REGEX.IS_COMPONENT_LISTENER);
                        if (isComponentListener) {
                            if (props[ATTR.LISTENER] === undefined) props[ATTR.LISTENER] = {};
                            props[ATTR.LISTENER][isComponentListener[1]] = attr.nodeValue;
                            delete props[attr.name];
                        } else {
                            var value = attr.nodeValue;
                            if (REGEX.IS_STRING_QUOTED.test(value)) value = attr.nodeValue.replace(/"/g, '&quot;');
                            props[REGEX.IS_CUSTOM_TAG.test(node.nodeName) ? dashToCamel(attr.name) : attr.name] = attr.name === ATTR.FORCE_UPDATE ? true : castStringTo(value);
                        }
                    }
                }
                return props;
            }

            function transform(node) {

                var root = {};

                function walking(node, parent) {
                    while (node) {
                        var obj = void 0;

                        if (node.nodeType === 3) {
                            obj = node.nodeValue;
                        } else {
                            obj = {};
                            obj.type = node.nodeName; //.toLowerCase();
                            obj.children = [];
                            obj.props = serializeProps(node);
                            obj.isSVG = typeof node.ownerSVGElement !== 'undefined';
                            //console.dir(node);
                        }

                        if (!Object.keys(root).length) root = obj;

                        if (parent && parent.children) {
                            parent.children.push(obj);
                        }

                        if (node.hasChildNodes()) {
                            walking(node.firstChild, obj);
                        }

                        node = node.nextSibling;
                    }
                }

                walking(node, root);

                return root;
            }

            module.exports = {
                transform: transform,
                serializeProps: serializeProps
            };

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function castStringTo(obj) {

                if (typeof obj !== 'string') {
                    return obj;
                }

                switch (obj) {
                    case 'undefined':
                        return undefined;
                    case 'null':
                        return null;
                    case 'NaN':
                        return NaN;
                    case 'Infinity':
                        return Infinity;
                    case 'true':
                        return true;
                    case 'false':
                        return false;
                    case '0':
                        return 0; //obj;
                    default:
                        try {
                            return JSON.parse(obj);
                        } catch (e) {}
                        break;
                }

                var num = parseFloat(obj);
                if (!isNaN(num) && isFinite(obj)) {
                    if (obj.toLowerCase().indexOf('0x') === 0) {
                        return parseInt(obj, 16);
                    }
                    return num;
                }

                return obj;
            }

            module.exports = castStringTo;

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function dashToCamel(s) {
                return s.replace(/(-\w)/g, function (m) {
                    return m[1].toUpperCase();
                });
            }

            module.exports = dashToCamel;

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var element = __webpack_require__(18);

            module.exports = {
                updateElement: element.update
            };

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = __webpack_require__(13);

            /***/
        },
        /* 13 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            module.exports = __webpack_require__(14);
            module.exports.component = __webpack_require__(3).component;
            module.exports.collection = __webpack_require__(1);
            module.exports.update = __webpack_require__(11).updateElement;
            module.exports.transform = __webpack_require__(8).transform;
            module.exports.html = __webpack_require__(4);
            module.exports.version = '1.1.1';

            /***/
        },
        /* 14 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var extend = __webpack_require__(2);
            var bind = __webpack_require__(15);
            var component = __webpack_require__(3);

            var _require = __webpack_require__(0),
                TAG = _require.TAG,
                REGEX = _require.REGEX;

            var Doz = function () {
                function Doz() {
                    var _this = this;

                    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _classCallCheck(this, Doz);

                    var template = '<' + TAG.APP + '></' + TAG.APP + '>';

                    if (REGEX.IS_ID_SELECTOR.test(cfg.root)) {
                        cfg.root = document.getElementById(cfg.root.substring(1));
                    }

                    if (REGEX.IS_ID_SELECTOR.test(cfg.template)) {
                        cfg.template = document.getElementById(cfg.template.substring(1));
                        cfg.template = cfg.template.innerHTML;
                    }

                    if (!(cfg.root instanceof HTMLElement)) {
                        throw new TypeError('root must be an HTMLElement or an valid ID selector like #example-root');
                    }

                    if (!(cfg.template instanceof HTMLElement || typeof cfg.template === 'string' || typeof cfg.template === 'function')) {
                        throw new TypeError('template must be a string or an HTMLElement or a function or an valid ID selector like #example-template');
                    }

                    this.cfg = extend(cfg, {
                        components: [],
                        actions: {}
                    });

                    Object.defineProperties(this, {
                        _components: {
                            value: {},
                            writable: true
                        },
                        _usedComponents: {
                            value: {},
                            writable: true
                        },
                        _stores: {
                            value: {},
                            writable: true
                        },
                        _cache: {
                            value: new Map()
                        },
                        _ids: {
                            value: {},
                            writable: true
                        },
                        _onAppReadyCB: {
                            value: [],
                            writable: true
                        },
                        _callAppReady: {
                            value: function value() {
                                this._onAppReadyCB.forEach(function (cb) {
                                    if (typeof cb === 'function' && cb._instance) {
                                        cb.call(cb._instance);
                                    }
                                });

                                this._onAppReadyCB = [];
                            }
                        },
                        action: {
                            value: bind(this.cfg.actions, this),
                            enumerable: true
                        },
                        mount: {
                            value: function value(_template, root) {
                                var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._tree;

                                if (typeof root === 'string') {
                                    root = document.querySelector(root);
                                }

                                root = root || parent._rootElement;

                                if (!(root instanceof HTMLElement)) {
                                    throw new TypeError('root must be an HTMLElement or an valid selector like #example-root');
                                }

                                var autoCmp = {
                                    tag: TAG.MOUNT,
                                    cfg: {
                                        props: {},
                                        template: function template() {
                                            return '<' + TAG.ROOT + '>' + _template + '</' + TAG.ROOT + '>';
                                        }
                                    }
                                };

                                return component.getInstances({
                                    root: root,
                                    template: '<' + TAG.MOUNT + '></' + TAG.MOUNT + '>',
                                    app: this,
                                    parentCmp: parent,
                                    //isStatic: false,
                                    autoCmp: autoCmp,
                                    mount: true
                                });
                            },
                            enumerable: true
                        }
                    });

                    if (Array.isArray(this.cfg.components)) {
                        this.cfg.components.forEach(function (cmp) {
                            if ((typeof cmp === 'undefined' ? 'undefined' : _typeof(cmp)) === 'object' && typeof cmp.tag === 'string' && _typeof(cmp.cfg) === 'object') {
                                _this._components[cmp.tag] = cmp;
                            }
                        });
                    } else if (_typeof(this.cfg.components) === 'object') {
                        //this._components = Object.assign({}, this.cfg.components);
                        Object.keys(this.cfg.components).forEach(function (objName) {
                            _this._components[objName] = {
                                tag: objName,
                                cfg: _this.cfg.components[objName]
                            };
                        });
                    }

                    this._components[TAG.APP] = {
                        tag: TAG.APP,
                        cfg: {
                            props: cfg.props || {},
                            template: function template() {
                                return typeof cfg.template === 'function' ? cfg.template() : cfg.template;
                            }
                        }
                    };

                    this._tree = component.getInstances({ root: this.cfg.root, template: template, app: this }) || [];
                    this._callAppReady();
                }

                _createClass(Doz, [{
                    key: 'getComponent',
                    value: function getComponent(alias) {
                        return this._tree ? this._tree.children[alias] : undefined;
                    }
                }, {
                    key: 'getComponentById',
                    value: function getComponentById(id) {
                        return this._ids[id];
                    }
                }, {
                    key: 'getStore',
                    value: function getStore(store) {
                        return this._stores[store];
                    }
                }]);

                return Doz;
            }();

            module.exports = Doz;

            /***/
        },
        /* 15 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            function bind(obj, context) {
                if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
                    throw new TypeError('expected an object');
                }

                var target = Object.assign({}, obj);

                var keys = Object.keys(obj);

                for (var i = keys.length - 1; i >= 0; --i) {
                    var item = target[keys[i]];
                    if (typeof item === 'function') {
                        target[keys[i]] = item.bind(context);
                    } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
                        target[keys[i]] = bind(item, context);
                    }
                }

                return target;
            }

            module.exports = bind;

            /***/
        },
        /* 16 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            var proxy = __webpack_require__(5);
            var events = __webpack_require__(6);
            var delay = __webpack_require__(7);

            function updateBound(instance, changes) {
                changes.forEach(function (item) {
                    if (instance._boundElements.hasOwnProperty(item.property)) {
                        instance._boundElements[item.property].forEach(function (element) {
                            if (element.type === 'checkbox') {
                                if (!element.defaultValue) element.checked = item.newValue;else if (Array.isArray(item.newValue)) {
                                    var inputs = document.querySelectorAll('input[name=' + element.name + '][type=checkbox]');
                                    [].concat(_toConsumableArray(inputs)).forEach(function (input) {
                                        return input.checked = item.newValue.includes(input.value);
                                    });
                                }
                            } else if (element.type === 'radio') {
                                element.checked = element.value === item.newValue;
                            } else if (element.type === 'select-multiple' && Array.isArray(item.newValue)) {
                                [].concat(_toConsumableArray(element.options)).forEach(function (option) {
                                    return option.selected = item.newValue.includes(option.value);
                                });
                            } else {
                                element.value = item.newValue;
                            }
                        });
                    }
                });
            }

            function create(instance, props) {
                instance.props = proxy.create(props, true, function (changes) {
                    instance.render();
                    updateBound(instance, changes);
                    if (instance._isCreated) {
                        delay(function () {
                            //updateChildren(instance, changes);
                            events.callUpdate(instance, changes);
                        });
                    }
                });

                proxy.beforeChange(instance.props, function (changes) {
                    var res = events.callBeforeUpdate(instance, changes);
                    if (res === false) return false;
                });
            }

            module.exports = {
                create: create
            };

            /***/
        },
        /* 17 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _list = [];

            /**
             * Simple deprecate
             * @param prop {*}
             * @param msg {string}
             * @returns {boolean}
             */
            var deprecate = function deprecate(prop, msg) {
                if (typeof prop !== 'undefined') {
                    msg = msg || prop;

                    if (!_list.includes(msg)) _list.push(msg);

                    console.warn('[' + deprecate.title + ']', msg);
                    return true;
                }
                return false;
            };

            deprecate.title = 'DeprecationWarning';

            /**
             * Calls only once same deprecation
             * @param args
             * @returns {boolean}
             */
            var once = function once() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (_list.includes(args[1] || args[0])) return false;
                return deprecate.apply(undefined, args);
            };

            module.exports = deprecate;
            module.exports.once = once;
            module.exports._list = _list;

            /***/
        },
        /* 18 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var _require = __webpack_require__(19),
                attach = _require.attach,
                updateAttributes = _require.updateAttributes;

            var deadChildren = [];

            var _require2 = __webpack_require__(0),
                INSTANCE = _require2.INSTANCE,
                TAG = _require2.TAG,
                NS = _require2.NS,
                CMP_INSTANCE = _require2.CMP_INSTANCE;

            function isChanged(nodeA, nodeB) {
                return (typeof nodeA === 'undefined' ? 'undefined' : _typeof(nodeA)) !== (typeof nodeB === 'undefined' ? 'undefined' : _typeof(nodeB)) || typeof nodeA === 'string' && nodeA !== nodeB || nodeA.type !== nodeB.type || nodeA.props && nodeA.props.forceupdate;
            }

            function create(node, cmp, initial) {
                if (typeof node === 'undefined') return;

                if (typeof node === 'string') {
                    return document.createTextNode(node);
                }

                if (node.type[0] === '#') {
                    node.type = TAG.EMPTY;
                }

                var $el = node.isSVG ? document.createElementNS(NS.SVG, node.type) : document.createElement(node.type);

                attach($el, node.props, cmp);

                node.children.map(function (item) {
                    return create(item, cmp, initial);
                }).forEach($el.appendChild.bind($el));

                if (node.type.indexOf('-') !== -1 && !initial) {
                    cmp._processing.push({ node: $el, action: 'create' });
                }

                return $el;
            }

            function update($parent, newNode, oldNode) {
                var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                var cmp = arguments[4];
                var initial = arguments[5];

                if (!oldNode) {
                    var rootElement = create(newNode, cmp, initial);
                    $parent.appendChild(rootElement);
                    return rootElement;
                } else if (!newNode) {
                    if ($parent.childNodes[index]) {
                        deadChildren.push($parent.childNodes[index]);
                    }
                } else if (isChanged(newNode, oldNode)) {
                    var newElement = create(newNode, cmp, initial);
                    var oldElement = $parent.childNodes[index];

                    //Re-assign CMP INSTANCE to new element
                    if (oldElement[CMP_INSTANCE]) {
                        newElement[CMP_INSTANCE] = oldElement[CMP_INSTANCE];
                        newElement[CMP_INSTANCE]._rootElement = newElement;
                    }

                    $parent.replaceChild(newElement, oldElement);
                    return newElement;
                } else if (newNode.type) {
                    var updated = updateAttributes($parent.childNodes[index], newNode.props, oldNode.props, cmp);

                    if ($parent.childNodes[index]) {
                        var dynInstance = $parent.childNodes[index][INSTANCE];
                        if (dynInstance && updated.length) {
                            updated.forEach(function (props) {
                                Object.keys(props).forEach(function (name) {
                                    dynInstance.props[name] = props[name];
                                });
                            });

                            return;
                        }
                    }

                    var newLength = newNode.children.length;
                    var oldLength = oldNode.children.length;

                    for (var i = 0; i < newLength || i < oldLength; i++) {
                        update($parent.childNodes[index], newNode.children[i], oldNode.children[i], i, cmp, initial);
                    }

                    clearDead();
                }
            }

            function clearDead() {
                var dl = deadChildren.length;

                while (dl--) {
                    deadChildren[dl].parentNode.removeChild(deadChildren[dl]);
                    deadChildren.splice(dl, 1);
                }
            }

            module.exports = {
                create: create,
                update: update
            };

            /***/
        },
        /* 19 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }return arr2;
                } else {
                    return Array.from(arr);
                }
            }

            var _require = __webpack_require__(0),
                REGEX = _require.REGEX,
                ATTR = _require.ATTR,
                CMP_INSTANCE = _require.CMP_INSTANCE;

            var castStringTo = __webpack_require__(9);
            var dashToCamel = __webpack_require__(10);
            var camelToDash = __webpack_require__(20);
            var objectPath = __webpack_require__(21);
            var delay = __webpack_require__(7);

            function isEventAttribute(name) {
                return REGEX.IS_LISTENER.test(name);
            }

            function isBindAttribute(name) {
                return name === ATTR.BIND;
            }

            function isRefAttribute(name) {
                return name === ATTR.REF;
            }

            function canBind($target) {
                return ['INPUT', 'TEXTAREA', 'SELECT'].indexOf($target.nodeName) !== -1;
            }

            function setAttribute($target, name, value, cmp) {
                if (REGEX.IS_CUSTOM_TAG.test($target.nodeName)) name = camelToDash(name);
                if (isCustomAttribute(name)) {} else if (typeof value === 'boolean') {
                    setBooleanAttribute($target, name, value);
                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                    try {
                        $target.setAttribute(name, JSON.stringify(value));
                    } catch (e) {}
                } else {
                    $target.setAttribute(name, value);
                }
            }

            function removeAttribute($target, name, value) {
                if (isCustomAttribute(name)) {} else {
                    $target.removeAttribute(name);
                }
            }

            function updateAttribute($target, name, newVal, oldVal, cmp) {
                if (!newVal /*&& newVal !== false*/) {
                        removeAttribute($target, name, oldVal, cmp);
                        updateChildren(cmp, name, newVal, $target);
                    } else if (!oldVal || newVal !== oldVal) {
                    setAttribute($target, name, newVal, cmp);
                    updateChildren(cmp, name, newVal, $target);
                }
            }

            function updateChildren(cmp, name, value, $target) {
                if (cmp && cmp.updateChildrenProps) {
                    name = dashToCamel(name);
                    var firstChild = $target.firstChild;
                    if (firstChild && firstChild[CMP_INSTANCE] && firstChild[CMP_INSTANCE]._publicProps.hasOwnProperty(name)) firstChild[CMP_INSTANCE].props[name] = value;
                }
            }

            function updateAttributes($target, newProps) {
                var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var cmp = arguments[3];

                var props = Object.assign({}, newProps, oldProps);
                var updated = [];
                Object.keys(props).forEach(function (name) {
                    updateAttribute($target, name, newProps[name], oldProps[name], cmp);
                    if (newProps[name] !== oldProps[name]) {
                        var obj = {};
                        obj[name] = newProps[name];
                        updated.push(obj);
                    }
                });

                return updated;
            }

            function isCustomAttribute(name) {
                return isEventAttribute(name) || isBindAttribute(name) || isRefAttribute(name) || name === ATTR.FORCE_UPDATE;
            }

            function setBooleanAttribute($target, name, value) {
                $target.setAttribute(name, value);
                $target[name] = value;
            }

            function extractEventName(name) {
                return name.slice(2).toLowerCase();
            }

            function trimQuotes(str) {
                return str.replace(REGEX.TRIM_QUOTES, '$1');
            }

            function addEventListener($target, name, value, cmp) {

                if (!isEventAttribute(name)) return;

                var match = value.match(REGEX.GET_LISTENER);

                if (match) {
                    var args = null;
                    var handler = match[1];
                    var stringArgs = match[2];
                    if (stringArgs) {
                        args = stringArgs.split(',').map(function (item) {
                            item = item.trim();
                            return item === 'this' ? cmp : castStringTo(trimQuotes(item));
                        });
                    }

                    var isParentMethod = handler.match(REGEX.IS_PARENT_METHOD);

                    if (isParentMethod) {
                        handler = isParentMethod[1];
                        cmp = cmp.parent;
                    }

                    var method = objectPath(handler, cmp);

                    if (method !== undefined) {
                        value = args ? method.bind.apply(method, [cmp].concat(_toConsumableArray(args))) : method.bind(cmp);
                    }
                }

                if (typeof value === 'function') $target.addEventListener(extractEventName(name), value);
            }

            function setBind($target, name, value, cmp) {
                if (!isBindAttribute(name) || !canBind($target)) return;
                if (typeof cmp.props[value] !== 'undefined') {

                    var events = ['compositionstart', 'compositionend', 'input', 'change'];

                    events.forEach(function (event) {
                        $target.addEventListener(event, function (e) {
                            var _value = void 0;
                            if (this.type === 'checkbox') {
                                if (!this.defaultValue) cmp.props[value] = this.checked;else {
                                    var inputs = document.querySelectorAll('input[name=' + this.name + '][type=checkbox]:checked');
                                    _value = [].concat(_toConsumableArray(inputs)).map(function (input) {
                                        return input.value;
                                    });
                                    cmp.props[value] = _value;
                                }
                            } else {
                                _value = this.value;
                                if (this.multiple) {
                                    _value = [].concat(_toConsumableArray(this.options)).filter(function (option) {
                                        return option.selected;
                                    }).map(function (option) {
                                        return option.value;
                                    });
                                }
                                cmp.props[value] = _value;
                            }
                        });
                    });

                    if (cmp._boundElements.hasOwnProperty(value)) {
                        cmp._boundElements[value].push($target);
                    } else {
                        cmp._boundElements[value] = [$target];
                    }

                    return true;
                }
            }

            function setRef($target, name, value, cmp) {
                if (!isRefAttribute(name)) return;
                cmp.ref[value] = $target;
            }

            function attach($target, props, cmp) {
                var bindValue = void 0;

                Object.keys(props).forEach(function (name) {
                    setAttribute($target, name, props[name], cmp);
                    addEventListener($target, name, props[name], cmp);
                    if (setBind($target, name, props[name], cmp)) {
                        bindValue = cmp.props[props[name]];
                    }
                    setRef($target, name, props[name], cmp);
                });

                for (var i in $target.dataset) {
                    if ($target.dataset.hasOwnProperty(i) && REGEX.IS_LISTENER.test(i)) {
                        addEventListener($target, i, $target.dataset[i], cmp);
                    }
                }

                if (typeof bindValue !== 'undefined') {
                    delay(function () {
                        var inputs = void 0;
                        if ($target.type === 'radio') {
                            inputs = document.querySelectorAll('input[name=' + $target.name + '][type=radio]');
                            inputs.forEach(function (input) {
                                return input.checked = bindValue === input.value;
                            });
                        } else if ($target.type === 'checkbox') {
                            if ((typeof bindValue === 'undefined' ? 'undefined' : _typeof(bindValue)) === 'object') {
                                inputs = document.querySelectorAll('input[name=' + $target.name + '][type=checkbox]');
                                inputs.forEach(function (input) {
                                    return input.checked = Array.from(bindValue).includes(input.value);
                                });
                            } else $target.checked = bindValue;
                        } else {
                            $target.value = bindValue;
                        }
                    });
                }
            }

            module.exports = {
                attach: attach,
                updateAttributes: updateAttributes
            };

            /***/
        },
        /* 20 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function camelToDash(s) {
                return s.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
            }

            module.exports = camelToDash;

            /***/
        },
        /* 21 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function getByPath(path, obj) {
                return path.split('.').reduce(function (res, prop) {
                    return res ? res[prop] : undefined;
                }, obj);
            }

            function getLast(path, obj) {
                if (path.indexOf('.') !== -1) {
                    path = path.split('.');
                    path.pop();
                    path = path.join('.');
                }
                return getByPath(path, obj);
            }

            module.exports = getByPath;
            module.exports.getLast = getLast;

            /***/
        },
        /* 22 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function create(instance) {

                if (typeof instance.store === 'string') {
                    if (instance.app._stores[instance.store] !== undefined) {
                        throw new Error('Store already defined: ' + instance.store);
                    }
                    instance.app._stores[instance.store] = instance.props;
                }
            }

            module.exports = {
                create: create
            };

            /***/
        },
        /* 23 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            function create(instance) {

                if (typeof instance.id === 'string') {
                    if (instance.app._ids[instance.id] !== undefined) {
                        throw new Error('ID already defined: ' + instance.id);
                    }
                    instance.app._ids[instance.id] = instance;
                }
            }

            module.exports = {
                create: create
            };

            /***/
        },
        /* 24 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var _require = __webpack_require__(0),
                ATTR = _require.ATTR;

            function extract(props) {

                var dProps = {};

                if (props[ATTR.ALIAS] !== undefined) {
                    dProps['alias'] = props[ATTR.ALIAS];
                    delete props[ATTR.ALIAS];
                }

                if (props[ATTR.STORE] !== undefined) {
                    dProps['store'] = props[ATTR.STORE];
                    delete props[ATTR.STORE];
                }

                if (props[ATTR.LISTENER] !== undefined) {
                    dProps['callback'] = props[ATTR.LISTENER];
                    delete props[ATTR.LISTENER];
                }

                if (props[ATTR.ID] !== undefined) {
                    dProps['id'] = props[ATTR.ID];
                    delete props[ATTR.ID];
                }

                return dProps;
            }

            module.exports = {
                extract: extract
            };

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(7);

var _doz2 = _interopRequireDefault(_doz);

var _lib = __webpack_require__(5);

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