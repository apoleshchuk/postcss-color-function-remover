# postcss-color-function-remover

Simple [color function](https://github.com/postcss/postcss-color-function) remover.

Useful for apply after [postcss-color-function](https://github.com/postcss/postcss-color-function) and [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) with [preserve: true](https://github.com/postcss/postcss-custom-properties#preserve) option, or after [cssnext](http://cssnext.io/) with some options.

## Installation
```
$ npm install postcss-color-function-remover
```

## Usage
```
const {readFileSync, writeFile} = require("fs");
const postcss = require("postcss");
const cssnext = require("cssnext");
const colorFunctionRemover = require("postcss-color-function-remover");

postcss([
    cssnext({
        features: {
            customProperties: {
                preserve: true
            }
        }
    }),
    colorFunctionRemover()
])
    .process(readFileSync("input.css", "utf8"))
    .then(result => {
        fs.writeFile('output.css', result.css);
    });
```
