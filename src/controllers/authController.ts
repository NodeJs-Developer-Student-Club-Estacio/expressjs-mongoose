import express from 'express';
import { Router } from 'express-serve-static-core';

const User = require('../models/country');
const router = express.Router();

router.post('/signup', async (req, res) => { // signup route for new Users to register with the system and create a new account
  // const { name, email, password } = req.body;
  // const newUser = new User({
  //   name,
  //   email,
  //   password,
  // });
  // await newUser.save();
  // res.send('User created successfully');
  try {
    const user = await User.create(req.body);
    return res.status(201).send({user});
  }
  catch (err) {
    return res.status(400).send({error: `}`, message: ""});
  }
}
);

module.exports = (app: { use: (arg0: string, arg1: Router) => void; }) => {
  app.use('/auth', router);
}