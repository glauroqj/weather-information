# weather-information

## Purpose

- The assignment involves creating a front-end for a weather application using React. This application needs to show weather information of cities around the world.

## Tasks

- Showing a map. The application must show a map and a button “Search”
- Adding a pin. The user should be able to place a pin on the map and click on the button “Search”.
- Consuming an API. The application needs to call API considering the LAT/LON where the user placed the pin and search for the closest 15 cities (API: http://api.openweathermap.org/data/2.5/find?lat={LAT}&lon={LON}&cnt=15&APPID= <APP_ID>).
- Listing cities. The application needs to show the list of the city names and the user should be able to visualize more information about the city temperature
- Selecting a city. When the user picks a city, the application opens a new window showing more details:
  - Name of the selected city
  - Minimum temperature (Celsius)
  - Maximum temperature (Celsius)


## Technologies

- React ( framewrok js UI )
- Redux
- Styled components

### Infra
  - Docker
  - Docker-compose ( development )