const Express = require('express')
const bodyParser = require('body-parser')
/** controller */
const findController = require('./findController')
const app = new Express()

console.log('< NODE SERVER > ', process.env.API_OPEN_WEATHER_URL)

app.post('/find', bodyParser, findController)

app.listen('9000', '0.0.0.0', () => console.log( // eslint-disable-line no-console
  `< SERVER RUNNING : PORT 9000 >`
))