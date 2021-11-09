require('dotenv/config');

import express from "express";

import routes from "./routes";

import cors from "cors";

import {resolve} from "path";

import "./database";

const app = express();

app.use(express.static(resolve(__dirname, "../public")));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);