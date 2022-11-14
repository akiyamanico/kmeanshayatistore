import Selling from "../models/SellModel.js";
import path from "path";
import fs from "fs";
 
export const getSell = async(req, res)=>{
    try {
        const response = await Selling.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
   
}
 
export const getSellById = async(req, res)=>{
    try {
        const response = await Selling.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteSell = async(req, res)=>{
    const product = await Selling.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
 
    try {
        const filepath = `./public/images/${Selling.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const saveSell = (req, res)=>{
   //TODO
}

export const updateSell = async(req, res)=>{
    //TODO
}