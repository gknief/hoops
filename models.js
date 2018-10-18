const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'mixtape_db',
  dialect: 'postgres'
});

const Player = sequelize.define('player', {
    name: Sequelize.TEXT,
    image_url: Sequelize.TEXT,
    video_url: Sequelize.TEXT
});

// const Highlight = sequelize.define('highlight', {
//     highlight_name: Sequelize.TEXT,
//     highlight_url: Sequelize.TEXT
// });

const Rapper = sequelize.define('rapper', {
    name: Sequelize.TEXT,
    image_url: Sequelize.TEXT,
    video_url: Sequelize.TEXT
});

// const Track = sequelize.define('track', {
//     track_name: Sequelize.TEXT,
//     track_url: Sequelize.TEXT
// });

// Player.hasMany(Highlight);
// Highlight.belongsTo(Player);
// Rapper.hasMany(Track);
// Track.belongsTo(Rapper);



module.exports = {
  Player,
//   Highlight,
  Rapper,
//   Track,
  sequelize: sequelize
};
