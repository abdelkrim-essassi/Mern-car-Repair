const mechanicschema = require("../models/mechanicModel")
module.exports = {
    Creatmechanin : async(req,res) => {
        try {
            const mechanic = await mechanicschema(req.body)
            await mechanic.save()
            res.status(200).json({
               success : true,
               message : "mechanic est crée", 
               data : mechanic
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "mechanic non crée"+error,
                data : null,
            })
            
        }
    },
    Getmechanic : async(req,res) => {
            try {
                const mechanic = await mechanicschema.find()
                res.status(200).json({
                   success : true,
                   message : "mechanic est crée", 
                   data : mechanic
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "mechanic non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const mechanicId=req.params.id
            const getOne=await mechanicschema.findById(mechanicId)
            res.status(200).json({
                success : true,
                message : "mechanic avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "mechanic non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const mechanicId=req.params.id
            const getOne=await mechanicschema.findByIdAndDelete(mechanicId)
            res.status(200).json({
                success : true,
                message : "mechanic est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "mechanic non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const mechanicId=req.params.id
            const getOne=await mechanicschema.findByIdAndUpdate(mechanicId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "mechanic updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "mechanic non updated"+error,
                data : null,
            })

        }
    },
    
}
 