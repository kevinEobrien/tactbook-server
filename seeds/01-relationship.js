
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("relationship").del()
    .then(function () {
      // Inserts seed entries
      return knex("relationship").insert([
        {id: 1, 
          "user1_id": 1,
          "user2_id": 2
        },
        {id: 2, 
          "user1_id": 1,
          "user2_id": 3
        },
        {id: 3, 
          "user1_id": 2,
          "user2_id": 3
        }

      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE relationship_id_seq RESTART WITH 4;");
    });
};
