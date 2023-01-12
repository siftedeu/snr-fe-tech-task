# Sifted Interview UI

This repo contains the [Next.js](https://nextjs.org) app which is a very cut down app that serves some of our content.

The included code only serves a page /careers page without any navigation e.t.c.

## Installation



1. (optional) First install [Volta](https://volta.sh/) (this is what we use to manage our Node and Yarn installations)

```bash
curl https://get.volta.sh | bash
```

2. Then install our JS dependencies:

```bash
yarn
```

## Run Locally

1. To run the development server:

```bash
yarn dev
```

Provided you have nothing else running on port 3000, the server will now be running on [localhost:3000](http://localhost:3000). However, since no page has been set up there visit: [http://localhost:3000/careers](http://localhost:3000/careers) to see the real page in action.

## Running Tests

### Unit
To run unit tests, run the following command:

```bash
yarn test
```

And to watch tests in the background, run:

```bash
yarn test:watch
```

### Functional

Functional tests can be run using Cypress in the following way:

First open a terminal and run the application e.g.

```bash
yarn dev
```
Then in another terminal window run the following (without closing the previous terminal with the app running) if the application is running on another port then replace 3000 as appropriate.

```bash
PORT=3000 yarn test:functional
```
for the cypress console or for headless tests run the following
```bash
PORT=3000 yarn test:functional-headless
```

