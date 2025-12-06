import {
    define,
    shadow,
    Dropdown,
    Events,
    Observer,
    Auth,
    View
} from "@calpoly/mustang";

import {css, html, LitElement} from "lit";
import {state} from "lit/decorators.js";

import { Model } from "../model.ts";
import { Msg } from "../messages.ts";

// styles
import reset from "../styles/reset.css.ts";
import header from "../styles/header.css.ts";
import page from "../styles/page.css.ts";
import headings from "../styles/headings.css.ts";


export class HeaderElement extends View<Model, Msg>{

    @state() loggedIn = false;
    @state() userid?: string;
    @state() darkModeEnabled = false;

    constructor() {
        super("raiders:model");
    }

    render() {
        return html`
            <header>
                    <a class="home-button" href="/">
                        Pokedex Completion Helper
                    </a>
                    <img src="/icons/default_user_icon.svg" alt="User Icon" width="50" height="50">

                <label class='dark-mode-switch'>
                    <input type="checkbox" @change=${this.toggleDarkMode} autocomplete=${this.darkModeEnabled ? "on" : "off"}"></input>
                    Dark Mode
                </label>
                <a slot="actuator">
                    Hello, ${this.userid || "raider"}
                </a>
                ${this.loggedIn ?
                    this.renderSignOutButton() :
                    this.renderSignInButton()
                }
            </header>
        `;
    }

    static styles = [
        reset.styles,
        header.styles,
        headings.styles,
        css`
        :host {
            display: block;
            width: 100%;
            height: var(--header-height, 64px);
        }
        `
        /*
        css`
        :host {
            display:contents;
        }*/,
        
    ];

    _authObserver = new Observer<Auth.Model>(this, "raiders:auth")
    connectedCallback() {
        super.connectedCallback();
        this._authObserver.observe((auth: Auth.Model) => {
            const {user} = auth;

            if(user && user.authenticated) {
                this.loggedIn = true;
            } else {
                this.loggedIn=false;
                this.userid=undefined;
            }
        });
    }

    renderSignInButton() {
        return html`
            <a href="/login.html">
                Sign In...
            </a>
        `;
    }

    renderSignOutButton() {
        return html`
        <button
            @click=${this.signOut}
        >
            Sign Out
        </button>
        `;
    }

    toggleDarkMode(ev: InputEvent){
        const target = ev.target as HTMLInputElement;
        const checked = target.checked;
        this.darkModeEnabled = checked;

        Events.relay(ev, "dark-mode", { checked });
    }

    signOut(ev: MouseEvent) {
        Events.relay(ev, "auth:message", ["auth/signout"]);
    }

    static initializeOnce() {
        const toggleDarkMode = (target : HTMLElement | null, checked: any) => {
            target?.classList.toggle("dark-mode", checked);
        }

        document.body.addEventListener('dark-mode', (event : Event) => {
            toggleDarkMode(event.currentTarget as HTMLElement, (event as CustomEvent).detail.checked);
        });

        console.log("Header Initialized");
    }
}