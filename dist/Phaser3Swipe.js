(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Phaser3Swipe"] = factory();
	else
		root["Phaser3Swipe"] = factory();
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ ([
/* 0 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* @author       Francisco Pereira Alvarado - gammafp <gammafp@gmail.com>
* @copyright    2018 gammafp.
*/
var Phaser3Swipe = function (_Phaser$Plugins$BaseP) {
    _inherits(Phaser3Swipe, _Phaser$Plugins$BaseP);

    function Phaser3Swipe(pluginManager) {
        _classCallCheck(this, Phaser3Swipe);

        var _this = _possibleConstructorReturn(this, (Phaser3Swipe.__proto__ || Object.getPrototypeOf(Phaser3Swipe)).call(this, pluginManager));

        _this.directions = {
            left: false,
            right: false,
            up: false,
            down: false
        };
        return _this;
    }

    _createClass(Phaser3Swipe, [{
        key: "cargar",
        value: function cargar(scene) {
            var _this2 = this;

            this.scene = scene;

            this.scene.input.on("pointerdown", function (e) {
                _this2.x = e.x;
                _this2.y = e.y;
            });

            this.scene.input.on("pointerup", function (e) {
                var resetDir = _this2.resetDirections(_this2.directions);

                var deltaY = e.y - _this2.y;
                var deltaX = e.x - _this2.x;

                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    if (deltaX > 100) {
                        _this2.sendEvent(resetDir("right"));
                    } else if (deltaX < -100) {
                        _this2.sendEvent(resetDir("left"));
                    }
                } else {
                    if (deltaY > 100) {
                        _this2.sendEvent(resetDir("down"));
                    } else if (deltaY < -100) {
                        _this2.sendEvent(resetDir("up"));
                    }
                }
            });
        }
    }, {
        key: "resetDirections",
        value: function resetDirections(dir) {
            return function (newDir) {
                var outDir = dir;
                Object.keys(dir).map(function (x) {
                    outDir[x] = x === newDir ? true : false;
                });
                return outDir;
            };
        }
    }, {
        key: "sendEvent",
        value: function sendEvent(dir) {
            this.scene.events.emit("swipe", dir);
        }
    }]);

    return Phaser3Swipe;
}(Phaser.Plugins.BasePlugin);

// Exportación


module.exports = Phaser3Swipe;
global.Phaser3Swipe = Phaser3Swipe;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ 0)))

/***/ })
/******/ ]);
});