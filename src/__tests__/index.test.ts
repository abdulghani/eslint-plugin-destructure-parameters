import { Linter, RuleTester } from "eslint";
import rule from "../index";

const tester = new RuleTester();
const parserOptions: Linter.ParserOptions = {
  sourceType: "module",
  ecmaVersion: 6,
};

describe("testing rule", () => {
  tester.run("validate destructuring", rule, {
    valid: [
      {
        code: `
        function destructured({ hello, world }) {
          console.log(hello, world);
        }
        `,
        parserOptions,
      },
      {
        code: `
        const destructured = ({ hello, world }) => {
          console.log(hello, world);
        }
        `,
        parserOptions,
      },
    ],
    invalid: [
      {
        code: `
        function destructured(hello, world) {
          console.log(hello, world);
        }
        `,
        parserOptions,
        errors: ["Use destructuring on function parameters."],
      },
    ],
  });
});
