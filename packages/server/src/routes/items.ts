import express, {Request, Response} from "express";
import { Item } from "models/item";

import Items from "../services/item-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
    Items.index()
        .then((list: Item[]) => res.json(list))
        .catch((err) => res.status(500).send(err));
});

router.get("/:id", (req: Request, res: Response) => {
    const {id} = req.params;

    Items.get(id)
        .then((item: Item) => res.json(item))
        .catch((err) => res.status(404).send(err));
});

export default router;