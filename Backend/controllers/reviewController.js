const reviewschema = require("../models/reviewModel")
module.exports = {
    Creatreview : async(req,res) => {
        try {
            const review = await reviewschema(req.body)
            await review.save()
            res.status(200).json({
               success : true,
               message : "review est crée", 
               data : review
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "review non crée"+error,
                data : null,
            })
            
        }
    },
    Getreview : async(req,res) => {
            try {
                const review = await reviewschema.find()
                res.status(200).json({
                   success : true,
                   message : "review est crée", 
                   data : review
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "review non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const reviewId=req.params.id
            const getOne=await reviewschema.findById(reviewId)
            res.status(200).json({
                success : true,
                message : "review avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "review non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const reviewId=req.params.id
            const getOne=await reviewschema.findByIdAndDelete(reviewId)
            res.status(200).json({
                success : true,
                message : "review est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "review non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const reviewId=req.params.id
            const getOne=await reviewschema.findByIdAndUpdate(reviewId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "review updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "review non updated"+error,
                data : null,
            })

        }
    },
    
}
 