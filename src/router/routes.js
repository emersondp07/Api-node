const { Router } = require('express');
const express = require('express');
const axios = require('axios').default;

const User = require('../model/User');

const router = express.Router();

router.post('/create', async (req, res) => {
    try{
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/findall', async (req, res) => {
    try{
        const usuarios = await User.findAll();

        return res.json( usuarios );
    } catch(err){
        return res.status(400).send({ error: 'Error loading usuarios' })
    }

});

router.get('/findbyid/:id', async (req, res) => {
    try{
        const usuario = await User.findByPk(req.params.id)

        return res.send( usuario );
    } catch(err){
        return res.status(400).send({ error: 'Error loading usuario' })
    }
});

router.put('/update/:id', async (req, res) => {
    try{
        const usuario = await User.findByPk(req.params.id)

        usuario.name = req.body.name;
        usuario.birthdate = req.body.birthdate; 
        usuario.document = req.body.document;
        usuario.acceptedTerms = req.body.acceptedTerms; 
        usuario.accessCount = req.body.accessCount;

        await usuario.save();

        return res.json(usuario);

    } catch(err){
        return res.status(400).send({ error: 'Error loading usuario' })
    }
});

router.delete('/delete/:id', async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.send('Deletado com sucesso');
    } catch(err){
        return res.status(400).send({ error: 'Error deleting Usuario' })
    }
});



module.exports = router;