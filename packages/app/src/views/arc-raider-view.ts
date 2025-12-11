import {define, View} from "@calpoly/mustang";
import {css,html} from "lit";
import {property, state} from "lit/decorators.js";
import {ArcRaider} from "server/models";
import {Msg} from "../messages";
import {Model} from "../model";

export class ArcRaiderViewElement extends View<Model, Msg> {
    @property({attribute: "user-id"})
    userId?: string;

    @state()
    get profile(): ArcRaider | undefined {
        return this.model.profile;
    }

    constructor() {
        super("raiders:model");
    }

    render() {
        return html`
            <h2>Arc Raider Profile</h2>
            <p>Name: ${this.userId}</p>
        `
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if(
            name === "user-id" &&
            oldValue !== newValue &&
            newValue
        ) {
            this.dispatchMessage([
                "profile/request",
                {userid: newValue}
            ]);
        }
    }

    get src() {
        return `/api/arcraiders/${this.userId}`
    }
}