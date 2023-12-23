import express from 'express'
import books from '../model/bookschema.js';
import users from '../model/userSchema.js';
const router = express.Router();
import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import {body, validationResult} from "express-validator";

router.post("/login", async(req,res)=>{
      const {email,password}=req.body;

      try {
        const check = await users.find({email:email});
        console.log(check);
        if(check.length>0)
        {
            const isValid = await bcrypt.compare(password,check[0].password);
            if(isValid)
            {
                res.json("exist");
            }
            else
            {
                res.json("invalid")
            } 
            
        }
        else{
            res.json("notexist");
        }
      } catch (error) {
        console.log(error);
      }
})

router.post("/signup",
    
    [
        body("name").notEmpty().withMessage("Name is Required"),
        body("email").isEmail().withMessage("Email format is not valid"),
        body("password").isLength({min:8}).withMessage("Password must be at least 8 character long")
    ],

    async(req,res)=>{

    const errors = validationResult(req);
     if(!errors.isEmpty()) {
       
       return  res.json({ errors: errors.array() });
      }    
    const {name,email,password}=req.body;
    const hpassword = await bcrypt.hash(password,10);
    const data= {
        name:name,
        email:email,
        password:hpassword
    }
   
    try {
        
        const check = await users.find({email:email});
        
        if(check.length>0)
        {
            res.json("alreadyexist");
        }
        else
        {
            await users.insertMany([data]);
            res.json("added");
        }



    } catch (error) {
        console.log(error);
    }
})


router.post("/add", async(req,res)=>{
    try {
        const newProduct = new books(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
})

router.get("/search",async(req,res)=>{

    const searchInput = req.query.search;

  try {
    
    const searchResults = await books.find({ title: { $regex: new RegExp(searchInput, 'i') } });

    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
})

router.get("/all",async(req,res)=>{

    try {
        const products = await books.find();
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/business", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Business"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/fiction", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Fiction"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/mystery", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Mystery"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/motivational", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Motivational"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/fantasy", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Fantasy"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

export default router;