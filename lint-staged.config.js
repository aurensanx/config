module.exports = {
  "*.test.{tsx}": "jest",
  "*.{js,ts,tsx}": [() => "tsc", "eslint --cache --fix", "prettier --write"],
}
