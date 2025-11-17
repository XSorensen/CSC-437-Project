import {
    css,
    define,
    html,
    shadow,
    Dropdown,
    Events
} from "@calpoly/mustang";

import reset from "./styles/reset.css.js";
import header from "./styles/header.css.js";

export class HeaderElement extends HTMLElement {
    static template = html`<template>
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

    static styles = css`
        :host {
            display:contents;
        }
    `;

    constructor() {
        super();
        shadow(this)
            .template(HeaderElement.template)
            .styles(
                reset.styles,
                header.styles,
                HeaderElement.styles
            );

        const darkMode = this.shadowRoot.querySelector(
            ".dark-mode-switch"
        );

        darkMode.addEventListener('click', (event) => {
            Events.relay(event, "dark-mode", {
                            checked: event.target.checked
                        });
        });
    }

    static initializeOnce() {
        const toggleDarkMode = (target, checked) => {
            console.log(target);   
            target.classList.toggle("dark-mode", checked);
            // const customEvent = new CustomEvent(
            //     "dark-mode:toggle", {
            //         bubbles: true,
            //         detail: {checked},
            //     }
            // );

            // target.dispatchEvent(customEvent);
        }

        document.body.addEventListener('dark-mode', (event) => {
            toggleDarkMode(event.currentTarget, event.detail.checked);
        });
    }
}