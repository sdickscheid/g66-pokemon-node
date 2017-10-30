const knex = require("../db/knex.js");

module.exports = {

  // root domain > show all pokemon page
  index: function(req, res) {
    res.redirect(`/pokemon`)
  },

  // load all pokemon
  main: function(req, res) {
    knex('pokemon').then((pokemonList)=>{
      res.render('pokemon', {poke: pokemonList});
    })
  },

  // display single pokemon and respective trainer
  displayPokemon: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .then((pokemon)=>{

      knex('trainers')
        .where('id', pokemon[0].trainer_id)
        .then((myTrainer)=>{

          res.render('pokemon_show', {pokeSingle: pokemon[0], trainer: myTrainer[0]});
        })
    })
  },

  // render create new pokemon page
  createPage: function(req, res) {
    res.render('pokemon_create')
  },

  // create and submit new pokemon
  create: function(req, res){
    knex('pokemon')
      .insert({
        name: req.body.name,
        in_gym: req.body.in_gym,
        trainer_id: req.body.trainer_id,
        cp: req.body.cp
      }, "*")
      .then(()=>{
        res.redirect(`/pokemon`)
      })
      .catch((err)=>{
          console.log(err)
    })
  },

  // delete pokemon
  delete: function(req, res){
    knex('pokemon')
      .del()
      .where('id', req.params.id)
      .then(()=>{
        res.redirect(`/pokemon`);
      })
  },

  // render edit pokemon page
  getEdit: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
      .then((pokemon)=>{

        // get trainer for pokemon
        knex('trainers')
          .where('id', pokemon[0].trainer_id)
            .then((trainers)=>{

              res.render('pokemon_edit', {poke: pokemon[0], trainer: trainers});
            })
    })
  },

  // make and submit edits to pokemon
  makeEdit: function(req, res){
    knex('pokemon')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{

        res.redirect('/show/' + req.params.id);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

// END module.exports
}
