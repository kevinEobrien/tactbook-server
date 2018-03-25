const app = require("./app");
const environment= process.env.NODE_ENV || "development";
const config= require("./knexfile");
const environmentConfig= config[environment];
const knex= require("knex");
const connection= knex(environmentConfig);

app.listen(process.env.PORT || 3000);
module.exports= connection;