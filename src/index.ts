import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose, { Connection } from "mongoose";
import router from "./router/index";

const port = 8080;
const app = express();
const MONGO_URL =
  "mongodb+srv://caiogsan:12062002djdaD@cluster0.lioqca7.mongodb.net/?retryWrites=true&w=majority";

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
mongoose.connection.on("connection", (connection: Connection) =>
  console.log("Conected")
);

app.use("/", router());
