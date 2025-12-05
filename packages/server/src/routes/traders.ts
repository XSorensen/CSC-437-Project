import express, {Request, Response} from "express";
import { Trader } from "models/trader";

import Traders from "../services/trader-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
    Traders.index()
        .then((list: Trader[]) => res.json(list))
        .catch((err) => res.status(500).send(err));
});

router.get("/:name", (req: Request, res: Response) => {
    const {name} = req.params;

    Traders.get(name)
        .then((trader: Trader) => res.json(trader))
        .catch((err) => res.status(404).send(err));
});

export default router;