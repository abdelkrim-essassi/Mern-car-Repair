const adminschema = require("../models/adminModel")
module.exports = {
    Creatadmin : async(req,res) => {
        try {
            const admin = await adminschema(req.body)
            await admin.save()
            res.status(200).json({
               success : true,
               message : "admin est crée", 
               data : admin
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "admin non crée"+error,
                data : null,
            })
            
        }
    },
    Getadmin : async(req,res) => {
            try {
                const admin = await adminschema.find()
                res.status(200).json({
                   success : true,
                   message : "admin est crée", 
                   data : admin
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "admin non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const adminId=req.params.id
            const getOne=await adminschema.findById(adminId)
            res.status(200).json({
                success : true,
                message : "admin avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "admin non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const adminId=req.params.id
            const getOne=await adminschema.findByIdAndDelete(adminId)
            res.status(200).json({
                success : true,
                message : "admin est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "admin non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const adminId=req.params.id
            const getOne=await adminschema.findByIdAndUpdate(adminId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "admin updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "admin non updated"+error,
                data : null,
            })

        }
    },
    
}
 