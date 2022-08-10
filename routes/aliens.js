const express = require('express')
const Alien = require('../models/alien')
const router = express.Router()

router.get('/', async(req,res)=>{
     try{
        const aliens = await Alien.find()
        res.json(aliens)
     }catch(err){
        res.send('Error '+ err)
     }
})
router.get('/:id',asyn*+-c (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error' + err )
    }
})

router.patch('/:id', async (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub=req.body.sub
        const a2= await alien.save()
        res.json(a2)
    }catch(err){
        res.send('Error')
    }
})

//post jisme ham server ko client side se data bhejenge
router.post('/', async(req,res)=>
{
    const alien = new Alien({
        name: req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })// this object will catch all the data, now we will try to save it
    try{
        const a1= await alien.save()
        res.json(a1)
    } catch(err)   {
        res.send('Error')
    }
}
)
module.exports = router