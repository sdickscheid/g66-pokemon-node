//Update the name of the controller below and rename the file.
const trainers = require("../controllers/trainers.js");
const pokemon = require("../controllers/pokemon.js");
module.exports = function(app){

  // root domain > show all pokemon page
  app.get('/', pokemon.index);

  // POKEMON ROUTES **************
  // load all pokemon
  app.get('/pokemon', pokemon.main)

  // display single pokemon and respective trainer
  app.get('/show/:id', pokemon.displayPokemon)

  // render create new pokemon page
  app.get('/pokemon/create', pokemon.createPage)

  // create and submit new pokemon
  app.post('/pokemon/create', pokemon.create)

  // delete pokemon
  app.get('/pokemon/delete/:id', pokemon.delete)

  // render edit pokemon page
  app.get('/editPage/:id', pokemon.getEdit)

  // make and submit pokemon updates
  app.post('/update/:id', pokemon.makeEdit)


  // TRAINER ROUTES **************
  // load all trainers
  app.get('/trainers', trainers.main)


  // display a single trainer
    // Upcoming: and their students
  app.get('/show/trainer/:id', trainers.displayTrainer)


    // SESSION ROUTE **************
  // app.get('/gym/add', gym.add)

  // ERROR ROUTES **************
  // Return 404 page if none of the above pathes are reachable
  // app.use(function(req, res){
  //   res.status(404);
  //   res.render('404');
  // })
}
