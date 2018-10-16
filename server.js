const express = require('express');
const bodyParser = require('body-parser');
const { Player, Highlight, Rapper, Track } = require('./models');
const PORT = process.env.PORT || 5678;

const app = express();

app.use(bodyParser.json());

app.get('/api/players', async (request, response) => {
    const players = await Player.findAll({});
    response.json(players);
});

app.post('/api/players', async (request, response) => {
    const players = await Player.findAll({});
    response.json(players);
});

app.get('/api/rappers', async (request, response) => {
    const rappers = await Rapper.findAll({});
    response.json(rappers);
});

app.delete('/api/:id/admin', async (request, response) => {
    const playerId = request.params.id
    const sequelizeOptions = {};
    sequelizeOptions.include = {
      model: Player,
      where: {
        id: playerId,
      },
      attributes: []
    }
    await Player.destroy();
  });
  

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
