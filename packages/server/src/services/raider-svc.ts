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

function create(json: ArcRaider): Promise<ArcRaider> {
    const t = new ArcRaiderModel(json);
    return t.save();
}

function update(
    userid: String,
    arcRaider: ArcRaider
): Promise<ArcRaider> {
    return ArcRaiderModel.findOneAndUpdate({userid}, arcRaider, {
        new: true
    }).then((updated) => {
        if(!updated) throw `${userid} not update`;
        else return updated as ArcRaider;
    });
}

function remove(userid: String): Promise<void> {
  return ArcRaiderModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}

export default {index, get, create, update, remove}