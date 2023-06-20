const express = require('express');
const router = express.Router();

const userModel = require('../models/users');

router.use(express.json())

// GETs
router.get('/users', (req, res) => {
    const users = userModel.getAll();
    res.json(users);
})

router.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = userModel.getById(id);
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({error: `User with ${id} not found`})
    }
})

// POSTs
router.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    const newUser = userModel.create(user);
    console.log(newUser);
    res.status(201).json(newUser)
})

// PUTs
router.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    const updatedUser = userModel.update(id, user);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ error: `User with id ${id} not found`});
    }
})

// Delete
router.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedUser = userModel.delete(id);
    if (deletedUser) {
        res.json(deletedUser)
    } else {
        res.status(404).json({ error: `User with id ${id} not found`});
    }
})

module.exports = router; 