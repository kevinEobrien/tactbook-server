const express = require("express");
const cors = require("cors");
const path= require("path");
const bodyParser= require("body-parser");
// const watson= require("./watson.js");
const queries = require("./queries");
const app= express();

// const relationship= require("./migrations/api/relationship");

app.use(cors());
app.use(bodyParser.json());

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
  queries.createPost(request.body)
    .then(() => {
      response.status(201).json("Post successful");
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

module.exports= app;