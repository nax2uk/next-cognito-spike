module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/azlinayeo/repos/next-cognito-spike/pages/signup.js\";\n\n\n\nconst HomePage = () => {\n  const emailRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const confirmPasswordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  const submitSignUpDetails = async event => {\n    event.preventDefault();\n    const body = JSON.stringify({\n      email: emailRef.current.value,\n      password: passwordRef.current.value,\n      confirm_password: confirmPasswordRef.current.value,\n      js_enabled: \"1\"\n    });\n    console.log(body);\n    const res = await fetch(\"/api/signup\", {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\"\n      },\n      body\n    });\n    console.log(res);\n\n    if (res.status === 201) {\n      console.log('*****using react****');\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(\"signup-success\");\n    } else {//const { error } = await res.json();\n      //console.error(error);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"govuk-grid-row\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"govuk-grid-column-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"govuk-heading-xl\",\n          children: \"Sign up Form\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: \"govuk-heading-m\",\n          children: \"Please sign up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"govuk-grid-row\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"govuk-grid-column-two-thirds\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          onSubmit: submitSignUpDetails,\n          action: \"/api/signup\",\n          method: \"POST\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"govuk-form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"hidden\",\n              name: \"js_enabled\",\n              value: \"0\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              className: \"govuk-label\",\n              htmlFor: \"email\",\n              children: \"Email\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"govuk-input govuk-!-width-two-thirds\",\n              id: \"email\",\n              name: \"email\",\n              type: \"text\",\n              ref: emailRef\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 25\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"govuk-form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              className: \"govuk-label\",\n              htmlFor: \"password\",\n              children: \"Password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"govuk-input govuk-!-width-two-thirds\",\n              id: \"password\",\n              name: \"password\",\n              type: \"password\",\n              ref: passwordRef\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 25\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"govuk-form-group\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              className: \"govuk-label\",\n              htmlFor: \"password\",\n              children: \"Confirm Password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              className: \"govuk-input govuk-!-width-two-thirds\",\n              id: \"confirm_password\",\n              name: \"confirm_password\",\n              type: \"password\",\n              ref: confirmPasswordRef\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 25\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"govuk-button\",\n            \"data-module\": \"govuk-button\",\n            children: \"Sign Up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanM/YmNiZiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImVtYWlsUmVmIiwidXNlUmVmIiwicGFzc3dvcmRSZWYiLCJjb25maXJtUGFzc3dvcmRSZWYiLCJzdWJtaXRTaWduVXBEZXRhaWxzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsImNvbmZpcm1fcGFzc3dvcmQiLCJqc19lbmFibGVkIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ25CLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQSxRQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBQ0EsUUFBTUUsa0JBQWtCLEdBQUdGLG9EQUFNLEVBQWpDOztBQUVBLFFBQU1HLG1CQUFtQixHQUFHLE1BQU9DLEtBQVAsSUFBZ0I7QUFDeENBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDeEJDLFdBQUssRUFBRVYsUUFBUSxDQUFDVyxPQUFULENBQWlCQyxLQURBO0FBRXhCQyxjQUFRLEVBQUVYLFdBQVcsQ0FBQ1MsT0FBWixDQUFvQkMsS0FGTjtBQUd4QkUsc0JBQWdCLEVBQUVYLGtCQUFrQixDQUFDUSxPQUFuQixDQUEyQkMsS0FIckI7QUFJeEJHLGdCQUFVLEVBQUU7QUFKWSxLQUFmLENBQWI7QUFPQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQVo7QUFDQSxVQUFNVyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGFBQUQsRUFBZ0I7QUFDbkNDLFlBQU0sRUFBRSxN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QUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKO0FBQUEsa0JBREE7QUFzQ0gsQ0F2RUQ7O0FBeUVlSix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NpZ251cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZW1haWxSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IHBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkUmVmID0gdXNlUmVmKCk7XG4gICBcbiAgICBjb25zdCBzdWJtaXRTaWduVXBEZXRhaWxzID0gYXN5bmMgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbFJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkOiBjb25maXJtUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICAgIGpzX2VuYWJsZWQ6IFwiMVwiXG5cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvc2lnbnVwXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKnVzaW5nIHJlYWN0KioqKicpO1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCJzaWdudXAtc3VjY2Vzc1wiKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3Z1ay1ncmlkLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3Z1ay1ncmlkLWNvbHVtbi1mdWxsXCI+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJnb3Z1ay1oZWFkaW5nLXhsXCI+U2lnbiB1cCBGb3JtPC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJnb3Z1ay1oZWFkaW5nLW1cIj5QbGVhc2Ugc2lnbiB1cDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ292dWstZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ292dWstZ3JpZC1jb2x1bW4tdHdvLXRoaXJkc1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRTaWduVXBEZXRhaWxzfSBhY3Rpb249XCIvYXBpL3NpZ251cFwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPVwianNfZW5hYmxlZFwiIHZhbHVlPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnb3Z1ay1sYWJlbFwiIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdHdvLXRoaXJkc1wiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHJlZj17ZW1haWxSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvdnVrLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnb3Z1ay1sYWJlbFwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdHdvLXRoaXJkc1wiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3Bhc3N3b3JkUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3Z1ay1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZ292dWstbGFiZWxcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImdvdnVrLWlucHV0IGdvdnVrLSEtd2lkdGgtdHdvLXRoaXJkc1wiIGlkPVwiY29uZmlybV9wYXNzd29yZFwiIG5hbWU9XCJjb25maXJtX3Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVmPXtjb25maXJtUGFzc3dvcmRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdvdnVrLWJ1dHRvblwiIGRhdGEtbW9kdWxlPVwiZ292dWstYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });