const xlsx = require("node-xlsx");
const connection = require("../database/connection");

class ApiController {
  static async importCsv(req, res) {
    const csv = "../api/PokemonGo.xlsx";
    const plan = xlsx.parse(`${__dirname}/../api/PokemonGo.xlsx`);

    const readPlan = plan[0].data.map((data, index) => {
      // return data;
      let dados = {
        row: data[0],
        name: data[1],
        pokedexNumber: data[3],
        imgName: data[4],
        generation: data[5],
        evolutionStage: data[6],
        evolved: data[7],
        familyID: data[8],
        crossGen: data[9],
        type1: data[10],
        type2: data[11],
        weather1: data[12],
        weather2: data[13],
        staTotal: data[14],
        atk: data[15],
        def: data[16],
        sta: data[17],
        legendary: data[18],
        spawns: data[21],
        regional: data[22],
        raidable: data[23],
        hatchable: data[24],
        Shiny: data[25],
        nest: data[26],
        new: data[27],
        notGettable: data[28],
        futureEvolve: data[29],
        CP40: data[30],
        CP39: data[31],
      };
      return dados
    });
    delete readPlan[0];
    try {
       (async () => {
         for (let i in readPlan) {
           const data = readPlan[i];
          //  console.log(data);
           await connection("pokemon").insert(data);
         }
         return res.status(200).send(JSON.stringify(readPlan));
       })();
    } catch (error) {
      return res.status(500).send({message: "Deu ruim inserir banco", error});
    }

    // return res.status(200).send(JSON.stringify(readPlan));
  }
}

module.exports = ApiController;
