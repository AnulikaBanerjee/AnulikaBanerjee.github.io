(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* { margin: 0; padding: 0; box-sizing: border-box; }\r\nbody { font: 13px Helvetica, Arial; }\r\nform { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }\r\nform input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }\r\nform button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }\r\n#messages { list-style-type: none; margin: 0; padding: 0; }\r\n#messages li { padding: 5px 10px; }\r\n#messages li:nth-child(odd) { background: #eee; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLHVCQUF1QixFQUFFO0FBQ3BELE9BQU8sNEJBQTRCLEVBQUU7QUFDckMsT0FBTyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtBQUNqRixhQUFhLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFO0FBQ3ZFLGNBQWMsVUFBVSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUU7QUFDdkYsWUFBWSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO0FBQzNELGVBQWUsa0JBQWtCLEVBQUU7QUFDbkMsOEJBQThCLGlCQUFpQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XHJcbmJvZHkgeyBmb250OiAxM3B4IEhlbHZldGljYSwgQXJpYWw7IH1cclxuZm9ybSB7IGJhY2tncm91bmQ6ICMwMDA7IHBhZGRpbmc6IDNweDsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDA7IHdpZHRoOiAxMDAlOyB9XHJcbmZvcm0gaW5wdXQgeyBib3JkZXI6IDA7IHBhZGRpbmc6IDEwcHg7IHdpZHRoOiA5MCU7IG1hcmdpbi1yaWdodDogLjUlOyB9XHJcbmZvcm0gYnV0dG9uIHsgd2lkdGg6IDklOyBiYWNrZ3JvdW5kOiByZ2IoMTMwLCAyMjQsIDI1NSk7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogMTBweDsgfVxyXG4jbWVzc2FnZXMgeyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxyXG4jbWVzc2FnZXMgbGkgeyBwYWRkaW5nOiA1cHggMTBweDsgfVxyXG4jbWVzc2FnZXMgbGk6bnRoLWNoaWxkKG9kZCkgeyBiYWNrZ3JvdW5kOiAjZWVlOyB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"messages\">\n  <li *ngFor=\"let message of messages\">\n      <span [innerHTML]=\"isSystemMessage(message)\"></span>\n  </li>\n</ul>\n<form action=\"\">\n  <input [(ngModel)]=\"chatBox\" [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\" />\n  <button (click)=\"send()\">Calculate</button>\n</form>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(socket) {
        this.socket = socket;
        this.messages = [];
        this.chatBox = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.getEventListener().subscribe(function (event) {
            if (event.type == "message") {
                var data = event.data.content;
                if (event.data.sender) {
                    data = event.data.sender + ": " + data;
                }
                _this.messages.push(data);
            }
            if (event.type == "close") {
                _this.messages.push("/The socket connection has been closed");
            }
            if (event.type == "open") {
                _this.messages.push("/The socket connection has been established");
            }
            if (_this.messages.length > 10) {
                _this.messages.shift();
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.socket.close();
    };
    AppComponent.prototype.send = function () {
        if (this.chatBox) {
            this.socket.send(this.chatBox);
            this.chatBox = "";
        }
    };
    AppComponent.prototype.isSystemMessage = function (message) {
        return message.startsWith("/") ? "<strong>" + message.substring(1) + "</strong>" : message;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.listener = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.socket = new WebSocket("ws://localhost:12345/ws");
        this.socket.onopen = function (event) {
            _this.listener.emit({ "type": "open", "data": event });
        };
        this.socket.onclose = function (event) {
            _this.listener.emit({ "type": "close", "data": event });
        };
        this.socket.onmessage = function (event) {
            _this.listener.emit({ "type": "message", "data": JSON.parse(event.data) });
        };
    }
    SocketService.prototype.send = function (data) {
        this.socket.send(data);
    };
    SocketService.prototype.close = function () {
        this.socket.close();
    };
    SocketService.prototype.getEventListener = function () {
        return this.listener;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/Angu+Go/UI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map