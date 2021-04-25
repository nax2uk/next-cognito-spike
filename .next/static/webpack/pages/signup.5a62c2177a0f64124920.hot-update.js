webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/azlinayeo/repos/next-cognito-spike/pages/signup.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var emailRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  var passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  var confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n\n  var submitSignUpDetails = /*#__PURE__*/function () {\n    var _ref = Object(_Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var body, res;\n      return _Users_azlinayeo_repos_next_cognito_spike_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              console.log('in submitSignupDetails');\n              body = JSON.stringify({\n                email: emailRef.current.value,\n                password: passwordRef.current.value,\n                confirm_password: confirmPasswordRef.current.value,\n                js_enabled: \"1\"\n              });\n              console.log(body);\n              _context.next = 6;\n              return fetch(\"/api/signup\", {\n                method: \"POST\",\n                headers: {\n                  \"content-type\": \"application/json\"\n                },\n                body: body\n              });\n\n            case 6:\n              res = _context.sent;\n              console.log(res);\n\n              if (res.status === 201) {\n                console.log('*****using react****');\n                next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(\"signup-success\");\n              } else {//const { error } = await res.json();\n                //console.error(error);\n              }\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function submitSignUpDetails(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"govuk-grid-row\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"govuk-grid-column-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"govuk-heading-xl\",\n          children: \"Spiking AWS Cognito\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \" This is a spike for AWS Cognito \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"govuk-heading-m\",\n          children: \"Please login \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"govuk-grid-row\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"govuk-grid-column-two-thirds\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submitSignUpDetails,\n          action: \"\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"govuk-form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"hidden\",\n              name: \"js_enabled\",\n              value: \"0\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              className: \"govuk-label\",\n              htmlFor: \"email\",\n              children: \"Email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"govuk-input govuk-!-width-two-thirds\",\n              id: \"email\",\n              name: \"email\",\n              type: \"text\",\n              ref: emailRef\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"govuk-form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              className: \"govuk-label\",\n              htmlFor: \"password\",\n              children: \"Password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"govuk-input govuk-!-width-two-thirds\",\n              id: \"password\",\n              name: \"password\",\n              type: \"password\",\n              ref: passwordRef\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"govuk-form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              className: \"govuk-label\",\n              htmlFor: \"password\",\n              children: \"Confirm Password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"govuk-input govuk-!-width-two-thirds\",\n              id: \"confirm_password\",\n              name: \"confirm_password\",\n              type: \"password\",\n              ref: confirmPasswordRef\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"govuk-button\",\n            \"data-module\": \"govuk-button\",\n            children: \"Sign Up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(HomePage, \"Ha/vDb/X2DFdWNJSov7sWo4E1l0=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzP2JjYmYiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJlbWFpbFJlZiIsInVzZVJlZiIsInBhc3N3b3JkUmVmIiwiY29uZmlybVBhc3N3b3JkUmVmIiwic3VibWl0U2lnblVwRGV0YWlscyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImN1cnJlbnQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uZmlybV9wYXNzd29yZCIsImpzX2VuYWJsZWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXMiLCJzdGF0dXMiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQSxNQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBQ0EsTUFBTUUsa0JBQWtCLEdBQUdGLG9EQUFNLEVBQWpDOztBQUVBLE1BQU1HLG1CQUFtQjtBQUFBLDRTQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QkEsbUJBQUssQ0FBQ0MsY0FBTjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDTUMsa0JBSGtCLEdBR1hDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3hCQyxxQkFBSyxFQUFFWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJDLEtBREE7QUFFeEJDLHdCQUFRLEVBQUViLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkMsS0FGTjtBQUd4QkUsZ0NBQWdCLEVBQUViLGtCQUFrQixDQUFDVSxPQUFuQixDQUEyQkMsS0FIckI7QUFJeEJHLDBCQUFVLEVBQUU7QUFKWSxlQUFmLENBSFc7QUFVeEJWLHFC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QkFBRyxFQUFFQztBQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkSixlQW9CSTtBQUFRLHFCQUFTLEVBQUMsY0FBbEI7QUFBaUMsMkJBQVksY0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQSxrQkFEQTtBQXdDSCxDQTFFRDs7R0FBTUosUTs7S0FBQUEsUTtBQTRFU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKClcbiAgICBjb25zdCBwYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICAgXG4gICAgY29uc3Qgc3VibWl0U2lnblVwRGV0YWlscyA9IGFzeW5jIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBzdWJtaXRTaWdudXBEZXRhaWxzJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgY29uZmlybV9wYXNzd29yZDogY29uZmlybVBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgICBqc19lbmFibGVkOiBcIjFcIlxuXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3NpZ251cFwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKip1c2luZyByZWFjdCoqKionKTtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwic2lnbnVwLXN1Y2Nlc3NcIilcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ292dWstZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ292dWstZ3JpZC1jb2x1bW4tZnVsbFwiPlxuXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZ292dWstaGVhZGluZy14bFwiPlNwaWtpbmcgQVdTIENvZ25pdG88L2gxPlxuICAgICAgICAgICAgPHA+IFRoaXMgaXMgYSBzcGlrZSBmb3IgQVdTIENvZ25pdG8gPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZ292dWstaGVhZGluZy1tXCI+UGxlYXNlIGxvZ2luIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ292dWstZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ292dWstZ3JpZC1jb2x1bW4tdHdvLXRoaXJkc1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRTaWduVXBEZXRhaWxzfSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPVwianNfZW5hYmxlZFwiIHZhbHVlPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnb3Z1ay1sYWJlbFwiIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdHdvLXRoaXJkc1wiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHJlZj17ZW1haWxSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnb3Z1ay1sYWJlbFwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdHdvLXRoaXJkc1wiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3Bhc3N3b3JkUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZ292dWstbGFiZWxcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdHdvLXRoaXJkc1wiIGlkPVwiY29uZmlybV9wYXNzd29yZFwiIG5hbWU9XCJjb25maXJtX3Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVmPXtjb25maXJtUGFzc3dvcmRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvdnVrLWJ1dHRvblwiIGRhdGEtbW9kdWxlPVwiZ292dWstYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ })

})