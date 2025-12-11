"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var trader_svc_exports = {};
__export(trader_svc_exports, {
  default: () => trader_svc_default
});
module.exports = __toCommonJS(trader_svc_exports);
var import_mongoose = require("mongoose");
const TraderSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true },
    items: Array
  },
  { collection: "traders" }
);
const TraderModel = (0, import_mongoose.model)(
  "Trader",
  TraderSchema
);
function index() {
  return TraderModel.find();
}
;
function get(name) {
  return TraderModel.find({ "name": name }).then((list) => list[0]).catch((err) => {
    throw `${name} Not Found`;
  });
}
;
var trader_svc_default = { index, get };
