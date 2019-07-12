/* eslint-disable linebreak-style */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import express from "express";
import router from "./routes/routes";
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({"extended": true}));

app.use("/api/v1/", router);
app.listen(3000, () => console.log("Server started..."));

export default app;
