const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  // return here to make sure that response just only one
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};
