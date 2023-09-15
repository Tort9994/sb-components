"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
const MyLabel_1 = require("./components/MyLabel");
const Button_1 = require("./stories/Button");
const Header_1 = require("./stories/Header");
const Page_1 = require("./stories/Page");
const index = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, { label: 'hello' }), (0, jsx_runtime_1.jsx)(Button_1.Button, { label: 'hello' }), (0, jsx_runtime_1.jsx)(Header_1.Header, { onLogin: function () {
                    throw new Error('Function not implemented.');
                }, onLogout: function () {
                    throw new Error('Function not implemented.');
                }, onCreateAccount: function () {
                    throw new Error('Function not implemented.');
                } }), (0, jsx_runtime_1.jsx)(Page_1.Page, {})] }));
};
exports.index = index;
