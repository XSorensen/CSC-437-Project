import {css, html, LitElement} from "lit";
import {Auth, Observer, View} from "@calpoly/mustang";
import {state, property} from "lit/decorators.js";
import {Item} from "server/models";

import {Msg} from "../messages";
import {Model} from "../model";

import reset from "../styles/reset.css";
import page from "../styles/page.css";

export class ItemViewElement extends View<Model, Msg>{
    src = "/api/items"

    @state()
    itemIndex = new Array<Item>();

    @property({attribute: "item-id"})
    itemId?: string

    _authObserver = new Observer<Auth.Model>(
        this,
        "raiders:auth"
    );

    _user?: Auth.User;

    get authorization(): HeadersInit {
        return this._user?.authenticated ?
                {Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}`} :
                {}
    }

    constructor() {
        super("raiders:model");
    }

    connectedCallback() {
        console.log("Connected Callback Called")
        super.connectedCallback();
        this._authObserver.observe(({ user }) => {
            if(user?.authenticated) {
                this._user = user;
                this.dispatchMessage(["items/request", {}]);
            } else {
                this._user = undefined;
            }
        
            /*
            if(this.itemId) {
                this.hydrate(`${this.src}/${this.itemId}`);
            } else {
                this.hydrate(this.src);
            }
                */
        })
    }

    hydrate(url: string) {
        fetch(url, {headers: this.authorization})
            .then((res: Response) => {
                if (res.status === 200) return res.json();
                throw `Server responded with status ${res.status}`;
            })
            .catch((err) => console.log("Failed to load item data", err))
            .then((json: unknown) => {
                if(json) {
                    console.log("Items: ", json);
                    const {data} = json as {data: Array<Item>};

                    this.itemIndex = data
                }
            });
    }

    render() {
        const itemList = this.itemIndex?.map(this.renderItem);

        return html`
            <main class="page">
                <header>
                    <h2>Items</h2>
                </header>
                <dl>${itemList}</dl>
            </main>
        `;
    }

    renderItem(item: Item) {
        const {name, description, item_type, rarity, value, workbench, flavor_text} = item

        return html`
            <dt>${name}</dt>
            <dl>${description}<dl>
            <dl>${item_type}<dl>
            <dl>${rarity}<dl>
            <dl>${value}<dl>
            <dl>${workbench}<dl>
            <dl>${flavor_text}<dl>
        `
    }

    static styles = [
        reset.styles,
        page.styles,
        css`
        :host {
            display:contents;
        }
        `
    ];
}