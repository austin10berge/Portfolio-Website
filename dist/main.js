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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAboutPage\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nconst headline = document.createElement(\"h1\");\nheadline.innerHTML = \"About Us\";\n\nconst bodyText = document.createElement(\"p\");\nbodyText.innerHTML = \"I'm a righteous dude.\";\n\nfunction loadAboutPage() {\n    let block = document.getElementById(\"content\");\n    block.innerHTML = \"\";\n    block.appendChild(headline);\n    block.appendChild(bodyText);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst headline = document.createElement(\"h1\");\nheadline.innerHTML = \"Contact Us\";\n\nconst bodyText = document.createElement(\"p\");\nbodyText.innerHTML = \"In order to contact us, please head to your local supermarket, purchase a bag of peach rings, and shove em up your butt.\";\n\nfunction loadContactPage() {\n    let block = document.getElementById(\"content\");\n    block.innerHTML = \"\";\n    block.appendChild(headline);\n    block.appendChild(bodyText);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\nconst headline = document.createElement(\"h1\");\nheadline.innerHTML = \"Austin TenBerge\";\n\nconst bodyText1 = document.createElement(\"h3\");\nbodyText1.innerHTML = \"Developer\";\nconst bodyText2 = document.createElement(\"h3\");\nbodyText2.innerHTML = \"Musician\";\nconst bodyText3 = document.createElement(\"h3\");\nbodyText3.innerHTML = \"Learner\" ;\n\nfunction loadPage() {\n    let block = document.getElementById(\"content\");\n    let subblock = document.getElementById(\"subcontent\");\n    block.innerHTML = \"\";\n    subblock.innerHTML = \"\";\n    block.appendChild(headline);\n    subblock.appendChild(bodyText1);\n    subblock.appendChild(bodyText2);\n    subblock.appendChild(bodyText3);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nfunction eventLoad() {\n    document.getElementById(\"home\").addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__.loadPage); \n    document.getElementById(\"about\").addEventListener(\"click\", _about_js__WEBPACK_IMPORTED_MODULE_1__.loadAboutPage);\n    document.getElementById(\"contact\").addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage);\n} \n\nwindow.onload = function() {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n    eventLoad();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;