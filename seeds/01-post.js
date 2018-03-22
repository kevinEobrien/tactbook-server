
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("post").del()
    .then(function () {
      // Inserts seed entries
      return knex("post").insert([
        {
          id: 1, 
          "customer_id": 1,
          "content": "This is how you make people do a double take.",
          "imageUrl1": "https://s3.amazonaws.com/tactbook/before.jpg",
          "imageUrl2": "",
          "likes": 2,
          "markedAbuse": 0
        },
        {
          id: 2,
          "customer_id": 1,
          "content": "Crazy hair day was a lot of fun!",
          "imageUrl1": "https://s3.amazonaws.com/tactbook/BjornCrazyHair.jpg",
          "imageUrl2": "https://s3.amazonaws.com/tactbook/BjornCrazyHair.jpg",
          "likes": 3,
          "markedAbuse": 0
        },
        {id: 3, 
          "customer_id": 2,
          "content": "Hamilton was amazing!",
          "imageUrl1": "https://s3.amazonaws.com/tactbook/Hamilton.jpg",
          "imageUrl2": "",
          "likes": 3,
          "markedAbuse": 0
        }
      ]); 
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE post_id_seq RESTART WITH 4;");
    });
};
