(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Iddy", [], factory);
	else if(typeof exports === 'object')
		exports["Iddy"] = factory();
	else
		root["Iddy"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./authentication.ts":
/*!***************************!*\
  !*** ./authentication.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var userCacheKey = 'iddy.user';
var isAuthenticatedCacheKey = 'iddy.isAuthenticated';
var Authentication = /** @class */ (function () {
    function Authentication(clientOptions) {
        var _this = this;
        this.init = function (clientOptions) {
            if (clientOptions.domain) {
                _this.domain = "https://" + clientOptions.domain || false;
            }
            else {
                _this.domain = '';
            }
        };
        this.getToken = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = null // localStorage.getItem(userCacheKey)
                        ;
                        token = token ? JSON.parse(token) : null;
                        if (!!token) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch(this.domain + "/api/token", { mode: 'cors', credentials: 'include' })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        token = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        token = null;
                        _a.label = 4;
                    case 4: return [2 /*return*/, token];
                }
            });
        }); };
        this.getUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var user, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = null // localStorage.getItem(userCacheKey)
                        ;
                        user = user ? JSON.parse(user) : null;
                        if (!!user) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch(this.domain + "/api/me", { mode: 'cors', credentials: 'include' })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        user = _a.sent();
                        localStorage.setItem(userCacheKey, JSON.stringify(user));
                        localStorage.setItem(isAuthenticatedCacheKey, 'true');
                        return [3 /*break*/, 4];
                    case 3:
                        user = null;
                        _a.label = 4;
                    case 4: return [2 /*return*/, user];
                }
            });
        }); };
        this.isAuthenticated = function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, !!user];
                }
            });
        }); };
        this.loginWithRedirect = function (options) {
            var _a = (options || {}).redirectUri, redirectUri = _a === void 0 ? null : _a;
            if (window) {
                redirectUri = redirectUri ? redirectUri : window.location.href;
                window.location.href = _this.domain + "/login?redirectUri=" + encodeURIComponent(redirectUri);
            }
        };
        this.logout = function (options) { return __awaiter(_this, void 0, void 0, function () {
            var _a, returnTo, response, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).returnTo, returnTo = _a === void 0 ? null : _a;
                        localStorage.removeItem(userCacheKey);
                        localStorage.removeItem(isAuthenticatedCacheKey);
                        return [4 /*yield*/, fetch(this.domain + "/api/logout", { mode: 'cors', credentials: 'include' })];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _b.sent();
                        console.log('logout', data);
                        if (returnTo) {
                            alert(1);
                            if (window) {
                                window.location.href = returnTo;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (clientOptions.domain) {
            this.domain = "https://" + clientOptions.domain || false;
        }
        else {
            this.domain = '';
        }
    }
    return Authentication;
}());
exports.default = Authentication;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var authentication_1 = __webpack_require__(/*! ./authentication */ "./authentication.ts");
exports.Authentication = authentication_1.default;


/***/ })

/******/ });
});
//# sourceMappingURL=iddy.js.map