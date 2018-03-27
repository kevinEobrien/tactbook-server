// require("dotenv").load();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const aws = require("aws-sdk");
// const multerS3 = require("multer-s3");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const s3 = new aws.S3({
//   apiVersion: "2006-03-01",
//   region: "us-east-1",
//   credentials: {
//     secretAccessKey: process.env.SECRET_ACCESS_KEY,
//     accessKeyId: process.env.ACCESS_KEY_ID
//   }
// });

// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: "tactbook",
//     key: (request, file, next) => {
//       next(null, `${Date.now()}_${file.originalname}`);
//     }
//   })
// });

// app.post("/upload", upload.array("image", 1), (request, response) => {
//   response.json({
//     imgUrl: `${request.files[0].location}`
//   });
// });

// app.listen(process.env.PORT || 3000);