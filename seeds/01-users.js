
exports.seed = function   (knex, Promise) {
  return knex("users").del()
    .then(function () {
      return knex("users").insert([
        {
          "id": 1,
          "name": "Kevin O'Brien",
          "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
          "backgroundUrl": "https://s3.amazonaws.com/tactbook/mountains.jpg"
        },
        {
          "id": 2,
          "name": "Kjirsti O'Brien",
          "profileUrl": "https://s3.amazonaws.com/tactbook/kjirsti.jpg",
          "backgroundUrl": "https://s3.amazonaws.com/tactbook/beach.jpg" 
        },
        {
          "id": 3,
          "name": "Patrick Biffle",
          "profileUrl": "https://s3.amazonaws.com/tactbook/biffle.JPG",
          "backgroundUrl": "https://s3.amazonaws.com/tactbook/skateboard.jpg"
        }
      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 4;");
    });
};
