import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import countriesController from "./routes/countries";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/countries", countriesController);

export default app;
