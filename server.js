const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { Player, Rapper } = require('./models');
const PORT = process.env.PORT || 5678;

const app = express();

app.use("/", express.static("./build/"));

app.use(bodyParser.json());

app.get('/api/players', async (request, response) => {
    const players = await Player.findAll({});
    response.json(players);
});

app.get('/api/rappers', async (request, response) => {
    const rappers = await Rapper.findAll({});
    response.json(rappers);
});

app.post('/api/players', async (request, response) => {
  console.log(request.body)
  const newPlayer = {
    name: request.body.name,
    image_url: request.body.image_url,
    video_url: request.body.video_url
  };
  const player = await Player.create(newPlayer);
  response.json(player);
});

app.put("/api/players/:id", async (request, response) => {
  const playerId = request.params.id;
  const player = await Player.findOne({
    where: {
      id: playerId
    }});
    if (request.body.name !== '') {
      player.name = request.body.name
    }
    if (request.body.image_url !== '') {
      player.image_url = request.body.image_url
    }
    if (request.body.video_url !== '') {
      player.video_url = request.body.video_url
    }
      await player.save();
      response.sendStatus(200);
});
   
  // if (request.body.name) {
  //   name = request.body.name;
  // }
  // if (request.body.image_url) {
  //   image_url = request.body.image_url;
  // }
  // if (request.body.video_url) {
  //   video_url = request.body.video_url;
  // }
  // await editPlayer.update();
  // response.json(editPlayer);

app.delete('/api/players/:id', async (request, response) => {
  const id = request.params.id;
  await Player.destroy({
    where: {
      id: id
    }
  });
    response.sendStatus(200);
});

//   const { name, image_url, video_url } = request.body;

// app.post('/api/CreateMixtape', async (request, response) => {
//   if (!name || !image_url || !video_url) {
//     response.status(400).json({
//       error: "Please complete the form"
//     });
//     return;
//   }
// });


// app.delete('/api/:id/admin', async (request, response) => {
//     const playerId = request.params.id
//     const sequelizeOptions = {};
//     sequelizeOptions.include = {
//       model: Player,
//       where: {
//         id: playerId,
//       },
//       attributes: []
//     }
//     await Player.destroy();
//   });

if (process.env.NODE_ENV == "production") {
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
