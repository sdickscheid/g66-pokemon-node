const knex = require("../db/knex.js");

module.exports = {

  // load all trainers
  main: function(req, res) {
    knex('trainers').then((trainerList)=>{
      res.render('trainers', {trainers: trainerList});
    })
  },

  // display single trainer and their pokemon students
  displayTrainer: function(req, res){
    knex('trainers')
    .where('id', req.params.id)
      .then((trainers)=>{

        knex('pokemon')
          .where('trainer_id', trainers[0].id)
          .then((myStudents)=>{

            res.render('trainers_show', {trainerSingle: trainers[0], students: myStudents});
          })
      })
  },


};
