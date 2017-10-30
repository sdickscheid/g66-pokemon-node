
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('trainers').del()
      .then(function (){
        // Inserts seed entries
        return knex('trainers').insert([
          {id: 1, name: "Markel" },
          {id: 2, name: "Jacob" },
          {id: 3, name: "Ella" },
          {id: 4, name: "Valencia" }
        ]);
      });
};
