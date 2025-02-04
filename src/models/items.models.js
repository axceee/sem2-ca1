import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    name:{type:String,require:true},
    prince:{type:String,require:true}
},{timestamps:true})

const Items = mongoose.model('Items',itemsSchema)

export default Items