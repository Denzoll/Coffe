const req = require('express/lib/request');
const res = require('express/lib/response');
const Drinks = require('../model/Drinks.modules');



module.exports.drinksController = {
    getDrinks: (req,res) =>{
     Drinks.find({}).select('_id name price').then((data) =>{
     res.json(data)}) 
     .catch((err) => res.json('Something went wrond'))  
    },
    getAvailable:(req,res) => {
        Drinks.find({drinksAvailable:{ 
            $gt:0}}).then((data) => {
                res.json(data)

        })
    },
    aboutDrinks:(req,res) => {
        Drinks.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    postDrinks:(req,res) => {
        Drinks.create({
            name:req.body.name,
            price: req.body.price,
            availability: req.body.availability,
            caffeine: req.body.caffeine,
            capacity: req.body.capacity,
            description: req.body.description,
        }).then(() => {
        res.json('Напиток добавлен')
        } )
        
    },
    deleteDrinks:(req,res) => {
        Drinks.findByIdAndRemove(req.params.id).then((data) => {
            res.json('Напиток удален')
        })
    },
    patchDrinks:(req,res) => {
        Drinks.findByIdAndUpdate(req.params.id, {
            name:req.body.name,
            price:req.body.price,
            availability:req.body.availability,
            caffeine:req.body.caffeine,
            capacity:req.body.capacity,
            description:req.body.description,
        }).then((data) => {
            res.json("Напток изменен")
        })
    } 
}
