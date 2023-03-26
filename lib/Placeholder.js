"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Placeholder = void 0;
var react_1 = __importDefault(require("react"));
var Raw_1 = require("./animations/Raw");
exports.Placeholder = function (_a) {
    var children = _a.children, Animation = _a.Animation;
    var AnimationProvider = Animation || Raw_1.Raw;
    return react_1["default"].createElement(AnimationProvider, null, children);
};
//# sourceMappingURL=Placeholder.js.map