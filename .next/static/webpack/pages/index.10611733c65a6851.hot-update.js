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

/***/ "./src/components/contentSection/taskRowSection/index.jsx":
/*!****************************************************************!*\
  !*** ./src/components/contentSection/taskRowSection/index.jsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskRowSection\": function() { return /* binding */ TaskRowSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _taskRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskRow */ \"./src/components/contentSection/taskRowSection/taskRow.jsx\");\n/* harmony import */ var _styles_centerSection_taskRowSection_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/centerSection/taskRowSection.module.css */ \"./styles/centerSection/taskRowSection.module.css\");\n/* harmony import */ var _styles_centerSection_taskRowSection_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_centerSection_taskRowSection_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst TaskRowSection = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(async ()=>{\n        const response = await fetch(\"/api/taskData\");\n        if (!response.ok) throw new Error(\"Error: \".concat(response.status));\n        const data = await response.json();\n        return ()=>{\n            cleanup;\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_centerSection_taskRowSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskSectionMainContainer),\n        children: data.map((ev)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_centerSection_taskRowSection_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskSectionContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_taskRow__WEBPACK_IMPORTED_MODULE_1__.TaskRow, {\n                    data: ev\n                }, void 0, false, {\n                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/index.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/index.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskRowSection, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n_c = TaskRowSection;\nvar _c;\n$RefreshReg$(_c, \"TaskRowSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZW50U2VjdGlvbi90YXNrUm93U2VjdGlvbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFvQztBQUM0QztBQUNwQztBQUNyQyxNQUFNSSxpQkFBaUIsSUFBTTs7SUFDbEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFFbkNELGdEQUFTQSxDQUFDLFVBQVk7UUFDcEIsTUFBTUssV0FBVyxNQUFNQyxNQUFPO1FBQzlCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxVQUEwQixPQUFoQkgsU0FBU0ksTUFBTSxHQUFJO1FBQy9ELE1BQU1OLE9BQU8sTUFBTUUsU0FBU0ssSUFBSTtRQUNoQyxPQUFPLElBQU07WUFDWEM7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXZCxpSEFBK0I7a0JBQzVDSSxLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsbUJBQ1QsOERBQUNKO2dCQUFJQyxXQUFXZCw2R0FBMkI7MEJBQ3pDLDRFQUFDRCw2Q0FBT0E7b0JBQUNLLE1BQU1hOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCLEVBQUU7R0FyQldkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnRTZWN0aW9uL3Rhc2tSb3dTZWN0aW9uL2luZGV4LmpzeD9iMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhc2tSb3cgfSBmcm9tIFwiLi90YXNrUm93XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvY2VudGVyU2VjdGlvbi90YXNrUm93U2VjdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgVGFza1Jvd1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdGFza0RhdGFgKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhbnVwO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFza1NlY3Rpb25NYWluQ29udGFpbmVyfT5cbiAgICAgIHtkYXRhLm1hcCgoZXYpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXNrU2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPFRhc2tSb3cgZGF0YT17ZXZ9PjwvVGFza1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiVGFza1JvdyIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFza1Jvd1NlY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImNsZWFudXAiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YXNrU2VjdGlvbk1haW5Db250YWluZXIiLCJtYXAiLCJldiIsInRhc2tTZWN0aW9uQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/contentSection/taskRowSection/index.jsx\n"));

/***/ })

});