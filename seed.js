const csvPlayers = './public/data/players.csv'
const csvRappers = './public/data/rappers.csv'
const csv = require('csvtojson')
const { Player, Highlight, Rapper, Track } = require('./models');

const main = async () => {
    const jsonArrayPlayers = await csv().fromFile(csvPlayers);
    const jsonArrayRappers = await csv().fromFile(csvRappers);

    for (let i = 0; i < jsonArrayPlayers.length; i++) {
        const Players = await Player.create({
          name: jsonArrayPlayers[i].name,
          image_url: jsonArrayPlayers[i].image_url,
          video_url: jsonArrayPlayers[i].video_url
        });
      }

      for (let i = 0; i < jsonArrayRappers.length; i++) {
        const Rappers = await Rapper.create({
          name: jsonArrayRappers[i].name,
          image_url: jsonArrayRappers[i].image_url,
          video_url: jsonArrayRappers[i].video_url
        });
      }
  
    process.exit();
}
  
  main();