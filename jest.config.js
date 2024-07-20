module.exports = {
  preset: "ts-jest",
  testEnvironnement: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
  },
};
