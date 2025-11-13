import express, {Request, Response} from "express";
import { ArcRaider } from "models/raider";

import ArcRaiders from "../services/raider-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
    ArcRaiders.index()
        .then((list: ArcRaider[]) => res.json(list))
        .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
    const {userid} = req.params;

    ArcRaiders.get(userid)
        .then((arcraider: ArcRaider) => res.json(arcraider))
        .catch((err) => res.status(404).send(err));
});

export default router;