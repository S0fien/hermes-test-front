import type { Config } from "jest";

// eslint-disable-next-line
export default {
  displayName: "App",
  verbose: true,
  testEnvironment: "jsdom",
  testRegex: "^.*/*.test.tsx?$",
  transform: {
    "^.+\\.tsx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
} as Config;
