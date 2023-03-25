"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Placeholder = void 0;
var react_1 = __importDefault(require("react"));
var Raw_1 = require("./animations/Raw");
exports.Placeholder = function (_a) {
    var children = _a.children, Animation = _a.Animation, props = __rest(_a, ["children", "Animation"]);
    var AnimationProvider = Animation || Raw_1.Raw;
    return (react_1["default"].createElement(AnimationProvider, null, children));
};
//# sourceMappingURL=Placeholder.js.map