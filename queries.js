const database = require("./database-connection");
const watson = require("./watson");


module.exports = {
  listCustomers(){
    return database("customer");
  },
  readCustomer(id){
    return database("customer").where("id", id).first();
  },
  createCustomer(customer){
    return database("customer").insert(customer).returning("*").then(record => record[0]);
  },
  deleteCustomer(id){
    return database("customer").delete().where("id", id);
  },
  updateCustomer(id, customer){
    return database("customer").update(customer).where("id", id).returning("*").then(record => record[0]);
  },
  listRelationship(){
    return database("relationship");
  },
  readRelationship(id){
    return database("relationship").where("id", id).first();
  },
  //   createRelationship(customer_id, customer2_id){
  //     return database("realtionship").insert(customer, customer_2).returning("*").then(record => record[0]);
  //   },
  deleteRelationship(id){
    return database("relationship").delete().where("id", id);
  },
  listPost(){
    return database("post");
  },
  readPost(id){
    return database("post").where("id", id).first();
  },
  createPost(post){
    // watson(post.content)
    //   .then(results => {
    //     let category1 = results.categories[0].label.split("/");
    //     let category2 = results.categories[1].label.split("/");
    //     let category3 = results.categories[2].label.split("/");
    //     let categories = category1.concat(category2, category3);  
    return database("post").insert(post).returning("*").then(record => record[0]);
  },
  deletePost(id){
    return database("post").delete().where("id", id);
  },
  updatePost(id, post){
    return database("post").update(post).where("id", id).returning("*").then(record => record[0]);
  }
};