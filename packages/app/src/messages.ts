import {ArcRaider, Item} from "server/models";

export type Msg =
    | ["profile/save", {userid: string; profile: ArcRaider}]
    | ["profile/request", {userid: string}]
    | ["items/request", {}]
    | Cmd
    
export type Cmd =
    | ["profile/load", {userid: string, profile: ArcRaider}]
    | ["dark-mode", {darkModeEnabled: boolean}]
    | ["items/load", {itemsList: Array<Item>}]