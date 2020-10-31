const weatherService = payloadPosition => (
  new Promise(async (resolve, reject) => {

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
      cnt: 15,
      units: 'metric'
    }
    
    try {
      const responseAPI = await fetch('http://localhost:9000/api/find', {
        method: 'POST',
        body: JSON.stringify({
          ...configs
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      if (responseAPI.status === 200) {
        const finalResponse = await responseAPI.json()
        resolve(finalResponse.list)
      } else {
        reject()
      }

    } catch(e) {
      reject(e)
    }
  })
)

export default weatherService