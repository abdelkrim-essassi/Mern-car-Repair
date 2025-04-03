const repairrequestschema = require("../models/repairrequestModel")
module.exports = {
    Creatrepairrequest : async(req,res) => {
        try {
            const repairresquest = await repairrequestschema(req.body)
            await repairrequest.save()
            res.status(200).json({
               success : true,
               message : "repairequest est crée", 
               data : repairrequest
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "repairrequest non crée"+error,
                data : null,
            })
            
        }
    },
    Getrepairrequest : async(req,res) => {
            try {
                const repairrequest = await repairrequestschema.find()
                res.status(200).json({
                   success : true,
                   message : "repairrequest est crée", 
                   data : repairrequest
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "repairrequest non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const repairrequestId=req.params.id
            const getOne=await repairrequestschema.findById(repairequestId)
            res.status(200).json({
                success : true,
                message : "repairequest avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "repairrequest non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const repairequestId=req.params.id
            const getOne=await repairequestschema.findByIdAndDelete(repairequestId)
            res.status(200).json({
                success : true,
                message : "repairequest est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "repairequest non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const repairequestId=req.params.id
            const getOne=await repairrequestschema.findByIdAndUpdate(repairequestId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "repairequest updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "repairequest non updated"+error,
                data : null,
            })

        }
    },
    
}
 