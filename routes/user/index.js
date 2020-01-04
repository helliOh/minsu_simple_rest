const express = require('express');
const router = express.Router();

const { User } = require("../../models");

//CREATE
router.post('/create', async (req, res, next) =>{
  try{
    let user = await User.create(req.body);
    res.send({
      success: true,
      user : user
    });
  }
  catch(e){
    console.log(e);
    res.status(500).send({success: false});
  }
});
//READ
router.get('/', async (req, res, next) =>{
  try{
    let user = await User.findAll({});
    res.json(user);
  }
  catch(e){
    console.log(e);
    res.status(500).send({success: false});
  }
});
router.get('/:id', async (req, res, next) =>{
  try{
    let user = await User.findOne({
      where : {id : req.params.id}
    });
    res.json(user);
  }
  catch(e){
    console.log(e);
    res.status(500).send({success: false});
  }
});
//UPDATE
router.put('/:id', async (req, res, next) =>{
  try{
    console.log(req.body);
    let newUser = await User.update(req.body, {
      where : { id: req.params.id }
    });  
    res.json(newUser);
  }
  catch(e){
    console.log(e);
    res.status(500).send({success: false});
  }
});
//DELETE
router.delete('/:id', async (req, res, next) =>{
  try{
    let user = await User.destroy({
      where : { id : req.params.id}
    });
    res.json(user);
  }
  catch(e){
    console.log(e);
    res.status(500).send({success: false});
  }
});

module.exports = router;
