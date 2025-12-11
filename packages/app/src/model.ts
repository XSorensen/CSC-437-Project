import { ArcRaider, Item } from "server/models";

export interface Model {
    profile?: ArcRaider;
    darkModeEnabled?: Boolean;
    itemsList?: Array<Item>
}

export const init: Model = {};