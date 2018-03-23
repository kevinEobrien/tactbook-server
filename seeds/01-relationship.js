
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("relationship").del()
    .then(function () {
      // Inserts seed entries
      return knex("relationship").insert([
        {id: 1, 
          "customer_id": 1,
          "customer2_id": 2
        },
        {id: 2, 
          "customer_id": 1,
          "customer2_id": 3
        },
        {id: 3, 
          "customer_id": 2,
          "customer2_id": 3
        }

      ]);
    })
    .then (() => {
      return knex.raw("ALTER SEQUENCE relationship_id_seq RESTART WITH 4;");
    });
};
