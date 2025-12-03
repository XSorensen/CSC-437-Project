import express, { Request, Response } from "express";
import fs from "node:fs/promises";
import path from "path";

import {connect} from "./services/mongo";

// Service Imports
import ArcRaiders from "./services/raider-svc";

// Route Imports
import arcraiders from "./routes/arcraiders";
import auth, {authenticateUser} from "./routes/auth";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("prod");

app.use(express.static(staticDir));
app.use(express.json());

const apiRoot = "/api";

// Router APIs
app.use(`${apiRoot}/arcraiders`, authenticateUser, arcraiders);
app.use("/auth", auth);

// Other Routes
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, {encoding: "utf8"}).then((html) => {res.send(html)});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});