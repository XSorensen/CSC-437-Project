import {Schema, model} from "mongoose";
import { ArcRaider } from "models/raider";

const ArcRaiderSchema = new Schema<ArcRaider> (
    {
        userid: {type: String, reqired: true, time: true },
        name: {type: String, required: true, trim: true},
        avatar: String,
        color: String
    },
    {collection: "ar_raiders"}
);

const ArcRaiderModel = model<ArcRaider>(
    "Profile",
    ArcRaiderSchema
);

function index(): Promise<ArcRaider[]> {
    return ArcRaiderModel.find();
};

function get(userid: String): Promise<ArcRaider> {
    return ArcRaiderModel.find({userid})
        .then((list) => list[0])
        .catch((err) => {
            throw `${userid} Not Found`;
        });
};

export default {index, get}