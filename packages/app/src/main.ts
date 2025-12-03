import {
    Auth,
    define,
    History,
    Switch,
    Store
} from "@calpoly/mustang";
import {html} from "lit";

import {Msg} from "./messages";
import {Model, init} from "./model";
import update from "./update";

import { HomeViewElement } from "./views/home-view";
import {HeaderElement} from "./components/raiders-header";

const routes = [
    {
        path: "/app",
        view: () => html`<landing-view></landing-view>`
    },
    {
        path: "/",
        redirect: "/app"
    },
    {
        path: "/app/items/:id",
        view: (params: Switch.Params) => html`<item-view item-id=${params.id}></item-view>`
    }
];

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
            super(update, init, "raiding:auth")
        }
    }
});