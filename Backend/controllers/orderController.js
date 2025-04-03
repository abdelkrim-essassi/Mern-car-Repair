const orderschema = require("../models/orderModel")
module.exports = {
    Creatorder : async(req,res) => {
        try {
            const order = await orderschema(req.body)
            await order.save()
            res.status(200).json({
               success : true,
               message : "order est crée", 
               data : order
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "order non crée"+error,
                data : null,
            })
            
        }
    },
    Getorder : async(req,res) => {
            try {
                const order = await orderschema.find()
                res.status(200).json({
                   success : true,
                   message : "order est crée", 
                   data : order
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "order non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const orderId=req.params.id
            const getOne=await orderschema.findById(orderId)
            res.status(200).json({
                success : true,
                message : "order avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "order non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const orderId=req.params.id
            const getOne=await orderschema.findByIdAndDelete(orderId)
            res.status(200).json({
                success : true,
                message : "order est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "order non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const orderId=req.params.id
            const getOne=await orderschema.findByIdAndUpdate(orderId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "order updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "order non updated"+error,
                data : null,
            })

        }
    },
    
}
