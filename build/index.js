"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema = [
    {
        type: "object",
        properties: {
            alwaysDestructure: {
                type: "boolean",
                default: false,
            },
        },
        additionalProperties: false,
    },
];
var create = function (context) {
    var _a;
    var option = (_a = context.options) === null || _a === void 0 ? void 0 : _a[0];
    var alwaysDestructure = !!(option === null || option === void 0 ? void 0 : option.alwaysDestructure);
    return {
        FunctionDeclaration: function (node) {
            var _a, _b;
            if (node.params.length > 0 &&
                alwaysDestructure &&
                ((_b = (_a = node.params) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.type) !== "ObjectPattern") {
                context.report({
                    node: node,
                    message: "Always use destructuring on function parameters.",
                });
            }
            else if (node.params.length > 1) {
                context.report({
                    node: node,
                    message: "Use destructuring on function parameters.",
                });
            }
        },
    };
};
var Plugin = {
    create: create,
    meta: {
        schema: schema,
    },
};
exports.default = Plugin;
