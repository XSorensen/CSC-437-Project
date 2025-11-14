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

router.post("/", (req: Request, res: Response) => {
    const newArcRaider = req.body;

    ArcRaiders.create(newArcRaider)
        .then((arcRaider: ArcRaider) => 
            res.status(201).json(arcRaider)
        )
        .catch((err) => res.status(500).send(err))
})

router.put("/:userid", (req: Request, res: Response) => {
    const {userid} = req.params;
    const newArcRaider = req.body;

    ArcRaiders.update(userid, newArcRaider)
        .then((arcRaider: ArcRaider) => res.json(arcRaider))
        .catch((_) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  ArcRaiders.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;