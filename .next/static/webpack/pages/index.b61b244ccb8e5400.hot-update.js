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

/***/ "./src/components/contentSection/taskRowSection/taskRow.jsx":
/*!******************************************************************!*\
  !*** ./src/components/contentSection/taskRowSection/taskRow.jsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskRow\": function() { return /* binding */ TaskRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles/centerSection/taskrow.module.css */ \"./styles/centerSection/taskrow.module.css\");\n/* harmony import */ var _styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TaskRow = (param)=>{\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_1___default().headingContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_1___default().leftContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.heading.text\n                        }, void 0, false, {\n                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                            lineNumber: 7,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.heading.count\n                        }, void 0, false, {\n                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                            lineNumber: 8,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                    lineNumber: 6,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_1___default().rightContainer)\n                }, void 0, false, {\n                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TaskRow;\nvar _c;\n$RefreshReg$(_c, \"TaskRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZW50U2VjdGlvbi90YXNrUm93U2VjdGlvbi90YXNrUm93LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUU7QUFDbEUsTUFBTUMsVUFBVSxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFO0lBQzlCLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBV0osa0dBQXVCOzs4QkFDckMsOERBQUNHO29CQUFJQyxXQUFXSiwrRkFBb0I7O3NDQUNsQyw4REFBQ0c7c0NBQUtELEtBQUtLLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7O3NDQUN2Qiw4REFBQ0w7c0NBQUtELEtBQUtLLE9BQU8sQ0FBQ0UsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUUxQiw4REFBQ047b0JBQUlDLFdBQVdKLGdHQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0MsRUFBRTtLQVpXQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb250ZW50U2VjdGlvbi90YXNrUm93U2VjdGlvbi90YXNrUm93LmpzeD8zZTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3N0eWxlcy9jZW50ZXJTZWN0aW9uL3Rhc2tyb3cubW9kdWxlLmNzc1wiO1xuZXhwb3J0IGNvbnN0IFRhc2tSb3cgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2PntkYXRhLmhlYWRpbmcudGV4dH08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntkYXRhLmhlYWRpbmcuY291bnR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGFpbmVyfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJUYXNrUm93IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRpbmdDb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwiaGVhZGluZyIsInRleHQiLCJjb3VudCIsInJpZ2h0Q29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/contentSection/taskRowSection/taskRow.jsx\n"));

/***/ })

});