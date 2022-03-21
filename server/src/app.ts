import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import countriesController from "./routes/countries";
import headlinesController from "./routes/headlines";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/countries", countriesController);
app.get("/headlines", headlinesController);

export default app;
