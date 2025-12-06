import {
    define,
    shadow,
    Dropdown,
    Events,
    Observer,
    Auth
} from "@calpoly/mustang";

import {css, html, LitElement} from "lit";
import {state} from "lit/decorators.js";

import reset from "../styles/reset.css.ts";
import header from "../styles/header.css.ts";
import page from "../styles/page.css.ts";
import headings from "../styles/headings.css.ts";

export class HeaderElement extends LitElement {

    @state() loggedIn = false;
    @state() userid?: string;

    render() {
        return html`
            <header>
                    <a class="home-button" href="/">
                        Pokedex Completion Helper
                    </a>
                    <img src="/icons/default_user_icon.svg" alt="User Icon" width="50" height="50">

                <label class='dark-mode-switch'>
                    <input type="checkbox" autocomplete="off"></input>
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
            @click=${(e: UIEvent) => {
                Events.relay(e, "auth:message", ["auth/signout"])
            }}
        >
            Sign Out
        </button>
        `;
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