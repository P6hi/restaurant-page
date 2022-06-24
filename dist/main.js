/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactPage": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _elementCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate.js */ "./src/elementCreate.js");


const contactPage = function() {
    const container = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'contact-container');
    const contactHeader = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'contact-header', 'Contact Information');
    const email = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', undefined, 'Email: lorem@ipsum.com');
    const address = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', undefined, 'Address: Mustamäe tee, 50');
    const tele = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', undefined, '+372 700 7000');
    container.append(contactHeader);
    container.append(email);
    container.append(address);
    container.append(tele);
    return container;
}


/***/ }),

/***/ "./src/elementCreate.js":
/*!******************************!*\
  !*** ./src/elementCreate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element, className, content) {
    const el = document.createElement(element);
    if (className) {
        el.classList.add(className);
    }
    if (typeof content === 'string') {
        el.textContent = content;
    }
    return el;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _elementCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate.js */ "./src/elementCreate.js");


const homePage = function() {
    const description = 'Põhjamaa Köök is a restaurant specialising in the cuisine of Northern Europe. We use the freshest ingredients gathered from the Nordic region. Salmon from Norway, mushrooms from Sweden, meat from Finland, and berries from Estonia.';
    const container = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'home-container');
    const homeHeader = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'home-header', 'Põhjamaa Köök');
    const homeText = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'home-text', description);
    container.append(homeHeader);
    container.append(homeText);
    return container;
}

/***/ }),

/***/ "./src/mainPageLoad.js":
/*!*****************************!*\
  !*** ./src/mainPageLoad.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
/* harmony import */ var _elementCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate.js */ "./src/elementCreate.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const mainPage = function() {
    const main = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('main');
    const linkItems = ['Home', 'Menu', 'Contact'];
    const header = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('header');
    const companyName = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h1', 'company-name', 'Põhjamaa Köök');
    const linkList = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', 'list');
    const copyright = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('small', undefined, '© Põhjamaa Köök');
    for (let i = 0; i < linkItems.length; i++) {
        const link = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('li');
        const anchor = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('a', undefined, linkItems[i]);
        anchor.setAttribute('data-link', `${i}`);
        link.append(anchor);
        linkList.append(link);
    }
    const footer = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('footer');
    header.append(companyName);
    header.append(linkList);
    footer.append(copyright);
    document.body.append(header);
    document.body.append(main);
    document.body.append(footer);
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
    link.addEventListener('click', (e) => {
        if (e.target.dataset.link === '0') {
            main.textContent = '';
            main.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)());
        } else if (e.target.dataset.link === '1') {
            main.textContent = '';
            main.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuPage)());
        } else if (e.target.dataset.link === '2') {
            main.textContent = '';
            main.append((0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactPage)());
        }
    })
})
    return main;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _elementCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate.js */ "./src/elementCreate.js");
/* harmony import */ var _assets_img_meatballs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/meatballs.jpg */ "./src/assets/img/meatballs.jpg");
/* harmony import */ var _assets_img_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/salad.jpg */ "./src/assets/img/salad.jpg");
/* harmony import */ var _assets_img_dessert_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/dessert.jpg */ "./src/assets/img/dessert.jpg");





const menuPage = function() {
    const menuItemCreator = function(itemName, itemSource) {
        const itemTitle = itemName;
        const source = itemSource;
        return {
            itemTitle,
            itemSource
        }
    }
    const foodItems = [menuItemCreator('Meatballs', _assets_img_meatballs_jpg__WEBPACK_IMPORTED_MODULE_1__), menuItemCreator('Salad', _assets_img_salad_jpg__WEBPACK_IMPORTED_MODULE_2__), menuItemCreator('Dessert', _assets_img_dessert_jpg__WEBPACK_IMPORTED_MODULE_3__)];
    const foodItemsElements = [];
    foodItems.forEach((item) => {
        const itemContainer = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
        const itemHeader = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', undefined, item.itemTitle);
        const itemImg = new Image();
        itemImg.src = item.itemSource;
        itemContainer.append(itemHeader);
        itemContainer.append(itemImg);
        foodItemsElements.push(itemContainer);
    })
    const container = (0,_elementCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-container');
    for (let i = 0; i < foodItemsElements.length; i++) {
        container.append(foodItemsElements[i]);
    };
    return container;
}

/***/ }),

/***/ "./src/assets/img/dessert.jpg":
/*!************************************!*\
  !*** ./src/assets/img/dessert.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "feb1b4111e0034db8185.jpg";

/***/ }),

/***/ "./src/assets/img/meatballs.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/meatballs.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "323df56bf17cb044a60f.jpg";

/***/ }),

/***/ "./src/assets/img/salad.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/salad.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b530e68955414b6796b8.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _mainPageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPageLoad */ "./src/mainPageLoad.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");




(0,_mainPageLoad__WEBPACK_IMPORTED_MODULE_1__.mainPage)().append((0,_home__WEBPACK_IMPORTED_MODULE_2__.homePage)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQStDOztBQUV4QztBQUNQLHNCQUFzQiw2REFBYTtBQUNuQywwQkFBMEIsNkRBQWE7QUFDdkMsa0JBQWtCLDZEQUFhO0FBQy9CLG9CQUFvQiw2REFBYTtBQUNqQyxpQkFBaUIsNkRBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQSw2QkFBZSxvQ0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1QrQzs7QUFFeEM7QUFDUDtBQUNBLHNCQUFzQiw2REFBYTtBQUNuQyx1QkFBdUIsNkRBQWE7QUFDcEMscUJBQXFCLDZEQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWK0M7QUFDYjtBQUNBO0FBQ007O0FBRWpDO0FBQ1AsaUJBQWlCLDZEQUFhO0FBQzlCO0FBQ0EsbUJBQW1CLDZEQUFhO0FBQ2hDLHdCQUF3Qiw2REFBYTtBQUNyQyxxQkFBcUIsNkRBQWE7QUFDbEMsc0JBQXNCLDZEQUFhO0FBQ25DLG9CQUFvQixzQkFBc0I7QUFDMUMscUJBQXFCLDZEQUFhO0FBQ2xDLHVCQUF1Qiw2REFBYTtBQUNwQyw0Q0FBNEMsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBUTtBQUNoQyxVQUFVO0FBQ1Y7QUFDQSx3QkFBd0IsK0NBQVE7QUFDaEMsVUFBVTtBQUNWO0FBQ0Esd0JBQXdCLHFEQUFXO0FBQ25DO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQytDO0FBQ0Q7QUFDSDtBQUNJOztBQUV4QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsc0RBQUksNEJBQTRCLGtEQUFLLDhCQUE4QixvREFBTztBQUM5SDtBQUNBO0FBQ0EsOEJBQThCLDZEQUFhO0FBQzNDLDJCQUEyQiw2REFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQiw2REFBYTtBQUNuQyxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ2M7QUFDUjs7QUFFbEMsdURBQVEsVUFBVSwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzJmZjQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnRDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW5QYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vZWxlbWVudENyZWF0ZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMicsICdjb250YWN0LWhlYWRlcicsICdDb250YWN0IEluZm9ybWF0aW9uJyk7XG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVFbGVtZW50KCdwJywgdW5kZWZpbmVkLCAnRW1haWw6IGxvcmVtQGlwc3VtLmNvbScpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50KCdwJywgdW5kZWZpbmVkLCAnQWRkcmVzczogTXVzdGFtw6RlIHRlZSwgNTAnKTtcbiAgICBjb25zdCB0ZWxlID0gY3JlYXRlRWxlbWVudCgncCcsIHVuZGVmaW5lZCwgJyszNzIgNzAwIDcwMDAnKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGNvbnRhY3RIZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZW1haWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoYWRkcmVzcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZCh0ZWxlKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vZWxlbWVudENyZWF0ZS5qcyc7XG5cbmV4cG9ydCBjb25zdCBob21lUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gJ1DDtWhqYW1hYSBLw7bDtmsgaXMgYSByZXN0YXVyYW50IHNwZWNpYWxpc2luZyBpbiB0aGUgY3Vpc2luZSBvZiBOb3J0aGVybiBFdXJvcGUuIFdlIHVzZSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgZ2F0aGVyZWQgZnJvbSB0aGUgTm9yZGljIHJlZ2lvbi4gU2FsbW9uIGZyb20gTm9yd2F5LCBtdXNocm9vbXMgZnJvbSBTd2VkZW4sIG1lYXQgZnJvbSBGaW5sYW5kLCBhbmQgYmVycmllcyBmcm9tIEVzdG9uaWEuJztcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaG9tZS1jb250YWluZXInKTtcbiAgICBjb25zdCBob21lSGVhZGVyID0gY3JlYXRlRWxlbWVudCgnaDInLCAnaG9tZS1oZWFkZXInLCAnUMO1aGphbWFhIEvDtsO2aycpO1xuICAgIGNvbnN0IGhvbWVUZXh0ID0gY3JlYXRlRWxlbWVudCgncCcsICdob21lLXRleHQnLCBkZXNjcmlwdGlvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZChob21lSGVhZGVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGhvbWVUZXh0KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vZWxlbWVudENyZWF0ZS5qcyc7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBtZW51UGFnZSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gJy4vY29udGFjdCc7XG5cbmV4cG9ydCBjb25zdCBtYWluUGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgbGlua0l0ZW1zID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGNvbXBhbnlOYW1lID0gY3JlYXRlRWxlbWVudCgnaDEnLCAnY29tcGFueS1uYW1lJywgJ1DDtWhqYW1hYSBLw7bDtmsnKTtcbiAgICBjb25zdCBsaW5rTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ2xpc3QnKTtcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBjcmVhdGVFbGVtZW50KCdzbWFsbCcsIHVuZGVmaW5lZCwgJ8KpIFDDtWhqYW1hYSBLw7bDtmsnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5rID0gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gY3JlYXRlRWxlbWVudCgnYScsIHVuZGVmaW5lZCwgbGlua0l0ZW1zW2ldKTtcbiAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnZGF0YS1saW5rJywgYCR7aX1gKTtcbiAgICAgICAgbGluay5hcHBlbmQoYW5jaG9yKTtcbiAgICAgICAgbGlua0xpc3QuYXBwZW5kKGxpbmspO1xuICAgIH1cbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kKGNvbXBhbnlOYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kKGxpbmtMaXN0KTtcbiAgICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXIpO1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQubGluayA9PT0gJzAnKSB7XG4gICAgICAgICAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBtYWluLmFwcGVuZChob21lUGFnZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LmxpbmsgPT09ICcxJykge1xuICAgICAgICAgICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmQobWVudVBhZ2UoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuZGF0YXNldC5saW5rID09PSAnMicpIHtcbiAgICAgICAgICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKGNvbnRhY3RQYWdlKCkpO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG4gICAgcmV0dXJuIG1haW47XG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9lbGVtZW50Q3JlYXRlLmpzJztcbmltcG9ydCBtZWFsIGZyb20gJy4vYXNzZXRzL2ltZy9tZWF0YmFsbHMuanBnJztcbmltcG9ydCBzYWxhZCBmcm9tICcuL2Fzc2V0cy9pbWcvc2FsYWQuanBnJztcbmltcG9ydCBkZXNzZXJ0IGZyb20gJy4vYXNzZXRzL2ltZy9kZXNzZXJ0LmpwZyc7XG5cbmV4cG9ydCBjb25zdCBtZW51UGFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lbnVJdGVtQ3JlYXRvciA9IGZ1bmN0aW9uKGl0ZW1OYW1lLCBpdGVtU291cmNlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW1OYW1lO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSBpdGVtU291cmNlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbVRpdGxlLFxuICAgICAgICAgICAgaXRlbVNvdXJjZVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGZvb2RJdGVtcyA9IFttZW51SXRlbUNyZWF0b3IoJ01lYXRiYWxscycsIG1lYWwpLCBtZW51SXRlbUNyZWF0b3IoJ1NhbGFkJywgc2FsYWQpLCBtZW51SXRlbUNyZWF0b3IoJ0Rlc3NlcnQnLCBkZXNzZXJ0KV07XG4gICAgY29uc3QgZm9vZEl0ZW1zRWxlbWVudHMgPSBbXTtcbiAgICBmb29kSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMycsIHVuZGVmaW5lZCwgaXRlbS5pdGVtVGl0bGUpO1xuICAgICAgICBjb25zdCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGl0ZW1JbWcuc3JjID0gaXRlbS5pdGVtU291cmNlO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtSGVhZGVyKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbUltZyk7XG4gICAgICAgIGZvb2RJdGVtc0VsZW1lbnRzLnB1c2goaXRlbUNvbnRhaW5lcik7XG4gICAgfSlcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudS1jb250YWluZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvb2RJdGVtc0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZm9vZEl0ZW1zRWxlbWVudHNbaV0pO1xuICAgIH07XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBtYWluUGFnZSB9IGZyb20gJy4vbWFpblBhZ2VMb2FkJztcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSAnLi9ob21lJztcblxubWFpblBhZ2UoKS5hcHBlbmQoaG9tZVBhZ2UoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=