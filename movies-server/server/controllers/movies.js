const { Movies : MoviesServices } = require('../services');

const getList = async (req, res) => {

  const {doc} = await MoviesServices.getList();

  return res.send(doc);
};

module.exports={
  getList,
}
