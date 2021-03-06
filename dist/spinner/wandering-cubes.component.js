var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';
var WanderingCubesComponent = (function (_super) {
    __extends(WanderingCubesComponent, _super);
    function WanderingCubesComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'wandering-cubes-spinner';
        _this.childClass = 'cube';
        _this.numItems = 2;
        return _this;
    }
    return WanderingCubesComponent;
}(SpinnerComponent));
WanderingCubesComponent = __decorate([
    Component({
        selector: 'sk-wandering-cubes',
        styles: ["\n    .wandering-cubes-spinner {\n      position: relative;\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n    }\n    \n    .cube1,\n    .cube2 {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 15px;\n      height: 15px;\n      \n      -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n      animation: sk-cubemove 1.8s infinite ease-in-out;\n    }\n    \n    .cube2 {\n      -webkit-animation-delay: -0.9s;\n      animation-delay: -0.9s;\n    }\n    \n    @-webkit-keyframes sk-cubemove {\n      25% {\n        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n      }\n      50% {\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n      }\n      75% {\n        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n      }\n      100% {\n        -webkit-transform: rotate(-360deg);\n      }\n    }\n    \n    @keyframes sk-cubemove {\n      25% {\n        transform: translateX(42px) rotate(-90deg) scale(0.5);\n        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n      }\n      50% {\n        transform: translateX(42px) translateY(42px) rotate(-179deg);\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n      }\n      50.1% {\n        transform: translateX(42px) translateY(42px) rotate(-180deg);\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n      }\n      75% {\n        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n      }\n      100% {\n        transform: rotate(-360deg);\n        -webkit-transform: rotate(-360deg);\n      }\n    }\n  "],
        template: SpinnerTemplate
    })
], WanderingCubesComponent);
export { WanderingCubesComponent };
//# sourceMappingURL=wandering-cubes.component.js.map