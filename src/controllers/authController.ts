import express from 'express';
import { Router } from 'express-serve-static-core';

const User = require('../models/country');
const router = express.Router();

router.post('/register', async (req, res) => { // register route for new Users to register with the system and create a new account
  try {
    const user = await User.create(req.body);
    return res.status(201).send({user});
  }
  catch (err) {
    return res.status(400).send({error: `}`, message: ""});
  }
}
);

router.get('/register', async (req, res) => { // register route for new Users to register with the system and create a new account
  try {
    const user = await User.find();
    return res.status(200).send({user});
  }
  catch (err) {
    return res.status(400).send({error: `}`, message: ""});
  }
}
);

router.delete('/register', async (req, res) => { // register route for new Users to register with the system and create a new account
  try {
    const user = await User.deleteOne(req.body);
    return res.status(200).send({user});
  }
  catch (err) {
    return res.status(400).send({error: `}`, message: ""});
  }
}
);

router.put('/register', async (req, res) => { // register route for new Users to register with the system and create a new account
  try {
    const user = await User.updateOne(req.body);
    return res.status(200).send({user});
  }
  catch (err) {
    return res.status(400).send({error: `}`, message: ""});
  }
}
);

router.patch('/register', async (req, res) => { // register route for new Users to register with the system and create a new account
  try {
    const user = await User.updateOne(req.body);
    return res.status(200).send({user});
  }
  catch (err) {
    return res.status(400).send({error: `}`, message: ""});
  }
}
);

module.exports = (app: { use: (arg0: string, arg1: Router) => void; }) => {
  app.use('/auth', router);
}