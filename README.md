# Tactbook server

## About the app

The app is a social network that does not allow political posts. A lot of the magic happens here on the backend where the Watson API's natural language classifier is leveraged to spit back posts with content identified as political. The server side also communicates with Amazon Web Services s3 in order to store images for posts and to provide the frontend with a viewable image url.  The Postgres database includes four tables (diagramed below) in order to store data about users, relationships, posts, and comments.

![](https://s3.amazonaws.com/tactbook/tactbookErrorMessage.png)


## Setup

```sh
npm install
```


## Usage

```sh
npm start
```

## Devlopment

```sh
npm run dev #starts nodemon on port 3000
```

## DB Schema

![](https://www.lucidchart.com/publicSegments/view/8255a564-e0c3-4da5-80e5-1cb2ffb44fb8/image.png)

## License
MIT License

Copyright (c) 2018 Kevin E. O'Brien

## Contact

|<img src="https://avatars3.githubusercontent.com/u/31964386?s=400&v=4" width="100"> | Kevin O'Brien                    |
| ------------- | ------------- |
| LinkedIn   | [/in/kevin-e-obrien/](https://www.linkedin.com/in/kevin-e-obrien/) |
