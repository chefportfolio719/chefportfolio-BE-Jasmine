const db = require('../data/dbConfig');

module.exports ={
  allChefs,
  ChefById,
  addChef,
  removeChef,
  updateChef,
};

function find(query) {
  let {sortby = 'id', sortdir = 'asc' } = query;

  let rows = db('chefs')
    .orderBy(sortby, sortdir)
   

  return rows;
}