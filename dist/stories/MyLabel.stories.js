"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const MyLabel_1 = require("../components/MyLabel");
const meta = {
    title: "Example/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'select' },
        color: { control: 'inline-radio' },
        allCaps: { control: 'boolean' },
        fontColor: { control: 'color' }
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Basic Label'
    }
};
exports.AllCaps = {
    args: {
        label: 'All Caps label',
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
};
exports.CustomColor = {
    args: {
        label: 'Custom Color label',
        fontColor: 'red'
    }
};
