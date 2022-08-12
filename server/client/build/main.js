"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-form/user-form.component */ 3081);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 6825);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ 5826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: 'userform',
        component: _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_1__.UserFormComponent
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: '',
        redirectTo: '/userform',
        pathMatch: 'full'
    },
    {
        path: 'userlist',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__.UserListComponent
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "contentBody"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".contentBody[_ngcontent-%COMP%] {\r\n    \r\n      background: linear-gradient(to top right, #FC2C77 0%, #6C4079 100%);\r\n\r\n   position:fixed;\r\n   padding:0;\r\n   margin:0;\r\n   top:0;\r\n   left:0;\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n\r\n.contentBody[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O2dFQUU0RDtNQU0xRCxtRUFBbUU7O0dBRXRFLGNBQWM7R0FDZCxTQUFTO0dBQ1QsUUFBUTtHQUNSLEtBQUs7R0FDTCxNQUFNO0dBQ04sV0FBVztHQUNYLFlBQVk7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50Qm9keSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZmY1ZjZkOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzIFxyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjVmNmQsICNmZmMzNzEpOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiBcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY1ZjZkLCAjZmZjMzcxKTsgKi9cclxuICBcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCByaWdodCB0b3AsIGZyb20oI0ZDMkM3NyksIHRvKCM2QzQwNzkpKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tIGxlZnQsICNGQzJDNzcgMCUsICM2QzQwNzkgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGJvdHRvbSBsZWZ0LCAjRkMyQzc3IDAlLCAjNkM0MDc5IDEwMCUpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoYm90dG9tIGxlZnQsICNGQzJDNzcgMCUsICM2QzQwNzkgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICNGQzJDNzcgMCUsICM2QzQwNzkgMTAwJSk7XHJcblxyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgcGFkZGluZzowO1xyXG4gICBtYXJnaW46MDtcclxuICAgdG9wOjA7XHJcbiAgIGxlZnQ6MDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnRCb2R5IGRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-form/user-form.component */ 3081);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 6825);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/auth.guard */ 5826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_2__.UserFormComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__.UserListComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../model/login */ 3249);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authservice.service */ 3958);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function LoginComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, http, Auth, router) {
        this.fb = fb;
        this.http = http;
        this.Auth = Auth;
        this.router = router;
        this.user = new _model_login__WEBPACK_IMPORTED_MODULE_0__.Login();
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    get username() {
        return this.loginForm.get('name');
    }
    get password() {
        return this.loginForm.get('email');
    }
    onSubmit() {
        console.log('submit');
    }
    login(username, password) {
        this.Auth.postLogin({ username, password }).subscribe(data => {
            this.Auth.Authdata = data;
            localStorage.setItem('jwt', data.token);
            this.router.navigate(['/userlist']);
        }, (err) => { console.log('error', err); });
        console.log(username);
        console.log(password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authservice_service__WEBPACK_IMPORTED_MODULE_1__.AuthserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 30, vars: 3, consts: [[1, "container", "p-5", "my-container-class", "position-absolute", "top-50", "start-50", "translate-middle", 2, "width", "40rem"], [3, "formGroup"], [1, "row"], [1, "col-8"], [1, "fw-bold"], [1, "col-4"], ["type", "button", "routerLink", "/", 1, "btn", "btn-secondary", "position-absolute", "top-2", "end-0", "mx-5"], [1, "col-12"], ["for", "username", 1, "form-label"], ["type", "text", "id", "username", "name", "name", "formControlName", "username", 1, "form-control"], ["username", ""], ["class", "error", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", 1, "form-control"], ["password", ""], [1, "col-2"], ["type", "button", 1, "btn", "btn-secondary", "position-absolute", "start-50", "translate-middle-x", 3, "click"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Accessing the user list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "div", 7)(13, "p")(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LoginComponent_span_18_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "p")(21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, LoginComponent_span_25_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2)(27, "div", 15)(28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.login(_r0.value, _r2.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.username.touched || ctx.loginForm.controls.username.dirty) && !ctx.loginForm.controls.username.valid && ((tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.loginForm.controls.password.touched || ctx.loginForm.controls.password.dirty) && !ctx.loginForm.controls.password.valid && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.hasError("required")));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3081:
/*!*************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormComponent": () => (/* binding */ UserFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);






function UserFormComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email should be valid! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Photo is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Date is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](position_r15);
} }
function UserFormComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Position is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " University is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Graduation is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous Job is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Previous Position is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Experience is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Technical Skills is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserFormComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " About field is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserFormComponent {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.nameRef = 'user-form';
        this.Position = ['Back-end Developer', 'Font-end Developer', 'Software Intern'];
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(this.emailPattern)]],
            photo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            startDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            positionName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            department: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            university: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            graduation: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            previousJob: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            previousPosition: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            totalExperience: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            technicalSkills: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(20)]],
            about: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(150)]]
        });
    }
    get name() {
        return this.userForm.get('name');
    }
    get email() {
        return this.userForm.get('email');
    }
    get photo() {
        return this.userForm.get('photo');
    }
    get startDate() {
        return this.userForm.get('startDate');
    }
    get positionName() {
        return this.userForm.get('positionName');
    }
    get department() {
        return this.userForm.get('department');
    }
    get university() {
        return this.userForm.get('university');
    }
    get graduation() {
        return this.userForm.get('graduation');
    }
    get previousJob() {
        return this.userForm.get('previousJob');
    }
    get previousPosition() {
        return this.userForm.get('previousPosition');
    }
    get totalExperience() {
        return this.userForm.get('totalExperience');
    }
    get technicalSkills() {
        return this.userForm.get('technicalSkills');
    }
    get about() {
        return this.userForm.get('about');
    }
    changePosition(e) {
        this.positionName?.setValue(e.target.value, {
            onlySelf: true,
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        console.log(file);
        this.userForm.patchValue({
            photo: file
        });
        console.log(this.userForm);
    }
    onSubmit() {
        var formData = new FormData();
        formData.append('fullname', this.userForm.get('name')?.value);
        formData.append('email', this.userForm.get('email')?.value);
        formData.append('file', this.userForm.get('photo')?.value);
        formData.append('firstJobDay', this.userForm.get('startDate')?.value);
        formData.append('totalWorkTime', this.userForm.get('totalExperience')?.value);
        formData.append('university', this.userForm.get('university')?.value);
        formData.append('graduationTime', this.userForm.get('graduation')?.value);
        formData.append('workTitle', this.userForm.get('position')?.value);
        formData.append('previousWorkTitle', this.userForm.get('previousPosition')?.value);
        formData.append('previousJob', this.userForm.get('previousJob')?.value);
        formData.append('skills', this.userForm.get('technicalSkills')?.value);
        formData.append('description', this.userForm.get('about')?.value);
        formData.append('department', this.userForm.get('department')?.value);
        console.log(this.userForm.get('photo')?.value);
        console.log(this.userForm.get('name')?.value);
        // const headers= new HttpHeaders()
        // .set("x-access-token", localStorage.getItem("jwt"));
        this.http
            .post('http://localhost:4000/api/user', formData)
            .subscribe({
            next: (response) => console.log(response),
            error: (error) => console.log(error),
        });
        this.validateAllFormFields(this.userForm);
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            control?.markAsTouched({ onlySelf: true });
        });
    }
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["app-user-form"]], decls: 103, vars: 17, consts: [[1, "container", "mt-5", "mb-2", "p-5", "my-container-class"], [3, "formGroup"], [1, "row"], [1, "col-8"], [1, "col-4"], ["type", "button", "routerLink", "/login", 1, "btn", "btn-secondary"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "name", "name", "placeholder", "Name Surname", "formControlName", "name", 1, "form-control"], ["class", "error", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "name", "email", "placeholder", "name@example.com", "formControlName", "email", 1, "form-control"], ["for", "photo", 1, "form-label"], ["type", "file", "id", "photo", "name", "photo", "formControlName", "photo", "value", "", 1, "form-control", 3, "change"], ["for", "startDate", 1, "form-label"], ["type", "date", "id", "startDate", "name", "startDate", "formControlName", "startDate", 1, "form-control"], ["for", "position", 1, "form-label"], ["formControlName", "positionName", 1, "form-control", 3, "change"], [3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "department", 1, "form-label"], ["type", "text", "id", "department", "name", "department", "placeholder", "NRD2208", "formControlName", "department", 1, "form-control"], ["for", "university", 1, "form-label"], ["type", "text", "id", "university", "name", "university", "placeholder", "Middle East Technical University", "formControlName", "university", 1, "form-control"], ["for", "graduation", 1, "form-label"], ["type", "date", "id", "graduation", "name", "graduation", "formControlName", "graduation", 1, "form-control"], ["for", "previousJob", 1, "form-label"], ["type", "text", "id", "previousJob", "name", "previousJob", "placeholder", "Corporate Consulting", "formControlName", "previousJob", 1, "form-control"], ["for", "previousPosition", 1, "form-label"], ["type", "text", "id", "previousPosition", "name", "previousPosition", "placeholder", "Front-end Developer", "formControlName", "previousPosition", 1, "form-control"], ["for", "totalExperience", 1, "form-label"], ["type", "text", "id", "totalExperience", "name", "totalExperience", "placeholder", "5", "formControlName", "totalExperience", 1, "form-control"], [1, "col"], ["for", "technicalSkills", 1, "form-label"], ["type", "text", "id", "technicalSkills", "name", "technicalSkills", "placeholder", "PHP, JavaScript..", "formControlName", "technicalSkills", 1, "form-control"], ["for", "about", 1, "form-label"], ["id", "about", "name", "about", "formControlName", "about", 1, "form-control"], [1, "col-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "error"], [3, "value"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TELL US ABOUT YOURSELF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2)(12, "div", 4)(13, "p")(14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserFormComponent_span_17_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "p")(20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserFormComponent_span_23_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserFormComponent_span_24_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4)(26, "p")(27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserFormComponent_Template_input_change_29_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserFormComponent_span_30_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2)(32, "div", 4)(33, "p")(34, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Orion Start Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserFormComponent_span_37_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4)(39, "p")(40, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserFormComponent_Template_select_change_42_listener($event) { return ctx.changePosition($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserFormComponent_option_45_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserFormComponent_span_46_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4)(48, "p")(49, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Department ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UserFormComponent_span_52_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2)(54, "div", 3)(55, "p")(56, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "University ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, UserFormComponent_span_59_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4)(61, "p")(62, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Graduation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, UserFormComponent_span_65_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2)(67, "div", 4)(68, "p")(69, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Previous Job ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, UserFormComponent_span_72_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 4)(74, "p")(75, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Previous Position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, UserFormComponent_span_78_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4)(80, "p")(81, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Total Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, UserFormComponent_span_84_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2)(86, "div", 31)(87, "p")(88, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Technical Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "textarea", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, UserFormComponent_span_91_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2)(93, "div", 31)(94, "p")(95, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "textarea", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, UserFormComponent_span_98_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 2)(100, "div", 36)(101, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserFormComponent_Template_button_click_101_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.name.touched || ctx.userForm.controls.name.dirty) && !ctx.userForm.controls.name.valid && ((tmp_1_0 = ctx.userForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && (ctx.name.errors == null ? null : ctx.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.email.touched || ctx.userForm.controls.email.dirty) && !ctx.userForm.controls.email.valid && ((tmp_2_0 = ctx.userForm.get("email")) == null ? null : tmp_2_0.hasError("required")) && (ctx.email.errors == null ? null : ctx.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.email.touched || ctx.userForm.controls.email.dirty) && !ctx.userForm.controls.email.valid && ((tmp_3_0 = ctx.userForm.get("email")) == null ? null : tmp_3_0.hasError("pattern")) && (ctx.email.errors == null ? null : ctx.email.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.photo.touched || ctx.userForm.controls.photo.dirty) && ctx.userForm.controls.photo.touched && !ctx.userForm.controls.photo.valid && ((tmp_4_0 = ctx.userForm.get("photo")) == null ? null : tmp_4_0.hasError("required")) && (ctx.photo.errors == null ? null : ctx.photo.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.startDate.touched || ctx.userForm.controls.startDate.dirty) && ctx.userForm.controls.startDate.touched && ((tmp_5_0 = ctx.userForm.get("startDate")) == null ? null : tmp_5_0.hasError("required")) && (ctx.startDate.errors == null ? null : ctx.startDate.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.positionName.touched || ctx.userForm.controls.positionName.dirty) && !ctx.userForm.controls.positionName.valid && ((tmp_8_0 = ctx.userForm.get("positionName")) == null ? null : tmp_8_0.hasError("required")) && (ctx.positionName.errors == null ? null : ctx.positionName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.department.touched || ctx.userForm.controls.department.dirty) && !ctx.userForm.controls.departmentlid && ((tmp_9_0 = ctx.userForm.get("department")) == null ? null : tmp_9_0.hasError("required")) && (ctx.department.errors == null ? null : ctx.department.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.university.touched || ctx.userForm.controls.university.dirty) && !ctx.userForm.controls.university.valid && ((tmp_10_0 = ctx.userForm.get("university")) == null ? null : tmp_10_0.hasError("required")) && (ctx.university.errors == null ? null : ctx.university.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.graduation.touched || ctx.userForm.controls.graduation.dirty) && !ctx.userForm.controls.graduation.valid && ((tmp_11_0 = ctx.userForm.get("graduation")) == null ? null : tmp_11_0.hasError("required")) && (ctx.graduation.errors == null ? null : ctx.graduation.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.previousJob.touched || ctx.userForm.controls.previousJob.dirty) && !ctx.userForm.controls.previousJob.valid && ((tmp_12_0 = ctx.userForm.get("previousJob")) == null ? null : tmp_12_0.hasError("required")) && (ctx.previousJob.errors == null ? null : ctx.previousJob.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.previousPosition.touched || ctx.userForm.controls.previousPosition.dirty) && !ctx.userForm.controls.previousPosition.valid && ((tmp_13_0 = ctx.userForm.get("previousPosition")) == null ? null : tmp_13_0.hasError("required")) && (ctx.previousPosition.errors == null ? null : ctx.previousPosition.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.totalExperience.touched || ctx.userForm.controls.totalExperience.dirty) && !ctx.userForm.controls.totalExperience.valid && ((tmp_14_0 = ctx.userForm.get("totalExperience")) == null ? null : tmp_14_0.hasError("required")) && (ctx.totalExperience.errors == null ? null : ctx.totalExperience.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.technicalSkills.touched || ctx.userForm.controls.technicalSkills.dirty) && !ctx.userForm.controls.technicalSkills.valid && ((tmp_15_0 = ctx.userForm.get("technicalSkills")) == null ? null : tmp_15_0.hasError("required")) && (ctx.technicalSkills.errors == null ? null : ctx.technicalSkills.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userForm.controls.about.touched || ctx.userForm.controls.about.dirty) && !ctx.userForm.controls.about.valid && ((tmp_16_0 = ctx.userForm.get("about")) == null ? null : tmp_16_0.hasError("required")) && (ctx.about.errors == null ? null : ctx.about.errors.required));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */", ".error[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: rgb(249, 144, 144);\r\n  border: 2px solid rgb(249, 144, 144);\r\n  border-radius: 3px;\r\n}\r\n*[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 400;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  position: static !important;\r\n  width: 100%;\r\n  padding: 8px 20px;\r\n  border-radius: 6px;\r\n  text-align: left;\r\n  background-color: #F7F7F7;\r\n  border: 0;\r\n  font-size: 15px;\r\n  font-weight: 300;\r\n  color: #4d4c4c;\r\n  outline: none;\r\n  resize: none;\r\n  height: 120px;\r\n  transition: none;\r\n}\r\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\npadding: 9px 20px;\r\ntext-align: left;\r\nborder: 0;\r\noutline: 0;\r\nborder-radius: 6px;\r\nbackground-color: #F7F7F7; \r\nfont-size: 15px;\r\nfont-weight: 300;\r\ncolor: #4d4c4c;\r\ntransition: all 0.3s ease;\r\nmargin-top: 6px;\r\n}\r\ninput[type=file][_ngcontent-%COMP%] {\r\nwidth: 100%;\r\ntext-align: left;\r\nborder: 0;\r\noutline: 0;\r\nborder-radius: 6px;\r\nbackground-color: #F7F7F7;\r\nfont-size: 15px;\r\nfont-weight: 300;\r\ncolor: #4d4c4c;\r\ntransition: all 0.3s ease;\r\nmargin-top: 6px;\r\n}\r\n.my-container-class[_ngcontent-%COMP%] {\r\n  background: white;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] { height: 100%; }\r\nbody[_ngcontent-%COMP%] { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBRWIsZ0JBQWdCO0FBQ2xCO0FBRUE7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixjQUFjO0FBRWQseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZjtBQUVBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixjQUFjO0FBRWQseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0EsYUFBYSxZQUFZLEVBQUU7QUFDM0IsT0FBTyxTQUFTLEVBQUUsaURBQWlELEVBQUUiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLmVycm9yIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMTQ0LCAxNDQpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDksIDE0NCwgMTQ0KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiosIGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICM0ZDRjNGM7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogOXB4IDIwcHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmJvcmRlcjogMDtcclxub3V0bGluZTogMDtcclxuYm9yZGVyLXJhZGl1czogNnB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3OyBcclxuZm9udC1zaXplOiAxNXB4O1xyXG5mb250LXdlaWdodDogMzAwO1xyXG5jb2xvcjogIzRkNGM0YztcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5tYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV0ge1xyXG53aWR0aDogMTAwJTtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuYm9yZGVyOiAwO1xyXG5vdXRsaW5lOiAwO1xyXG5ib3JkZXItcmFkaXVzOiA2cHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuZm9udC13ZWlnaHQ6IDMwMDtcclxuY29sb3I6ICM0ZDRjNGM7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxubWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ubXktY29udGFpbmVyLWNsYXNzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG4iXX0= */"] });


/***/ }),

/***/ 6825:
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class UserListComponent {
    constructor() {
        this.displayedColumns = ['fullname', 'orionStartDay', 'department', 'position', 'university'];
    }
    ngOnInit() {
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 2, vars: 0, template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5826:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/authservice.service */ 3958);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
    constructor(Auth, router) {
        this.Auth = Auth;
        this.router = router;
    }
    ;
    canActivate(route, state) {
        console.log('token', this.Auth.Authdata.token);
        console.log('data', this.Auth.Authdata);
        if (localStorage.getItem('jwt')) {
            return true;
        }
        else {
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authservice_service__WEBPACK_IMPORTED_MODULE_0__.AuthserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3249:
/*!********************************!*\
  !*** ./src/app/model/login.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": () => (/* binding */ Login)
/* harmony export */ });
class Login {
    constructor() {
        this.username = '';
        this.password = '';
    }
}


/***/ }),

/***/ 3958:
/*!*************************************************!*\
  !*** ./src/app/services/authservice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthserviceService": () => (/* binding */ AuthserviceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8504);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class AuthserviceService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'https://mern-generic-crud-angularr.herokuapp.com';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Content-Type', 'application/json');
        this.currentUser = {};
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    postLogin(data) {
        return this.http
            .post(this.apiURL + '/api/account/login', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => {
            return errorMessage;
        });
    }
}
AuthserviceService.ɵfac = function AuthserviceService_Factory(t) { return new (t || AuthserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
AuthserviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthserviceService, factory: AuthserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map