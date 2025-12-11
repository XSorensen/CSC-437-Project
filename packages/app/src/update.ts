import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";

import {ArcRaider, Item} from "server/models";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  const [msg, payload] = message

  switch (msg) {
    case "profile/request": {
      const { userid } = payload;
      if (model.profile?.userid === userid ) break;
      return [
        { ...model, profile: {userid} as ArcRaider},
        requestProfile(payload, user)
          .then((profile) => ["profile/load", { userid, profile }])
      ];
    }

    case "profile/load": {
      const { profile } = payload;
      return { ...model, profile };
    }

    case "dark-mode": {
      const {darkModeEnabled} = payload;
      return {...model, darkModeEnabled};
    }

    case "items/request": {
      if(model?.itemsList) {
        break;
      }
      
      return [
        {...model, itemsList: []},
        requestItems({}, user)
          .then((itemsList: Array<Item>) => ["items/load", {itemsList}])
      ];
    }
    
    // put the rest of your cases here
    case "items/load": {
      const {itemsList} = payload
      return {...model, itemsList}
    }
    default:
      throw new Error(`Unhandled Auth message "${msg}"`);
  }

  return model
}

function requestProfile(
  msg: { userid: string },
  user: Auth.User
): Promise<ArcRaider>{
  return fetch(`/api/ar_raiders/${msg.userid}`, {
    headers: Auth.headers(user)
    })
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as ArcRaider;
      } else
        throw "No JSON in response body";
    });
}

function requestItems(
  msg: {},
  user: Auth.User
): Promise<Array<Item>>{
  return fetch(`/api/items/`, {
    headers: Auth.headers(user)
    })
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Items:", json);
        return json as Array<Item>;
      } else
        throw "No JSON in response body";
    });
}