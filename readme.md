# blogger-html-preview

[![Build Status](https://travis-ci.org/jlobos/blogger-html-preview.svg?branch=master)](https://travis-ci.org/jlobos/blogger-html-preview)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Get output code preview of [Google Blogger](https://www.blogger.com)

## Install

```bash
npm install --save blogger-html-preview
```

## Usage

```js
const blogger = require('blogger-html-preview')

const theme = `
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html>
  <head>
    <title><data:blog.pageTitle/></title>
    <b:skin></b:skin>
  </head>

  <body>
    <b:section id='header' />
  </body>
</html>
`

blogger({
  url: 'https://google.blogspot.com',
  token: 'token',
  templateText: theme
}).then(html => {
  console.log(html)
})
```

## API

### blogger([options])

#### options

Type: `Object`

##### url

Type: `string`

Url of the blogger.

##### token

Type: `string`

In the request of preview is need the token of authentication from theme setting of Blogger (`https://www.blogger.com/blogger.g?blogID=BLOGGER-ID#templatehtml`), in Chrome press F12 select Network tab and push "Preview theme" button, the first request show token: `https://BLOGGER-NAME.blogspot.com/b/html-preview?token=token`

##### templateText

Type: `string`

The xml theme.

##### withWidgets

Type: `string`<br>
Default: `true`

## Related

- [gulp-blogger-html-preview](https://github.com/jlobos/gulp-blogger-html-preview) - gulp plugin

## License

MIT © [Jesus Lobos](https://jlobos.com/)
