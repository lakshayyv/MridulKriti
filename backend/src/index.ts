import express, { Express } from "express";

const app: Express = express();
const port: string | number = 4000;

app.listen(port, () => {
  console.log(`Server started at port [${port}]`);
});
