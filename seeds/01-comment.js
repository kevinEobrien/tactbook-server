
exports.seed = function(knex, Promise) {
  return knex("comment").del()
    .then(function () {
      return knex("comment").insert([
        {
          id: 1, 
          "post_id": 1,
          "customer_id": 2,
          "comment": "I thought I would never see your face again!"
        },{
          id: 2, 
          "post_id": 1,
          "customer_id": 3,
          "comment": "Looking good, Sean..."
        }
      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE comment_id_seq RESTART WITH 3;");
    }); 
};
