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
  listRelationship(customer_id){
    return database("customer")
      .where("customer.id", customer_id)
      .leftJoin("relationship", "name");
  },
  readRelationship(id){
    return database("relationship").where("id", id).first();
  },
  createRelationship(customer_id, customer2_id){
    return database("realtionship").insert(customer_id, customer2_id).returning("*").then(record => record[0]);
  },
  deleteRelationship(id){
    return database("relationship").delete().where("id", id);
  },
  listPost(){
    return database("post")
      .select("post.id as id", "content", "imageUrl1","imageUrl2","name","profileUrl", "likes")
      .orderBy("id", "desc")
      .leftJoin("customer", "customer_id", "customer.id");
  },
  readPost(id){
    return database("post").where("id", id).first();
  },
  createPost(post){
    return database("post").insert(post).returning("*").then(record => record[0]);
  },
  deletePost(id){
    return database("post").delete().where("id", id);
  },
  updatePost(id, post){
    return database("post").update(post).where("id", id).returning("*").then(record => record[0]);
  },
  updateLikes(id, currentLikes){
    return database("laughs")
      .where("id",id)
      .returning("*")  
      .update({"likes": (currentLikes+1)})
      .then(record=> record);
  },
  listComment(){
    return database("comment")
      .select("comment.id as id", "post_id", "body")
      .leftJoin("post", "post_id","post.id");
  }
};