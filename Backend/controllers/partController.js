const partschema = require("../models/partModel")
module.exports = {
    Creatpart : async(req,res) => {
        try {
            const part = await partschema(req.body)
            await part.save()
            res.status(200).json({
               success : true,
               message : "part est crée", 
               data : part
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "part non crée"+error,
                data : null,
            })
            
        }
    },
    Getpart : async(req,res) => {
            try {
                const part = await partschema.find()
                res.status(200).json({
                   success : true,
                   message : "part est crée", 
                   data : part
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "part non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const partModelId=req.params.id
            const getOne=await partschema.findById(partId)
            res.status(200).json({
                success : true,
                message : "part avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "part non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const partId=req.params.id
            const getOne=await partschema.findByIdAndDelete(partId)
            res.status(200).json({
                success : true,
                message : "part est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "part non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const partId=req.params.id
            const getOne=await partschema.findByIdAndUpdate(partId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "part updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "part non updated"+error,
                data : null,
            })

        }
    },
    
}
 