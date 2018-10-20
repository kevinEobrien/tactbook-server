require ("dotenv").load();
const express = require("express");
const cors = require("cors");
const database= require("./database-connection");
const bodyParser= require("body-parser");
const queries = require("./queries");
const app= express();
const watson= require("./watson");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const multer = require("multer");
var auth = require("./auth");

app.use ("/auth", auth);
app.use(cors());
app.use(bodyParser.json());

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  region: "us-east-1",
  credentials: {
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID
  }
});
    
const upload = multer({
  storage: multerS3({
    s3,
    bucket: "tactbook",
    key: (request, file, next) => {
      next(null, `${Date.now()}_${file.originalname}`);
    }
  })
});

app.get("/upload", (request, response, next) => {
  response.json({
    message: "Testing out the upload route"
  });
});

app.post("/upload", upload.array("image", 1), (request, response) => {
  response.json({
    imgUrl: `${request.files[0].location}`
  });
});

app.get("/", (request, response, next) => {
  response.json({
    message: "Testing out the tactbook server"
  });
});

app.get("/customer", (request, response, next) => {
  queries.listCustomers().then(customers => {
    response.status(201).json({customers});
  }).catch(next);
});

app.get("/customer/:id", (request, response, next) => {
  queries.readCustomer(request.params.id)
    .then(customer => {
      customer
        ? response.status(201).json({customer})
        : response.sendStatus(404);
    }).catch(next);
});

app.post("/customer", (request, response, next) => {
  queries.createCustomer(request.body).then(() => {
    response.status(201).json("Welcome to Tactbook!");
  }).catch(next);
});

app.delete("/customer/:id", (request, response, next) => {
  queries.deleteCustomer(request.params.id).then(() => {
    response.status(201).json("Sorry to see you leave. Come back any time");
  }).catch(next);
});

app.put("/customer/:id", (request, response, next) => {
  queries.updateCustomer(request.params.id, request.body).then(() => {
    response.status(201).json("Your profile has been updated!");
  }).catch(next);
});

app.get("/post", (request, response, next) => {
  queries.listPost().then(post => {
    response.status(201).json({post});
  }).catch(next);
});
  
app.get("/post/:id", (request, response, next) => {
  queries.readPost(request.params.id)
    .then(post => {
      post
        ? response.status(201).json({post})
        : response.sendStatus(404);
    }).catch(next);
});
  
    
app.post("/post", (request, response, next) => {
  getCategories(request.body)
    .then(categories => {
      if(!categories) categories= [""];
      console.log(categories);
      if(categories.includes("politics") || categories.includes("government")){
        response.status(201).json("I'm sorry, Watson says you are posting content that violates the terms of Tactbook's posting policy.");
      }else{
        return queries.createPost(request.body)
          .then((result) => {
            response.status(201).json("Post successful");
            console.log("result is",result);
          });
      }
    }).catch(next);
});

app.delete("/post/:id", (request, response, next) => {
  queries.deletePost(request.params.id).then(() => {
    response.status(201).json("Post deleted.");
  }).catch(next);
});
  
app.put("/post/:id", (request, response, next) => {
  queries.updatePost(request.params.id, request.body).then(() => {
    response.status(201).json("Post updated.");
  }).catch(next);
});

app.put ("/post/:id", (request, response, next) => {
  database("post").select("likes").where("id", request.params.id)
    .then((currentLikes) => queries.updateLikes(request.params.id, currentLikes[0].likes))
    .then(comment => {
      response.send(comment);
    })
    .catch(next);
});
app.get("/relationship", (request, response, next) => {
  queries.listRelationship(request.params.id)
    .then(post => {
      post
        ? response.status(201).json({post})
        : response.sendStatus(404);
    }).catch(next);
});

app.get("/comment", (request, response, next) => {
  queries.listComment().then(post => {
    response.status(201).json({post});
  }).catch(next);
});
    
app.get("/comment/:id", (request, response, next) => {
  queries.readComment(request.params.id)
    .then(post => {
      post
        ? response.status(201).json({post})
        : response.sendStatus(404);
    }).catch(next);
});
    
      
app.post("/comment", (request, response, next) => {
  queries.createComment(request.body).then(() => {
    response.status(201).json("Comment added");
  }).catch(next);
});
  
app.delete("/comment/:id", (request, response, next) => {
  queries.deleteComment(request.params.id).then(() => {
    response.status(201).json("Comment deleted.");
  }).catch(next);
});

app.put("/comment/:id", (request, response, next) => {
  queries.updateComment(request.params.id, request.body).then(() => {
    response.status(201).json("Comment updated.");
  }).catch(next);
});

app.use((request, response, next) => {
  var err= new Error("Not found");
  response.status(404);
  next(err);
});

app.use((err, request, response, next) => {
  response.status(response.statusCode || 500);
  response.json({
    message: err.message,
    stack: request.app.get("env") === "development" ? err.stack : {}
  });
});

function getCategories (post){
  return watson(post.content)
    .then(results => {
      let category1 = results.categories[0].label.split("/");
      let category2 = results.categories[1].label.split("/");
      let category3 = results.categories[2].label.split("/");
      let categories = category1.concat(category2, category3);
      return categories;
    }).catch(console.error);
}

module.exports= app;