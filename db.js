<<<<<<< HEAD
const { default: axios } = require('axios');

const DB = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = DB;
=======
const { default: axios } = require("axios");

const DB = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = DB;
>>>>>>> b753ad3b4af17f0cf6f08b30858b4e085762dd8a
