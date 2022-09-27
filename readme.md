# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1- Install [Docker](https://docs.docker.com/get-docker/).
2- Verify docker is ready by running `docker -v` and `docker-compose -v` in your terminal.
3- run `docker-compose up` from the project root directory.

NOTE: if Docker working correctly, the backend should be running and able to connect to your local database by pointing your browser to http://localhost:3000/api/ping .

4- Check the frontend and make sure it’s connected to the backend by creating a new user on http://localhost:3001/register .
