import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import adminRouter from "./routes/admin";
import imageRouter from "./routes/image";
dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/image", imageRouter);

app.listen(port, () => {
  console.log(`Server started at port [${port}]`);
});
