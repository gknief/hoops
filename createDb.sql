DROP DATABASE IF EXISTS mixtape_db;
CREATE DATABASE mixtape_db;

\c mixtape_db;

DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id serial PRIMARY KEY,
  name TEXT,
  image_url varchar(300) NOT NULL,
  video_url varchar(100) NOT NULL
);

DROP TABLE IF EXISTS rappers;

CREATE TABLE rappers (
  id serial PRIMARY KEY,
  name TEXT,
  image_url varchar(300) NOT NULL,
  video_url varchar(100) NOT NULL
);
