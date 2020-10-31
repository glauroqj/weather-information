import React, { useState, useEffect, Suspense, lazy, memo } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Sidebar.style'
/** components */

const Sidebar = ({ history, list }) => {
  console.log('< SIDEBAR > ', history, list)
  // const dispatch = useDispatch()
  // const { position, mapLoading } = useSelector(state => state.map)
  
  // const { loading, error, data } = useSelector(state => state.weather)




  return (
    <El.SidebarContainer>
      <h4> Closests Cities</h4>
      <El.SidebarList>
        {list.length > 0 && list.map((item, idx) => (
          <El.SidebarItem key={idx}>
            {item.name}
          </El.SidebarItem>
        ))}
      </El.SidebarList>
    </El.SidebarContainer>
  )
}

Sidebar.defaultProps = {
  list: [
    {
      "id": 3453420,
      "name": "Planaltina",
      "coord": {
        "lat": -15.45,
        "lon": -47.61
      },
      "main": {
        "temp": 21.87,
        "feels_like": 22.25,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160185,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": null,
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ]
    },
    {
      "id": 3469385,
      "name": "Bom Sucesso",
      "coord": {
        "lat": -15.52,
        "lon": -47.63
      },
      "main": {
        "temp": 21.85,
        "feels_like": 22.22,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160499,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 0.86
      },
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3463140,
      "name": "Formosa",
      "coord": {
        "lat": -15.54,
        "lon": -47.33
      },
      "main": {
        "temp": 21.49,
        "feels_like": 22.52,
        "temp_min": 21.49,
        "temp_max": 21.49,
        "pressure": 1012,
        "humidity": 92,
        "sea_level": 1012,
        "grnd_level": 911
      },
      "dt": 1604160185,
      "wind": {
        "speed": 3.9,
        "deg": 340
      },
      "sys": {
        "country": "BR"
      },
      "rain": null,
      "snow": null,
      "clouds": {
        "all": 100
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ]
    },
    {
      "id": 3463504,
      "name": "Federal District",
      "coord": {
        "lat": -15.75,
        "lon": -47.75
      },
      "main": {
        "temp": 21.83,
        "feels_like": 22.19,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160499,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": null,
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ]
    },
    {
      "id": 3469058,
      "name": "Brasilia",
      "coord": {
        "lat": -15.78,
        "lon": -47.93
      },
      "main": {
        "temp": 21.84,
        "feels_like": 22.2,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160186,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 0.19
      },
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3461936,
      "name": "Guará",
      "coord": {
        "lat": -15.83,
        "lon": -47.9
      },
      "main": {
        "temp": 21.85,
        "feels_like": 22.22,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160499,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 0.71
      },
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3455580,
      "name": "Padre Bernardo",
      "coord": {
        "lat": -15.35,
        "lon": -48.5
      },
      "main": {
        "temp": 24.7,
        "feels_like": 26.69,
        "temp_min": 24.7,
        "temp_max": 24.7,
        "pressure": 1012,
        "humidity": 80,
        "sea_level": 1012,
        "grnd_level": 933
      },
      "dt": 1604160185,
      "wind": {
        "speed": 3.14,
        "deg": 333
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 2.5876
      },
      "snow": null,
      "clouds": {
        "all": 100
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3462672,
      "name": "Gama",
      "coord": {
        "lat": -15.95,
        "lon": -48.08
      },
      "main": {
        "temp": 21.82,
        "feels_like": 22.17,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160499,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 2.59
      },
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3468641,
      "name": "Cabeceiras",
      "coord": {
        "lat": -15.8,
        "lon": -46.93
      },
      "main": {
        "temp": 21,
        "feels_like": 21.71,
        "temp_min": 21,
        "temp_max": 21,
        "pressure": 1011,
        "humidity": 93,
        "sea_level": 1011,
        "grnd_level": 911
      },
      "dt": 1604160499,
      "wind": {
        "speed": 4.15,
        "deg": 330
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 0.32
      },
      "snow": null,
      "clouds": {
        "all": 100
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3456285,
      "name": "Niquelândia",
      "coord": {
        "lat": -14.47,
        "lon": -48.46
      },
      "main": {
        "temp": 25.01,
        "feels_like": 28.67,
        "temp_min": 25.01,
        "temp_max": 25.01,
        "pressure": 1012,
        "humidity": 79,
        "sea_level": 1012,
        "grnd_level": 948
      },
      "dt": 1604160185,
      "wind": {
        "speed": 0.83,
        "deg": 334
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 0.1072
      },
      "snow": null,
      "clouds": {
        "all": 100
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3458329,
      "name": "Luziânia",
      "coord": {
        "lat": -16.25,
        "lon": -47.95
      },
      "main": {
        "temp": 21.83,
        "feels_like": 22.19,
        "temp_min": 21.67,
        "temp_max": 22,
        "pressure": 1018,
        "humidity": 88
      },
      "dt": 1604160185,
      "wind": {
        "speed": 4.6,
        "deg": 290
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 3.35
      },
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3470409,
      "name": "Barro Alto",
      "coord": {
        "lat": -14.97,
        "lon": -48.92
      },
      "main": {
        "temp": 23.59,
        "feels_like": 26.88,
        "temp_min": 23.59,
        "temp_max": 23.59,
        "pressure": 1012,
        "humidity": 88,
        "sea_level": 1012,
        "grnd_level": 947
      },
      "dt": 1604160499,
      "wind": {
        "speed": 1.63,
        "deg": 7
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 0.65
      },
      "snow": null,
      "clouds": {
        "all": 100
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    },
    {
      "id": 3455976,
      "name": "Ôlho d’Água",
      "coord": {
        "lat": -16.03,
        "lon": -48.6
      },
      "main": {
        "temp": 19,
        "feels_like": 19.01,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 1019,
        "humidity": 100
      },
      "dt": 1604160498,
      "wind": {
        "speed": 4.6,
        "deg": 320
      },
      "sys": {
        "country": "BR"
      },
      "rain": null,
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 741,
          "main": "Fog",
          "description": "fog",
          "icon": "50d"
        }
      ]
    },
    {
      "id": 3465339,
      "name": "Corumbá de Goiás",
      "coord": {
        "lat": -15.92,
        "lon": -48.81
      },
      "main": {
        "temp": 19,
        "feels_like": 19.01,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 1019,
        "humidity": 100
      },
      "dt": 1604160499,
      "wind": {
        "speed": 4.6,
        "deg": 320
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 1.28
      },
      "snow": null,
      "clouds": {
        "all": 75
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        },
        {
          "id": 741,
          "main": "Fog",
          "description": "fog",
          "icon": "50d"
        }
      ]
    },
    {
      "id": 3468732,
      "name": "Buritis",
      "coord": {
        "lat": -15.62,
        "lon": -46.42
      },
      "main": {
        "temp": 24.08,
        "feels_like": 25.57,
        "temp_min": 24.08,
        "temp_max": 24.08,
        "pressure": 1012,
        "humidity": 81,
        "sea_level": 1012,
        "grnd_level": 951
      },
      "dt": 1604160186,
      "wind": {
        "speed": 3.58,
        "deg": 322
      },
      "sys": {
        "country": "BR"
      },
      "rain": {
        "1h": 1.4556
      },
      "snow": null,
      "clouds": {
        "all": 100
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ]
    }
  ]
}

Sidebar.propTypes = {
  list: PropTypes.array
}

export default withRouter(
  memo(Sidebar)
)