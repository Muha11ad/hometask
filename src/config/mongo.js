import mongoose from "mongoose";

export async function customMongo(){
    return await mongoose.connect("mongodb://localhost:27017/movies")
}