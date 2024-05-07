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

/***/ "./js/modules/components/CarrinhoComponent.js":
/*!****************************************************!*\
  !*** ./js/modules/components/CarrinhoComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\r\n\n\n//# sourceURL=webpack://projeto-cardapio/./js/modules/components/CarrinhoComponent.js?");

/***/ }),

/***/ "./js/modules/components/MenuComponents.js":
/*!*************************************************!*\
  !*** ./js/modules/components/MenuComponents.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  name: \"MenuComponent\",\r\n  data() {\r\n    return {\r\n      produtos: {},\r\n      produto: \"\",\r\n      carrinho: [],\r\n    };\r\n  },\r\n  template: `\r\n  <main class=\"cardapio-container_box\">\r\n  {{carrinho}}\r\n\r\n\r\n  <ul class=\"carpadio_box\">\r\n\r\n    <li class=\"carpadio_item\"\r\n     v-for=\" {name, id, img, descricao, preco} in produtos\"\r\n     :key=\"id\" @click=\"fetchproduct(id)\" >\r\n      <div class=\"carpadio_img\">\r\n        <img :src=\"img\" :alt=\"name\" width=\"288\" height=\"288\">\r\n      </div>\r\n      <div class=\"cardapio_dados\">\r\n        <h3 class=\"subt_hamb\">{{name}}</h3>\r\n        <p class=\"carpadio_descricao\">{{descricao}}</p>\r\n        <span>{{preco | formToReal}} <button @click=\"adicinarItem\" class=\"bi bi-cart-plus-fill\"></button></span>\r\n        </div>\r\n        </li>\r\n        </ul>\r\n</main>\r\n  `,\r\n  filters: {\r\n    // não esta formatando o número?\r\n    formToReal(value) {\r\n      return value.toLocaleString(\"pt-BR\", {\r\n        style: \"currency\",\r\n        currency: \"BRL\",\r\n      });\r\n    },\r\n  },\r\n  methods: {\r\n    fetchProdutos() {\r\n      fetch(\"./api/produtos.json\").then((r) =>\r\n        r.json().then((data) => {\r\n          this.produtos = data;\r\n        })\r\n      );\r\n    },\r\n    fetchproduct(id) {\r\n      fetch(`./api/produtos/${id}/dados.json`).then((response) =>\r\n        response.json().then((data) => {\r\n          this.produto = data;\r\n        })\r\n      );\r\n    },\r\n    adicinarItem() {\r\n      const { name, id, preco } = this.produto;\r\n      this.carrinho.push(this.produto);\r\n    },\r\n  },\r\n  created() {\r\n    this.fetchProdutos();\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://projeto-cardapio/./js/modules/components/MenuComponents.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_components_MenuComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/components/MenuComponents.js */ \"./js/modules/components/MenuComponents.js\");\n/* harmony import */ var _modules_components_CarrinhoComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/components/CarrinhoComponent.js */ \"./js/modules/components/CarrinhoComponent.js\");\n\r\n\r\n\r\n\r\nconst vm = new Vue({\r\n  el: \"#app\",\r\n  data: {},\r\n  components: {\r\n    MenuComponent: _modules_components_MenuComponents_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    CarrinhoComponent: _modules_components_CarrinhoComponent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://projeto-cardapio/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;