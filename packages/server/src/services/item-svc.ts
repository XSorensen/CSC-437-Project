import {Schema, model} from "mongoose";
import { Item } from "models/item";

const ItemSchema = new Schema<Item> ({
    id: {type: String, required: true},
    name: String,
    description: String,
    item_type: String,
    loadout_slots: Array<String>,
    rarity: String,
    value: Number,
    workbench: String,
    flavor_text: String
    },
    {collection: "items"}
)

const ItemModel = model<Item>(
    "Item",
    ItemSchema 
)

function index(): Promise<Item[]> {
    return ItemModel.find();
};

function get(id: String): Promise<Item> {
    return ItemModel.find({"id": id})
        .then((list) => list[0])
        .catch((err) => {
            throw `${name} Not Found`;
        });
};

export default {index, get}