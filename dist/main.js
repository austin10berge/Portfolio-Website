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

/***/ "./src/developer.js":
/*!**************************!*\
  !*** ./src/developer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadDeveloperPage\": () => (/* binding */ loadDeveloperPage)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _musician__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./musician */ \"./src/musician.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\n// const headline = document.createElement(\"h1\");\n// headline.innerHTML = \"Developer\";\n\n// Create three main headings\nconst bodyText1 = document.createElement(\"h1\");\nbodyText1.innerHTML = \"Developer\";\nbodyText1.id = \"developer\";\nbodyText1.className += \" clickable titles\";\n\nconst bodyText2 = document.createElement(\"h1\");\nbodyText2.innerHTML = \"Musician\";\nbodyText2.id = \"musician\";\nbodyText2.className += \" clickable inactive titles\";\n\nconst bodyText3 = document.createElement(\"h1\");\nbodyText3.innerHTML = \"Learner\";\nbodyText3.id = \"learner\";\nbodyText3.className += \" clickable inactive titles\";\n\n// Create sub heading\nconst subHeading = document.createElement(\"h3\");\nsubHeading.innerHTML = \"HTML/CSS | JavaScript | PHP | Wordpress | C++ | Windows | Linux | Networking\";\nsubHeading.id = \"subheading\";\n\nfunction loadDeveloperPage() {\n    let block = document.getElementById(\"content\");\n    block.innerHTML = \"\";\n    let subBlock = document.getElementById(\"subcontent\");\n    subBlock.innerHTML = \"\";\n    let titleBlock = document.getElementById(\"titleRow\");\n    titleBlock.innerHTML = \"\";\n    \n    titleBlock.appendChild(bodyText1);\n    titleBlock.appendChild(bodyText2);\n    titleBlock.appendChild(bodyText3);\n    block.appendChild(subHeading);\n    // subblock.appendChild(subHeading); \n    (0,___WEBPACK_IMPORTED_MODULE_2__.eventLoad)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/developer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _developer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./developer */ \"./src/developer.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nconst headline = document.createElement(\"h1\");\nheadline.innerHTML = \"Austin TenBerge\";\n\nconst bodyText1 = document.createElement(\"h3\");\nbodyText1.innerHTML = \"Developer\";\nbodyText1.id = \"developer\";\nbodyText1.className += \" clickable\";\n\nconst bodyText2 = document.createElement(\"h3\");\nbodyText2.innerHTML = \"Musician\";\nbodyText2.id = \"musician\";\nbodyText2.className += \" clickable\";\n\nconst bodyText3 = document.createElement(\"h3\");\nbodyText3.innerHTML = \"Learner\";\nbodyText3.id = \"learner\";\nbodyText3.className += \" clickable\";\n\nfunction loadPage() {\n    let block = document.getElementById(\"content\");\n    let subblock = document.getElementById(\"subcontent\");\n    let titleBlock = document.getElementById(\"titleRow\");\n    titleBlock.innerHTML = \"\";\n    subblock.innerHTML = \"\";\n    block.innerHTML = \"\";\n    block.appendChild(headline);\n    subblock.appendChild(bodyText1);\n    subblock.appendChild(bodyText2);\n    subblock.appendChild(bodyText3);\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.eventLoad)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventLoad\": () => (/* binding */ eventLoad)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _learner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learner.js */ \"./src/learner.js\");\n/* harmony import */ var _musician_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./musician.js */ \"./src/musician.js\");\n/* harmony import */ var _developer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developer.js */ \"./src/developer.js\");\n\n\n\n\n\nfunction eventLoad() {\n    // document.getElementById(\"home\").addEventListener(\"click\", loadPage); \n    // document.getElementById(\"about\").addEventListener(\"click\", loadAboutPage);\n    // document.getElementById(\"contact\").addEventListener(\"click\", loadContactPage);\n\n    document.getElementById(\"home\").addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__.loadPage); \n    document.getElementById(\"developer\").addEventListener(\"click\", _developer_js__WEBPACK_IMPORTED_MODULE_3__.loadDeveloperPage);\n    document.getElementById(\"musician\").addEventListener(\"click\", _musician_js__WEBPACK_IMPORTED_MODULE_2__.loadMusicianPage);\n    document.getElementById(\"learner\").addEventListener(\"click\", _learner_js__WEBPACK_IMPORTED_MODULE_1__.loadLearnerPage); \n} \n\nwindow.onload = function() {\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n    eventLoad();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/learner.js":
/*!************************!*\
  !*** ./src/learner.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadLearnerPage\": () => (/* binding */ loadLearnerPage)\n/* harmony export */ });\n/* harmony import */ var _musician__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./musician */ \"./src/musician.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\n// const headline = document.createElement(\"h1\");\n// headline.innerHTML = \"Learner\";\n\n// Create three main headings\nconst bodyText1 = document.createElement(\"h1\");\nbodyText1.innerHTML = \"Developer\";\nbodyText1.id = \"developer\";\nbodyText1.className += \" clickable titles inactive\";\n\nconst bodyText2 = document.createElement(\"h1\");\nbodyText2.innerHTML = \"Musician\";\nbodyText2.id = \"musician\";\nbodyText2.className += \" clickable inactive titles\";\n\nconst bodyText3 = document.createElement(\"h1\");\nbodyText3.innerHTML = \"Learner\";\nbodyText3.id = \"learner\";\nbodyText3.className += \" clickable titles\";\n\n// Create sub heading\nconst bodyText = document.createElement(\"p\");\nbodyText.innerHTML = \"I'm a learner dude.\";\n\nfunction loadLearnerPage() {\n    let block = document.getElementById(\"content\");\n    block.innerHTML = \"\";\n    let subblock = document.getElementById(\"subcontent\");\n    subblock.innerHTML = \"\";\n    let titleBlock = document.getElementById(\"titleRow\");\n    titleBlock.innerHTML = \"\";\n    \n    titleBlock.appendChild(bodyText1);\n    titleBlock.appendChild(bodyText2);\n    titleBlock.appendChild(bodyText3);\n    \n    block.appendChild(bodyText);\n\n    (0,___WEBPACK_IMPORTED_MODULE_2__.eventLoad)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/learner.js?");

/***/ }),

/***/ "./src/musician.js":
/*!*************************!*\
  !*** ./src/musician.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMusicianPage\": () => (/* binding */ loadMusicianPage)\n/* harmony export */ });\n/* harmony import */ var _developer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./developer */ \"./src/developer.js\");\n/* harmony import */ var _learner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learner */ \"./src/learner.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\n\n\n\n// const headline = document.createElement(\"h1\");\n// headline.innerHTML = \"Musician\";\n\n// Create three main headings\nconst bodyText1 = document.createElement(\"h1\");\nbodyText1.innerHTML = \"Developer\";\nbodyText1.id = \"developer\";\nbodyText1.className += \" clickable titles inactive\";\n\nconst bodyText2 = document.createElement(\"h1\");\nbodyText2.innerHTML = \"Musician\";\nbodyText2.id = \"musician\";\nbodyText2.className += \" clickable titles\";\n\nconst bodyText3 = document.createElement(\"h1\");\nbodyText3.innerHTML = \"Learner\";\nbodyText3.id = \"learner\";\nbodyText3.className += \" clickable inactive titles\";\n\n// Create sub heading\nconst bodyText = document.createElement(\"p\");\nbodyText.innerHTML = \"I'm a musician dude.\";\n\nfunction loadMusicianPage() {\n    let block = document.getElementById(\"content\");\n    block.innerHTML = \"\";\n    let subblock = document.getElementById(\"subcontent\");\n    subblock.innerHTML = \"\";\n    let titleBlock = document.getElementById(\"titleRow\");\n    titleBlock.innerHTML = \"\";\n    \n    titleBlock.appendChild(bodyText1);\n    titleBlock.appendChild(bodyText2);\n    titleBlock.appendChild(bodyText3);\n    \n    block.appendChild(bodyText);\n\n    (0,___WEBPACK_IMPORTED_MODULE_2__.eventLoad)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/musician.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;