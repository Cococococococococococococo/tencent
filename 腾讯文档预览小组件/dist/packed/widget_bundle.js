(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@vikadata/widget-sdk"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@vikadata/widget-sdk"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("@vikadata/widget-sdk")) : factory(root["_React"], root["_@vikadata/widget-sdk"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__vikadata_widget_sdk__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../Users/hequn/ten/腾讯文档预览小组件/src/selection.tsx":
/*!************************************************************************!*\
  !*** ../../../../../../../Users/hequn/ten/腾讯文档预览小组件/src/selection.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selection": () => (/* binding */ Selection)
/* harmony export */ });
/* harmony import */ var _vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vikadata/widget-sdk */ "@vikadata/widget-sdk");
/* harmony import */ var _vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var Selection = function () {
    var viewId = (0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.useActiveViewId)();
    var activeCell = (0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.useActiveCell)();
    var activeRecord = (0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.useRecord)(activeCell === null || activeCell === void 0 ? void 0 : activeCell.recordId);
    var selection = (0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.useSelection)();
    var fields = (0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.useFields)(viewId, {
        ids: selection === null || selection === void 0 ? void 0 : selection.fieldIds
    });
    var records = (0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_0__.useRecords)(viewId, {
        ids: selection === null || selection === void 0 ? void 0 : selection.recordIds
    });
    var a = (activeCell === null || activeCell === void 0 ? void 0 : activeCell.fieldId) && (activeRecord === null || activeRecord === void 0 ? void 0 : activeRecord.getCellValueString(activeCell === null || activeCell === void 0 ? void 0 : activeCell.fieldId));
    if (a) {
        localStorage.a = a;
    }
    var iframeShow = '';
    var fontShowshow = '';
    function CheckUrl(str) {
        var RegUrl = new RegExp("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$", 'g');
        if (!RegUrl.test(str) || str.slice(0, 19) !== 'https://docs.qq.com') {
            return false;
        }
        return true;
    }
    var localUrl = CheckUrl(localStorage.a);
    if (localUrl == true) {
        iframeShow = 'contents';
        fontShowshow = 'none';
    }
    else {
        iframeShow = 'none';
        fontShowshow = 'contents';
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: {
            width: '100%',
            height: '100%',
            lineHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        } },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { style: {
                display: fontShowshow,
                top: '50%',
                width: '100%',
                height: '100%',
                lineHeight: '100%',
                textAlign: 'center'
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", { src: 'https://s1.vika.cn/space/2022/03/04/bef58da868cc4dad907bb125571fc9a7', style: {
                    width: '88px',
                    marginBottom: '20px'
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", { style: {
                    floodOpacity: 'inherit',
                    color: '7B67EE',
                    width: "100%",
                    paddingLeft: '10px',
                    marginTop: '10px'
                } }, " \u8BF7\u9884\u89C8\u817E\u8BAF\u6587\u6863\u7684\u5730\u5740 ")),
        localUrl && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("iframe", { style: {
                width: '100%',
                height: '100%',
                border: 'none'
            }, src: localStorage.a }));
};


/***/ }),

/***/ "@vikadata/widget-sdk":
/*!***************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@vikadata/widget-sdk","commonjs2":"@vikadata/widget-sdk","amd":"@vikadata/widget-sdk","root":"_@vikadata/widget-sdk"} ***!
  \***************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__vikadata_widget_sdk__;

/***/ }),

/***/ "react":
/*!***************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"_React"} ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************!*\
  !*** ../../../../../../../Users/hequn/ten/腾讯文档预览小组件/src/index.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vikadata/widget-sdk */ "@vikadata/widget-sdk");
/* harmony import */ var _vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection */ "../../../../../../../Users/hequn/ten/腾讯文档预览小组件/src/selection.tsx");



var WidgetDeveloperTemplate = function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
            display: 'flex',
            height: '100%',
            width: 'auto'
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_selection__WEBPACK_IMPORTED_MODULE_2__.Selection, null));
};
(0,_vikadata_widget_sdk__WEBPACK_IMPORTED_MODULE_1__.initializeWidget)(WidgetDeveloperTemplate, 'wpk3uz2cJkjE2');

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=widget_bundle.js.map