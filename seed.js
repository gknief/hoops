const csvPlayers = './public/data/players.csv'
const csvRappers = './public/data/rappers.csv'
const csv = require('csvtojson')
const { Player, Highlight, Rapper, Track } = require('./models');

const main = async () => {
    const jsonArrayPlayers = await csv().fromFile(csvPlayers);
    const jsonArrayRappers = await csv().fromFile(csvRappers);

    for (let i = 0; i < jsonArrayTeams.length; i++) {
        const Players = await Player.create({
          name: jsonArrayPlayers[i].Name,
          imageUrl: jsonArrayPlayers[i].ImageUrl
        });
      }
  
    process.exit();
  }
  
  main();