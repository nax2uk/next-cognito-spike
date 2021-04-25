module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/signup.js":
/*!*****************************!*\
  !*** ./pages/api/signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return signUp; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\naws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({\n  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n  region: process.env.AWS_DEFAULT_REGION\n});\nconst poolData = {\n  UserPoolId: process.env.AWS_USER_POOL_ID,\n  ClientId: process.env.AWS_CLIENT_ID\n};\nfunction signUp(req, res) {\n  if (req.method !== 'POST') {\n    res.status(405).json({\n      error: \"Method not allowed\"\n    });\n  } else {\n    const {\n      email,\n      password,\n      confirm_password,\n      js_enabled\n    } = req.body;\n    console.log('in api method ', js_enabled);\n\n    if (password !== confirm_password) {\n      res.status(404);\n      res.end(JSON.stringify({\n        error: \"Password does not match\"\n      }));\n    }\n\n    const emailData = {\n      Name: \"email\",\n      Value: email\n    };\n    let params = {\n      ClientId: poolData.ClientId,\n      Password: password,\n      Username: email,\n      UserAttributes: [emailData]\n    };\n    let CognitoIdentityServiceProvider = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.CognitoIdentityServiceProvider();\n    CognitoIdentityServiceProvider.signUp(params, (err, data) => {\n      if (err) {\n        console.log(err, err.stack);\n        res.status(404);\n        res.end(JSON.stringify({\n          error: err.message\n        }));\n      } else {\n        params = {\n          GroupName: 'User',\n          UserPoolId: process.env.AWS_USER_POOL_ID,\n          Username: email\n        };\n        CognitoIdentityServiceProvider.adminAddUserToGroup(params, (err, data) => {\n          if (err) {\n            console.log(err, err.stack);\n            res.status(404);\n            res.end(JSON.stringify(err.message));\n          } else {\n            res.status(201); //console.log(data);\n\n            if (parseInt(js_enabled)) {\n              console.log(\"js enabled\");\n              res.end(JSON.stringify({\n                message: \"success\"\n              }));\n              return;\n            }\n\n            console.log('Js not enabled');\n            res.redirect('http://localhost:3000/signup-success');\n          }\n        });\n      }\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2lnbnVwLmpzPzljNjciXSwibmFtZXMiOlsiQVdTIiwiY29uZmlnIiwidXBkYXRlIiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiQVdTX0FDQ0VTU19LRVlfSUQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJBV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJyZWdpb24iLCJBV1NfREVGQVVMVF9SRUdJT04iLCJwb29sRGF0YSIsIlVzZXJQb29sSWQiLCJBV1NfVVNFUl9QT09MX0lEIiwiQ2xpZW50SWQiLCJBV1NfQ0xJRU5UX0lEIiwic2lnblVwIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1fcGFzc3dvcmQiLCJqc19lbmFibGVkIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWxEYXRhIiwiTmFtZSIsIlZhbHVlIiwicGFyYW1zIiwiUGFzc3dvcmQiLCJVc2VybmFtZSIsIlVzZXJBdHRyaWJ1dGVzIiwiQ29nbml0b0lkZW50aXR5U2VydmljZVByb3ZpZGVyIiwiZXJyIiwiZGF0YSIsInN0YWNrIiwibWVzc2FnZSIsIkdyb3VwTmFtZSIsImFkbWluQWRkVXNlclRvR3JvdXAiLCJwYXJzZUludCIsInJlZGlyZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFBLDhDQUFHLENBQUNDLE1BQUosQ0FBV0MsTUFBWCxDQUFrQjtBQUNoQkMsYUFBVyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBRFQ7QUFFaEJDLGlCQUFlLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxxQkFGYjtBQUdoQkMsUUFBTSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUs7QUFISixDQUFsQjtBQU1BLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxZQUFVLEVBQUNSLE9B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S0FsQ0Q7QUFtQ0g7QUFDSiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XG5cbkFXUy5jb25maWcudXBkYXRlKHtcbiAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52LkFXU19BQ0NFU1NfS0VZX0lELFxuICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSxcbiAgcmVnaW9uOiBwcm9jZXNzLmVudi5BV1NfREVGQVVMVF9SRUdJT04sXG59KTtcblxuY29uc3QgcG9vbERhdGEgPSB7XG4gIFVzZXJQb29sSWQ6cHJvY2Vzcy5lbnYuQVdTX1VTRVJfUE9PTF9JRCxcbiAgQ2xpZW50SWQ6cHJvY2Vzcy5lbnYuQVdTX0NMSUVOVF9JRCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25VcChyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe2Vycm9yOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwifSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBjb25maXJtX3Bhc3N3b3JkLCBqc19lbmFibGVkfSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gYXBpIG1ldGhvZCAnLCBqc19lbmFibGVkKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9PSBjb25maXJtX3Bhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XG4gICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtlcnJvcjogXCJQYXNzd29yZCBkb2VzIG5vdCBtYXRjaFwifSkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbWFpbERhdGEgPSB7XG4gICAgICAgICAgICBOYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBWYWx1ZTogZW1haWxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgQ2xpZW50SWQ6IHBvb2xEYXRhLkNsaWVudElkLFxuICAgICAgICAgICAgUGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgVXNlcm5hbWU6IGVtYWlsLFxuICAgICAgICAgICAgVXNlckF0dHJpYnV0ZXM6IFtlbWFpbERhdGFdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IENvZ25pdG9JZGVudGl0eVNlcnZpY2VQcm92aWRlciA9IG5ldyBBV1MuQ29nbml0b0lkZW50aXR5U2VydmljZVByb3ZpZGVyKCk7XG4gICAgICAgIENvZ25pdG9JZGVudGl0eVNlcnZpY2VQcm92aWRlci5zaWduVXAocGFyYW1zLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCBlcnIuc3RhY2spO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KTtcbiAgICAgICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtlcnJvcjogZXJyLm1lc3NhZ2V9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBHcm91cE5hbWU6ICdVc2VyJyxcbiAgICAgICAgICAgICAgICAgICAgVXNlclBvb2xJZDogcHJvY2Vzcy5lbnYuQVdTX1VTRVJfUE9PTF9JRCxcbiAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWU6IGVtYWlsLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlUHJvdmlkZXIuYWRtaW5BZGRVc2VyVG9Hcm91cChwYXJhbXMsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCBlcnIuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShlcnIubWVzc2FnZSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoanNfZW5hYmxlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImpzIGVuYWJsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHttZXNzYWdlOiBcInN1Y2Nlc3NcIn0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSnMgbm90IGVuYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbnVwLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/signup.js\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3Mtc2RrXCI/NTE0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhd3Mtc2RrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ })

/******/ });