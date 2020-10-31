const weatherService = payloadPosition => (
  new Promise(async (resolve, reject) => {
    const baseUrl = process.env.REACT_APP_PAI_OPEN_WEATHER_URL
    const apiKey = process.env.REACT_APP_API_KEY_OPEN_WEATHER

    /** translate LNG to LON */
    let newPayloadPosition = Object.assign({}, payloadPosition)
    
    newPayloadPosition = Object.assign(
      {},
      {
        ...payloadPosition,
        lon: payloadPosition.lng
      }
    )
    delete newPayloadPosition.lng

    const configs = {
      ...newPayloadPosition,
      appid: apiKey,
      cnt: 15,
      units: 'metric'
    }
    
    const concatConfigs = Object.keys(configs).reduce((acc, cur, idx) => `${acc}${idx===0?'?':'&'}${cur}=${configs[cur]}`, '')

    console.log('< FINAL SERVICE API > ', concatConfigs, `${baseUrl}find${concatConfigs}` )

    try {
      const responseAPI = await fetch('/find', {
        method: 'POST',
        body: JSON.stringify({
          configs
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      if (responseAPI.status === 200) {
        const finalResponse = await responseAPI.json()
        console.log('< final response > ', finalResponse)
      }

    } catch(e) {
      reject(e)
    }
  })
)

export default weatherService