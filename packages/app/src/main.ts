import {
    Auth,
    define,
    History,
    Switch
} from "@calpoly/mustang";
import {html, LitElement} from "lit";
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
    }
});