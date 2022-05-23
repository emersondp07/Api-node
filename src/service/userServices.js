const User = require('../model/User');
const axios = require('axios').default;

function findAll(req, res) {
    User.findAll().then((result) => res.json(result));
  }
  
  function findById(req, res) {
    User.findByPk(req.params.id).then((result) => res.json(result));
  }
  
async function create(req, res) {
    const { zipcode } = req.body;

    const address = (await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)).data

    const user = await User.create({
        name: req.body.name, 
        birthdate: req.body.birthdate, 
        document: req.body.document, 
        acceptedTerms: req.body.acceptedTerms,
        accessCount: req.body.accessCount,
        zipcode: req.body.zipcode,
        street: address.logradouro,
        neighbothood: address.bairro,
        city: address.localidade,
        state: address.uf,
    }).then((result) => res.json(result));
  }
  
async function updateUser(req, res) {
    await User.update(
        {
        name: req.body.name, 
        birthdate: req.body.birthdate, 
        document: req.body.document, 
        acceptedTerms: req.body.acceptedTerms,
        accessCount: req.body.accessCount,
        zipcode: req.body.zipcode,
        street: req.body.street,
        neighborhood: req.body.neighborhood,
        city: req.body.city,
        state: req.body.state,
        },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    User.findByPk(req.params.id).then((result) => res.json(result));
  }
  
async function deleteUser(req, res) {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((result) => res.json("Deletado com sucesso"));
  }

module.exports = {
    findAll,
    findById,
    create,
    updateUser,
    deleteUser
}