### first Install and Setup enviroment

- first we have to init project

```sh
$ npm init
```

- start with

```sh
$ npm install express dotenv
$ npm install -D nodemon
```

You have to edit package.jso to run nodemon:

- ## {
  ## "scripts": {
  "start": "NODE_ENV=produvtion node server",
  "dev": "nodemon server"
  },
  ***
  }

to start server we have to run

```sh
npm run dev
```
