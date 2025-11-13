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
var raider_svc_exports = {};
__export(raider_svc_exports, {
  default: () => raider_svc_default
});
module.exports = __toCommonJS(raider_svc_exports);
var import_mongoose = require("mongoose");
const ArcRaiderSchema = new import_mongoose.Schema(
  {
    userid: { type: String, reqired: true, time: true },
    name: { type: String, required: true, trim: true },
    avatar: String,
    color: String
  },
  { collection: "ar_raiders" }
);
const ArcRaiderModel = (0, import_mongoose.model)(
  "Profile",
  ArcRaiderSchema
);
function index() {
  return ArcRaiderModel.find();
}
;
function get(userid) {
  return ArcRaiderModel.find({ userid }).then((list) => list[0]).catch((err) => {
    throw `${userid} Not Found`;
  });
}
;
var raider_svc_default = { index, get };
