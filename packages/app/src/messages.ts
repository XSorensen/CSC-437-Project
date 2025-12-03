import {ArcRaider} from "server/models";

export type Msg =
    | ["profile/save", {userid: string; profile: ArcRaider}]
    | ["profile/request", {userid: string}]
    | Cmd
    
export type Cmd =
    | ["profile/load", {userid: string, profile: ArcRaider}]