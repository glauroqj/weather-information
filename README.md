# weather-information

## Purpose

- The assignment involves creating a front-end for a weather application using React. This application needs to show weather information of cities around the world.

## Tasks

- Showing a map. The application must show a map and a button “Search”. done
- Adding a pin. The user should be able to place a pin on the map and click on the button “Search”. done
- Consuming an API. The application needs to call API considering the LAT/LON where the user placed the pin and search for the closest 15 cities (API: http://api.openweathermap.org/data/2.5/find?lat={LAT}&lon={LON}&cnt=15&APPID= <APP_ID>). done
- Listing cities. The application needs to show the list of the city names and the user should be able to visualize more information about the city temperature. done
- Selecting a city. When the user picks a city, the application opens a new window showing more details:
  - Name of the selected city. done
  - Minimum temperature (Celsius). done
  - Maximum temperature (Celsius). done


## Technologies

- React ( framewrok js UI / routes )
- Redux/Redux-Thunk ( state management )
- Styled components ( css in js )
- Node.js ( backend / BFF )

## Infra

- Docker `( version equal or above 19.03.8 )`
- Docker-compose `( version equal or above 1.26.0 )`

## Step by Step

- Before we start, check if do you have `npm` and `yarn` installed, just in case if doesni t installed use this links:
  - [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - [yarn](https://classic.yarnpkg.com/en/docs/install)

- Ok, let's begin, in root folder (./) run the command `yarn dev-start` or `npm dev-start`, please make sure do you have `docker` and `docker-compose` already installed in the right versions. Click on links in case doesn't installed.
  - [docker](https://docs.docker.com/get-docker/) `( version equal or above 19.03.8 )`
  - [docker-compose](https://docs.docker.com/compose/install/) `( version equal or above 1.26.0 )`

- After successful installation, please check your [localhost:3000](http://localhost:3000)

## Folders Tree

```
.
├── docker-compose.yml -> infra/dev/docker-compose.yml
├── infra
│   └── dev
│       ├── docker-compose.yml
│       └── Dockerfile
├── jsconfig.json
├── LICENSE
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── server
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── yarn.lock
├── src
│   ├── assets
│   │   └── style
│   │       ├── effects.js
│   │       ├── globalStyle.js
│   │       ├── index.js
│   │       └── theme.js
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.js
│   │   │   └── Button.style.js
│   │   ├── Loading
│   │   │   ├── Loading.js
│   │   │   └── Loading.style.js
│   │   ├── Map
│   │   │   ├── Map.js
│   │   │   └── Map.style.js
│   │   └── Sidebar
│   │       ├── Sidebar.js
│   │       └── Sidebar.style.js
│   ├── index.js
│   ├── pages
│   │   ├── Detail
│   │   │   ├── Detail.js
│   │   │   └── Detail.style.js
│   │   └── Home
│   │       ├── _homeButtonContainer.js
│   │       ├── Home.js
│   │       └── Home.style.js
│   ├── routes
│   │   └── Routes.js
│   ├── services
│   │   └── weatherService.js
│   └── store
│       ├── actions
│       │   ├── mapActions.js
│       │   └── weatherActions.js
│       ├── index.js
│       └── reducers
│           ├── index.js
│           ├── mapReducer.js
│           └── weatherReducer.js
└── yarn.lock
```