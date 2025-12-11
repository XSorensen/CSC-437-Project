"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var item_svc_exports = {};
__export(item_svc_exports, {
  default: () => item_svc_default
});
module.exports = __toCommonJS(item_svc_exports);
var import_mongoose = require("mongoose");
const ItemSchema = new import_mongoose.Schema(
  {
    id: { type: String, required: true },
    name: String,
    description: String,
    item_type: String,
    loadout_slots: Array,
    rarity: String,
    value: Number,
    workbench: String,
    flavor_text: String
  },
  { collection: "items" }
);
const ItemModel = (0, import_mongoose.model)(
  "Item",
  ItemSchema
);
function index() {
  return ItemModel.find();
}
;
function get(id) {
  return ItemModel.find({ "id": id }).then((list) => list[0]).catch((err) => {
    throw `${name} Not Found`;
  });
}
;
var item_svc_default = { index, get };
