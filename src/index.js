const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


const port = 3333;

// disponibiliza as rotas no arquivo base
routes(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
