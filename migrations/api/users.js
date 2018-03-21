const express= require("express");

const router= express.Router();

//all routes will be prepended by /api/v1/users

router.get("/", (request, response) => {
  response.json([]);
});

module.exports= router;