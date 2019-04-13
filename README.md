# AMP-examples

Some examples to handle tricky scenario when developing web application with [AMP](https://www.ampproject.org/).

---

## Examples

#### \* amp-boilerplate

basic content for AMP page  
Reference: [https://www.ampproject.org/docs/getting_started/create/basic_markup](https://www.ampproject.org/docs/getting_started/create/basic_markup)

#### \* amp-with-scss

integrate scss with AMP by gulp task  
Reference: [https://stackoverflow.com/questions/23820703/how-to-inject-content-of-css-file-into-html-in-gulp](https://stackoverflow.com/questions/23820703/how-to-inject-content-of-css-file-into-html-in-gulp)

#### \* amp-list-with-rating

use css to render rating star base on the rating(number) from API

#### \* amp-list-nested

use amp-list and amp-mustache to render the content from a nested json format list  
Reference: [https://github.com/janl/mustache.js/#non-empty-lists](https://github.com/janl/mustache.js/#non-empty-lists)

```json
{
  "items": [
    {
      "name": "xxx",
      "contents": [...]
    },
    ...
  ]
}
```

#### \* amp-list-2d-array

render content from a two dimension array

```json
{
  "items": [
    [1, 2, 3, ...],
    ["a", "b", "c", ...],
    ...
  ]
}
```

---

## How to start?

```
git clone https://github.com/oahehc/amp-example.git
yarn install
yarn start
browse http://localhost:9000 to check all the examples
```

---

## Folder structure

```
|- examples
|- data ... json files for simulate API response
|- styles ... scss
|- index.html ... root page to display all examples
```
