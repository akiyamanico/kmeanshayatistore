import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import ProductRoute from "./routes/ProductRoute.js";
import SellRoute from "./routes/SellRoute.js";

dotenv.config();
const app = express();
 
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(SellRoute);


// app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, ()=> console.log('Server running at port 5000'));