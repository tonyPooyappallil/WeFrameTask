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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskRow\": function() { return /* binding */ TaskRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data/svg */ \"./data/svg/index.js\");\n/* harmony import */ var _styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../styles/centerSection/taskrow.module.css */ \"./styles/centerSection/taskrow.module.css\");\n/* harmony import */ var _styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TaskRow = (param)=>{\n    let { data  } = param;\n    const getAvatars = (count)=>{\n        let data = [];\n        for(let index = 0; index < count; index++){\n            data.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"testing\"\n            }, void 0, false, {\n                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, undefined));\n        }\n        return data;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().headingContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().leftContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: data.heading.text\n                            }, void 0, false, {\n                                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: data.heading.count\n                            }, void 0, false, {\n                                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().rightContainer),\n                        children: [\n                            \" \",\n                            _data_svg__WEBPACK_IMPORTED_MODULE_1__.threedotSvg,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            data.taskData.map((ev)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskCardContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskCardTop),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskCardTopTitle),\n                                    children: ev.title\n                                }, void 0, false, {\n                                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskCardTopRight),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"svg\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: ev.count\n                                        }, void 0, false, {\n                                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskCardMiddle),\n                            children: ev.tags.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: item\n                                }, void 0, false, {\n                                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_centerSection_taskrow_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskCardBottom),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: getAvatars(ev.avatars)\n                                }, void 0, false, {\n                                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"svg\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: ev.attachments\n                                        }, void 0, false, {\n                                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"svg\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: ev.comments\n                                        }, void 0, false, {\n                                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tonyce/Desktop/Repos/WeFrameTask/src/components/contentSection/taskRowSection/taskRow.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TaskRow;\nvar _c;\n$RefreshReg$(_c, \"TaskRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZW50U2VjdGlvbi90YXNrUm93U2VjdGlvbi90YXNrUm93LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ3NCO0FBQ2xFLE1BQU1FLFVBQVUsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTtJQUM5QixNQUFNQyxhQUFhLENBQUNDLFFBQVU7UUFDNUIsSUFBSUYsT0FBTyxFQUFFO1FBQ2IsSUFBSyxJQUFJRyxRQUFRLEdBQUdBLFFBQVFELE9BQU9DLFFBQVM7WUFDMUNILEtBQUtJLElBQUksZUFBQyw4REFBQ0M7MEJBQUk7Ozs7OztRQUNqQjtRQUNBLE9BQU9MO0lBQ1Q7SUFDQSxxQkFDRSw4REFBQ0s7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBV1Isa0dBQXVCOztrQ0FDckMsOERBQUNPO3dCQUFJQyxXQUFXUiwrRkFBb0I7OzBDQUNsQyw4REFBQ087MENBQUtMLEtBQUtTLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7OzBDQUN2Qiw4REFBQ0w7MENBQUtMLEtBQUtTLE9BQU8sQ0FBQ1AsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUUxQiw4REFBQ0c7d0JBQUlDLFdBQVdSLGdHQUFxQjs7NEJBQUU7NEJBQUVELGtEQUFXQTs0QkFBQzs7Ozs7Ozs7Ozs7OztZQUd0REcsS0FBS1ksUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsbUJBQ2xCLDhEQUFDVDtvQkFBSUMsV0FBV1IsbUdBQXdCOztzQ0FDdEMsOERBQUNPOzRCQUFJQyxXQUFXUiw2RkFBa0I7OzhDQUNoQyw4REFBQ087b0NBQUlDLFdBQVdSLGtHQUF1Qjs4Q0FBR2dCLEdBQUdJLEtBQUs7Ozs7Ozs4Q0FDbEQsOERBQUNiO29DQUFJQyxXQUFXUixrR0FBdUI7O3NEQUNyQyw4REFBQ087c0RBQUk7Ozs7OztzREFDTCw4REFBQ0E7c0RBQUtTLEdBQUdaLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNHOzRCQUFJQyxXQUFXUixnR0FBcUI7c0NBQ2xDZ0IsR0FBR08sSUFBSSxDQUFDUixHQUFHLENBQUMsQ0FBQ1MscUJBQ1osOERBQUNqQjs4Q0FBS2lCOzs7Ozs7Ozs7OztzQ0FHViw4REFBQ2pCOzRCQUFJQyxXQUFXUixnR0FBcUI7OzhDQUNuQyw4REFBQ087OENBQUtKLFdBQVdhLEdBQUdVLE9BQU87Ozs7Ozs4Q0FDM0IsOERBQUNuQjs7c0RBQ0MsOERBQUNBO3NEQUFJOzs7Ozs7c0RBQ0wsOERBQUNBO3NEQUFLUyxHQUFHVyxXQUFXOzs7Ozs7c0RBQ3BCLDhEQUFDcEI7c0RBQUk7Ozs7OztzREFDTCw4REFBQ0E7c0RBQUtTLEdBQUdZLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQixFQUFFO0tBN0NXM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGVudFNlY3Rpb24vdGFza1Jvd1NlY3Rpb24vdGFza1Jvdy5qc3g/M2U3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aHJlZWRvdFN2ZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3N2Z1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL2NlbnRlclNlY3Rpb24vdGFza3Jvdy5tb2R1bGUuY3NzXCI7XG5leHBvcnQgY29uc3QgVGFza1JvdyA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBnZXRBdmF0YXJzID0gKGNvdW50KSA9PiB7XG4gICAgbGV0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIGRhdGEucHVzaCg8ZGl2PnRlc3Rpbmc8L2Rpdj4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2PntkYXRhLmhlYWRpbmcudGV4dH08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntkYXRhLmhlYWRpbmcuY291bnR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGFpbmVyfT4ge3RocmVlZG90U3ZnfSA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZGF0YS50YXNrRGF0YS5tYXAoKGV2KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFza0NhcmRDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFza0NhcmRUb3B9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXNrQ2FyZFRvcFRpdGxlfT57ZXYudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tDYXJkVG9wUmlnaHR9PlxuICAgICAgICAgICAgICA8ZGl2PnN2ZzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntldi5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFza0NhcmRNaWRkbGV9PlxuICAgICAgICAgICAge2V2LnRhZ3MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXY+e2l0ZW19PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tDYXJkQm90dG9tfT5cbiAgICAgICAgICAgIDxkaXY+e2dldEF2YXRhcnMoZXYuYXZhdGFycyl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2PnN2ZzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2Pntldi5hdHRhY2htZW50c308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5zdmc8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57ZXYuY29tbWVudHN9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidGhyZWVkb3RTdmciLCJzdHlsZXMiLCJUYXNrUm93IiwiZGF0YSIsImdldEF2YXRhcnMiLCJjb3VudCIsImluZGV4IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRpbmdDb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwiaGVhZGluZyIsInRleHQiLCJyaWdodENvbnRhaW5lciIsInRhc2tEYXRhIiwibWFwIiwiZXYiLCJ0YXNrQ2FyZENvbnRhaW5lciIsInRhc2tDYXJkVG9wIiwidGFza0NhcmRUb3BUaXRsZSIsInRpdGxlIiwidGFza0NhcmRUb3BSaWdodCIsInRhc2tDYXJkTWlkZGxlIiwidGFncyIsIml0ZW0iLCJ0YXNrQ2FyZEJvdHRvbSIsImF2YXRhcnMiLCJhdHRhY2htZW50cyIsImNvbW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/contentSection/taskRowSection/taskRow.jsx\n"));

/***/ })

});