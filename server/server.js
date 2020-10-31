const Express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodeFetch = require('node-fetch')
const app = new Express()
const urlBodyParser = bodyParser.json()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  app.use( cors() )
  next()
})

console.log('< NODE SERVER > ', process.env.API_OPEN_WEATHER_URL)

app.post('/api/find', urlBodyParser, async function(req, res) {
  const baseUrl = process.env.API_OPEN_WEATHER_URL
  const apiKey = process.env.API_KEY_OPEN_WEATHER

  const bodyPayload = {
    ...req.body,
    appid: apiKey
  }

  const concatConfigs = Object.keys(bodyPayload).reduce((acc, cur, idx) => `${acc}${idx===0?'?':'&'}${cur}=${bodyPayload[cur]}`, '')

  const resultApi = await nodeFetch(`${baseUrl}find${concatConfigs}`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })

  if (resultApi.status === 200) {
    const finalPayload = await resultApi.json()
    res.status(200).send(finalPayload)
  }
  else {
    res.status(400).send({ error: true })
  }
})

app.get('/health-check', function(req, res) {
  res.status(200).send({response: 'OK'})
  res.end()
})

app.listen('9000', '0.0.0.0', () => console.log( // eslint-disable-line no-console
  `< SERVER RUNNING : PORT 9000 >`
))