import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import adminRouter from "./routes/admin";
dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server started at port [${port}]`);
});
