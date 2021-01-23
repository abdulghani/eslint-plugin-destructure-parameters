import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/"],
};

export default config;
