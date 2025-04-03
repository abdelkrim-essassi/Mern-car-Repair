const orderitemschema = require("../models/orderitemModel")
module.exports = {
    Creatorderitem : async(req,res) => {
        try {
            const orderitem = await orderitemschema(req.body)
            await orderitem.save()
            res.status(200).json({
               success : true,
               message : "orderitem est crée", 
               data : orderitem
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "orderitem non crée"+error,
                data : null,
            })
            
        }
    },
    Getorderitem : async(req,res) => {
            try {
                const orderitem = await orderitemschema.find()
                res.status(200).json({
                   success : true,
                   message : "orderitem est crée", 
                   data : orderitem
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "orderitem non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const orderitemId=req.params.id
            const getOne=await orderitemschema.findById(orderitemId)
            res.status(200).json({
                success : true,
                message : "orderitem avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "orderitem non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const orderitemId=req.params.id
            const getOne=await orderitemschema.findByIdAndDelete(orderitemId)
            res.status(200).json({
                success : true,
                message : "orderitem est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "orderitem non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const orderitemId=req.params.id
            const getOne=await orderitemschema.findByIdAndUpdate(orderitemId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "orderitem updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "orderitem non updated"+error,
                data : null,
            })

        }
    },
    
}
 