
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("TRUNCATE post CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("post").insert([{
            {
                "id": 1,
                "content": "I love going to the park!",
                "imageUrl1": "https://tactbook.s3.amazonaws.com/1522187317880_Screen%20Shot%202018-03-20%20at%202.28.51%20PM.png",
                "imageUrl2": "",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 0
            },
            {
                "id": 2,
                "content": "RIP Terry... We were so blessed to have you in our lives.",
                "imageUrl1": "https://tactbook.s3.amazonaws.com/1522186086501_Terry.JPG",
                "imageUrl2": "https://tactbook.s3.amazonaws.com/1522186089454_Terry2.JPG",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 0
            },
            {
                "id": 3,
                "content": "My dog turned 14 years old. She's pretty spry for an old gal.",
                "imageUrl1": "https://s3.amazonaws.com/tactbook/kylie.jpg",
                "imageUrl2": "",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 3
            },
            {
                "id": 4,
                "content": "I had a great day at Galvanize",
                "imageUrl1": "https://s3.amazonaws.com/tactbook/galvanizeLogo.png",
                "imageUrl2": "",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 0
            },
            {
                "id": 5,
                "content": "It really is a lovely day today.",
                "imageUrl1": "https://s3.amazonaws.com/tactbook/park1.jpg",
                "imageUrl2": "https://s3.amazonaws.com/tactbook/park2.jpg",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 0
            },
            {
                "id": 6,
                "content": "Hamilton was amazing!",
                "imageUrl1": "https://s3.amazonaws.com/tactbook/Hamilton.jpg",
                "imageUrl2": "",
                "name": "Kjirsti O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/kjirsti.jpg",
                "likes": 3
            },
            {
                "id": 7,
                "content": "Crazy hair day was a lot of fun!",
                "imageUrl1": "https://s3.amazonaws.com/tactbook/QuinnCrazyHair.jpg",
                "imageUrl2": "https://s3.amazonaws.com/tactbook/BjornCrazyHair.jpg",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 3
            },
            {
                "id": 8,
                "content": "This is how you make people do a double take.",
                "imageUrl1": "https://s3.amazonaws.com/tactbook/before.jpg",
                "imageUrl2": "https://s3.amazonaws.com/tactbook/After.jpg",
                "name": "Kevin O'Brien",
                "profileUrl": "https://s3.amazonaws.com/tactbook/KevinPic.jpg",
                "likes": 2
            }
      ]); 
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE post_id_seq RESTART WITH 9;");
    });
};
