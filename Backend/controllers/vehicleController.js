const vehicleschema = require("../models/vehicleModel")
module.exports = {
    Creatvehicle : async(req,res) => {
        try {
            const vehicle = await vehicleschema(req.body)
            await vehicle.save()
            res.status(200).json({
               success : true,
               message : "vehicle est crée", 
               data : vehicle
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "vehicle non crée"+error,
                data : null,
            })
            
        }
    },
    Getvehicle : async(req,res) => {
            try {
                const vehicle = await vehicleschema.find()
                res.status(200).json({
                   success : true,
                   message : "vehicle est crée", 
                   data : vehicle
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "vehicle non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const vehicleId=req.params.id
            const getOne=await vehicleschema.findById(vehicleId)
            res.status(200).json({
                success : true,
                message : "vehicle avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "vehicle non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const vehicleId=req.params.id
            const getOne=await vehicleschema.findByIdAndDelete(vehicleId)
            res.status(200).json({
                success : true,
                message : "vehicle est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "vehicle non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const vehicleId=req.params.id
            const getOne=await vehicleschema.findByIdAndUpdate(vehicleId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "vehicle updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "vehicle non updated"+error,
                data : null,
            })

        }
    },
    
}
 