import express, { Request, Response } from "express";

import {connect} from "./services/mongo";

// Service Imports
import ArcRaiders from "./services/raider-svc";

// Route Imports
import arcraiders from "./routes/arcraiders";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

connect("prod");

app.use(express.static(staticDir));
app.use(express.json());

const apiRoot = "/api";

// Router APIs
app.use(`${apiRoot}/arcraiders`, arcraiders);

// Other Routes
app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

/*
app.get("/arcraiders/", (req: Request, res: Response) => {
  ArcRaiders.index().then((data) => {
    if(data) res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));

    else res
      .status(404).send();
  });
});

app.get("/arcraiders/:userid", (req: Request, res: Response) => {
  const {userid} = req.params;

  ArcRaiders.get(userid).then((data) => {

    console.log(data)

    if (data) res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));
    else res
      .status(404).send();
  });
});
*/
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
