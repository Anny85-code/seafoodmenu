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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/capstone-meal.jpg */ \"./src/img/capstone-meal.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quintessential&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  position: relative;\\r\\n  min-height: 100vh;\\r\\n  margin: 0;\\r\\n  background-color: #464866;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: unset;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 1000;\\r\\n  background-color: #aaabb8;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.navbar u {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nnav img {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.tittle {\\r\\n  font-family: 'Neonderthaw', sans-serif;\\r\\n  font-size: 30px;\\r\\n  color: #464866;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-size: 20px;\\r\\n  color: #464866;\\r\\n}\\r\\n\\r\\n.meal-name {\\r\\n  color: #464866;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-size: 16px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.meals-number {\\r\\n  color: #def2f1;\\r\\n}\\r\\n\\r\\n.date {\\r\\n  font-size: 16px;\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  color: #464866;\\r\\n}\\r\\n\\r\\n.cards-wrapper {\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 110px 10px;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: 98%;\\r\\n  background-position-x: 50%;\\r\\n  border-top-left-radius: 10%;\\r\\n  border-top-right-radius: 10%;\\r\\n  background-color: #29648a;\\r\\n  transition: box-shadow 130ms ease-in-out;\\r\\n  overflow: hidden;\\r\\n  height: 430px;\\r\\n  position: relative;\\r\\n  margin-bottom: 0;\\r\\n  padding: 50px;\\r\\n  width: 320px;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  box-shadow: 10px 12px 6px rgba(0, 0, 0, 0.2), -1px -1px 7px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.flex-li {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  background-color: #2e9cca;\\r\\n  bottom: 65px;\\r\\n  left: 0;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  color: #fff;\\r\\n  padding: 0;\\r\\n  margin-right: 40px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.flex-li span {\\r\\n  color: #fff;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  font-size: 24px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.likeCounter {\\r\\n  background-color: #fff;\\r\\n  bottom: 40px;\\r\\n  left: 0;\\r\\n  font-family: 'Quintessential', sans-serif;\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  color: #464886;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-btn {\\r\\n  border: 1px solid #fff;\\r\\n  background-color: #2e9cca;\\r\\n  border-radius: 21px;\\r\\n  color: #fff;\\r\\n  position: absolute;\\r\\n  bottom: 3px;\\r\\n  right: 38%;\\r\\n  text-align: center;\\r\\n  margin: auto;\\r\\n  padding: 0 4px;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.comments-btn:hover {\\r\\n  color: #fccd04;\\r\\n}\\r\\n\\r\\n.pop-up-container {\\r\\n  display: none;\\r\\n  width: 60vw;\\r\\n  border: 2px #000 solid;\\r\\n  box-sizing: border-box;\\r\\n  background-color: #1e1b26;\\r\\n  margin: 60px auto 0 auto;\\r\\n  box-shadow: 5px 5px 115px -14px black;\\r\\n  border-radius: 30px;\\r\\n  background-image:\\r\\n    linear-gradient(\\r\\n      rgba(22, 12, 46, 0.95),\\r\\n      rgba(73, 66, 92, 0.95)\\r\\n    ),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.main-pop-up {\\r\\n  display: none;\\r\\n  height: 100vh;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  background-color: rgba(100, 88, 88, 0.7);\\r\\n  backdrop-filter: blur(3px);\\r\\n  overflow-y: scroll;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.pop-up-container.pop {\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.span-div {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.id-title {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: center;\\r\\n  justify-content: center;\\r\\n  color: #fff;\\r\\n  font-family: 'Neonderthaw', sans-serif;\\r\\n  font-weight: bolder;\\r\\n  font-size: 35px;\\r\\n}\\r\\n\\r\\n.meal-details1 {\\r\\n  color: #a4b3b6;\\r\\n  font-size: 28px;\\r\\n  font-family: 'Neonderthaw', sans-serif;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.meal-details {\\r\\n  margin-right: 50px;\\r\\n  color: #e98074;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\n.meal-image {\\r\\n  width: 80%;\\r\\n  margin-top: 60px;\\r\\n  height: 380px;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  z-index: 111 !important;\\r\\n  border-top-left-radius: 15px;\\r\\n  border-top-right-radius: 15px;\\r\\n  -webkit-mask-image:\\r\\n    -webkit-gradient(\\r\\n      linear,\\r\\n      left top,\\r\\n      left bottom,\\r\\n      color-stop(0, rgba(0, 0, 0, 1)),\\r\\n      color-stop(0.35, rgba(0, 0, 0, 1)),\\r\\n      color-stop(0.5, rgba(0, 0, 0, 1)),\\r\\n      color-stop(0.65, rgba(0, 0, 0, 1)),\\r\\n      color-stop(0.85, rgba(0, 0, 0, 0.6)),\\r\\n      color-stop(1, rgba(0, 0, 0, 0))\\r\\n    );\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.meal-image:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  position: absolute;\\r\\n  margin-right: 10px;\\r\\n  font-size: 30px;\\r\\n  font-weight: bold;\\r\\n  border: none;\\r\\n  background-color: #1e1b26;\\r\\n  color: rgb(141, 105, 105);\\r\\n}\\r\\n\\r\\n.close-button:hover {\\r\\n  color: red;\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n  color: #a8a878;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.comment-counter {\\r\\n  color: burlywood;\\r\\n  font-size: 27px;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding-left: 10px;\\r\\n  color: rgb(82, 81, 80);\\r\\n  background-color: rgb(233, 224, 224);\\r\\n  width: 400px;\\r\\n  height: 40px;\\r\\n  border-radius: 5px;\\r\\n  border: 1px #000 solid;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  padding-left: 10px;\\r\\n  color: rgb(73, 72, 70);\\r\\n  background-color: rgb(236, 232, 232);\\r\\n  width: 400px;\\r\\n  border-radius: 5px;\\r\\n  border: 1px #000 solid;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-size: 15px;\\r\\n  font-weight: 600;\\r\\n  color: rgb(112, 107, 107);\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  padding: 5px;\\r\\n  box-shadow: 5px 5px rgb(26, 25, 25);\\r\\n  margin-bottom: 20px;\\r\\n  border: 2px #000 solid;\\r\\n  width: 250px;\\r\\n  background-color: #44318d;\\r\\n  color: #fff;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.white {\\r\\n  color: #fff;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n  font-weight: 800;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\nfooter::after {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n  background-color: darkgray;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  font-size: 30px;\\r\\n  color: rgb(2, 28, 43);\\r\\n  background-color: #aaabb8;\\r\\n  font-weight: bold;\\r\\n  padding: 10px 0 10px 0;\\r\\n  text-align: center;\\r\\n  font-family: 'Nanum Pen Script', sans-serif;\\r\\n}\\r\\n\\r\\n.footer-name:hover {\\r\\n  color: goldenrod;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 678px) {\\r\\n  .cards-wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 100px 200px;\\r\\n    margin: 100px 0 100px 0;\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    width: 380px;\\r\\n  }\\r\\n\\r\\n  nav img {\\r\\n    display: block;\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n  }\\r\\n\\r\\n  .tittle {\\r\\n    font-size: 70px;\\r\\n  }\\r\\n\\r\\n  .name {\\r\\n    font-size: 40px;\\r\\n  }\\r\\n\\r\\n  .meal-name {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n\\r\\n  .comments-btn {\\r\\n    font-size: 21px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 678px) {\\r\\n  .meal-image {\\r\\n    width: 80%;\\r\\n    margin-top: 60px;\\r\\n    height: 380px;\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    z-index: 111 !important;\\r\\n    border-top-left-radius: 15px;\\r\\n    border-top-right-radius: 15px;\\r\\n    -webkit-mask-image:\\r\\n      -webkit-gradient(\\r\\n        linear,\\r\\n        left top,\\r\\n        left bottom,\\r\\n        color-stop(0, rgba(0, 0, 0, 1)),\\r\\n        color-stop(0.35, rgba(0, 0, 0, 1)),\\r\\n        color-stop(0.5, rgba(0, 0, 0, 1)),\\r\\n        color-stop(0.65, rgba(0, 0, 0, 1)),\\r\\n        color-stop(0.85, rgba(0, 0, 0, 0.6)),\\r\\n        color-stop(1, rgba(0, 0, 0, 0))\\r\\n      );\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  .pop-up-container {\\r\\n    display: none;\\r\\n    width: 90vw;\\r\\n    border: 2px #000 solid;\\r\\n    box-sizing: border-box;\\r\\n    background-color: #1e1b26;\\r\\n    margin: 60px auto 0 auto;\\r\\n    box-shadow: 5px 5px 115px -14px black;\\r\\n    border-radius: 30px;\\r\\n    background-image:\\r\\n      linear-gradient(\\r\\n        rgba(22, 12, 46, 0.95),\\r\\n        rgba(73, 66, 92, 0.95)\\r\\n      ),\\r\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  }\\r\\n\\r\\n  .main-pop-up {\\r\\n    display: none;\\r\\n    height: 100vh;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    width: 100%;\\r\\n    background-color: rgba(100, 88, 88, 0.7);\\r\\n    backdrop-filter: blur(3px);\\r\\n    overflow-y: scroll;\\r\\n    z-index: 1;\\r\\n  }\\r\\n\\r\\n  .pop-up-container.pop {\\r\\n    display: grid;\\r\\n  }\\r\\n\\r\\n  .pop-up {\\r\\n    text-align: center;\\r\\n    width: fit-content;\\r\\n  }\\r\\n\\r\\n  .close-button {\\r\\n    position: absolute;\\r\\n    margin-right: 10px;\\r\\n    font-size: 30px;\\r\\n    font-weight: bold;\\r\\n    border: none;\\r\\n    background-color: #1e1b26;\\r\\n    color: rgb(141, 105, 105);\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    padding-left: 10px;\\r\\n    color: bisque;\\r\\n    background-color: rgb(179, 168, 168);\\r\\n    width: 250px;\\r\\n    height: 40px;\\r\\n    border-radius: 5px;\\r\\n    border: 1px #000 solid;\\r\\n  }\\r\\n\\r\\n  textarea {\\r\\n    padding-left: 10px;\\r\\n    color: bisque;\\r\\n    background-color: rgb(68, 64, 64);\\r\\n    width: 250px;\\r\\n    border-radius: 5px;\\r\\n    border: 1px #000 solid;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getDataFromAPI.js */ \"./src/modules/getDataFromAPI.js\");\n\r\n\r\n\r\n\r\nwindow.onload = async () => {\r\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await (0,_modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n};\r\n\r\nconst Footer = () => {\r\n  const footer = document.querySelector('footer');\r\n  const currentYear = new Date().getFullYear();\r\n  footer.innerHTML = `<footer>\r\n                \r\n                <span>&#169;</span> ${currentYear} Created by Dejan & <a class=\"footer-name\" href=\"https://github.com/Anny85-code\">Anny</a> .\r\n            </footer>\r\n            <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>`;\r\n};\r\n\r\nFooter();\r\n\r\nconst { luxon } = window;\r\nconst date = document.querySelector('.date');\r\ndate.innerText = luxon.DateTime.now()\r\n  .toFormat('MMMM dd, yyyy, hh:mm:ss a')\r\n  .toString();\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (items) => items.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _homepageCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepageCounter.js */ \"./src/modules/homepageCounter.js\");\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pop-up.js */ \"./src/modules/pop-up.js\");\n/* harmony import */ var _getInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getInfo.js */ \"./src/modules/getInfo.js\");\n\r\n\r\n\r\n\r\n\r\nconst mealsContainer = document.querySelector('.cards-wrapper');\r\nconst numbersOfMeals = document.querySelector('.meals-number');\r\n\r\nconst list = (meals) => {\r\n  meals.forEach(async (meal) => {\r\n    const ul = document.createElement('ul');\r\n    ul.id = meal.idMeal;\r\n    ul.classList.add('card');\r\n    ul.style.backgroundImage = `url('${meal.strMealThumb}')`;\r\n    mealsContainer.appendChild(ul);\r\n    const imageContainer = document.createElement('li');\r\n    ul.appendChild(imageContainer);\r\n    const image = document.createElement('img');\r\n    image.classList.add('image');\r\n    imageContainer.appendChild(image);\r\n    const mealTitle = document.createElement('li');\r\n    ul.appendChild(mealTitle);\r\n    mealTitle.classList.add('flex-li');\r\n    const mealName = document.createElement('span');\r\n    mealName.classList.add('meal-name');\r\n    mealName.innerHTML = meal.strMeal;\r\n    mealTitle.appendChild(mealName);\r\n    const spanHeart = document.createElement('span');\r\n    mealTitle.appendChild(spanHeart);\r\n    const heart = document.createElement('i');\r\n    heart.classList.add('far', 'fa-heart', 'like');\r\n    heart.id = meal.idMeal;\r\n    mealTitle.appendChild(heart);\r\n    const likesNumber = document.createElement('li');\r\n    likesNumber.classList.add('likeCounter');\r\n    likesNumber.innerHTML = 'O likes';\r\n    ul.appendChild(likesNumber);\r\n    const commentBtn = document.createElement('li');\r\n    ul.appendChild(commentBtn);\r\n    const anchor = document.createElement('a');\r\n    anchor.id = meals.idMeal;\r\n    anchor.classList.add('comments-btn');\r\n    anchor.href = '#';\r\n    anchor.text = 'Comments';\r\n    commentBtn.appendChild(anchor);\r\n\r\n    const popUpContainer = document.querySelector('.pop-up-container');\r\n    anchor.addEventListener('click', async () => {\r\n      popUpContainer.classList.add('pop');\r\n      (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await (0,_getInfo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(meal.idMeal));\r\n      const navbar = document.querySelector('.navbar');\r\n      navbar.classList.add('hide');\r\n    });\r\n\r\n    const likesData = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikesFromAPI)();\r\n    const showLikes = (likesData, likesNumber) => {\r\n      likesData.forEach((likeProp) => {\r\n        if (likeProp.item_id === heart.id) {\r\n          likesNumber.innerHTML = `${likeProp.likes} likes `;\r\n        }\r\n      });\r\n    };\r\n    showLikes(likesData, likesNumber);\r\n\r\n    heart.addEventListener('click', async () => {\r\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.addLikeToAPI)(heart.id);\r\n      heart.style.color = 'red';\r\n      setTimeout(() => {\r\n        heart.style.color = 'unset';\r\n      }, 2000);\r\n\r\n      const likeComing = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikesFromAPI)();\r\n      showLikes(likeComing, likesNumber);\r\n    });\r\n  });\r\n\r\n  numbersOfMeals.textContent = (0,_homepageCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meals);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/displayItems.js?");

/***/ }),

/***/ "./src/modules/getDataFromAPI.js":
/*!***************************************!*\
  !*** ./src/modules/getDataFromAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDataFromAPI = async () => {\r\n  const getMeals = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');\r\n  return (await getMeals.json()).meals;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataFromAPI);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/getDataFromAPI.js?");

/***/ }),

/***/ "./src/modules/getInfo.js":
/*!********************************!*\
  !*** ./src/modules/getInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getInfo = async (idMeal) => {\r\n  const getMealsInfo = await fetch(\r\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,\r\n  );\r\n  return (await getMealsInfo.json()).meals;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInfo);\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/getInfo.js?");

/***/ }),

/***/ "./src/modules/homepageCounter.js":
/*!****************************************!*\
  !*** ./src/modules/homepageCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homepageCounter = (items) => items.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageCounter);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/homepageCounter.js?");

/***/ }),

/***/ "./src/modules/involvementkeys.js":
/*!****************************************!*\
  !*** ./src/modules/involvementkeys.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCommentsToAPI\": () => (/* binding */ setCommentsToAPI),\n/* harmony export */   \"getCommentsFromAPI\": () => (/* binding */ getCommentsFromAPI)\n/* harmony export */ });\nconst setCommentsToAPI = async (idMeal, userName, userComment) => {\r\n  fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vndo6TmrXVAk8EneIclU/comments',\r\n    {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: idMeal,\r\n        username: userName,\r\n        comment: userComment,\r\n      }),\r\n    },\r\n  )\r\n    .then((res) => res.ok)\r\n    .then((data) => data);\r\n};\r\n\r\nconst getCommentsFromAPI = async (idMeal) => {\r\n  const response = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Vndo6TmrXVAk8EneIclU\r\n\r\n/comments?item_id=${idMeal}`,\r\n  );\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/involvementkeys.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesFromAPI\": () => (/* binding */ getLikesFromAPI),\n/* harmony export */   \"addLikeToAPI\": () => (/* binding */ addLikeToAPI)\n/* harmony export */ });\nconst getLikesFromAPI = async () => {\r\n  const getLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes');\r\n  const json = await getLike.json();\r\n  return json;\r\n};\r\n\r\nconst addLikeToAPI = async (mealId) => {\r\n  const postLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes', {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: mealId,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return postLike;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementkeys.js */ \"./src/modules/involvementkeys.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst mainPopUp = document.querySelector('.main-pop-up');\r\nconst popUpContainer = document.querySelector('.pop-up-container');\r\nconst popUp = async ([meal]) => {\r\n  mainPopUp.style.display = 'block';\r\n  popUpContainer.innerHTML = '';\r\n  const div = document.createElement('div');\r\n  div.id = 'some';\r\n  div.classList.add('pop-up');\r\n  popUpContainer.appendChild(div);\r\n  const mealImage = document.createElement('img');\r\n  mealImage.src = meal.strMealThumb;\r\n  mealImage.classList.add('meal-image');\r\n  div.appendChild(mealImage);\r\n  const closeButton = document.createElement('button');\r\n  closeButton.innerText = 'X';\r\n  closeButton.classList.add('close-button');\r\n  div.appendChild(closeButton);\r\n  const ID = document.createElement('h2');\r\n  ID.innerText = meal.strMeal;\r\n  ID.classList.add('id-title');\r\n  div.appendChild(ID);\r\n  const spanDiv = document.createElement('div');\r\n  spanDiv.classList.add('span-div');\r\n  const iDText = document.createElement('ul');\r\n  iDText.classList.add('id-text');\r\n  const li = document.createElement('li');\r\n  const li2 = document.createElement('li');\r\n  const li3 = document.createElement('li');\r\n  li.innerHTML = `<span class=\"meal-details1\">Category</span> : ${meal.strCategory}`;\r\n  li.classList.add('meal-details');\r\n  li2.innerHTML = `<span class=\"meal-details1\">Origin</span> : ${meal.strArea}`;\r\n  li2.classList.add('meal-details');\r\n  li3.innerHTML = `<span class=\"meal-details1\">Recipe</span> : ${meal.strInstructions}`;\r\n  li3.classList.add('meal-details');\r\n  iDText.appendChild(li);\r\n  iDText.appendChild(li2);\r\n  iDText.appendChild(li3);\r\n  spanDiv.appendChild(iDText);\r\n  div.appendChild(spanDiv);\r\n  const commentHeader = document.createElement('h3');\r\n  commentHeader.classList.add('comment-text');\r\n  commentHeader.innerText = '';\r\n  const commentText = document.createElement('ul');\r\n  commentText.classList.add('comment-container');\r\n  const commentNumber = document.createElement('li');\r\n  commentNumber.classList.add('comment-counter');\r\n  div.appendChild(commentHeader);\r\n  commentText.appendChild(commentNumber);\r\n  div.appendChild(commentText);\r\n  const displayComments = document.createElement('ul');\r\n  displayComments.classList.add('p-comment');\r\n  div.appendChild(displayComments);\r\n  const form = document.createElement('form');\r\n  const input = document.createElement('input');\r\n  input.placeholder = 'Your name';\r\n  input.id = 'username';\r\n  input.type = 'text';\r\n  const textArea = document.createElement('textarea');\r\n  textArea.placeholder = 'Your insight';\r\n  textArea.id = 'usercomment';\r\n  form.appendChild(input);\r\n  form.appendChild(textArea);\r\n  const btn = document.createElement('button');\r\n  btn.type = 'submit';\r\n  btn.disabled = 'disabled';\r\n  btn.classList.add('btn');\r\n  btn.innerText = 'Comments';\r\n  form.appendChild(btn);\r\n  div.appendChild(form);\r\n\r\n  closeButton.addEventListener('click', () => {\r\n    popUpContainer.classList.remove('pop');\r\n    mainPopUp.style.display = 'none';\r\n    const navbar = document.querySelector('.navbar');\r\n    navbar.classList.remove('hide');\r\n  });\r\n\r\n  const addComment = (el) => {\r\n    const comments = document.createElement('li');\r\n    comments.classList.add('.comment');\r\n    comments.innerHTML = `<span class='white'>${el.creation_date}</span> <span class='white'>${el.username}:</span> <span class='white'>${el.comment}</span>`;\r\n    displayComments.appendChild(comments);\r\n  };\r\n\r\n  const commentList = await (0,_involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__.getCommentsFromAPI)(meal.idMeal);\r\n  let counter = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commentList);\r\n  commentNumber.innerHTML = `Comments (${counter})`;\r\n\r\n  const toggleSubmit = () => {\r\n    const isDisabled = ![].some.call(\r\n      document.querySelectorAll('input[type=text]'),\r\n      (input) => input.value.length,\r\n    );\r\n    if (isDisabled) {\r\n      btn.addAttribute('disabled');\r\n    } else {\r\n      btn.removeAttribute('disabled');\r\n    }\r\n  };\r\n\r\n  document.querySelector('form').addEventListener('input', toggleSubmit, false);\r\n\r\n  btn.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n\r\n    const userName = input.value;\r\n    const userComment = textArea.value;\r\n    counter += 1;\r\n    commentNumber.innerHTML = `Comments (${counter})`;\r\n    const date = new Date();\r\n    const creationDate = date.toISOString().split('T')[0];\r\n    addComment({\r\n      creation_date: creationDate,\r\n      comment: userComment,\r\n      username: userName,\r\n    });\r\n    btn.setAttribute('disabled', 'disabled');\r\n    form.reset();\r\n    await (0,_involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__.setCommentsToAPI)(meal.idMeal, userName, userComment);\r\n  });\r\n\r\n  commentList.forEach((element) => {\r\n    addComment(element);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/pop-up.js?");

/***/ }),

/***/ "./src/img/capstone-meal.jpg":
/*!***********************************!*\
  !*** ./src/img/capstone-meal.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e023e0513aa7537c90cb.jpg\";\n\n//# sourceURL=webpack://capstone-2-javascript/./src/img/capstone-meal.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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