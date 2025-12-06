import {Auth, Observer} from "@calpoly/mustang";
import {css, html, LitElement} from "lit";
import {state} from "lit/decorators.js";

import reset from "../styles/reset.css";
import page from "../styles/page.css";

export class HomeViewElement extends LitElement {
    src = "/api/"

    render() {
        return html`
        <ul>
            <li>
                <svg class="icon">
                    <use href="/icons/pokeballs.svg#icon-pokeball" />
                </svg>
                <a href="./generation.html">Generation Page</a>
            </li>
            <li>
                <svg class="icon">
                    <use href="/icons/pokeballs.svg#icon-pokeball" />
                </svg>
                <a href="./pokedexEntry.html">Pokedex Entry Page</a>
            </li>
            <li>
                <svg class="icon">
                    <use href="/icons/pokeballs.svg#icon-pokeball" />
                </svg>
                <a href="./pokedex.html">Pokedex Page</a>
            </li>
            <li>
                <svg class="icon">
                    <use href="/icons/pokeballs.svg#icon-pokeball" />
                </svg>
                <a href="./move.html">Move Page</a>
            </li>
            <li>
                <svg class="icon">
                    <use href="/icons/pokeballs.svg#icon-pokeball" />
                </svg>
                <a href="./region.html">Region Page</a>
            </li>
            <li>
                <svg class="icon">
                    <use href="/icons/pokeballs.svg#icon-pokeball" />
                </svg>
                <a href="./game.html">Game Page</a>
            </li>
        </ul>

        <div class="nav-box">
            <div class="nav-box-entry">
                <a href="./active_hunts.html">Active Hunts</a>
            </div>
            <div class="nav-box-entry">
                <a href="./new_hunt.html">Start New Hunt</a>
            </div>
            <div class="nav-box-entry">
                <a href="./individual_target.html">Target Individual Pokemon</a>
            </div>
        </div>

        <div style="height:3000px"></div>
        `;
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