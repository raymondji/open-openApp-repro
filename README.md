# Minimal repro of an issue with the `openApp` function

https://www.npmjs.com/package/open

Steps:
- Open WSL
- Clone this repo
- Run `node index.js`

Expected result:
- Opens chrome

Got result:
- Error: "TypeError: Expected a `name`"

## Demonstration of the proposed fix

Steps:
- Open WSL
- Clone this repo
- Run `node index.js --withFix`

Got result:
- Opens chrome