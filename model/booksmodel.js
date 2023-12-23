import mongoose from "mongoose";
import books from "./bookschema.js";
import ConnectDb from "../Connection/ConnectDb.js";

const createDocument =async()=>{
        try {
             await ConnectDb();
             
             const newItem = new books({
                  id:2,
                  title:"Auto Biography of a Yogi",
                  author:"Paramhans Yoganand",
                  price:250,
                  rating:5,
                  image:"https://m.media-amazon.com/images/I/51bX4hDuBIL.jpg",
                  category:"Spiritual"
             })
             const result = await newItem.save();
             console.log("Book saved successfully : ",result);

        }
        catch (error) {
            console.error("Error occurred:", error);
        }   
        finally{
            mongoose.connection.close();
        }  
}

//createDocument();


const getProducts = async()=>{
             try {

                await ConnectDb();
                const Products = await books.find();
                console.log("Retrieved Products:");
                console.log(Products);
             }
             catch (error) {
                console.error("Error occurred:", error);
             }
             finally{
                mongoose.connection.close();
             }
}

//getProducts();


const getCategory =async(cat)=>{
        try {
            
            ConnectDb();
            
            const productsOfCategory = await books.find({category:cat})
            console.log(productOfCategory);
        } 
        catch (error) {
            console.error("Error occurred:", error);
         }
         finally{
            mongoose.connection.close();
            return productOfCategory;
         }
}


//getCategory();


const insertManyBooks =async()=>{
    try {
         ConnectDb();
         const products = [
          {
              "id":     "1",
              "title":  "The Silent Patient",
              "author":  "F. Scott Fitzgerald",
              "price":  12.99,
              "rating":  4.5,
              "image":   "https://m.media-amazon.com/images/I/81JJPDNlxSL._SL1500_.jpg",
              "category": "Fiction"
          },
          {
              "id": "2",
              "title": "A Man called Ove",
              "author": "Harper Lee",
              "price": 10.49,
              "rating": 4.8,
              "image": "https://m.media-amazon.com/images/I/81DXIOk9glL._SL1500_.jpg",
              "category": "Fiction"
          },
          {
              "id": "3",
              "title": "Fascination",
              "author": "Anne Hampson",
              "price": 14.99,
              "rating": 4.7,
              "image": "https://covers.openlibrary.org/b/id/10754464-L.jpg",
              "category": "Fantasy"
          },
          {
              "id": "4",
              "title": "Discoveries in non-fiction",
              "author": "Yuval Noah Harari",
              "price": 16.95,
              "rating": 4.4,
              "image": "https://covers.openlibrary.org/b/id/12141259-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "5",
              "title": "Mahagatha",
              "author": "J.D. Salinger",
              "price": 9.99,
              "rating": 4.2,
              "image": "https://m.media-amazon.com/images/I/A1NQCPdK9UL._SL1500_.jpg",
              "category": "Fiction"
          },
          {
              "id": "6",
              "title": "A Game of Thrones",
              "author": "J.R.R. Tolkien",
              "price": 19.99,
              "rating": 4.9,
              "image": "https://covers.openlibrary.org/b/id/11291394-L.jpg",
              "category": "Fantasy"
          },
          {
              "id": "7",
              "title": "The Da Vinci Code",
              "author": "Dan Brown",
              "price": 14.95,
              "rating": 4.1,
              "image": "https://covers.openlibrary.org/b/id/14425866-L.jpg",
              "category": "Mystery"
          },
          {
              "id": "8",
              "title": "1984",
              "author": "George Orwell",
              "price": 11.99,
              "rating": 4.6,
              "image": "https://covers.openlibrary.org/b/id/8579190-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "9",
              "title": "The Hidden Hindu",
              "author": "Paulo Coelho",
              "price": 9.99,
              "rating": 4.7,
              "image": "https://m.media-amazon.com/images/I/81ZI8RyyynL._SL1500_.jpg",
              "category": "Fiction"
          },
          {
              "id": "10",
              "title": "The paradise mystery",
              "author": "Alex Michaelides",
              "price": 12.49,
              "rating": 4.3,
              "image": "https://covers.openlibrary.org/b/id/5843720-L.jpg",
              "category": "Mystery"
          },
          {
              "id": "11",
              "title": "Pride and Prejudice",
              "author": "Jane Austen",
              "price": 8.99,
              "rating": 4.7,
              "image": "https://covers.openlibrary.org/b/id/14348568-L.jpg",
              "category": "Romance"
          },
          {
              "id": "12",
              "title": "Harry Potter and the Sorcerer's Stone",
              "author": "J.K. Rowling",
              "price": 14.99,
              "rating": 4.8,
              "image": "https://covers.openlibrary.org/b/id/13741661-L.jpg",
              "category": "Fantasy"
          },
          {
              "id": "13",
              "title": "The Hunger Games",
              "author": "Suzanne Collins",
              "price": 11.49,
              "rating": 4.5,
              "image": "https://covers.openlibrary.org/b/id/12646545-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "14",
              "title": "The Girl on the Train",
              "author": "Paula Hawkins",
              "price": 13.95,
              "rating": 4.2,
              "image": "https://covers.openlibrary.org/b/id/13078078-L.jpg",
              "category": "Mystery"
          },
          {
              "id": "15",
              "title": "The Shining",
              "author": "Stephen King",
              "price": 12.99,
              "rating": 4.6,
              "image": "https://covers.openlibrary.org/b/id/7013717-L.jpg",
              "category": "Horror"
          },
          {
              "id": "16",
              "title": "Brave New World",
              "author": "Aldous Huxley",
              "price": 10.99,
              "rating": 4.4,
              "image": "https://covers.openlibrary.org/b/id/12643487-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "17",
              "title": "Gone with the Wind",
              "author": "Margaret Mitchell",
              "price": 15.95,
              "rating": 4.3,
              "image": "https://covers.openlibrary.org/b/id/8296480-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "18",
              "title": "A Gentle Man in Moscow",
              "author": "J.D. Salinger",
              "price": 9.99,
              "rating": 4.2,
              "image": "https://m.media-amazon.com/images/I/91+5X0bukSL._SL1500_.jpg",
              "category": "Fiction"
          },
          {
              "id": "19",
              "title": "On The Road",
              "author": "Cormac McCarthy",
              "price": 11.95,
              "rating": 4.8,
              "image": "https://covers.openlibrary.org/b/id/1632460-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "20",
              "title": "The Martian",
              "author": "Andy Weir",
              "price": 13.49,
              "rating": 4.5,
              "image": "https://covers.openlibrary.org/b/id/11447888-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "21",
              "title": "Dune",
              "author": "Frank Herbert",
              "price": 14.99,
              "rating": 4.7,
              "image": "https://covers.openlibrary.org/b/id/9705237-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "22",
              "title": "The Goldfinch",
              "author": "Donna Tartt",
              "price": 12.95,
              "rating": 4.6,
              "image": "https://covers.openlibrary.org/b/id/12727864-L.jpg",
              "category": "Fiction"
          },
          {
              "id": "23",
              "title": "Atomic Habits",
              "author": "Kathryn Stockett",
              "price": 11.49,
              "rating": 4.5,
              "image": "https://covers.openlibrary.org/b/id/9279057-L.jpg",
              "category": "Business"
          },
          {
              "id": "24",
              "title": "The Road Not Taken",
              "author": "Robert Frost",
              "price": 7.99,
              "rating": 4.4,
              "image": "https://covers.openlibrary.org/b/id/12964292-L.jpg",
              "category": "Poetry"
          },
          {
              "id": "25",
              "title": "The Adventures of Sherlock Holmes",
              "author": "Arthur Conan Doyle",
              "price": 10.95,
              "rating": 4.7,
              "image": "https://covers.openlibrary.org/b/id/12082098-L.jpg",
              "category": "Mystery"
          },
          {
              "id": "26",
              "title": "The Road Less Traveled",
              "author": "M. Scott Peck",
              "price": 9.99,
              "rating": 4.0,
              "image": "https://covers.openlibrary.org/b/id/450171-L.jpg",
              "category": "Motivational"
            },
            {
              "id": "27",
              "title": "The Chronicles of Narnia",
              "author": "C.S. Lewis",
              "price": 17.99,
              "rating": 4.6,
              "image": "https://covers.openlibrary.org/b/id/13236788-L.jpg",
              "category": "Fantasy"
            },
            {
              "id": "28",
              "title": "The Maid",
              "author": "John Steinbeck",
              "price": 12.95,
              "rating": 4.3,
              "image": "https://m.media-amazon.com/images/I/71u77RnH8HL._SL1500_.jpg",
              "category": "Fiction"
            },
            {
              "id": "29",
              "title": "The Art of War",
              "author": "Sun Tzu",
              "price": 8.49,
              "rating": 4.7,
              "image": "https://covers.openlibrary.org/b/id/120792-L.jpg",
              "category": "Military"
            },
            {
              "id": "30",
              "title": "The Road to Serfdom",
              "author": "Friedrich Hayek",
              "price": 11.99,
              "rating": 4.5,
              "image": "https://covers.openlibrary.org/b/id/11423722-L.jpg",
              "category": "Political"
            },
            {
              "id": "31",
              "title": "The Night Circus",
              "author": "Erin Morgenstern",
              "price": 13.49,
              "rating": 4.4,
              "image": "https://covers.openlibrary.org/b/id/8750523-L.jpg",
              "category": "Fantasy"
            },
            {
              "id": "32",
              "title": "The Art of Happiness",
              "author": "Dalai Lama",
              "price": 10.99,
              "rating": 4.2,
              "image": "https://covers.openlibrary.org/b/id/10699158-L.jpg",
              "category": "Motivational"
            },
            {
              "id": "33",
              "title": "The Road to Character",
              "author": "David Brooks",
              "price": 12.95,
              "rating": 4.1,
              "image": "https://covers.openlibrary.org/b/id/13729270-L.jpg",
              "category": "Motivational"
            },
            {
              "id": "34",
              "title": "The Girl with the Dragon Tattoo",
              "author": "Stieg Larsson",
              "price": 11.95,
              "rating": 4.6,
              "image": "https://covers.openlibrary.org/b/id/10871094-L.jpg",
              "category": "Mystery"
            },
            {
              "id": "35",
              "title": "The Power of Now",
              "author": "Eckhart Tolle",
              "price": 14.99,
              "rating": 4.7,
              "image": "https://covers.openlibrary.org/b/id/832489-L.jpg",
              "category": "Spirituality"
            },
            {
              "id": "36",
              "title": "The Picture of Dorian Gray",
              "author": "Oscar Wilde",
              "price": 9.95,
              "rating": 4.3,
              "image": "https://covers.openlibrary.org/b/id/14314462-L.jpg",
              "category": "Literature"
            },
            {
              "id": "37",
              "title": "The Great Expectations",
              "author": "Charles Dickens",
              "price": 11.99,
              "rating": 4.0,
              "image": "https://covers.openlibrary.org/b/id/6595466-L.jpg",
              "category": "Literature"
            },
            {
              "id": "38",
              "title": "The Art of Deception",
              "author": "Kevin D. Mitnick",
              "price": 15.49,
              "rating": 4.2,
              "image": "https://covers.openlibrary.org/b/id/12784823-L.jpg",
              "category": "Cybersecurity"
            },
            {
              "id": "39",
              "title": "The Sun Also Rises",
              "author": "Ernest Hemingway",
              "price": 10.95,
              "rating": 4.4,
              "image": "https://covers.openlibrary.org/b/id/14310010-L.jpg",
              "category": "Literature"
            },
            {
              "id": "40",
              "title": "The Lean Startup",
              "author": "Eric Ries",
              "price": 14.49,
              "rating": 4.5,
              "image": "https://covers.openlibrary.org/b/id/13188107-L.jpg",
              "category": "Business"
            }
      ] 
        const result = await books.insertMany(products);
        console.log("Books saved successfully :",result);    
    } 
    catch (error) {
        console.error("Error occurred:", error);
     }
     finally{
        mongoose.connection.close();
     }
}


//insertManyBooks();

const deleteDocumentsByTitle = async () => {
  try {
    // Connect to the database
    await ConnectDb();

    // Delete all documents that match the condition
    const deleteResult = await books.deleteMany();

    if (deleteResult.deletedCount === 0) {
      console.log("No documents matching the condition were found.");
    } else {
      console.log(deleteResult.deletedCount, "documents deleted successfully.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Example usage: Delete all documents with the title "iPhone 9"
// deleteDocumentsByTitle();


//export default {createDocument,getProducts,getCategory,insertManyBooks,deleteDocumentsByTitle};

module.exports = {createDocument,getProducts,getCategory,insertManyBooks,deleteDocumentsByTitle};