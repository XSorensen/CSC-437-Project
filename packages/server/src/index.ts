import express, { Request, Response } from "express";
import fs from "node:fs/promises";
import path from "path";

import {connect} from "./services/mongo";

// Route Imports
import auth, {authenticateUser} from "./routes/auth";
import arcraiders from "./routes/arcraiders";
import traders from "./routes/traders"
import items from "./routes/items"

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("arcraiding");

app.use(express.static(staticDir));
app.use(express.json());

const apiRoot = "/api";

// Router APIs
app.use("/auth", auth);
app.use(`${apiRoot}/arcraiders`, authenticateUser, arcraiders);
app.use(`${apiRoot}/traders`, authenticateUser, traders);
app.use(`${apiRoot}/items`, authenticateUser, items);

// Entry point
app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, {encoding: "utf8"}).then((html) => {res.send(html)});
});

// debug route
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});