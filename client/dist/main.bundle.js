webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n\theight: 100%;\n}\n#nav-bar {\n\twidth: 100%;\n\theight: 50px;\n}\n#account {\n\tfloat: right;\n}\n#model-list {\n\twidth: 300px;\n\theight: 90%;\n\tmargin: 0;\n}\n#my-canvas {\n\tposition: absolute;\n\tmargin: 0;\n\ttop: 50px;\n\tleft: 300px;\n\tright: 1px;\n\tbox-sizing: border-box;\n\theight: 90%;\n\toverflow: hidden;\n\t/*position: relative;*/\n}\n\n#info {\n\tposition: absolute;\n\tleft: 50px;\n\ttop: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav-bar\">\n\t<account id=\"account\" (onChange)=\"loginStatusChanged($event)\"></account>\n</nav>\n\n<div id=\"model-list\">\n\t<model-list></model-list>\n</div>\n\n<div id=\"my-canvas\">\n\t<my-canvas [status]=\"status\"></my-canvas>\n</div>\n\n<a id=\"info\" href=\"https://github.com/Ayuan100/demo_angular\">DEMO说明及代码,服务器和数据库都是远程，有点卡。。。</a>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.status = 'temp';
    }
    AppComponent.prototype.loginStatusChanged = function (newStatus) {
        this.status = newStatus;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_model_list_model_list_component__ = __webpack_require__("../../../../../src/app/components/model-list/model-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_model_model_component__ = __webpack_require__("../../../../../src/app/components/model/model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_my_canvas_my_canvas_component__ = __webpack_require__("../../../../../src/app/components/my-canvas/my-canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_node_node_component__ = __webpack_require__("../../../../../src/app/components/node/node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_outport_outport_component__ = __webpack_require__("../../../../../src/app/components/outport/outport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_inport_inport_component__ = __webpack_require__("../../../../../src/app/components/inport/inport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_line_line_component__ = __webpack_require__("../../../../../src/app/components/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_active_line_active_line_component__ = __webpack_require__("../../../../../src/app/components/active-line/active-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_node_service__ = __webpack_require__("../../../../../src/app/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_line_service__ = __webpack_require__("../../../../../src/app/services/line.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_model_list_model_list_component__["a" /* ModelListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_model_model_component__["a" /* ModelComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_my_canvas_my_canvas_component__["a" /* MyCanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_node_node_component__["a" /* NodeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_outport_outport_component__["a" /* OutportComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_inport_inport_component__["a" /* InportComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_line_line_component__["a" /* LineComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_active_line_active_line_component__["a" /* ActiveLineComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__["a" /* AccountComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng_drag_drop__["NgDragDropModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_node_service__["a" /* NodeService */],
            __WEBPACK_IMPORTED_MODULE_17__services_line_service__["a" /* LineService */],
            __WEBPACK_IMPORTED_MODULE_18__services_account_service__["a" /* AccountService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-space {\n    margin-left: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(status=='login');then LOGOUT else LOGIN\">here is ignored</div>\n\n<ng-template #LOGIN>\n\t<form class=\"form-inline\" (ngSubmit)=\"login()\">\n\t\t<div class=\"input-group col\">\n\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"email\" name=\"name\">\n\t\t</div>\n\t\t<div class=\"input-group col\">\n\t\t  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"password\" name=\"pass\">\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-sm btn-outline-primary d-block\">Login</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-space\" (click)=\"open(content)\">SignUp</button>\n\t</form>\n\n\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t  <div class=\"modal-header\">\n\t    <h4 class=\"modal-title\">Sign Up</h4>\n\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n\t      <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n\t  </div>\n\n\t  <div class=\"modal-body\">\n\t    <form>\n\t\t\t<div class=\"form-group col-8 mx-auto\">\n\t\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"newEmail\" name=\"name\">\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class=\"form-group col-8 mx-auto\">\n\t\t\t  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"newPassword\" name=\"pass\">\n\t\t\t</div>\n\t\t</form>\n\t  </div>\n\n\t  <div class=\"modal-footer\" style=\"justify-content: center;\">\n\t    <button type=\"submit\" class=\"btn btn-outline-dark\" (click)=\"signup()\">SignUp</button>\n\t  </div>\n\t</ng-template>\n\n\t\n</ng-template>\n<ng-template #LOGOUT>\n\t<span class=\"text-muted\">Logged in as {{user}}</span>\n\t<button class=\"btn btn-outline-primary\" (click)=\"logout()\">Logout</button>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(accountService, modalService) {
        this.accountService = accountService;
        this.modalService = modalService;
        this.status = "temp";
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = '';
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getStatus()
            .subscribe(function (res) {
            console.log('status:', res);
            if (res.user) {
                _this.status = 'login';
                _this.user = res.user;
            }
            else
                _this.status = 'temp';
            _this.onChange.emit(_this.status);
        });
    };
    AccountComponent.prototype.open = function (content) {
        this.signUpWindow = this.modalService.open(content);
    };
    AccountComponent.prototype.login = function () {
        var _this = this;
        console.log('login:', this.email, ' pass:', this.password);
        this.accountService.login(this.email, this.password)
            .subscribe(function (res) {
            console.log('login result:', res);
            if (res.success == "success") {
                _this.status = "login";
                _this.onChange.emit('login');
                _this.user = _this.email;
                _this.email = '';
                _this.password = '';
            }
        });
    };
    AccountComponent.prototype.signup = function () {
        var _this = this;
        console.log('signup', this.newEmail, ' pass:', this.newPassword);
        this.accountService.signup(this.newEmail, this.newPassword)
            .subscribe(function (res) {
            console.log('signup result:', res);
            if (res.success == "success") {
                _this.status = "login";
                _this.modalService;
                _this.signUpWindow.close();
                _this.onChange.emit('login');
                _this.user = _this.newEmail;
                _this.newEmail = '';
                _this.newPassword = '';
            }
        });
    };
    AccountComponent.prototype.logout = function () {
        var _this = this;
        console.log('logout', this.user);
        this.accountService.logout()
            .subscribe(function (res) {
            console.log('logout result:', res);
            _this.status = "logout";
            _this.onChange.emit('logout');
        });
    };
    return AccountComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "onChange", void 0);
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'account',
        template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/active-line/active-line.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".curve {\n\t/*fill: none;*/\n\tfill-opacity: 0;\n\tstroke: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/active-line/active-line.component.html":
/***/ (function(module, exports) {

module.exports = "\t<svg:path *ngIf=\"connecting\" id=\"active-line\" class='curve' [attr.d]=\"data\"></path>\n<!-- \t<svg:path class=\"curve\" marker-end=\"url(#markerArrow)\" d=\"M158 81 Q 158 83.5 311.5 86 T 465 91\"></path> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/active-line/active-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_line_service__ = __webpack_require__("../../../../../src/app/services/line.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActiveLineComponent = (function () {
    function ActiveLineComponent(detector, lineService) {
        var _this = this;
        this.detector = detector;
        this.lineService = lineService;
        this.connecting = false;
        this.lineService.connecting.subscribe(function (value) {
            if (value.status == true) {
                _this.start(value.x, value.y);
            }
            else
                _this.end();
        });
        this.lineService.position.subscribe(function (value) {
            // console.log('dragging:', value.x,',',value.y);
            if (_this.endX != value.x || _this.endY != value.y) {
                _this.moveTo(value.x, value.y);
                // 手动刷新，坑爹！
                _this.detector.detectChanges();
            }
        });
    }
    ActiveLineComponent.prototype.start = function (x, y) {
        // console.log('start drag:',x,',',y);
        this.connecting = true;
        this.startX = x;
        this.startY = y;
        this.moveTo(x, y);
    };
    ActiveLineComponent.prototype.end = function () {
        // console.log('stop drag');
        this.connecting = false;
    };
    ActiveLineComponent.prototype.moveTo = function (x, y) {
        this.endX = x;
        this.endY = y;
        var middleX = (this.startX + this.endX) / 2, middleY = (this.startY + this.endY) / 2, extraX = this.startX, extraY = (this.startY + middleY) / 2;
        this.data = 'M' + this.startX + ' ' + this.startY + ' ' +
            'Q ' + extraX + ' ' + extraY + ' ' + middleX + ' ' + middleY + ' ' +
            'T ' + this.endX + ' ' + this.endY;
        // console.log('move to:', x, ',', y);
        // angular不刷新，只能手动设置！
        // var path = document.getElementById('active-line');
        // path.setAttribute('d', this.data);
    };
    ActiveLineComponent.prototype.ngOnInit = function () {
    };
    ActiveLineComponent.prototype.ngAfterViewInit = function () {
        // console.log('after view init:');
        // this.start(10,10);
        // var that = this;
        // var x = 10, y = 10;
        // this.start(x,y)
        // setInterval( (()=>{
        //   this.move(this.endX+10,this.endY+10);
        // }),1000);
        // setTimeout((()=>{
        //   this.moveTo(191,144);
        // }),5000);
    };
    return ActiveLineComponent;
}());
ActiveLineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[active-line]',
        template: __webpack_require__("../../../../../src/app/components/active-line/active-line.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/active-line/active-line.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_line_service__["a" /* LineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_line_service__["a" /* LineService */]) === "function" && _b || Object])
], ActiveLineComponent);

var _a, _b;
//# sourceMappingURL=active-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inport/inport.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".port {\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n\theight: 6px;\n\twidth: 6px;\n\tborder: 1px solid gray;\n\tborder-radius: 100%;\n}\n\n.unconnected.port:hover, .unconnected.hover {\n\tborder: 2px solid green;\n}\n.lightup {\n\tborder-width: 2px;\n\tborder-color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inport/inport.component.html":
/***/ (function(module, exports) {

module.exports = "<div droppable \n\t[dropScope]=\"'inport'\"\n\t[dragHintClass]=\"'drag-hint-border'\"\n\t[dragOverClass]=\"'drag-target-border'\"\n\t(onDrop)=\"onDrop($event)\"\n\tclass=\"port\"\n\t[ngClass]=\"{'unconnected':port.isConnected==false, 'lightup':lightup}\"\n\t#portRef>\n\t \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/inport/inport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_node_service__ = __webpack_require__("../../../../../src/app/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model__ = __webpack_require__("../../../../../src/app/models/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InportComponent = (function () {
    function InportComponent(nodeService) {
        var _this = this;
        this.nodeService = nodeService;
        this.lightup = false;
        this.isDropAllowed = function (dragData) {
            console.log('is drop allowed:', _this.port.isConnected == false);
            return _this.port.isConnected;
        };
    }
    InportComponent.prototype.ngOnInit = function () {
        this.port.ref = this;
    };
    InportComponent.prototype.getPosition = function () {
        return {
            x: this.portRef.nativeElement.offsetLeft + this.port.node.x + this.portRef.nativeElement.offsetWidth / 2,
            y: this.portRef.nativeElement.offsetTop + this.port.node.y
        };
    };
    InportComponent.prototype.ngAfterViewInit = function () {
    };
    InportComponent.prototype.lightUpPort = function () {
        this.lightup = true;
    };
    InportComponent.prototype.unLightUpPort = function () {
        this.lightup = false;
    };
    InportComponent.prototype.onDrop = function (e) {
        console.log('ondrop:', e);
        var outport = e.dragData;
        if (this.port.isConnected == false && outport.isConnected == false) {
            this.port.connect(outport);
            this.nodeService.connectPort(outport, this.port);
        }
    };
    return InportComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("portRef"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], InportComponent.prototype, "portRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_model__["d" /* Port */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_model__["d" /* Port */]) === "function" && _b || Object)
], InportComponent.prototype, "port", void 0);
InportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'inport',
        template: __webpack_require__("../../../../../src/app/components/inport/inport.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inport/inport.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */]) === "function" && _c || Object])
], InportComponent);

var _a, _b, _c;
//# sourceMappingURL=inport.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/line/line.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".curve {\n\t/*fill: none;*/\n\tfill-opacity: 0;\n\tstroke: gray;\n\tz-index: 999;\n}\n.curve:hover {\n\tstroke-width: 3;\n}\n.curve:focus{\n\toutline: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <svg> -->\n\t<svg:path class='curve' tabindex=\"1\" [attr.d]=\"data\" \n\t\t(click)=\"onClick()\"\n\t\t(focus)=\"onFocus()\"\n\t\t(keyup)=\"onKeyUp($event)\" />\n\n\n<!-- </svg> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_node_service__ = __webpack_require__("../../../../../src/app/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model__ = __webpack_require__("../../../../../src/app/models/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineComponent = (function () {
    function LineComponent(nodeService) {
        this.nodeService = nodeService;
    }
    LineComponent.prototype.ngOnInit = function () {
        this.line.ref = this;
        this.paint();
    };
    LineComponent.prototype.paint = function () {
        var start = this.line.outport.getPosition(), end = this.line.inport.getPosition();
        if (start && end) {
            this.startX = start.x;
            this.startY = start.y;
            this.endX = end.x;
            this.endY = end.y;
            var middleX = (this.startX + this.endX) / 2, middleY = (this.startY + this.endY) / 2, extraX = this.startX, extraY = (this.startY + middleY) / 2;
            this.data = 'M' + this.startX + ' ' + this.startY + ' ' +
                'Q ' + extraX + ' ' + extraY + ' ' + middleX + ' ' + middleY + ' ' +
                'T ' + this.endX + ' ' + this.endY;
        }
        console.log('paint line:', start, end);
    };
    LineComponent.prototype.onClick = function () {
        console.log('click');
    };
    LineComponent.prototype.onFocus = function () {
        console.log('onfocus');
    };
    LineComponent.prototype.onKeyUp = function (e) {
        console.log('keyup');
        // delete键
        if (e.keyCode == 8) {
            this.delete();
        }
    };
    LineComponent.prototype.delete = function () {
        this.line.delete();
        this.nodeService.disconnectPort(this.line.outport, this.line.inport);
    };
    return LineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_model__["c" /* Line */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_model__["c" /* Line */]) === "function" && _a || Object)
], LineComponent.prototype, "line", void 0);
LineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[line]',
        template: __webpack_require__("../../../../../src/app/components/line/line.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/line/line.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */]) === "function" && _b || Object])
], LineComponent);

var _a, _b;
// 新建path
// var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
// path.classList.add('curve');
// path.setAttribute('marker-end', "url(#markerArrow)");
// document.getElementsByTagName('svg')[0].appendChild(path);
// this.path = path;
// // console.log('new path');
// // console.log($(path));
// Curve.prototype.paint = function(){
// }; 
//# sourceMappingURL=line.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/model-list/model-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n\tlist-style: none;\n\tpadding-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/model-list/model-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n\t<span *ngIf=\"modelList.length ==0\">Loading</span>\n\t<li draggable *ngFor=\"let model of modelList\" \n\t\t[dragScope]=\"'canvas'\" \n\t\t[dragData]=\"model\"\n\t\t(onDragEnd)=\"onDragEnd($event)\" >\n\t\t\t<model [model]=model></model>\n\t</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/model-list/model-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_node_service__ = __webpack_require__("../../../../../src/app/services/node.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelListComponent = (function () {
    function ModelListComponent(nodeService) {
        this.nodeService = nodeService;
        this.modelList = nodeService.getModels();
        // nodeService.fetchUserData();
        // console.log('model list:', this.modelList);
    }
    ModelListComponent.prototype.ngOnInit = function () {
    };
    ModelListComponent.prototype.onDragEnd = function (e) {
        // console.log('ondragend:',e);
    };
    return ModelListComponent;
}());
ModelListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'model-list',
        // changeDetection: ChangeDetectionStrategy.OnPush,
        template: __webpack_require__("../../../../../src/app/components/model-list/model-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/model-list/model-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */]) === "function" && _a || Object])
], ModelListComponent);

var _a;
//# sourceMappingURL=model-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/model/model.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*元素图标*/\n.model {\n\t/*box-sizing: border-box;*/\n\tmargin: 0;\n\theight: 25px;\n\twidth: 220px;\n\tborder: 1px solid #000;\n\tborder-radius: 10px;\n\tz-index: 999;\n\tdisplay: table;\n}\n.model:focus{\n\toutline: none;\n}\n.model:hover{\n\tbackground-color: rgba(150, 200, 100, 0.6);\n}\n\n.icon {\n\tfloat: left;\n\tdisplay: table-cell;\n\theight: 20px;\n\twidth: 20px;\n\tborder-radius: 100%;\n\tbackground-color: #289DE9;\n}\n.icon:before {\n\tcontent: \"\\E616\";\n\tcolor: white;\t\n\tposition: absolute;\n\tleft: 2px;\n\ttop: -3px;\n}\n.icon-drag {\n\tposition: absolute;\n}\n.circle {\n\tposition: absolute;\n\tdisplay: block;\n\theight: 5px;\n\twidth: 5px;\n\tborder: 1px solid gray;\n\tborder-radius: 100%;\n}\n.type, .index{\n\tdisplay: inline-block;\n\t/*position: absolute;*/\n\ttop: 0;\n\tleft: 20px;\n\theight: 100%;\n\tfont-size: 12px;\n\tline-height: 100%;\n\t/*width: 50px;*/\n}\n.type:after, .index:after{\n\tcontent: '- ';\n\tcolor: gray;\n\tmargin-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/model/model.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"model\">\n\t<!-- 图标和名称 -->\n\t<!-- <span class=\"icon\"></span> -->\n\t<span class=\"type\">\n\t\t{{model.type}}\n\t</span>\n</div>\t\n"

/***/ }),

/***/ "../../../../../src/app/components/model/model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelComponent = (function () {
    function ModelComponent() {
    }
    ModelComponent.prototype.ngOnInit = function () {
    };
    return ModelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModelComponent.prototype, "model", void 0);
ModelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'model',
        template: __webpack_require__("../../../../../src/app/components/model/model.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/model/model.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ModelComponent);

//# sourceMappingURL=model.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-canvas/my-canvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canvas {\n\tmargin: 0;\n\tbox-sizing: border-box;\n\theight: 100%;\n\twidth: 98%;\n\tborder: 1px solid gray;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.node-canvas, .svg-canvas{\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tmargin: 0;\n\twidth: 100%;\n\theight: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-canvas/my-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div droppable [dropScope]=\"'canvas'\" (onDrop)=\"onModelDrop($event)\" class=\"canvas\">\n\t<!-- 节点区 -->\n\t<div class='node-canvas'>\n\t\t<div *ngFor=\"let model of modelList\">\n\t\t\t<node *ngFor=\"let node of model.nodes\" [node]=\"node\"></node>\n\t\t</div>\n\t</div>\n\t\n\t<!-- 连线区 -->\n\t<div class=\"svg-canvas\">\n\t\t<svg width=\"100%\" height=\"98%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t<!-- 定义箭头 -->\n\t\t\t<defs>  \n\t\t\t    <marker id=\"markerArrow\" markerWidth=\"6\" markerHeight=\"9\" markerUnits=\"userSpaceOnUse\" refx=\"3\" refy=\"0\" orient=\"auto\">  \n\t\t\t        <path d=\"M0,0 L0,6 L9,3 z\" fill=\"grey\" stroke-width=\"0.5\" />  \n\t\t\t    </marker>  \n\t\t\t</defs> \n\t\t\t<g *ngFor=\"let model of modelList\">\n\t\t\t\t<g *ngFor=\"let node of model.nodes\">\n\t\t\t\t\t<g *ngFor=\"let port of node.outPorts\" >\n\t\t\t\t\t\t<svg:g line *ngIf=\"port.isConnected\" [line]=\"port.line\" />\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t<!-- <svg:path class=\"curve\" marker-end=\"url(#markerArrow)\" d=\"M158 81 Q 158 83.5 311.5 86 T 465 91\"/> -->\n\t\t\t\t<svg:g active-line />\n\t\t\t\n\t\t\t\n\t\t\t<!-- <path d=\"M250 150 L150 350 L350 350 Z\" /> -->\n\t\t\t<!-- <path class=\"curve\" d=\"M406 164 Q 406 194 374.5 185 T 343 206\"    -->\n\t\t        <!-- marker-end=\"url(#markerArrow)\" /> -->\n\n\t\t\t<!-- <path class='curve' class=\"svg\" d=\"M10 10 Q 100 100 194 375 T 300 206\" marker-end=\"url(#markerArrow)\" /> -->\n\t\t</svg>\n\t</div>\n\n\t\n\n\t\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/my-canvas/my-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_node_service__ = __webpack_require__("../../../../../src/app/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_model__ = __webpack_require__("../../../../../src/app/models/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyCanvasComponent = (function () {
    function MyCanvasComponent(nodeService) {
        this.nodeService = nodeService;
        this.modelList = [];
        this.modelList = this.nodeService.getUserData();
    }
    MyCanvasComponent.prototype.ngOnInit = function () {
    };
    MyCanvasComponent.prototype.ngOnChanges = function (changes) {
        if (this.status != 'temp')
            this.nodeService.fetchUserData();
        // else this.modelList = [];
    };
    MyCanvasComponent.prototype.onModelDrop = function (e) {
        // Get the dropped data here
        // console.log(e);
        var data = e.dragData;
        if (data instanceof __WEBPACK_IMPORTED_MODULE_2__models_model__["a" /* ComputeModel */]) {
            this.nodeService.createNode(data, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
        else if (data instanceof __WEBPACK_IMPORTED_MODULE_2__models_model__["b" /* ComputeNode */]) {
            this.nodeService.moveNode(data, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        }
    };
    return MyCanvasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MyCanvasComponent.prototype, "status", void 0);
MyCanvasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-canvas',
        template: __webpack_require__("../../../../../src/app/components/my-canvas/my-canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/my-canvas/my-canvas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_node_service__["a" /* NodeService */]) === "function" && _a || Object])
], MyCanvasComponent);

var _a;
//# sourceMappingURL=my-canvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/node/node.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*元素图标*/\n.node {\n\tposition: absolute;\n\tz-index: 999;\n}\n/*.node:focus {\n\toutline: none;\n}*/\n\n\n.node-body {\n\tmargin: 0;\n\tmargin-top: -1px;\n\tmargin-bottom: -1px;\n\n\theight: 25px;\n\twidth: 220px;\n\tborder: 1px solid #000;\n\tborder-radius: 10px;\n\tz-index: 999;\n\t\n\t/*display: table;*/\n\toverflow: hidden;\n}\n.node-body:hover {\n\tbackground-color: rgba(150, 200, 100, 0.6);\n}\n\n.icon {\n\tfloat: left;\n\tdisplay: table-cell;\n\theight: 20px;\n\twidth: 20px;\n\tborder-radius: 100%;\n\tbackground-color: #289DE9;\n}\n.icon:before {\n\tcontent: \"\\E616\";\n\tcolor: white;\t\n\tposition: absolute;\n\tleft: 2px;\n\ttop: -3px;\n}\n.icon-drag {\n\tposition: absolute;\n}\n.circle {\n\tposition: absolute;\n\tdisplay: block;\n\theight: 5px;\n\twidth: 5px;\n\tborder: 1px solid gray;\n\tborder-radius: 100%;\n}\n.type, .index{\n\tdisplay: inline-block;\n\t/*position: absolute;*/\n\ttop: 0;\n\tleft: 20px;\n\theight: 100%;\n\tfont-size: 12px;\n\tline-height: 100%;\n\t/*width: 50px;*/\n}\n.type:after, .index:after{\n\tcontent: '- ';\n\tcolor: gray;\n\tmargin-right: 5px;\n}\n.name {\n\toutline: none;\n\tborder: 0;\n\tdisplay: inline-block;\n\twidth: 60px;\n\tpadding-bottom: 2px;\n\tmargin-top: -5px;\n\tbackground-color: transparent;\n}\n.name:focus {\n\tbackground-color: white;\n}\n\n/*.node-model {\n\tposition: relative;\n\tmargin: 10px auto;\n}\n.node-instance {\n\tposition: fixed;\n}*/\nul {\n\tdisplay: table;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 6px;\n}\nli {\n\tlist-style: none;\n\tdisplay: table-cell;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/node/node.component.html":
/***/ (function(module, exports) {

module.exports = "<div draggable \n\t[dragHandle]=\"'.draggable'\" \n\t[dragScope]=\"'canvas'\" \n\t[dragData]=\"node\" \n\t[dragImage] = \"\"\n\tclass=\"node\" \n\t[ngStyle]=\"{'left.px':node.x, 'top.px':node.y}\"\n\t#nodeRef >\n\t<!-- 输入端口 -->\n\t<ul class=\"in-ports\">\n\t\t<li  *ngFor=\"let port of node.inPorts\">\n\t\t\t<inport [port]=\"port\"></inport>\n\t\t</li>\n\t</ul>\n\t<!-- 节点框 -->\n\t<div class=\"node-body draggable\">\n\t\t<!-- 图标和名称 -->\n\t\t<!-- <span class=\"icon\"></span> -->\n\t\t<span class=\"type draggable\">\n\t\t\t{{node.model.type}}\n\t\t</span>\n\t\t<span class=\"index draggable\">{{node.index}}</span>\n\t\t<input contenteditable=\"true\" maxlength=\"8\" class=\"name\" value=\"{{node.name}}\">\n\t</div>\n\t\n\n\t<!-- 输出端口 -->\n\t<ul class=\"out-ports\">\n\t\t<li  *ngFor=\"let port of node.outPorts\">\n\t\t\t<outport [port]=\"port\"></outport>\n\t\t</li>\n\t</ul>\n\t\n</div>\t\n"

/***/ }),

/***/ "../../../../../src/app/components/node/node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__("../../../../../src/app/models/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeComponent = (function () {
    function NodeComponent() {
    }
    NodeComponent.prototype.ngOnInit = function () {
    };
    NodeComponent.prototype.ngAfterViewInit = function () {
        // console.log('after view init:', this.child);
    };
    return NodeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* ComputeNode */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* ComputeNode */]) === "function" && _a || Object)
], NodeComponent.prototype, "node", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nodeRef', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", Object)
], NodeComponent.prototype, "child", void 0);
NodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'node',
        template: __webpack_require__("../../../../../src/app/components/node/node.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/node/node.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NodeComponent);

var _a;
//# sourceMappingURL=node.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/outport/outport.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".port {\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n\theight: 5px;\n\twidth: 5px;\n\tborder: 1px solid gray;\n\tborder-radius: 100%;\n\n\tcursor: crosshair;\n}\n\n.unconnected.port:hover, .unconnected.hover {\n\tborder: 2px solid green;\n}\n.lightup {\n\tborder-width: 2px;\n\tborder-color: green;\n}\n.none {\n\tdisplay: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/outport/outport.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <span></span> -->\n<div class=\"port unconnected\"\n\tdraggable\n\t[dragScope]=\"'inport'\" \n\t[dragData]=\"port\" \n\t(onDragStart)=\"onDragStart($event)\"\n\t(onDrag)=\"onDrag($event)\"\n\t(onDragEnd)=\"onDragEnd($event)\"\n\t#portRef\n\t>\n\t\n</div>\n<!-- <span></span> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/outport/outport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__("../../../../../src/app/models/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_line_service__ = __webpack_require__("../../../../../src/app/services/line.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutportComponent = (function () {
    function OutportComponent(lineService) {
        this.lineService = lineService;
    }
    OutportComponent.prototype.ngOnInit = function () {
        this.port.ref = this;
    };
    OutportComponent.prototype.getPosition = function () {
        return {
            x: this.portRef.nativeElement.offsetLeft + this.port.node.x + this.portRef.nativeElement.offsetWidth / 2,
            y: this.portRef.nativeElement.offsetTop + this.port.node.y + this.portRef.nativeElement.offsetHeight
        };
    };
    OutportComponent.prototype.onDragStart = function (e) {
        // console.log('drag start', this.portRef);
        this.lineService.startDrag(this.getPosition());
    };
    OutportComponent.prototype.onDragEnd = function (e) {
        // console.log('ondrag end');
        this.lineService.stopDrag();
    };
    OutportComponent.prototype.onDrag = function (e) {
        // console.log(e);
        this.lineService.draggingTo(e.clientX - 300, e.clientY - 50);
    };
    return OutportComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_model__["d" /* Port */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_model__["d" /* Port */]) === "function" && _a || Object)
], OutportComponent.prototype, "port", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("portRef"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], OutportComponent.prototype, "portRef", void 0);
OutportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'outport',
        template: __webpack_require__("../../../../../src/app/components/outport/outport.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/outport/outport.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_line_service__["a" /* LineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_line_service__["a" /* LineService */]) === "function" && _c || Object])
], OutportComponent);

var _a, _b, _c;
//# sourceMappingURL=outport.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComputeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Port; });
/* unused harmony export InPort */
/* unused harmony export OutPort */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Line; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComputeModel = (function () {
    function ComputeModel(type, inPortsNumber, outPortsNumber) {
        this.type = type;
        this.inPortsNumber = inPortsNumber;
        this.outPortsNumber = outPortsNumber;
        this.id = 'model-' + type;
        this.nodes = [];
        this.totalIndex = 0;
    }
    ComputeModel.prototype.createNode = function (x, y, id) {
        this.totalIndex++;
        var node = new ComputeNode(this, x, y, id);
        this.nodes.push(node);
        return node;
    };
    return ComputeModel;
}());

var ComputeNode = (function () {
    function ComputeNode(model, x, y, node) {
        this.model_id = model.id;
        this.model = model;
        this.type = model.type;
        this.index = model.totalIndex;
        if (node) {
            this.id = node.id;
            this.name = node.name;
        }
        else {
            this.id = ('node-' + this.type + '-' + this.index);
            this.name = 'name' + this.index; //index as default name
        }
        this.inPorts = [];
        this.outPorts = [];
        for (var i = 0; i < model.inPortsNumber; i++) {
            var port = new InPort(this, i);
            // console.log(node);
            if (node)
                port.setId(node.inPorts[i].id);
            this.inPorts.push(port);
        }
        for (var i = 0; i < model.outPortsNumber; i++) {
            var port = new OutPort(this, i);
            if (node)
                port.setId(node.outPorts[i].id);
            this.outPorts.push(port);
        }
        this.moveTo(x, y);
        // console.log('create node', this);
    }
    ComputeNode.prototype.getSchema = function () {
        return {
            model_type: this.type,
            // model_id	: this.model_id,
            id: this.id,
            name: this.name,
            x: this.x,
            y: this.y
        };
    };
    ComputeNode.prototype.moveTo = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
        this.movePorts();
        // console.log('x:', this.x, ', y:', this.y);
    };
    ComputeNode.prototype.movePorts = function () {
        for (var i = this.inPorts.length - 1; i >= 0; i--) {
            this.inPorts[i].move();
        }
        for (var i = this.outPorts.length - 1; i >= 0; i--) {
            this.outPorts[i].move();
        }
    };
    return ComputeNode;
}());

var Port = (function () {
    function Port(node, index) {
        this.index = index;
        this.id = 'port-' + node.id + '-' + index;
        this.node = node;
        this.isConnected = false;
        this.connectedPort = null;
        this.line = null;
    }
    Port.prototype.getPosition = function () {
        if (this.ref)
            return this.ref.getPosition();
    };
    Port.prototype.setId = function (id) {
        this.id = id;
    };
    Port.prototype.connect = function (outport) {
        if (this.isConnected == false) {
            this.isConnected = true;
            this.connectedPort = outport;
            this.line = new Line(outport, this);
            outport.isConnected = true;
            outport.connectedPort = this;
            outport.line = this.line;
        }
        console.log('connect:', this);
    };
    Port.prototype.disconnect = function () {
        this.isConnected = false;
        this.connectedPort = null;
        this.line = null;
    };
    Port.prototype.move = function () {
        if (this.isConnected && this.line)
            this.line.paint();
    };
    return Port;
}());

var InPort = (function (_super) {
    __extends(InPort, _super);
    function InPort(node, index) {
        var _this = _super.call(this, node, index) || this;
        _this.connectedPort = null;
        _this.id = 'inport-' + node.id + '-' + index;
        return _this;
    }
    return InPort;
}(Port));

var OutPort = (function (_super) {
    __extends(OutPort, _super);
    function OutPort(node, index) {
        var _this = _super.call(this, node, index) || this;
        _this.connectedPort = null;
        _this.id = 'outport-' + node.id + '-' + index;
        return _this;
    }
    return OutPort;
}(Port));

var Line = (function () {
    function Line(outport, inport) {
        this.outport = outport;
        this.inport = inport;
    }
    Line.prototype.paint = function () {
        console.log('repaint line');
        if (this.ref)
            this.ref.paint();
    };
    Line.prototype.delete = function () {
        console.log('delete line');
        this.inport.disconnect();
        this.outport.disconnect();
    };
    return Line;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getStatus = function () {
        return this.http.get('/account/check')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.login = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/account/login', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.signup = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/account/signup', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.logout = function () {
        console.log('going to send logout request');
        return this.http.get('/account/logout')
            .map(function (res) { return res.json(); });
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/line.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineService = (function () {
    function LineService() {
        this.connecting = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.position = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // this.status.subscribe(value => console.log('status:',value));
    }
    LineService.prototype.startDrag = function (o) {
        // console.log('start drag:', x, ',', y);
        o.status = true;
        this.connecting.next(o);
    };
    LineService.prototype.stopDrag = function () {
        this.connecting.next({ status: false });
    };
    LineService.prototype.draggingTo = function (x, y) {
        // console.log('dragging:', x, ',', y);
        this.position.next({ x: x, y: y });
    };
    return LineService;
}());
LineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LineService);

//# sourceMappingURL=line.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/node.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_model__ = __webpack_require__("../../../../../src/app/models/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NodeService = (function () {
    function NodeService(http) {
        this.http = http;
        this.userData = [];
        this.fetchUserData();
    }
    NodeService.prototype.getModels = function () {
        return this.userData;
    };
    NodeService.prototype.getUserData = function () {
        return this.userData;
    };
    NodeService.prototype.createNode = function (model, x, y) {
        var node = model.createNode(x, y).getSchema();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('/update/createNode', JSON.stringify(node), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (id) {
            console.log('create node:', node.name);
        });
    };
    NodeService.prototype.moveNode = function (node, x, y) {
        node.moveTo(x, y);
        var data = {
            id: node.id,
            x: x,
            y: y
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('/update/moveNode', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (id) {
            console.log('move node:', data);
        });
    };
    NodeService.prototype.disconnectPort = function (outport, inport) {
        var connection = {
            outPortId: outport.id,
            inPortId: inport.id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('/update/disconnectPort', JSON.stringify(connection), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (id) {
            console.log('disconnect port:', connection);
            ;
        });
        ;
    };
    NodeService.prototype.connectPort = function (outport, inport) {
        var connection = {
            outPortId: outport.id,
            inPortId: inport.id
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('/update/connectPort', JSON.stringify(connection), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (id) {
            console.log('connect port:', connection);
            ;
        });
        ;
    };
    NodeService.prototype.fetchUserData = function () {
        var _this = this;
        this.http.get('/update/getUserData')
            .map(function (res) { return res.json(); })
            .subscribe(function (models) {
            // var that = this;
            _this.userData.splice(0, _this.userData.length);
            console.log('getUserData:', models);
            models.forEach(function (model) {
                var newModel = new __WEBPACK_IMPORTED_MODULE_3__models_model__["a" /* ComputeModel */](model.model_type, model.inPortNumber, model.outPortNumber);
                model.nodes.forEach(function (node) {
                    newModel.createNode(node.x, node.y, node);
                });
                _this.userData.push(newModel);
            });
            _this.updatePorts(models);
            console.log('create models:', _this.userData);
            // this.modelList = this.userData;
        });
    };
    NodeService.prototype.findPortById = function (id) {
        for (var i = 0; i < this.userData.length; i++) {
            var nodes = this.userData[i].nodes;
            for (var j = 0; j < nodes.length; j++) {
                var inports = nodes[j].inPorts;
                for (var k = 0; k < inports.length; k++) {
                    if (inports[k].id == id)
                        return inports[k];
                }
                var outports = nodes[j].outPorts;
                for (var k = 0; k < outports.length; k++) {
                    if (outports[k].id == id)
                        return outports[k];
                }
            }
        }
        return null;
    };
    NodeService.prototype.updatePorts = function (models) {
        var _this = this;
        models.forEach(function (model) {
            model.nodes.forEach(function (node) {
                node.inPorts.forEach(function (port) {
                    if (port.isConnected) {
                        var findPort = _this.findPortById(port.id);
                        // console.log('connected port：', port.id, this.userData[2].nodes[0].inPorts[1].id);
                        if (findPort)
                            findPort.connect(_this.findPortById(port.connectedPortId));
                    }
                });
            });
        });
    };
    return NodeService;
}());
NodeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NodeService);

var _a;
//# sourceMappingURL=node.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map