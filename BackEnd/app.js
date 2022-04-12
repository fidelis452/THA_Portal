import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/users.js";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRouter);


app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});

