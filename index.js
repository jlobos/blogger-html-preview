const fetch = require('node-fetch')
const qs = require('qs')

module.exports = ({
  url,
  token,
  templateText,
  withWidgets = true
}) => {
  return fetch(
    `${url}/b/html-preview?token=${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify({withWidgets, templateText})
    }
  ).then(res => res.text())
}
