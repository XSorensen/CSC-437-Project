import {
    Auth,
    define,
    History,
    Switch,
    Store
} from "@calpoly/mustang";
import {html, LitElement} from "lit";

import {Msg} from "./messages";
import {Model, init} from "./model";
import update from "./update";

import { HomeViewElement } from "./views/home-view";
import {HeaderElement} from "./components/raiders-header";
import { ItemViewElement } from "./views/item-view";

const routes: Switch.Route[] = [
    {
        path: "/app",
        view: () => html`<home-view></home-view>`
    },
    {
        path: "/",
        redirect: "/app"
    },
    {
        path: "/app/items/",
        view: (params: Switch.Params) => html`<item-view></item-view>`
    },
    {
        path: "/app/items/:id",
        view: (params: Switch.Params) => html`<item-view item-id=${params.id}></item-view>`
    }
];

class AppElement extends LitElement {
  render() {
    return html`<mu-switch></mu-switch>`;
  }

  connectedCallback() {
    super.connectedCallback();
    HeaderElement.initializeOnce();
  }
}

define({
    "mu-auth": Auth.Provider,
    "mu-history": History.Provider,
    "raiders-header": HeaderElement,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "raiders:history", "raiders:auth");
        }
    },
    "mu-store": class AppStore extends Store.Provider<Model, Msg> {
        constructor() {
            super(update, init, "raiders:auth")
        }
    },

    "raiders-app": AppElement,

    // views
    "home-view": HomeViewElement,
    "item-view": ItemViewElement
});

HeaderElement.initializeOnce();