var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"container p-0\">\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"profile\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-0\">{{data.firstName}}\n          <span class=\"text-primary\">{{data.lastName}}</span>\n        </h2>\n        <div class=\"subheading mb-5\">\n          <span *ngIf=\"data.phone\"><a href=\"tel:{{data.phone}}\"\n              class=\"glyphicon glyphicon-phone\">{{data.phone}}</a></span>\n          <span *ngIf=\"data.email\"><a class=\"fab fa-email\" href=\"mailto:{{data.email}}\">{{data.email}}</a> </span>\n        </div>\n        <p class=\"lead mb-5\">{{data.aboutMe}}</p>\n        <div class=\"social-icons\">\n          <a *ngFor=\"let socialProfile of data.socialProfiles\" gtagEvent trackOn=\"click\" action=\"{{socialProfile.name}}\" category=\"external-links\" href=\"{{socialProfile.link}}\" target=\"_blank\"\n            [ngbTooltip]=\"socialProfile.name\">\n            <i class=\"{{socialProfile.class | lowercase}}\"></i>\n          </a>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n<div [@routeAnimations]=\"prepareRoute(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"contact\">\n        <div class=\"w-100\">\n            <ng-container *ngIf=\"isSaved; else defaultContent\">\n                Thanks for contacting, I will get back to you as soon as possible.\n            </ng-container>\n            <ng-template #defaultContent>\n                <form novalidate class=\"example-container\" [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n                    <h2 class=\"mb-5\">Contact</h2>\n                    <mat-form-field class=\"w-100 mb-2\">\n                        <input matInput placeholder=\"Name\" formControlName=\"name\">\n                        <mat-error *ngIf=\"contactForm.get('name')?.invalid\">You must enter a value</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"w-100 mb-2\">\n                        <input matInput placeholder=\"Email\" formControlName=\"email\">\n                        <mat-error *ngIf=\"contactForm.get('email')?.invalid\">{{getEmailErrorMessage()}}</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"w-100 mb-2\">\n                        <textarea matInput placeholder=\"Message\" formControlName=\"message\"></textarea>\n                    </mat-form-field>\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contactForm.invalid || isSaving\">\n                        <ng-container *ngIf=\"isSaving; else defaultText\">\n                            <div class=\"spinner-border\" role=\"status\">\n                                <span class=\"sr-only\">Loading...</span>\n                            </div>\n                        </ng-container>\n                        <ng-template #defaultText>Submit</ng-template>\n                    </button>\n                    <mat-error *ngIf=\"submitErrorMessage\">{{submitErrorMessage}}</mat-error>\n                </form>\n            </ng-template>\n        </div>\n    </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"container p-0\">\n    <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"education\">\n      <div class=\"w-100\">\n        <h2 class=\"mb-5\">Education</h2>\n        <div *ngFor=\"let education of data.list\"\n          class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n          <div class=\"resume-content\">\n            <h3 class=\"mb-0\"><a target=\"_blank\" href=\"{{education?.website}}\">{{education.college}}</a></h3>\n            <div class=\"subheading mb-3\">{{education.course}}</div>\n            <!-- <div>Computer Science - Web Development Track</div> -->\n            <!-- <p>GPA: 3.23</p> -->\n          </div>\n          <div class=\"resume-date text-md-right\">\n            <span class=\"text-primary\">{{education.start}} - {{education.end}}</span>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\n  <section class=\"resume-section p-3 p-lg-5 d-flex justify-content-center\" id=\"experience\">\n    <div class=\"w-100\">\n      <h2 class=\"mb-5\">Experience</h2>\n      <div *ngFor=\"let experience of data.list\"\n        class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n        <div class=\"container\">\n          <h3 class=\"mb-0\">{{experience.title}}</h3>\n          <div class=\"d-flex flex-column bd-highlight mb-3\">\n            <div class=\"bd-highlight subheading\">{{experience.company}}</div>\n            <div class=\"bd-highlight text-primary\">{{experience.start}} - {{experience.end}}</div>\n          </div>\n          <ul>\n            <li *ngFor=\"let detail of experience.details\" [innerHTML]=\"detail\"></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top custom-navbar\"\n    (click)=\"handleCollapse($event, !isMenuCollapsed)\">\n    <a class=\"navbar-brand\" [routerLink]=\"'.'\">\n        <span class=\"d-none d-lg-block\">\n            <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"{{data.profilePic}}\" alt=\"\">\n        </span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" *ngFor=\"let navItem of data.navItems\">\n                <a class=\"nav-link\" routerLink=\"{{navItem | lowercase}}\" routerLinkActive=\"active\"\n                    (click)=\"handleCollapse($event, true)\">{{navItem}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\n  <section class=\"resume-section p-3 p-lg-5 d-flex justify-content-center\" id=\"projects\">\n    <div class=\"w-100\">\n      <h2 class=\"mb-5\">Projects</h2>\n      <div *ngFor=\"let project of data.list\"\n        class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\n        <div class=\"resume-content\">\n          <h3 class=\"mb-2\">{{project.title}}</h3>\n          <p class=\"mb-0\" [innerHTML]=\"project.description\"></p>\n          <app-tech-list [techList]=\"project?.techList\"></app-tech-list>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pdf-container\">\n    <object [data]=\"getResumeURL()\" type=\"application/pdf\" width=\"100%\" height=\"100%\">\n        <div class=\"container p-0\">\n            <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"profile\">\n                <div class=\"w-100\">\n                    <p class=\"lead\">Oops! the web browser doesn't have a PDF support.</p>\n                    <p class=\"lead\">Please <a [href]=\"getResumeURL()\" gtagEvent trackOn=\"click\" action=\"resume\" category=\"download\"\n                            target=\"_blank\">click here to download the resume.</a>\n                    </p>\n                </div>\n            </section>\n        </div>\n    </object>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\n  <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"skills\">\n    <div class=\"w-100\">\n      <h2 class=\"mb-5\">Skills</h2>\n      <div *ngFor=\"let skillSet of data.list\" class=\"subheading mb-3\">{{skillSet.title}}\n        <app-tech-list [techList]=\"skillSet.techList\"></app-tech-list>\n      </div>\n    </div>\n  </section>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tech-list/tech-list.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tech-list/tech-list.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"techList\" class=\"list-inline tech-icons\">\n    <li *ngFor=\"let item of techList | techConfig\" class=\"list-inline-item\">\n        <i *ngIf=\"item.class\" class=\"{{item.class | lowercase}}\" [ngbTooltip]=\"item.title\" triggers=\"manual\" #t=\"ngbTooltip\" autoClose=\"outside\" (mouseenter)=\"showToolTip(t)\" (click)=\"showToolTip(t)\"></i>\n    </li>\n</ul>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/about/about.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".social-icons a {\n  display: inline-block;\n  height: 3.5rem;\n  width: 3.5rem;\n  background-color: #495057;\n  color: #fff !important;\n  border-radius: 100%;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 3.5rem;\n  margin-right: 1.5rem;\n}\n.social-icons a:last-child {\n  margin-right: 0;\n}\n.social-icons a:hover {\n  background-color: #BD5D38;\n}\np .lead {\n  font-size: 1.15rem;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL3BvcnRmb2xpby9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0FKO0FERUk7RUFDRSxlQUFBO0FDQU47QURHSTtFQUNFLHlCQUFBO0FDRE47QURPRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbC1pY29ucyB7XG4gIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICB3aWR0aDogMy41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDVEMzg7XG4gICAgfVxuICB9XG59XG5cbnAge1xuICAubGVhZCB7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn0iLCIuc29jaWFsLWljb25zIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMy41cmVtO1xuICB3aWR0aDogMy41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMy41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5zb2NpYWwtaWNvbnMgYTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JENUQzODtcbn1cblxucCAubGVhZCB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["about"];
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/animations.ts": 
        /*!*******************************!*\
          !*** ./src/app/animations.ts ***!
          \*******************************/
        /*! exports provided: routeAnimations */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function () { return routeAnimations; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var routeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('*<=>*', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0.2,
                        transform: 'translateY(-100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')
                ])
            ]);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent.prototype.prepareRoute = function (outlet) {
                    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    animations: [
                        _animations__WEBPACK_IMPORTED_MODULE_2__["routeAnimations"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var angular_gtag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gtag */ "./node_modules/angular-gtag/esm2015/angular-gtag.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
            /* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
            /* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
            /* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
            /* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _tech_list_tech_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tech-list/tech-list.component */ "./src/app/tech-list/tech-list.component.ts");
            /* harmony import */ var _tech_config_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tech-config.pipe */ "./src/app/tech-config.pipe.ts");
            /* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule(gtag) {
                }
                return AppModule;
            }());
            AppModule.ctorParameters = function () { return [
                { type: angular_gtag__WEBPACK_IMPORTED_MODULE_6__["Gtag"] }
            ]; };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                        _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
                        _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"],
                        _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
                        _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                        _tech_list_tech_list_component__WEBPACK_IMPORTED_MODULE_17__["TechListComponent"],
                        _tech_config_pipe__WEBPACK_IMPORTED_MODULE_18__["TechConfigPipe"],
                        _resume_resume_component__WEBPACK_IMPORTED_MODULE_19__["ResumeComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                        angular_gtag__WEBPACK_IMPORTED_MODULE_6__["GtagModule"].forRoot({ trackingId: 'UA-154148293-1', trackPageviews: true }),
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                            {
                                path: '',
                                redirectTo: '/about',
                                pathMatch: 'full'
                            },
                            {
                                path: 'about',
                                component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                                data: { animation: 'HomePage' }
                            },
                            {
                                path: 'experience',
                                component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
                                data: { animation: 'ExperiencePage' }
                            },
                            {
                                path: 'education',
                                component: _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"],
                                data: { animation: 'EducationePage' }
                            },
                            {
                                path: 'skills',
                                component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_14__["SkillsComponent"],
                                data: { animation: 'SkillsPage' }
                            },
                            {
                                path: 'projects',
                                component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                                data: { animation: 'ProjectsPage' }
                            },
                            {
                                path: 'resume',
                                component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_19__["ResumeComponent"],
                                data: { animation: 'ResumesPage' }
                            },
                            {
                                path: 'contact',
                                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                                data: { animation: 'ContactPage' }
                            },
                            {
                                path: '**',
                                redirectTo: '/about',
                                pathMatch: 'full',
                                data: { animation: 'HomePage' }
                            }
                        ])
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/contact/contact.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent(formBuilder, http) {
                    this.http = http;
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_3__["contact"];
                    this.disabledSubmitButton = true;
                    this.isSaved = false;
                    this.isSaving = false;
                    this.submitErrorMessage = '';
                    this.contactForm = formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
                        message: ['']
                    });
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                ContactComponent.prototype.getEmailErrorMessage = function () {
                    var emailField = this.contactForm.get('email');
                    return emailField.hasError('required') ? 'You must enter a value' :
                        emailField.hasError('email') ? 'Not a valid email' :
                            '';
                    ;
                };
                ContactComponent.prototype.handleError = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(this.submitErrorMessage);
                };
                ContactComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.isSaving = true;
                    this.http.post(this.data.action + this.data.formId, this.contactForm.value)
                        .subscribe(function (data) {
                        _this.isSaved = true;
                    }, function (error) {
                        _this.submitErrorMessage = "Something bad happened; please try again later.";
                        _this.isSaving = false;
                    });
                };
                return ContactComponent;
            }());
            ContactComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/education/education.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/education/education.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/education/education.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/education/education.component.ts ***!
          \**************************************************/
        /*! exports provided: EducationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function () { return EducationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var EducationComponent = /** @class */ (function () {
                function EducationComponent() {
                }
                EducationComponent.prototype.ngOnInit = function () {
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["education"];
                };
                return EducationComponent;
            }());
            EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-education',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")).default]
                })
            ], EducationComponent);
            /***/ 
        }),
        /***/ "./src/app/experience/experience.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/experience/experience.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/experience/experience.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/experience/experience.component.ts ***!
          \****************************************************/
        /*! exports provided: ExperienceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () { return ExperienceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var ExperienceComponent = /** @class */ (function () {
                function ExperienceComponent() {
                }
                ExperienceComponent.prototype.ngOnInit = function () {
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["experience"];
                };
                return ExperienceComponent;
            }());
            ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-experience',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.scss */ "./src/app/experience/experience.component.scss")).default]
                })
            ], ExperienceComponent);
            /***/ 
        }),
        /***/ "./src/app/nav-bar/nav-bar.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/nav-bar/nav-bar.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".custom-navbar .navbar-nav .nav-item .nav-link {\n  font-weight: 800;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n}\n.custom-navbar .navbar-toggler:focus {\n  outline-color: #d48a6e;\n}\n@media (min-width: 992px) {\n  .custom-navbar {\n    text-align: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    width: 17rem;\n    height: 100vh;\n  }\n  .custom-navbar .navbar-brand {\n    display: flex;\n    margin: auto auto 0;\n    padding: 0.5rem;\n  }\n  .custom-navbar .navbar-brand .img-profile {\n    max-width: 10rem;\n    max-height: 10rem;\n    border: 0.5rem solid rgba(255, 255, 255, 0.2);\n  }\n  .custom-navbar .navbar-collapse {\n    display: flex;\n    align-items: flex-start;\n    flex-grow: 0;\n    width: 100%;\n    margin-bottom: auto;\n  }\n  .custom-navbar .navbar-collapse .navbar-nav {\n    flex-direction: column;\n    width: 100%;\n  }\n  .custom-navbar .navbar-collapse .navbar-nav .nav-item {\n    display: block;\n  }\n  .custom-navbar .navbar-collapse .navbar-nav .nav-item .nav-link {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL3BvcnRmb2xpby9zcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDRE47QURLRTtFQUNFLHNCQUFBO0FDSEo7QURNRTtFQWJGO0lBY0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ0hGO0VES0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VDSEo7RURLSTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSw2Q0FBQTtFQ0hOO0VET0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDTEo7RURPSTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtFQ0xOO0VET007SUFDRSxjQUFBO0VDTFI7RURPUTtJQUNFLGNBQUE7RUNMVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1uYXZiYXIge1xuICAubmF2YmFyLW5hdiB7XG4gICAgLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gICAgb3V0bGluZS1jb2xvcjogI2Q0OGE2ZTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxN3JlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gMDtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgICAgLmltZy1wcm9maWxlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgICAgICAgbWF4LWhlaWdodDogMTByZW07XG4gICAgICAgIGJvcmRlcjogMC41cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcblxuICAgICAgLm5hdmJhci1uYXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAubmF2LWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi5jdXN0b20tbmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jdXN0b20tbmF2YmFyIC5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICNkNDhhNmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmN1c3RvbS1uYXZiYXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxN3JlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5jdXN0b20tbmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gMDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1icmFuZCAuaW1nLXByb2ZpbGUge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gICAgbWF4LWhlaWdodDogMTByZW07XG4gICAgYm9yZGVyOiAwLjVyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG4gIC5jdXN0b20tbmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIH1cbiAgLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3VzdG9tLW5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmN1c3RvbS1uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/nav-bar/nav-bar.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/nav-bar/nav-bar.component.ts ***!
          \**********************************************/
        /*! exports provided: NavBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () { return NavBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var NavBarComponent = /** @class */ (function () {
                function NavBarComponent(elementRef) {
                    this.elementRef = elementRef;
                    this.isMenuCollapsed = true;
                }
                NavBarComponent.prototype.ngOnInit = function () {
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["navBarConfig"];
                };
                NavBarComponent.prototype.handleCollapse = function (event, isMenuCollapsed) {
                    this.isMenuCollapsed = isMenuCollapsed;
                    event.stopPropagation();
                };
                NavBarComponent.prototype.clickout = function (event) {
                    if (!this.elementRef.nativeElement.contains(event.target)) {
                        this.isMenuCollapsed = true;
                    }
                };
                NavBarComponent.prototype.onScroll = function (event) {
                    this.isMenuCollapsed = true;
                };
                return NavBarComponent;
            }());
            NavBarComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
            ], NavBarComponent.prototype, "clickout", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
            ], NavBarComponent.prototype, "onScroll", null);
            NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")).default]
                })
            ], NavBarComponent);
            /***/ 
        }),
        /***/ "./src/app/projects/projects.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/projects/projects.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/projects/projects.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/projects/projects.component.ts ***!
          \************************************************/
        /*! exports provided: ProjectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () { return ProjectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var ProjectsComponent = /** @class */ (function () {
                function ProjectsComponent() {
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["projects"];
                };
                return ProjectsComponent;
            }());
            ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-projects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
                })
            ], ProjectsComponent);
            /***/ 
        }),
        /***/ "./src/app/resume/resume.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/resume/resume.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".pdf-container {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL3BvcnRmb2xpby9zcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBkZi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG59IiwiLnBkZi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/resume/resume.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/resume/resume.component.ts ***!
          \********************************************/
        /*! exports provided: ResumeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () { return ResumeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var ResumeComponent = /** @class */ (function () {
                function ResumeComponent(domSanitizer) {
                    this.domSanitizer = domSanitizer;
                }
                ResumeComponent.prototype.ngOnInit = function () {
                    this.resumeFile = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_3__["resumeFile"];
                };
                ResumeComponent.prototype.getResumeURL = function () {
                    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.resumeFile);
                };
                return ResumeComponent;
            }());
            ResumeComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-resume',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/resume/resume.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")).default]
                })
            ], ResumeComponent);
            /***/ 
        }),
        /***/ "./src/app/skills/skills.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/skills/skills.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/skills/skills.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/skills/skills.component.ts ***!
          \********************************************/
        /*! exports provided: SkillsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () { return SkillsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var SkillsComponent = /** @class */ (function () {
                function SkillsComponent() {
                }
                SkillsComponent.prototype.ngOnInit = function () {
                    this.data = _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["skills"];
                };
                return SkillsComponent;
            }());
            SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-skills',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/skills/skills.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")).default]
                })
            ], SkillsComponent);
            /***/ 
        }),
        /***/ "./src/app/tech-config.pipe.ts": 
        /*!*************************************!*\
          !*** ./src/app/tech-config.pipe.ts ***!
          \*************************************/
        /*! exports provided: TechConfigPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechConfigPipe", function () { return TechConfigPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/json/config.json */ "./src/assets/json/config.json");
            var _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/ __webpack_require__.t(/*! ../assets/json/config.json */ "./src/assets/json/config.json", 1);
            var TechConfigPipe = /** @class */ (function () {
                function TechConfigPipe() {
                }
                TechConfigPipe.prototype.transform = function (techList) {
                    var e_1, _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var transformedList = [];
                    try {
                        for (var techList_1 = __values(techList), techList_1_1 = techList_1.next(); !techList_1_1.done; techList_1_1 = techList_1.next()) {
                            var tech = techList_1_1.value;
                            transformedList.push(_assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["technologyMap"][tech] ? _assets_json_config_json__WEBPACK_IMPORTED_MODULE_2__["technologyMap"][tech] : { title: tech, class: tech });
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (techList_1_1 && !techList_1_1.done && (_a = techList_1.return)) _a.call(techList_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return transformedList;
                };
                return TechConfigPipe;
            }());
            TechConfigPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'techConfig'
                })
            ], TechConfigPipe);
            /***/ 
        }),
        /***/ "./src/app/tech-list/tech-list.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/tech-list/tech-list.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".tech-icons {\n  font-size: 3rem;\n}\n.tech-icons .list-inline-item i:hover {\n  color: #BD5D38;\n}\n.tech-icons .custom-spring {\n  width: 45px;\n  height: 45px;\n  margin-bottom: -6px;\n  background-size: cover;\n  /*\n  *  Added hover image here as well, so that it will be loaded on page load.\n  *  It will prevent image load on hover, resulting no lagging in hover case.\n  */\n  background-image: url(\"/assets/icon/spring-hover.svg\");\n  background-image: url(\"/assets/icon/spring.svg\");\n}\n.tech-icons .custom-spring.clicked, .tech-icons .custom-spring:hover {\n  background-image: url(\"/assets/icon/spring-hover.svg\");\n}\n.tech-icons .custom-jquery {\n  width: 45px;\n  height: 45px;\n  margin-bottom: -6px;\n  background-size: cover;\n  /*\n  *  Added hover image here as well, so that it will be loaded on page load.\n  *  It will prevent image load on hover, resulting no lagging in hover case.\n  */\n  background-image: url(\"/assets/icon/jquery-hover.svg\");\n  background-image: url(\"/assets/icon/jquery.svg\");\n}\n.tech-icons .custom-jquery.clicked, .tech-icons .custom-jquery:hover {\n  background-image: url(\"/assets/icon/jquery-hover.svg\");\n}\n.tech-icons .custom-selenium {\n  width: 45px;\n  height: 45px;\n  margin-bottom: -6px;\n  background-size: cover;\n  /*\n  *  Added hover image here as well, so that it will be loaded on page load.\n  *  It will prevent image load on hover, resulting no lagging in hover case.\n  */\n  background-image: url(\"/assets/icon/selenium-hover.svg\");\n  background-image: url(\"/assets/icon/selenium.svg\");\n}\n.tech-icons .custom-selenium.clicked, .tech-icons .custom-selenium:hover {\n  background-image: url(\"/assets/icon/selenium-hover.svg\");\n}\n.tech-icons .custom-solr {\n  width: 45px;\n  height: 45px;\n  margin-bottom: -6px;\n  background-size: cover;\n  /*\n  *  Added hover image here as well, so that it will be loaded on page load.\n  *  It will prevent image load on hover, resulting no lagging in hover case.\n  */\n  background-image: url(\"/assets/icon/solr-hover.svg\");\n  background-image: url(\"/assets/icon/solr.svg\");\n}\n.tech-icons .custom-solr.clicked, .tech-icons .custom-solr:hover {\n  background-image: url(\"/assets/icon/solr-hover.svg\");\n}\n.tech-icons .custom-dojo {\n  width: 45px;\n  height: 45px;\n  margin-bottom: -6px;\n  background-size: cover;\n  /*\n  *  Added hover image here as well, so that it will be loaded on page load.\n  *  It will prevent image load on hover, resulting no lagging in hover case.\n  */\n  background-image: url(\"/assets/icon/dojo-hover.svg\");\n  background-image: url(\"/assets/icon/dojo.svg\");\n}\n.tech-icons .custom-dojo.clicked, .tech-icons .custom-dojo:hover {\n  background-image: url(\"/assets/icon/dojo-hover.svg\");\n}\n.tech-icons .custom-mysql {\n  width: 45px;\n  height: 45px;\n  margin-bottom: -6px;\n  background-size: cover;\n  /*\n  *  Added hover image here as well, so that it will be loaded on page load.\n  *  It will prevent image load on hover, resulting no lagging in hover case.\n  */\n  background-image: url(\"/assets/icon/mysql-hover.svg\");\n  background-image: url(\"/assets/icon/mysql.svg\");\n}\n.tech-icons .custom-mysql.clicked, .tech-icons .custom-mysql:hover {\n  background-image: url(\"/assets/icon/mysql-hover.svg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL3BvcnRmb2xpby9zcmMvYXBwL3RlY2gtbGlzdC90ZWNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlY2gtbGlzdC90ZWNoLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FDREo7QURHSTtFQUNJLGNBQUE7QUNEUjtBRHVCUTtFQWxCQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQTs7O0dBQUE7RUFJQSxzREFBQTtFQUNBLGdEQUFBO0FDRlI7QURJUTtFQUVJLHNEQUFBO0FDSFo7QURRUTtFQWxCQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQTs7O0dBQUE7RUFJQSxzREFBQTtFQUNBLGdEQUFBO0FDYVI7QURYUTtFQUVJLHNEQUFBO0FDWVo7QURQUTtFQWxCQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQTs7O0dBQUE7RUFJQSx3REFBQTtFQUNBLGtEQUFBO0FDNEJSO0FEMUJRO0VBRUksd0RBQUE7QUMyQlo7QUR0QlE7RUFsQkEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0E7OztHQUFBO0VBSUEsb0RBQUE7RUFDQSw4Q0FBQTtBQzJDUjtBRHpDUTtFQUVJLG9EQUFBO0FDMENaO0FEckNRO0VBbEJBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBOzs7R0FBQTtFQUlBLG9EQUFBO0VBQ0EsOENBQUE7QUMwRFI7QUR4RFE7RUFFSSxvREFBQTtBQ3lEWjtBRHBEUTtFQWxCQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQTs7O0dBQUE7RUFJQSxxREFBQTtFQUNBLCtDQUFBO0FDeUVSO0FEdkVRO0VBRUkscURBQUE7QUN3RVoiLCJmaWxlIjoic3JjL2FwcC90ZWNoLWxpc3QvdGVjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRlY2gtbGlzdDogc3ByaW5nIGpxdWVyeSBzZWxlbml1bSBzb2xyIGRvam8gbXlzcWw7XG5cbi50ZWNoLWljb25zIHtcbiAgICBmb250LXNpemU6IDNyZW07XG5cbiAgICAubGlzdC1pbmxpbmUtaXRlbSBpOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNCRDVEMzg7XG4gICAgfVxuXG4gICAgQG1peGluIGljb24oJG5hbWUpIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLypcbiAgICAgICAgKiAgQWRkZWQgaG92ZXIgaW1hZ2UgaGVyZSBhcyB3ZWxsLCBzbyB0aGF0IGl0IHdpbGwgYmUgbG9hZGVkIG9uIHBhZ2UgbG9hZC5cbiAgICAgICAgKiAgSXQgd2lsbCBwcmV2ZW50IGltYWdlIGxvYWQgb24gaG92ZXIsIHJlc3VsdGluZyBubyBsYWdnaW5nIGluIGhvdmVyIGNhc2UuXG4gICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29uLycrICRuYW1lICsgJy1ob3Zlci5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb24vJysgJG5hbWUgKyAnLnN2ZycpO1xuXG4gICAgICAgICYuY2xpY2tlZCxcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbi8nKyAkbmFtZSArICctaG92ZXIuc3ZnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkY3VycmVudC10ZWNoIGluICR0ZWNoLWxpc3Qge1xuICAgICAgICAuY3VzdG9tLSN7JGN1cnJlbnQtdGVjaH0ge1xuICAgICAgICAgICAgQGluY2x1ZGUgaWNvbigkY3VycmVudC10ZWNoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIudGVjaC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi50ZWNoLWljb25zIC5saXN0LWlubGluZS1pdGVtIGk6aG92ZXIge1xuICBjb2xvcjogI0JENUQzODtcbn1cbi50ZWNoLWljb25zIC5jdXN0b20tc3ByaW5nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLypcbiAgKiAgQWRkZWQgaG92ZXIgaW1hZ2UgaGVyZSBhcyB3ZWxsLCBzbyB0aGF0IGl0IHdpbGwgYmUgbG9hZGVkIG9uIHBhZ2UgbG9hZC5cbiAgKiAgSXQgd2lsbCBwcmV2ZW50IGltYWdlIGxvYWQgb24gaG92ZXIsIHJlc3VsdGluZyBubyBsYWdnaW5nIGluIGhvdmVyIGNhc2UuXG4gICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9zcHJpbmctaG92ZXIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vc3ByaW5nLnN2Z1wiKTtcbn1cbi50ZWNoLWljb25zIC5jdXN0b20tc3ByaW5nLmNsaWNrZWQsIC50ZWNoLWljb25zIC5jdXN0b20tc3ByaW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL3NwcmluZy1ob3Zlci5zdmdcIik7XG59XG4udGVjaC1pY29ucyAuY3VzdG9tLWpxdWVyeSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qXG4gICogIEFkZGVkIGhvdmVyIGltYWdlIGhlcmUgYXMgd2VsbCwgc28gdGhhdCBpdCB3aWxsIGJlIGxvYWRlZCBvbiBwYWdlIGxvYWQuXG4gICogIEl0IHdpbGwgcHJldmVudCBpbWFnZSBsb2FkIG9uIGhvdmVyLCByZXN1bHRpbmcgbm8gbGFnZ2luZyBpbiBob3ZlciBjYXNlLlxuICAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vanF1ZXJ5LWhvdmVyLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL2pxdWVyeS5zdmdcIik7XG59XG4udGVjaC1pY29ucyAuY3VzdG9tLWpxdWVyeS5jbGlja2VkLCAudGVjaC1pY29ucyAuY3VzdG9tLWpxdWVyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9qcXVlcnktaG92ZXIuc3ZnXCIpO1xufVxuLnRlY2gtaWNvbnMgLmN1c3RvbS1zZWxlbml1bSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qXG4gICogIEFkZGVkIGhvdmVyIGltYWdlIGhlcmUgYXMgd2VsbCwgc28gdGhhdCBpdCB3aWxsIGJlIGxvYWRlZCBvbiBwYWdlIGxvYWQuXG4gICogIEl0IHdpbGwgcHJldmVudCBpbWFnZSBsb2FkIG9uIGhvdmVyLCByZXN1bHRpbmcgbm8gbGFnZ2luZyBpbiBob3ZlciBjYXNlLlxuICAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vc2VsZW5pdW0taG92ZXIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vc2VsZW5pdW0uc3ZnXCIpO1xufVxuLnRlY2gtaWNvbnMgLmN1c3RvbS1zZWxlbml1bS5jbGlja2VkLCAudGVjaC1pY29ucyAuY3VzdG9tLXNlbGVuaXVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL3NlbGVuaXVtLWhvdmVyLnN2Z1wiKTtcbn1cbi50ZWNoLWljb25zIC5jdXN0b20tc29sciB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qXG4gICogIEFkZGVkIGhvdmVyIGltYWdlIGhlcmUgYXMgd2VsbCwgc28gdGhhdCBpdCB3aWxsIGJlIGxvYWRlZCBvbiBwYWdlIGxvYWQuXG4gICogIEl0IHdpbGwgcHJldmVudCBpbWFnZSBsb2FkIG9uIGhvdmVyLCByZXN1bHRpbmcgbm8gbGFnZ2luZyBpbiBob3ZlciBjYXNlLlxuICAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vc29sci1ob3Zlci5zdmdcIik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9zb2xyLnN2Z1wiKTtcbn1cbi50ZWNoLWljb25zIC5jdXN0b20tc29sci5jbGlja2VkLCAudGVjaC1pY29ucyAuY3VzdG9tLXNvbHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vc29sci1ob3Zlci5zdmdcIik7XG59XG4udGVjaC1pY29ucyAuY3VzdG9tLWRvam8ge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKlxuICAqICBBZGRlZCBob3ZlciBpbWFnZSBoZXJlIGFzIHdlbGwsIHNvIHRoYXQgaXQgd2lsbCBiZSBsb2FkZWQgb24gcGFnZSBsb2FkLlxuICAqICBJdCB3aWxsIHByZXZlbnQgaW1hZ2UgbG9hZCBvbiBob3ZlciwgcmVzdWx0aW5nIG5vIGxhZ2dpbmcgaW4gaG92ZXIgY2FzZS5cbiAgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL2Rvam8taG92ZXIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vZG9qby5zdmdcIik7XG59XG4udGVjaC1pY29ucyAuY3VzdG9tLWRvam8uY2xpY2tlZCwgLnRlY2gtaWNvbnMgLmN1c3RvbS1kb2pvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL2Rvam8taG92ZXIuc3ZnXCIpO1xufVxuLnRlY2gtaWNvbnMgLmN1c3RvbS1teXNxbCB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC8qXG4gICogIEFkZGVkIGhvdmVyIGltYWdlIGhlcmUgYXMgd2VsbCwgc28gdGhhdCBpdCB3aWxsIGJlIGxvYWRlZCBvbiBwYWdlIGxvYWQuXG4gICogIEl0IHdpbGwgcHJldmVudCBpbWFnZSBsb2FkIG9uIGhvdmVyLCByZXN1bHRpbmcgbm8gbGFnZ2luZyBpbiBob3ZlciBjYXNlLlxuICAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbXlzcWwtaG92ZXIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbXlzcWwuc3ZnXCIpO1xufVxuLnRlY2gtaWNvbnMgLmN1c3RvbS1teXNxbC5jbGlja2VkLCAudGVjaC1pY29ucyAuY3VzdG9tLW15c3FsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL215c3FsLWhvdmVyLnN2Z1wiKTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/tech-list/tech-list.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/tech-list/tech-list.component.ts ***!
          \**************************************************/
        /*! exports provided: TechListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechListComponent", function () { return TechListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TechListComponent_1;
            var TechListComponent = TechListComponent_1 = /** @class */ (function () {
                function TechListComponent() {
                }
                TechListComponent.prototype.ngOnInit = function () {
                };
                TechListComponent.prototype.showToolTip = function (toolTip) {
                    if (TechListComponent_1.previousToolTip) {
                        TechListComponent_1.previousToolTip.close();
                    }
                    toolTip.open();
                    TechListComponent_1.previousToolTip = toolTip;
                };
                return TechListComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TechListComponent.prototype, "techList", void 0);
            TechListComponent = TechListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tech-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tech-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tech-list/tech-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tech-list.component.scss */ "./src/app/tech-list/tech-list.component.scss")).default]
                })
            ], TechListComponent);
            /***/ 
        }),
        /***/ "./src/assets/json/config.json": 
        /*!*************************************!*\
          !*** ./src/assets/json/config.json ***!
          \*************************************/
        /*! exports provided: resumeFile, navBarConfig, about, experience, education, skills, projects, contact, technologyMap, default */
        /***/ (function (module) {
            module.exports = JSON.parse("{\"resumeFile\":\"/assets/pdf/Amit_Sargar_Resume.pdf\",\"navBarConfig\":{\"text\":\"Amit Sargar\",\"profilePic\":\"../assets/img/profile.png\",\"navItems\":[\"About\",\"Experience\",\"Education\",\"Skills\",\"Projects\",\"Resume\",\"Contact\"]},\"about\":{\"firstName\":\"Amit\",\"lastName\":\"Sargar\",\"email\":\"amitsargar@gmail.com\",\"aboutMe\":\"Hello, welcome to my professional profile. I have a Master of Computer Applications from VJTI, Mumbai, and I am currently working as an Associate Vice President at Deutsche Bank India with approximately 10 years of experience as a Full Stack Java Developer.\",\"socialProfiles\":[{\"name\":\"LinkedIn\",\"link\":\"https://www.linkedin.com/in/amitsargar/\",\"class\":\"fab fa-linkedin\"},{\"name\":\"GitHub\",\"link\":\"https://github.com/asargar/\",\"class\":\"fab fa-github\"},{\"name\":\"Twitter\",\"link\":\"https://twitter.com/amitsargar/\",\"class\":\"fab fa-twitter\"},{\"name\":\"Instagram\",\"link\":\"https://instagram.com/amit.sargar/\",\"class\":\"fab fa-instagram\"}]},\"experience\":{\"list\":[{\"title\":\"Assistant Vice President\",\"company\":\"Deutsche Bank, Pune\",\"start\":\"March, 2020\",\"end\":\"Present\",\"details\":[\"As a Full Stack Developer, I handle development from Angular to Spring Boot and manage deployment as well.\",\"Notably, I developed a generic, configuration-based dashboard adaptable for similar views with minimal effort.\",\"Additionally, I have been involved in migration projects from OCP3 to OCP4 and disaster recovery strategy of applications\"]},{\"title\":\"Consultant\",\"company\":\"Deloitte Consulting, Mumbai\",\"start\":\"Aug, 2018\",\"end\":\"Mar, 2020\",\"details\":[\"Got promoted to Consultant on fast track, as recognition to work towards client and extracurricular activities like <strong>represented Deloitte in Code Gladiator Finals</strong>.\",\"Got recognition and <strong>Applause Award</strong> for project contribution.\",\"Leading the development of various modules of paperless insurance product owned by US based Business Insurance Company.\",\"Full stack development to enhance existing system to introduce new features including upgrading payment gateway SDK and making system PCI compliant.\"]},{\"title\":\"Business Technical Analyst\",\"company\":\"Deloitte Consulting, Mumbai\",\"start\":\"Dec, 2016\",\"end\":\"Aug, 2018\",\"details\":[\"Represented Deloitte in largest coding contest Code Gladiator Finals in 2017 and 2018. Got the highest recognition award in Deloitte for the same. The 2017 coding event recognized by Guinness record for largest coding contest.\",\"Got recognition from Client as well as Deloitte for contribution towards client service.\",\"Development of various modules of the platform/ product for US based public sector client.\",\"Full stack development to enhance existing system to introduce new features.\"]},{\"title\":\"Associate Software Engineer\",\"company\":\"Pragmatix Services Pvt. Ltd., Mumbai\",\"start\":\"Jul, 2015\",\"end\":\"Dec, 2016\",\"details\":[\"Development and integration of various modules like Non-Performing Assets (NPA), Early Warning System (EWS) solutions for Banking client.\",\"Responsible to design, develop and optimize Rule Engine product, which was integral part of NPA and EWS solutions.\",\"Migrating various modules from previous version of the product to new maven based OSGi system.\",\"Involved in the development of various POCs for client demos.\",\"Technologies & Frameworks: Java, Spring MVC, Hibernate, JBPM, SQL, HTML, CSS, JavaScript, Dojo, OSGi, AngularJS\"]},{\"title\":\"Trainee Software Engineer\",\"company\":\"Pragmatix Services Pvt. Ltd., Mumbai\",\"start\":\"Jan, 2015\",\"end\":\"Jun, 2015\",\"details\":[\"Design and develop frontend and backend of Smart Search module.\",\"Design and develop Download Automation solution which allows user to download thousands of files in a click.\",\"Enhancement of the reporting framework module.\",\"Development of autocomplete widget in Dojo.\",\"Received appreciation for the Download Automation project.\",\"Technologies & Frameworks: Java, Spring MVC, Hibernate, SQL, HTML, CSS, JavaScript, Dojo, jQuery, AngularJs\"]}]},\"education\":{\"list\":[{\"college\":\"VJTI, Mumbai\",\"website\":\"https://en.wikipedia.org/wiki/Veermata_Jijabai_Technological_Institute\",\"course\":\"Master of Computer Applications\",\"start\":\"Jul, 2012\",\"end\":\"Jun, 2015\"},{\"college\":\"KWC, Sangli\",\"website\":\"http://www.kwcsangli.in/\",\"course\":\"Bachelor of Computer Science\",\"start\":\"Jul, 2009\",\"end\":\"Mar, 2012\"}]},\"skills\":{\"list\":[{\"title\":\"Programming Skills\",\"techList\":[\"java\",\"php\"]},{\"title\":\"Java Frameworks\",\"techList\":[\"spring\",\"selenium\"]},{\"title\":\"Web Technologies\",\"techList\":[\"angular\",\"jquery\",\"javascript\",\"html5\",\"css3\",\"drupal\",\"sass\"]},{\"title\":\"Database\",\"techList\":[\"mysql\"]}]},\"projects\":{\"list\":[{\"title\":\"Business Insurance Website\",\"description\":\"US based Business Insurance website with multiple white label partners to purchase and maintain paperless online business insurance. It includes Web application for Agent and actual users to purchase new policy using online payment and maintaining the account to view existing policies.\",\"techList\":[\"java\",\"spring\",\"drupal\",\"php\",\"angular\",\"jquery\",\"html5\",\"css3\",\"node\",\"npm\",\"sass\",\"git\",\"grunt\",\"mysql\",\"jira\"]},{\"title\":\"Department of Motor Vehicle\",\"description\":\"US based public sector project for Registration and Titles System, which includes Web application for Agent and actual users, and batch system to process daily transactions.\",\"techList\":[\"java\",\"spring\",\"jquery\",\"html5\",\"css3\",\"git\",\"jira\"]},{\"title\":\"Rule Engine\",\"description\":\"Data filtering solution depending on rules for NPA (Non-Performing Assets) and EWS (Early Warning System) depending on various nested filtering criteria. It is an integral part of these solutions.\",\"techList\":[\"java\",\"spring\",\"angularjs\",\"html5\",\"css3\"]},{\"title\":\"Non-Performing Assets (NPA)\",\"description\":\"A predictive analysis tool which aids banks to identify the non-performing assets and helps in risk analysis.\",\"techList\":[\"java\",\"spring\",\"angularjs\",\"html5\",\"css3\"]},{\"title\":\"Early Warning System (EWS)\",\"description\":\"Project's main purpose was to alleviate the risks of non-performing loans. It enabled our banking clients to get effective early warnings to protect their assets and reduce the impact of payment delinquency. \",\"techList\":[\"java\",\"spring\",\"angularjs\",\"html5\",\"css3\"]},{\"title\":\"Bank Statement Analysis\",\"description\":\"Tool to extract data into structured table which is required by the ETL job to generate score for loan system.\",\"techList\":[\"java\",\"spring\",\"jquery\",\"html5\",\"css3\"]},{\"title\":\"Download Automation\",\"description\":\"Tool to download thousands of files in a click. It helps user to download files from website, required by the ETL job.\",\"techList\":[\"java\",\"spring\",\"selenium\",\"jquery\",\"html5\",\"css3\"]},{\"title\":\"Smart Search\",\"description\":\"Introduced Smart Search functionality to allow user to tag various resources like reports and dashboards as per requirement for instant search across the whole platform.\",\"techList\":[\"java\",\"spring\",\"solr\",\"dojo\",\"html5\",\"css3\"]}]},\"contact\":{\"action\":\"https://formspree.io/\",\"formId\":\"xjvklygj\"},\"technologyMap\":{\"-description-\":\"Technology map to mention fontawesome classname or direct icon link for unsopported icons\",\"java\":{\"title\":\"Java\",\"class\":\"fab fa-java\"},\"drupal\":{\"title\":\"Drupal\",\"class\":\"fab fa-drupal\"},\"php\":{\"title\":\"PHP\",\"class\":\"fab fa-php\"},\"angular\":{\"title\":\"Angular\",\"class\":\"fab fa-angular\"},\"angularjs\":{\"title\":\"AngularJS\",\"class\":\"fab fa-angular\"},\"javascript\":{\"title\":\"JavaScript\",\"class\":\"fab fa-js-square\"},\"html5\":{\"title\":\"HTML5\",\"class\":\"fab fa-html5\"},\"css3\":{\"title\":\"CCS3\",\"class\":\"fab fa-css3-alt\"},\"node\":{\"title\":\"Node\",\"class\":\"fab fa-node\"},\"npm\":{\"title\":\"NPM\",\"class\":\"fab fa-npm\"},\"sass\":{\"title\":\"SASS\",\"class\":\"fab fa-sass\"},\"git\":{\"title\":\"Git\",\"class\":\"fab fa-git-alt\"},\"grunt\":{\"title\":\"Grunt\",\"class\":\"fab fa-grunt\"},\"jira\":{\"title\":\"Jira\",\"class\":\"fab fa-jira\"},\"spring\":{\"title\":\"Spring\",\"class\":\"fab custom-spring\"},\"jquery\":{\"title\":\"jQuery\",\"class\":\"fab custom-jquery\"},\"selenium\":{\"title\":\"Selenium Webdriver\",\"class\":\"fab custom-selenium\"},\"solr\":{\"title\":\"Apache Solr\",\"class\":\"fab custom-solr\"},\"dojo\":{\"title\":\"Dojo Toolkit\",\"class\":\"fab custom-dojo\"},\"mysql\":{\"title\":\"MySQL\",\"class\":\"fab custom-mysql\"}}}");
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /workspaces/portfolio/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map