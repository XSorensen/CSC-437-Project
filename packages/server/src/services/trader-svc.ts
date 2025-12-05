import {Schema, model} from "mongoose";
import { Trader } from "models/trader";

const TraderSchema = new Schema<Trader> ({
    name: {type: String, required: true},
    items: Array<{id: String, trader_price: Number}>
    },
    {collection: "traders"}
)

const TraderModel = model<Trader>(
    "Trader",
    TraderSchema
)

function index(): Promise<Trader[]> {
    return TraderModel.find();
};

function get(name: String): Promise<Trader> {
    return TraderModel.find({"name": name})
        .then((list) => list[0])
        .catch((err) => {
            throw `${name} Not Found`;
        });
};

export default {index, get}