import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name:{type:String,require:true},
    city:{type:String,require:true},
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Items
    }]
},{timestamps:true})

const Restaurant = mongoose.model('Restaurant',restaurantSchema)

export default Restaurant