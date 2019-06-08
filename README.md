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

#### \* amp-footer

display footer when user scrolling to second page, and update state when user click dismiss button

#### \* amp-html

render html base on API response

```json
{
  "itesms": [
    { "h1": "title" },
    { "h6": "subtitle" },
    { "content": "<p>article content...</p>" },
    ...
  ]
}

```

#### \* amp-font-size-toggle

button for adjust font-size

#### \* amp-social

summary some amp components for social media like fb, twitter...

#### \* amp-filter

apply amp-bind and amp-selector to filter a restaurant list

#### \* amp-google-analytics

examples about using ga in AMP
Reference: https://developers.google.com/analytics/devguides/collection/amp-analytics/

---

#### \* amp-user-agent

pass user agent to server and get device/browser information from server
Reference: https://github.com/ampproject/amphtml/blob/master/spec/amp-var-substitutions.md#user-agent

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
|- examples/
  |- images/        ... sample images download from https://pixabay.com/
  |- data/          ... json files for simulate API response
  |- styles/        ... scss
  |- index.html     ... root page to display all examples
|- utils/           ... helper function
|- server.js        ... node express API server
```
