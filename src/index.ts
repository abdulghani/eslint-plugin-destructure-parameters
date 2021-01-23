import { Rule } from "eslint";
import { Function } from "estree";
import { JSONSchema4 } from "json-schema";

const schema: JSONSchema4[] = [
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

const create = (context: Rule.RuleContext) => {
  const option = context.options?.[0];
  const alwaysDestructure = !!option?.alwaysDestructure;

  return {
    FunctionDeclaration(node: Function) {
      if (
        node.params.length > 0 &&
        alwaysDestructure &&
        node.params?.[0]?.type !== "ObjectPattern"
      ) {
        context.report({
          node: node,
          message: "Always use destructuring on function parameters.",
        });
      } else if (node.params.length > 1) {
        context.report({
          node: node,
          message: "Use destructuring on function parameters.",
        });
      }
    },
  };
};

const Plugin: Rule.RuleModule = {
  create,
  meta: {
    schema,
  },
};

export default Plugin;
