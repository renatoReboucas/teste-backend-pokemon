const bodyParser = require("body-parser");
const CsvController = require('../Controller/CsvController')

module.exports = (app) => {
  app.use(bodyParser.json());

  // fala que vai usar o arquivo de rotas de pessoas
  // app.use(robo);

  app.get("/", (req, res) => {
    res.status(200).send({ message: "boas-vindas a API Pokémon GO" });
  });

  app.get("/import", CsvController.importCsv);

  // app.get('')
};
