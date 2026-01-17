/**
 * Flat ESLint config using Next.js core web vitals rules.
 * See: https://nextjs.org/docs/app/api-reference/config/eslint
 */
const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = nextCoreWebVitals;
