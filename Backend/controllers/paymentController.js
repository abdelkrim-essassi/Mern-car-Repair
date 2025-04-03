const paymentschema = require("../models/paymentModel")
module.exports = {
    Creatpayment : async(req,res) => {
        try {
            const payment = await paymentschema(req.body)
            await payment.save()
            res.status(200).json({
               success : true,
               message : "payment est crée", 
               data : payment
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "payment non crée"+error,
                data : null,
            })
            
        }
    },
    Getpayment : async(req,res) => {
            try {
                const payment = await paymentschema.find()
                res.status(200).json({
                   success : true,
                   message : "payment est crée", 
                   data : payment
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "payment non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const paymentId=req.params.id
            const getOne=await paymentschema.findById(paymentId)
            res.status(200).json({
                success : true,
                message : "payment avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "payment non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const paymentId=req.params.id
            const getOne=await paymentschema.findByIdAndDelete(paymentId)
            res.status(200).json({
                success : true,
                message : "payment est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "payment non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const paymentId=req.params.id
            const getOne=await paymentschema.findByIdAndUpdate(paymentId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "payment updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "payment non updated"+error,
                data : null,
            })

        }
    },
    
}
 