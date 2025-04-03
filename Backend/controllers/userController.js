const userschema = require("../models/userModel")
module.exports = {
    Creatuser : async(req,res) => {
        try {
            const user = await userschema(req.body)
            await user.save()
            res.status(200).json({
               success : true,
               message : "user est crée", 
               data : user
            })
        } catch (error) {
            res.status(400).json({
                success : false ,
                message : "user non crée"+error,
                data : null,
            })
            
        }
    },
    Getuser : async(req,res) => {
            try {
                const user = await userschema.find()
                res.status(200).json({
                   success : true,
                   message : "user est crée", 
                   data : user
                })
            } catch (error) {
                res.status(400).json({
                    success : false ,
                    message : "user non crée"+error,
                    data : null,
                })
                
            }
        },
    getById:async(req,res)=>{
        try{
            const userId=req.params.id
            const getOne=await userschema.findById(userId)
            res.status(200).json({
                success : true,
                message : "user avec cette Id existe ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "user non get"+error,
                data : null,
            })

        }
    },
    DeleteId:async(req,res)=>{
        try{
            const userId=req.params.id
            const getOne=await userschema.findByIdAndDelete(userId)
            res.status(200).json({
                success : true,
                message : "user est supprimée ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "user non supprimée"+error,
                data : null,
            })

        }
    },
    UpdateById: async(req,res)=>{
        try{
            const userId=req.params.id
            const getOne=await userschema.findByIdAndUpdate(userId,req.body,{
                new : true
            })
            res.status(200).json({
                success : true,
                message : "user updated ", 
                data : getOne
             })
        }
        catch(error) {
            res.status(400).json({
                success : false ,
                message : "user non updated"+error,
                data : null,
            })

        }
    },
    
}
