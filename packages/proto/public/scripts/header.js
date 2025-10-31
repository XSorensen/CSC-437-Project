import {
    css,
    define,
    html,
    shadow,
    Dropdown,
    Events
} from "@calpoly/mustang";

import reset from "/styles/reset.css"

export class HeaderElement extends HTMLElement {
    static template = html`<template>
        <header>
            <a class="home-button" href="/">
                Pokedex Completion Helper
            </a>

            <img src="/icons/default_user_icon.svg" alt="User Icon" width="50" height="50">
        </header>
    </template>`;

    constructor() {
        super();
        shadow(this)
            .template(HeaderElement.template)
            .styles(
                reset.styles,
                HeaderElement.styles
            );

        const darkMode = this.shadowRoot.querySelector(
            ".darkModeToggle"
        );

        darkMode.addEventListener('click', (event) => {
            Events.relay(event, "dark-mode", {
                            checked: event.target.checked
                        });
        });
    }

    static initializeOnce() {
        toggleDarkMode = (page, checked) => {
            page.classList.toggle('dark-mode', checked);
        }

        document.body.addEventListener('dark-mode', (event) => {
            toggleDarkMode(event.currentTarget, event.detail.checked);
        })
    }
}