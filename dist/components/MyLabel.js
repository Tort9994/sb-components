"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
const MyLabel = ({ label, size = 'h1', color = "text-primary", allCaps = false, fontColor }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: `${size} ${color} label`, style: { color: fontColor }, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
