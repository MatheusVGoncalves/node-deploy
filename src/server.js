import "dotenv/config";

import express, { json } from "express";
import routes from "./routes";

import "./database";

const app = express();

app.use(json());
app.use(routes);

app.listen(process.env.PORT || 3333);
