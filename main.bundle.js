webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-navbar\">Новий кліент</h1>\r\n<br><br>\r\n<section class=\"add-client-section\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Код клієнта\" [(ngModel)]=\"client.code\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Телефон\" [(ngModel)]=\"client.phone\" type=\"number\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Прізвище\" [(ngModel)]=\"client.lastname\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Ім’я\" [(ngModel)]=\"client.firstname\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"По батькові\" [(ngModel)]=\"client.middlename\">\r\n  </mat-form-field>\r\n  <div class=\"date\">\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Дата народження\" [(ngModel)]=\"client.bithdate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Стать\"  [(ngModel)]=\"client.sex\">\r\n        <mat-option>\r\n         Ч\r\n        </mat-option>\r\n        <mat-option>\r\n          Ж\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <button class=\"okay\" (click)=\"saveClient()\" routerLink=\"{{url}}\" [disabled]=\"checkData()\" >ОК</button>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/add-client/add-client.component.scss":
/***/ (function(module, exports) {

module.exports = ".add-client-section {\n  padding: 0 18px; }\n  .add-client-section mat-form-field {\n    width: 100%; }\n  .add-client-section .date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .add-client-section .date mat-form-field {\n      margin-right: 16px; }\n  .add-client-section .okay {\n    height: 44px;\n    border-radius: 2px;\n    background-color: #9e9e9e;\n    font-size: 18px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n    border: 0;\n    width: 100%;\n    margin: 0 auto; }\n  .add-client-section .date mat-form-field {\n    width: 50%; }\n  .add-client-section .okay:disabled {\n    pointer-events: none;\n    background-color: #DFDFDF !important;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    color: #9F9F9F !important;\n    cursor: default; }\n"

/***/ }),

/***/ "./src/app/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage_service__ = __webpack_require__("./node_modules/ngx-webstorage-service/esm5/ngx-webstorage-service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(storage) {
        this.storage = storage;
        this.client = {
            code: '',
            phone: '',
            lastname: '',
            firstname: '',
            middlename: '',
            bithdate: '',
            sex: ''
        };
        this.url = '';
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.url = this.storage.get('url');
    };
    AddClientComponent.prototype.saveClient = function () {
        console.log('saving');
        var clients = this.storage.get('clients');
        clients.push(this.client);
        this.storage.set('clients', clients);
        var cm = this.storage.get('current_meetting');
        cm.client = this.client;
        this.storage.set('current_meetting', cm);
    };
    AddClientComponent.prototype.checkData = function () {
        if (this.client.phone && this.client.lastname.length > 0 && this.client.code.length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    AddClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-client',
            template: __webpack_require__("./src/app/add-client/add-client.component.html"),
            styles: [__webpack_require__("./src/app/add-client/add-client.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [Object])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\">\r\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"over\" (swipeleft)=\"drawer.close()\">\r\n    <header>\r\n      <div class=\"header-child\">\r\n        <img src=\"../../assets/img/group.png\">\r\n        <div class=\"name-and-email\">\r\n          <p class=\"name\">Іванов Іван</p>\r\n          <p class=\"email\">user@gmail.com</p>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"main\">\r\n      <p class=\"menu\">Меню</p>\r\n      <div class=\"nav-item\" (click)=\"drawer.close()\" routerLink=\"/task\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../assets/img/menu-dark.png\">\r\n        </div>\r\n        <p class=\"nav-item__text\" (click)=\"drawer.close()\" routerLink=\"/meetings\">Завдання</p>\r\n      </div>\r\n      <div class=\"nav-item\" (click)=\"drawer.close()\" routerLink=\"/meetings\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../assets/img/calendar.png\">\r\n        </div>\r\n        <p class=\"nav-item__text\">Мої зустрічі</p>\r\n      </div>\r\n      <div class=\"nav-item\" (click)=\"drawer.close()\" routerLink=\"/clients\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../assets/img/clients.png\">\r\n        </div>\r\n        <p class=\"nav-item__text\">Клієнти</p>\r\n      </div>\r\n      <div class=\"nav-item absolute\" (click)=\"drawer.close()\" routerLink=\"/\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../assets/img/shut-down.png\">\r\n        </div>\r\n        <p class=\"nav-item__text\">Вийти</p>\r\n      </div>\r\n    </div>\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n    <div class=\"example-sidenav-content\" (swiperight)=\"drawer.open()\">\r\n      <a type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n        <img src=\"../../assets/img/sidenav.png\">\r\n      </a>\r\n      <img class=\"logo\" src=\"../../assets/img/logo.png\">\r\n    </div>\r\n    <router-outlet ></router-outlet>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-sidenav-content {\n  height: 55px;\n  -webkit-box-shadow: 0 1px 2px 0 rgba(51, 58, 69, 0.12);\n          box-shadow: 0 1px 2px 0 rgba(51, 58, 69, 0.12);\n  background-color: #202226;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 19px; }\n  .example-sidenav-content .logo {\n    width: 51px;\n    height: 51px;\n    margin-top: 16px;\n    z-index: 2; }\n  .mat-drawer-container {\n  min-height: 100vh;\n  background: #eeeeee; }\n  mat-drawer {\n  width: 85%; }\n  mat-drawer header {\n    height: 91px;\n    background-color: #202226;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  mat-drawer header .header-child {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      max-width: 193px;\n      padding-left: 25px; }\n  mat-drawer header .header-child .name-and-email {\n        padding-left: 32px; }\n  mat-drawer header .header-child .name-and-email .name {\n          margin: 0;\n          font-size: 21px;\n          color: #ffffff; }\n  mat-drawer header .header-child .name-and-email .email {\n          font-size: 16px;\n          font-weight: normal;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.31;\n          letter-spacing: normal;\n          color: #838383;\n          margin: 0; }\n  mat-drawer .main {\n    padding-left: 30px; }\n  mat-drawer .main .menu {\n      height: 70px;\n      font-size: 18px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: condensed;\n      line-height: 3.89;\n      letter-spacing: normal;\n      color: #7a7a7a; }\n  mat-drawer .main .nav-item {\n      width: 275px;\n      border-top: solid 1px #ededed;\n      height: 63px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  mat-drawer .main .nav-item .nav-item__text {\n        font-size: 18px;\n        font-weight: 500;\n        font-style: normal;\n        font-stretch: normal;\n        margin: 0;\n        letter-spacing: normal;\n        color: #000000;\n        padding-left: 19px; }\n  mat-drawer .main .nav-item:focus {\n      outline: none; }\n  mat-drawer .main .nav-item.absolute {\n      position: absolute;\n      bottom: 0; }\n  mat-drawer .main .nav-item:last-child:not(.absolute) {\n      border-bottom: solid 1px #ededed; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.myFunc = function () {
        console.log(1);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_task_component__ = __webpack_require__("./src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__meetings_meetings_component__ = __webpack_require__("./src/app/meetings/meetings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__create_meeting_create_meeting_component__ = __webpack_require__("./src/app/create-meeting/create-meeting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__create_meeting_second_chips_second_chips_component__ = __webpack_require__("./src/app/create-meeting/second-chips/second-chips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_filter_pipe__ = __webpack_require__("./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_client_add_client_component__ = __webpack_require__("./src/app/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_webstorage_service__ = __webpack_require__("./node_modules/ngx-webstorage-service/esm5/ngx-webstorage-service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'task', component: __WEBPACK_IMPORTED_MODULE_8__task_task_component__["a" /* TaskComponent */] },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_12__clients_clients_component__["a" /* ClientsComponent */] },
    { path: 'meetings', component: __WEBPACK_IMPORTED_MODULE_13__meetings_meetings_component__["a" /* MeetingsComponent */] },
    { path: 'meetings/create', component: __WEBPACK_IMPORTED_MODULE_14__create_meeting_create_meeting_component__["a" /* CreateMeetingComponent */] },
    { path: 'client', component: __WEBPACK_IMPORTED_MODULE_20__add_client_add_client_component__["a" /* AddClientComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__meetings_meetings_component__["a" /* MeetingsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__create_meeting_create_meeting_component__["a" /* CreateMeetingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__create_meeting_second_chips_second_chips_component__["a" /* SecondChipsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__add_client_add_client_component__["a" /* AddClientComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-navbar\">Клієнти</h1>\r\n  <div class=\"search-component\">\r\n  <input type=\"text\" placeholder=\"Пошук\" [(ngModel)]=\"userFilter.fullName\">\r\n</div>\r\n<img class=\"add-client\" src=\"../../assets/img/add-client.png\" routerLink=\"/client\">\r\n<section class=\"clients\">\r\n  <div class=\"client\" *ngFor=\"let client of clients | filterBy: userFilter\">\r\n    <div (click)=\"OpenClient(client)\">\r\n      <p class=\"client-name\">{{client.fullName}}</p>\r\n      <p class=\"client-number\">{{client.phone}} | {{client.bornDate | date:'dd.MM.yyyy'}} </p>\r\n    </div>\r\n    <div class=\"settings\">\r\n      <img src=\"../../assets/img/settings.png\">\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/clients/clients.component.scss":
/***/ (function(module, exports) {

module.exports = ".clients {\n  background: white; }\n  .clients .client {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 18px 16px;\n    border-top: solid 1px #ededed; }\n  .clients .client .client-name {\n      font-size: 16px;\n      font-weight: 500;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.5;\n      letter-spacing: normal;\n      color: #000000;\n      margin: 0; }\n  .clients .client .client-number {\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.71;\n      letter-spacing: normal;\n      color: #989898;\n      margin: 0; }\n  .clients .client .settings {\n      width: 37px;\n      height: 37px;\n      opacity: 0.2;\n      border-radius: 20px;\n      border: solid 1px #858585;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  .clients .client:last-child {\n    border-bottom: solid 1px #ededed; }\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(_data) {
        this._data = _data;
        this.clients = [];
        this.userFilter = { fullName: '' };
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.clients = this._data.clients;
    };
    ClientsComponent.prototype.OpenClient = function (client) {
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clients.component.html"),
            styles: [__webpack_require__("./src/app/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/create-meeting/create-meeting.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-navbar\">Зустріч</h1>\r\n<section class=\"create-meeting\">\r\n  <div class=\"create-meeting__header\">\r\n    <div>\r\n      <p class=\"bold\"> {{appointment.date | date:'dd.MM.yyyy'}} </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-for-icon\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Обрати клієнта\" [(ngModel)]=\"appointment.client\" [compareWith]=\"compareObjects\">\r\n        <mat-option *ngFor=\"let item of clients \" [value]=\"item\">\r\n          <span>{{ item.fullName }}</span>\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <div class=\"circle\" routerLink=\"/client\">\r\n      <img src=\"../../assets/img/pen.png\">\r\n    </div>\r\n  </div>\r\n  <div class=\"container-for-icon\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Додати послугу\" [disabled]=\"!appointment.client\">\r\n        <mat-option *ngFor=\"let item of  tasks\" [value]=\"item\" (click)=\"AddService($event,item)\">\r\n          <span>{{item.Name}}</span>\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"action\" *ngFor=\"let aut of appointment.AppointmentUserTasks\">\r\n    <div class=\"action-div\">\r\n      <div>\r\n        <p class=\"name\">{{aut.userTask.Name}}</p>\r\n        <p class=\"status\">{{ getStateNameByCode(aut.state.Code)}}</p>\r\n      </div>\r\n      <div class=\"close\" (click)=\"deleteService(service)\">\r\n        <img src=\"../../assets/img/close-red.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"sms-div\">\r\n      <div class=\"services\">\r\n        <p class=\"services__text\">Кількість послуг:</p>\r\n        <div class=\"count__container\">\r\n          <img class=\"minus\" (click)=\"decrement(aut)\" src=\"../../assets/img/minus.png\">\r\n          <input class=\"count\" type=\"number\" readonly [(ngModel)]=\"aut.count\">\r\n          <img class=\"plus\" (click)=\"increment(aut)\" src=\"../../assets/img/plus.png\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"date-div\" *ngIf=\"aut.state.Code=='started'||aut.state.Code=='finished'\">\r\n      <button class=\"finish\" *ngIf=\"aut.state.Code=='started'\" (click)=\"finishService(aut)\">ЗАВЕРШИТИ</button>\r\n    </div>\r\n    <div class=\"final\" *ngIf=\"aut.state.Code=='finished'\">\r\n      <select>\r\n        <option disabled>Виберіть результат</option>\r\n        <option>Успішно</option>\r\n        <option>Перервано</option>\r\n        <option>Перенесено</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <button *ngIf=\"appointment.state.Code=='new'\" class=\"create-btn\" (click)=\"startAppointment()\"\r\n          [disabled]=\"checkData() || !appointment.client\">\r\n    ПОЧАТИ ЗУСТРІЧ\r\n  </button>\r\n\r\n\r\n  <mat-form-field *ngIf=\"appointment.state.Code=='send'\">\r\n    <input matInput  type=\"number\" placeholder=\"Код з СМС\" class=\"sms-input\" [(ngModel)]=\"smsCode\">\r\n  </mat-form-field>\r\n  <button *ngIf=\"appointment.state.Code=='send'\" class=\"submit-sms create-btn\" (click)=\"verifyClient(smsCode)\">Ок</button>\r\n  <div *ngIf=\"appointment.state.Code=='send'\" class=\"redo-div\">\r\n    <i class=\"fas fa-redo\" id=\"redo\"></i>\r\n    <a class=\"resend\">Надіслати повторно</a>\r\n  </div>\r\n\r\n\r\n  <button *ngIf=\"appointment.state.Code=='started'\" class=\"create-btn\" (click)=\"finishAppointment()\"\r\n          routerLink=\"/meetings\" [disabled]=\"checkData()\">\r\n    ЗАВЕРШИТИ ЗУСТРІЧ\r\n  </button>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/create-meeting/create-meeting.component.scss":
/***/ (function(module, exports) {

module.exports = ".create-meeting {\n  padding: 0 17px;\n  background: white; }\n  .create-meeting ::ng-deep .mat-form-field-underline, .create-meeting ::ng-deep .mat-form-field-ripple {\n    background-color: #989898 !important; }\n  .create-meeting ::ng-deep .mat-form-field-label, .create-meeting ::ng-deep .mat-focused {\n    color: #989898 !important; }\n  .create-meeting ::ng-deep .mat-input-element {\n    caret-color: #989898;\n    color: #989898; }\n  .create-meeting .mat-form-field {\n    width: 100%;\n    margin-top: 10px; }\n  .create-meeting .create-meeting__header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding-top: 14px;\n    padding-bottom: 14px; }\n  .create-meeting .create-meeting__header div .bold {\n      margin: 0;\n      font-size: 18px;\n      font-weight: 500;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #000000; }\n  .create-meeting .create-meeting__header div .normal {\n      margin-bottom: 0;\n      margin-top: 7px;\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #989898; }\n  .create-meeting .create-meeting__header div .bold.right, .create-meeting .create-meeting__header div .normal.right {\n      text-align: right; }\n  .create-meeting .container-for-icon {\n    position: relative; }\n  .create-meeting .container-for-icon .circle {\n      width: 36px;\n      height: 36px;\n      border-radius: 25px;\n      -webkit-box-shadow: 0 2px 4px 0 rgba(0, 122, 255, 0.28);\n              box-shadow: 0 2px 4px 0 rgba(0, 122, 255, 0.28);\n      background-color: #9e9e9e;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-left: auto;\n      position: absolute;\n      right: 0;\n      top: 15px; }\n  .create-meeting .start, .create-meeting .end {\n    margin: 11px 0; }\n  .create-meeting .create-btn {\n    max-width: 341px;\n    height: 44px;\n    width: 100%;\n    border-radius: 2px;\n    font-size: 18px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n    background: #9e9e9e;\n    border: 0;\n    margin-top: 26px; }\n  .action {\n  background-color: #f2f4f7;\n  padding: 11px 15px;\n  margin-top: 11px; }\n  .action .action-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 2px; }\n  .action .action-div div .name {\n      font-size: 16px;\n      font-weight: 500;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #000000;\n      margin: 0; }\n  .action .action-div div .status {\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #43b65c;\n      margin: 0; }\n  .action .action-div .close {\n      width: 36px;\n      height: 36px;\n      border-radius: 20px;\n      background-color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  .action .sms-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .action .sms-div input {\n      width: 100%;\n      height: 40px;\n      border-radius: 2px;\n      -webkit-box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n              box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n      background-color: #ffffff;\n      font-size: 16px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #989898;\n      border: 0;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      margin-top: 7px;\n      padding: 10px 14px; }\n  .action .sms-div .submit-sms {\n      margin-top: 10px;\n      width: 100%;\n      height: 40px;\n      border-radius: 2px;\n      background-color: #9e9e9e;\n      font-size: 16px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n      border: 0; }\n  .action .date-div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-top: 7px; }\n  .action .date-div .start, .action .date-div .end {\n      width: 50%; }\n  .action .date-div .start input, .action .date-div .end input {\n        width: 115px;\n        height: 40px;\n        border-radius: 2px;\n        -webkit-box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n                box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n        border: solid 1px #d2dadd;\n        background-color: #ffffff;\n        padding-left: 42px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAAXNSR0IArs4c6QAAAQRJREFUOBHtVDsOgzAMdQJDJebCAVg4ATNzJe7QI3Rg6Qm69gg9A58LMCIuQrqyQpoXCQRRaRXUsZaIsf38YjmWGS2kKIobY+wipbynaXpdhFa/Wzi+QhFlSZIclC8z/Kb5FueqW06c88cwDEdVEXmeR0q7eZ5Lk2GyTZzjOM9xHM9UVZXouk7FpSzLUvZ9r7V2bBwmDvng4ajI9319aRiGVNc1QX8SE4d88LjLpCiKCN832cLNZE3TkCqXgiCgOI7J1kYB82uCSI2DJkTA1l6RoSL1sroyBGxt5BBG4BcCnn/P7Dr575ldv4BGzzh2kRBCD/DeA/ngcbHU2rbVy3Ev2bQcXxfIK3PuIBO9AAAAAElFTkSuQmCC\") no-repeat scroll 12px 11px; }\n  .action .date-div .finish {\n      width: 100%;\n      height: 40px;\n      border-radius: 2px;\n      background-color: #9e9e9e;\n      border: 0;\n      font-size: 16px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n      margin-top: 10px; }\n  .action .final select {\n    width: 100%;\n    height: 45px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n            box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n    border: solid 1px #d2dadd;\n    background-color: #ffffff;\n    padding: 12px; }\n  .services {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .services .services__text {\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: condensed;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000000; }\n  .services .count__container {\n    position: relative; }\n  .services .count__container .count {\n      outline: none;\n      width: 144px;\n      height: 40px;\n      border-radius: 2px;\n      -webkit-box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n              box-shadow: 0 2px 4px 0 rgba(213, 213, 213, 0.28);\n      border: solid 1px #d2dadd;\n      background-color: #ffffff;\n      text-align: center; }\n  .services .count__container .minus, .services .count__container .plus {\n      position: absolute;\n      top: 14px; }\n  .services .count__container .minus {\n      left: 10px; }\n  .services .count__container .plus {\n      right: 10px; }\n  #redo {\n  color: #9e9e9e;\n  margin-top: 5px; }\n  .resend {\n  color: #9e9e9e; }\n  .redo-div {\n  padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/create-meeting/create-meeting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMeetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateMeetingComponent = /** @class */ (function () {
    function CreateMeetingComponent(_data) {
        this._data = _data;
        this.selectedItem = '';
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.specialityCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    CreateMeetingComponent.prototype.decrement = function (service) {
        if (service.count > 1) {
            service.count--;
        }
    };
    CreateMeetingComponent.prototype.increment = function (service) {
        service.count++;
    };
    CreateMeetingComponent.prototype.ngOnInit = function () {
        console.log('init');
        this.appointment = this._data.getCurrentAppointment();
        this.tasks = this._data.tasks;
        this.clients = this._data.clients;
    };
    CreateMeetingComponent.prototype.AddService = function (event, userTask) {
        console.log(this.selectedItem);
        console.log(this.tasks);
        console.log(userTask);
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].Name === userTask.Name) {
                this.tasks.splice(i, 1);
            }
        }
        event.stopPropagation();
        this.appointment.AppointmentUserTasks.push({
            userTask: userTask,
            startTime: new Date(),
            count: 1,
            state: this._data.taskStates.find(function (x) { return x.Code === 'new'; })
        });
        this.SaveAppointment();
        userTask = undefined;
    };
    CreateMeetingComponent.prototype.deleteService = function (pservice) {
        this.appointment.AppointmentUserTasks.splice(pservice, 1);
    };
    CreateMeetingComponent.prototype.compareObjects = function (o1, o2) {
        return o1.id === o2.id;
    };
    CreateMeetingComponent.prototype.getStateNameByCode = function (code) {
        var res = '';
        var m = this._data.taskStates.find(function (x) { return x.Code === code; });
        if (m) {
            res = m.Name;
        }
        return res;
    };
    CreateMeetingComponent.prototype.SaveAppointment = function () {
        this.appointment.number = this._data.SaveAppointment(this.appointment).number;
    };
    CreateMeetingComponent.prototype.checkData = function () {
        this.appointment.client && this.appointment.AppointmentUserTasks.length > 0;
    };
    CreateMeetingComponent.prototype.startAppointment = function () {
        this.appointment.state = this._data.appointmentStaes.find(function (x) { return x.Code === 'send'; });
    };
    CreateMeetingComponent.prototype.verifyClient = function () {
        this.appointment.state = this._data.appointmentStaes.find(function (x) { return x.Code === 'started'; });
    };
    CreateMeetingComponent.prototype.finishAppointment = function () {
        this.appointment.state = this._data.appointmentStaes.find(function (x) { return x.Code === 'closed'; });
        this.SaveAppointment();
    };
    CreateMeetingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-meeting',
            template: __webpack_require__("./src/app/create-meeting/create-meeting.component.html"),
            styles: [__webpack_require__("./src/app/create-meeting/create-meeting.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], CreateMeetingComponent);
    return CreateMeetingComponent;
}());



/***/ }),

/***/ "./src/app/create-meeting/second-chips/second-chips.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"demo-chip-list\">\r\n  <mat-chip-list #chipList>\r\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\r\n              [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n      {{fruit.name}}\r\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <input placeholder=\"Додати послугу\"\r\n           [matChipInputFor]=\"chipList\"\r\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n           [matChipInputAddOnBlur]=\"addOnBlur\"\r\n           (matChipInputTokenEnd)=\"add($event)\" />\r\n  </mat-chip-list>\r\n</mat-form-field>\r\n"

/***/ }),

/***/ "./src/app/create-meeting/second-chips/second-chips.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%;\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/create-meeting/second-chips/second-chips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondChipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SecondChipsComponent = /** @class */ (function () {
    function SecondChipsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["g" /* ENTER */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["c" /* COMMA */]];
        this.fruits = [
            { name: 'Послуга 1' },
            { name: 'Послуга 2' },
            { name: 'Послуга 3' },
        ];
    }
    SecondChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    SecondChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    SecondChipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-second-chips',
            template: __webpack_require__("./src/app/create-meeting/second-chips/second-chips.component.html"),
            styles: [__webpack_require__("./src/app/create-meeting/second-chips/second-chips.component.scss")]
        })
    ], SecondChipsComponent);
    return SecondChipsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\r\n  <img class=\"login__image\" src=\"../../assets/img/logo.png\">\r\n  <h1 class=\"title\">Авторизація</h1>\r\n  <form class=\"form\" [formGroup]=\"myForm\">\r\n    <mat-form-field>\r\n      <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"text\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"password\">\r\n      <img class=\"eye\" src=\"../../assets/img/eye.png\"  (click)=\"password()\">\r\n      <input matInput formControlName=\"password\" placeholder=\"Введите пароль\" [type]=\"show ? 'text' : 'password'\">\r\n    </mat-form-field>\r\n    <mat-error *ngIf=\"!isValid\">\r\n      E-mail або пароль невірні\r\n    </mat-error>\r\n    <button type=\"submit\" (click)=\"checkForm()\">\r\n      УВІЙТИ\r\n    </button>\r\n  </form>\r\n  <p class=\"footer-text\">\"Всеукраинская сеть ЛЖВ\"</p>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".login {\n  background-color: #202226;\n  min-height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 3; }\n  .login ::ng-deep .mat-form-field-underline, .login ::ng-deep .mat-form-field-ripple {\n    background-color: #979797 !important; }\n  .login ::ng-deep .mat-form-field-label, .login ::ng-deep .mat-focused {\n    color: #979797 !important; }\n  .login ::ng-deep .mat-input-element {\n    caret-color: #979797;\n    color: #979797; }\n  .login .login__image {\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    display: block;\n    padding-top: 37px; }\n  .login .title {\n    font-size: 24px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: condensed;\n    line-height: 1;\n    letter-spacing: normal;\n    text-align: center;\n    color: #ffffff;\n    font-family: \"Roboto\", sans-serif;\n    text-transform: uppercase; }\n  .login .form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: fixed;\n    left: 50%;\n    top: 60%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .login .mat-focused .mat-form-field-label {\n    color: #979797 !important; }\n  .login .mat-form-field-ripple {\n    background-color: #979797 !important; }\n  .login .mat-input-element {\n    caret-color: #979797 !important; }\n  .login .mat-form-field-ripple {\n    background: #979797 !important; }\n  .login button {\n    width: 300px;\n    height: 50px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 122, 255, 0.28);\n            box-shadow: 0 2px 4px 0 rgba(0, 122, 255, 0.28);\n    background-color: #9e9e9e;\n    color: white;\n    font-weight: bold;\n    margin-top: 92px;\n    border: 0; }\n  .login button[disabled] {\n    pointer-events: none;\n    background-color: #DFDFDF !important;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    color: #9F9F9F !important;\n    cursor: default; }\n  .login .footer-text {\n    position: fixed;\n    bottom: 31px;\n    text-align: center;\n    color: #989898;\n    font-size: 14px;\n    left: 0;\n    right: 0; }\n  .login mat-form-field {\n    max-width: 375px;\n    width: 90%; }\n  .login .password {\n    position: relative; }\n  .login .password .eye {\n      position: absolute;\n      width: 27px;\n      height: 18px;\n      -o-object-fit: contain;\n         object-fit: contain;\n      right: 0; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.myForm = this.formBuilder.group({
            email: ['1@1', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            password: ['1', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.isValid = true;
        this.show = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.password = function () {
        this.show = !this.show;
    };
    LoginComponent.prototype.checkForm = function () {
        console.log(this.myForm.value.password);
        if (this.myForm.value.email === '1@1' && this.myForm.value.password === '1') {
            this.isValid = true;
            this.router.navigate(['meetings/create']);
        }
        else {
            this.isValid = false;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/meetings/meetings.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-navbar\">Зустрічі</h1>\r\n<div class=\"search-component\">\r\n  <input type=\"text\" placeholder=\"Пошук\" [(ngModel)]=\"userFilter.client.fullName\">\r\n</div>\r\n<img class=\"add-client\" src=\"../../assets/img/zustrichi.png\" (click)=\"CreateMeetting()\" routerLink=\"/meetings/create\">\r\n<section class=\"meetings\">\r\n  <div class=\"items\" *ngFor=\"let appointment of appointments | filterBy: userFilter\"  (click)=\"openMeetting(appointment)\" routerLink=\"/meetings/create\">\r\n    <div class=\"items__description\" *ngIf=\"appointment\">\r\n      <p class=\"name\">№{{appointment.number}},{{appointment.client?.fullName}} - {{appointment.date  | date:'dd.MM.yyyy'}}</p>\r\n      <div *ngFor=\"let task of appointment.appointmentUserTasks\">\r\n        <p class=\"text\">{{task.userTask.Name}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"image\" *ngIf=\"appointment\">\r\n      <img *ngIf=\"appointment.state.Code=='closed'\" src=\"../../assets/img/success.png\">\r\n      <img *ngIf=\"appointment.state.Code!='closed'\" src=\"../../assets/img/declined.png\">\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/meetings/meetings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meetings/meetings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeetingsComponent = /** @class */ (function () {
    function MeetingsComponent(_data) {
        this._data = _data;
        this.userFilter = { client: {} };
    }
    MeetingsComponent.prototype.ngOnInit = function () {
        this.appointments = this._data.appointmens;
        console.log(this.appointments);
    };
    MeetingsComponent.prototype.openMeetting = function (app) {
        this._data.currentAppointmenNumber = app.number;
    };
    MeetingsComponent.prototype.CreateMeetting = function () {
        this._data.currentAppointmenNumber = 0;
    };
    MeetingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-meetings',
            template: __webpack_require__("./src/app/meetings/meetings.component.html"),
            styles: [__webpack_require__("./src/app/meetings/meetings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], MeetingsComponent);
    return MeetingsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-component\">\r\n  <input type=\"text\" placeholder=\"Пошук\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ".search-component input {\n  outline: none;\n  width: 100%;\n  height: 50px;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #787b80;\n  padding-left: 55px;\n  margin-bottom: 20px;\n  border: 0;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAiNJREFUOBGllDFIHFEQhue9jbtqDIinCIZ0gojVgbWgpU1Ic5IiIDZiYxUCIYEYUAvLNImFIiiI14hN2oPUgpUkhV3SaHIiKJjcsTuZf/f2WOfeHh4uHPtm5pv/Zt+beYbUUy5X+qr1q3liem6IJyRckF+VyZySoaNCV/9OqTR9o9JaTJP1fN49LBlDn5h5OOvPro0x58y0vPTqRTnr12ubOr7sHb4l4oNE1Jx41nvpP/KeFoKxAG/YROYkifNBwqfZre+4YlQKUak2ZDardvzZ2uLkZF3jm8fHXdH3n++M4fdStSd/NJdXucGeXtauzhqVfhRwRQtqWwoRhj9gWwb8/lHXnlscVPr5qFSLuOyES7YlPmgHZHH68HvWbrg+35FD4MDHsUa+5myjpUSYvulgOzvl03zNoivQp/TEG/2jg+3sDB/naxbCVTivw7NBHWxnZ/g4X7M2nijxhhFN6WA7O+XTfM1ajCmcYRS9QZ9qwGWDAx/HGvmas5h99KP0ZRHNrwGXzT9+SVtyUfIukO9iLJobs48gJgrNn1c5/MlwRK/BM/G/G7rtwVo/zUsIsy+Dsp4AuCvsBloKp4+Dwp4mn89FMDL+uIyG5X3q+93TC6XZ31nxpjCcuDPue7sFQVCp1f5WRHzCJX5HGOKd3Mfb5a9DeeItwhDv5MkTf7AwinCJNy/6TqrULA6ut/fxDPZaYj6H9XvNg9bJtVH51v7RCID/Mr0QOLMlHbQAAAAASUVORK5CYII=\") no-repeat scroll 12px 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_webstorage_service__ = __webpack_require__("./node_modules/ngx-webstorage-service/esm5/ngx-webstorage-service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DataService = /** @class */ (function () {
    function DataService(storage, http) {
        this.storage = storage;
        this.http = http;
        this.appointmensSEQ = 1;
        this.currentAppointmenNumber = 0;
        this.ngOnInit();
    }
    DataService.prototype.getCurrentAppointment = function () {
        var _this = this;
        var appointment;
        if (this.currentAppointmenNumber == 0) {
            appointment = {
                date: new Date(),
                state: this.appointmentStaes.find(function (x) { return x.Code === 'new'; }),
                AppointmentUserTasks: []
            };
        }
        else {
            appointment = this.appointmens.find(function (x) { return x.number === _this.currentAppointmenNumber; });
        }
        console.log(appointment);
        return appointment;
    };
    DataService.prototype.SaveAppointment = function (appointment) {
        if (!appointment.number) {
            appointment.number = this.GetNextNumber();
            this.appointmens.push(appointment);
        }
        else {
            this.appointmens.forEach(function (element) {
                if (element.number == appointment.number)
                    element = appointment;
            });
        }
        this.storage.set('Appointments', this.appointmens);
        return appointment;
    };
    DataService.prototype.GetNextNumber = function () {
        var number = this.storage.get('seq');
        4;
        console.log(number);
        if (number) {
            number = number + 1;
        }
        else
            number = 1;
        this.storage.set('seq', number);
        console.log(number);
        return number;
    };
    DataService.prototype.ngOnInit = function () {
        this.taskStates = [
            { Id: 1, Code: 'new', Name: 'Нова' },
            { Id: 2, Code: 'send', Name: 'Відправлено СМС' },
            { Id: 3, Code: 'verified', Name: 'Валідовано' },
            { Id: 4, Code: 'started', Name: 'Розпочато надання' },
            { Id: 5, Code: 'finished', Name: 'Завершено надання' },
            { Id: 6, Code: 'closed', Name: 'Закрита' }
        ];
        this.appointmentStaes = [
            { Id: 1, Code: 'new', Name: 'Нова' },
            { Id: 2, Code: 'send', Name: 'Відправлено СМС' },
            { Id: 3, Code: 'started', Name: 'Розпочато надання' },
            { Id: 4, Code: 'closed', Name: 'Закрита' }
        ];
        this.appointmens = this.storage.get('Appointments');
        if (!this.appointmens) {
            this.appointmens = [];
        }
        ;
        this.clients = [
            { Id: 5, fullName: 'Федорец Максим Іванович', bornDate: new Date('1980-06-12'), phone: '0730711196', casePP: 'ФедМаІв120680Ч' },
            { Id: 6, fullName: 'Сахаров Роман Іванович', bornDate: new Date('1982-02-10'), phone: '0730711196', casePP: 'СахРоІв100282Ч' },
            { Id: 1, fullName: 'Сидоров Карлітос Хідальгович', bornDate: new Date('1982-12-18'), phone: '0730711196', casePP: 'ХідКаХі181282Ч' },
            { Id: 10, fullName: 'Булавенко Сергій Вікторович', bornDate: new Date('1980-06-01'), phone: '0730711196', casePP: 'БулСеВі010680Ч' },
            { Id: 8, fullName: 'Король Антон Ігорович', bornDate: new Date('1980-11-29'), phone: '0730711196', casePP: 'КорАнІг110688Ч' },
            { Id: 12, fullName: 'Василенко Василь Васильович', bornDate: new Date('1955-06-26'), phone: '0730711196', casePP: 'ВасВаВа260655Ч' },
            { Id: 13, fullName: 'Волков Микита Сергійович', bornDate: new Date('1983-07-01'), phone: '0730711196', casePP: 'ВолМиСе010783Ч' },
            { Id: 14, fullName: 'Коваленко Коваль Ковальович', bornDate: new Date('1983-04-03'), phone: '0730711196', casePP: 'КовКоКо030483Ч' },
            { Id: 15, fullName: 'Нагорний Микола Миколайович', bornDate: new Date('1986-02-24'), phone: '0730711196', casePP: 'НагМиМи240286Ж' },
            { Id: 16, fullName: 'Смійчік Дмитро Сергійович', bornDate: new Date('1990-05-30'), phone: '0730711196', casePP: 'СміДмСе300590Ч' },
        ];
        this.tasks = [
            { Id: 1, Name: 'Консультування', projectName: 'Health Link', packageName: 'ДКТ', count: 55 },
            { Id: 1, Name: 'Тестування', projectName: 'Health Link', packageName: 'ДКТ', count: 23 },
            { Id: 1, Name: 'Доведення до обліку', projectName: 'Health Link', packageName: 'ДУ', count: 11 },
            { Id: 1, Name: 'Видача презервативів', projectName: 'Health Link', packageName: 'Супровід', count: 76 },
            { Id: 1, Name: 'Обмін шприців', projectName: 'Health Link', packageName: 'Супровід', count: 0 },
        ];
        console.log('init data service');
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3_ngx_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title-navbar\">Завдання</h1>\r\n<div class=\"search-component\">\r\n  <input type=\"text\" placeholder=\"Пошук\" [(ngModel)]=\"userFilter.Name\">\r\n</div>\r\n<img class=\"add-client\" src=\"../../assets/img/add-client.png\" (click)=\"meetingCreate()\" routerLink=\"/meetings/create\">\r\n\r\n<section class=\"meetings\">\r\n  <div class=\"items\" *ngFor=\"let item of tasks | filterBy: userFilter\">\r\n    <div class=\"items__description\">\r\n      <p class=\"name\">{{item.Name}}</p>\r\n      <p  class=\"client-number\">  {{item.projectName}} | {{item.packageName}}</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/task/task.component.scss":
/***/ (function(module, exports) {

module.exports = ".task {\n  max-width: 340px;\n  margin: 0 auto; }\n\n.non-active-header {\n  background-color: #ffffff !important; }\n\n.non-active-header .mat-expansion-panel-header-title {\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000000; }\n\n.active-header {\n  height: 51px;\n  border-radius: 2px;\n  background-color: #9e9e9e; }\n\n.active-header .mat-expansion-panel-header-title {\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff; }\n\n::ng-deep mat-expansion-panel {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important; }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]) .mat-expansion-panel-header:not(.non-active-header) .mat-expansion-panel-header:not(.child):hover {\n  background: #9e9e9e; }\n\n.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header:not(.non-active-header), .mat-expansion-panel-header.mat-expanded, .mat-expansion-panel-header:not(.child):hover {\n  background: #9e9e9e; }\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 2px 2px 2px 2px !important; }\n\n.child.active-header {\n  height: 44px !important;\n  border-radius: 2px;\n  margin: 5px;\n  padding: 0px 15px !important;\n  background-color: #eaf4fd !important; }\n\n.child.active-header .mat-expansion-panel-header-title {\n    font-size: 16px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #9e9e9e; }\n\n.child.non-active-header {\n  margin: 5px;\n  padding: 0px 15px !important;\n  background-color: #eaf4fd !important; }\n\n.child.non-active-header .mat-expansion-panel-header-title {\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000000; }\n\n.item-service {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 5px 0px 5px 30px !important;\n  max-width: 282px;\n  border-bottom: solid 1px #d3d3d3; }\n\n.item-service p {\n    font-size: 14px;\n    color: #8b8b8b; }\n\n.item-service.child {\n  padding-left: 40px !important; }\n\n.item-service.child p {\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.38;\n    letter-spacing: normal;\n    color: #000000; }\n\n.item-service.child div {\n    width: 44px;\n    height: 44px;\n    border-radius: 25px;\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 122, 255, 0.28);\n            box-shadow: 0 2px 4px 0 rgba(0, 122, 255, 0.28);\n    background-color: #9e9e9e;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.task .mat-expansion-panel-content.mat-expanded > .mat-expansion-panel-body {\n  padding: 0 !important; }\n\n.mat-expansion-indicator::after {\n  color: white !important; }\n\n.item-service.active p {\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #9e9e9e; }\n\n.client-number {\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #989898;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = /** @class */ (function () {
    function TaskComponent(_data) {
        this._data = _data;
        this.tasks = [];
        this.userFilter = {};
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.tasks = this._data.tasks;
    };
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("./src/app/task/task.component.html"),
            styles: [__webpack_require__("./src/app/task/task.component.scss")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__polyfills_ts__ = __webpack_require__("./src/polyfills.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map