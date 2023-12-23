import { Double } from "mongodb";
import mongoose, { mongo }  from "mongoose";

const bookschema = new mongoose.Schema(
    {
      id: Number,    
      title:  String,
      author: String,
      price:  Number,
      rating: Number,
      image: String, 
      category:String
    }
)

const books = mongoose.model("books",bookschema);

export default books;