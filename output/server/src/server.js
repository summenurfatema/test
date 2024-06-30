import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import app from "./app.js";




dotenv.config();


// app.use(cors());
const port = 80;

// export const db = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("🚀 Database connected successfully");
    
    
//   } catch (err) {
//     console.log("Failed to connect database", err);
//   }
// }



// Body Parser Middleware
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// db();
