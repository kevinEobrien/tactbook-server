
exports.seed = function   (knex, Promise) {
  return knex("users").del()
    .then(function () {
      return knex("users").insert([
        {
          "id": 1,
          "username": "Kevin O'Brien",
          "profile-pic": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
          "background-pic": "https://s3.amazonaws.com/tactbook/mountains.jpg"
        },
        {
          "id": 2,
          "username": "Kjirsti O'Brien",
          "profile-pic": "https://s3.amazonaws.com/tactbook/kjirsti.jpg",
          "background-pic": "https://s3.amazonaws.com/tactbook/beach.jpg" 
        },
        {
          "id": 3,
          "username": "Patrick Biffle",
          "profile-pic": "https://s3.amazonaws.com/tactbook/biffle.JPG",
          "background-pic": "https://s3.amazonaws.com/tactbook/skateboard.jpg"
        }
      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 4;");
    });
};
