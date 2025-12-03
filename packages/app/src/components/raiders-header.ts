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

import reset from "./styles/reset.css.ts";
import header from "./styles/header.css.ts";
import page from "./styles/page.css.ts";

export class HeaderElement extends LitElement {

    @state() loggedIn = false;
    @state() userid?: string;

    render() {
        return html`<template>
            <header>
                    <a class="home-button" href="/">
                        Pokedex Completion Helper
                    </a>
                    <img src="/icons/default_user_icon.svg" alt="User Icon" width="50" height="50">

                <label class='dark-mode-switch'>
                    <input type="checkbox" autocomplete="off"></input>
                    Dark Mode
                </label>
            </header>
        </template>`;
    }

    static styles = [
        reset.styles,
        header.styles,
        css`
        :host {
            display:contents;
        }
    `];

    _authObserver = new Observer<Auth.Model>(this, "pdx:auth")
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

    static initializeOnce() {
        const toggleDarkMode = (target : HTMLElement | null, checked: any) => {
            target?.classList.toggle("dark-mode", checked);
        }

        document.body.addEventListener('dark-mode', (event : Event) => {
            toggleDarkMode(event.currentTarget as HTMLElement, (event as CustomEvent).detail.checked);
        });
    }
}