"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/contentSection/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/contentSection/index.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContentSection\": function() { return /* binding */ ContentSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _secondPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondPanel */ \"./src/components/contentSection/secondPanel/index.jsx\");\n/* harmony import */ var _topPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topPanel */ \"./src/components/contentSection/topPanel/index.jsx\");\n/* harmony import */ var _thirdSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thirdSection */ \"./src/components/contentSection/thirdSection/index.jsx\");\n/* harmony import */ var _taskRowSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskRowSection */ \"./src/components/contentSection/taskRowSection/index.jsx\");\n/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useWindowDimensions */ \"./src/components/hooks/useWindowDimensions.js\");\n/* harmony import */ var _hooks_dimensioner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/dimensioner */ \"./src/components/hooks/dimensioner.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ContentSection = ()=>{\n    _s();\n    // const windowWidth = useWidth();\n    const { width: windowWidth  } = (0,_hooks_dimensioner__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_topPanel__WEBPACK_IMPORTED_MODULE_2__.TopPanel, {}, void 0, false, {\n                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/index.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_secondPanel__WEBPACK_IMPORTED_MODULE_1__.SecondPanel, {}, void 0, false, {\n                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            windowWidth > 750 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_thirdSection__WEBPACK_IMPORTED_MODULE_3__.ThirdSection, {}, void 0, false, {\n                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 28\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentSection, \"+IPddtdmDSHhD+bUkhttTNew7eQ=\", false, function() {\n    return [\n        _hooks_dimensioner__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = ContentSection;\nvar _c;\n$RefreshReg$(_c, \"ContentSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZW50U2VjdGlvbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTjtBQUNRO0FBQ0k7QUFDTTtBQUNEO0FBRWhELE1BQU1NLGlCQUFpQixJQUFNOztJQUNsQyxrQ0FBa0M7SUFFbEMsTUFBTSxFQUFFQyxPQUFPQyxZQUFXLEVBQUUsR0FBR0gsOERBQW1CQTtJQUVsRCxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDUiwrQ0FBUUE7Ozs7OzBCQUNULDhEQUFDRCxxREFBV0E7Ozs7O1lBQ1hRLGNBQWMsb0JBQU0sOERBQUNOLHVEQUFZQTs7Ozs0QkFBbUIsRUFBRTs7Ozs7OztBQUc3RCxFQUFFO0dBWldJOztRQUdvQkQsMERBQW1CQTs7O0tBSHZDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb250ZW50U2VjdGlvbi9pbmRleC5qc3g/NDdmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWNvbmRQYW5lbCB9IGZyb20gXCIuL3NlY29uZFBhbmVsXCI7XG5pbXBvcnQgeyBUb3BQYW5lbCB9IGZyb20gXCIuL3RvcFBhbmVsXCI7XG5pbXBvcnQgeyBUaGlyZFNlY3Rpb24gfSBmcm9tIFwiLi90aGlyZFNlY3Rpb25cIjtcbmltcG9ydCB7IFRhc2tSb3dTZWN0aW9uIH0gZnJvbSBcIi4vdGFza1Jvd1NlY3Rpb25cIjtcbmltcG9ydCB7IHVzZVdpZHRoIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi9ob29rcy9kaW1lbnNpb25lclwiO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHdpbmRvd1dpZHRoID0gdXNlV2lkdGgoKTtcblxuICBjb25zdCB7IHdpZHRoOiB3aW5kb3dXaWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUb3BQYW5lbD48L1RvcFBhbmVsPlxuICAgICAgPFNlY29uZFBhbmVsPjwvU2Vjb25kUGFuZWw+XG4gICAgICB7d2luZG93V2lkdGggPiA3NTAgPyA8VGhpcmRTZWN0aW9uPjwvVGhpcmRTZWN0aW9uPiA6IFwiXCJ9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlNlY29uZFBhbmVsIiwiVG9wUGFuZWwiLCJUaGlyZFNlY3Rpb24iLCJUYXNrUm93U2VjdGlvbiIsInVzZVdpZHRoIiwidXNlV2luZG93RGltZW5zaW9ucyIsIkNvbnRlbnRTZWN0aW9uIiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/contentSection/index.jsx\n"));

/***/ })

});