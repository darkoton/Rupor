/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/device.js":
/*!**********************************!*\
  !*** ./src/js/modules/device.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  let isMobile = {\r\n    Android: function () { return navigator.userAgent.match(/Android/i); },\r\n    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },\r\n    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },\r\n    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },\r\n    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },\r\n    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }\r\n  };\r\n\r\n  if (isMobile.any()) {\r\n    document.body.classList.add(\"_touch\");\r\n  } else {\r\n    document.body.classList.add(\"_pc\");\r\n  }\r\n} \n\n//# sourceURL=webpack://rupor/./src/js/modules/device.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n  // Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = () => {\r\n      callback(webP.height == 2)\r\n    }\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\"\r\n  }\r\n\r\n  // Добавление класса _webp или _no-webp для HTML\r\n  testWebP((support) => {\r\n    let className = support === true ? \"webp\" : \"no-webp\";\r\n    document.documentElement.classList.add(className);\r\n  })\r\n}\n\n//# sourceURL=webpack://rupor/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_device_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/device.js */ \"./src/js/modules/device.js\");\n//< \" CONNECTING JS COMPONENTS \" >=============================================================================================================>//\r\n //SUPPORT WEBP\r\n\r\n //DEFINE DEVICE\r\n\r\n// import './modules/preloader.js'; // PRELOADER\r\n\r\n// import \"./modules/spoiler.js\"  // SPOILERS\r\n\r\n// import \"./modules/dynamic_adap.js\"  // DYNAMIC ADAPTIVE\r\n\r\n// import \"./modules/scroll_header.js\"  // SCROLL HEADER\r\n\r\n// import \"./modules/swiper.js\"  // SLIDER SWIPER\r\n\r\n// import \"./modules/animate_scroll.js\"  // ANIMATE WITH SCROLL\r\n\r\n// import \"./modules/tabs.js\"  // TABS\r\n\r\n// import \"./modules/parallax.js\"  // PARALLAX EFFECT\r\n\r\n//< \" СКРИПТЫ \" >=============================================================================================================>//\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_device_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// Header burger\r\n\r\nconst burgerClose = document.querySelector('.header__close');\r\nconst burgerOpen = document.querySelector('.header__burger');\r\nconst burgerMenu = document.querySelector('.header__nav');\r\n\r\nburgerOpen.addEventListener('click', () => {\r\n  burgerMenu.classList.add('active');\r\n});\r\n\r\nburgerClose.addEventListener('click', () => {\r\n  burgerMenu.classList.remove('active');\r\n});\r\n\n\n//# sourceURL=webpack://rupor/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;