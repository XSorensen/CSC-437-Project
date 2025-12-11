import {Auth, Observer} from "@calpoly/mustang";
import {css, html, LitElement} from "lit";
import {state} from "lit/decorators.js";

import reset from "../styles/reset.css";
import page from "../styles/page.css";

export class HomeViewElement extends LitElement {
    src = "/api/"

    render() {
        return html`
        <!---
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
        --->

        <h3>Project Description</h3>
        <p>
            <a href="https://arcraiders.com/">Arc Raiders</a> is a new video game in which players brave the hostile Earth's surface populated only 
            with deadly robots and other raiders. While on the surface, raiders must scavenge appartment buildings, sand buried towns, 
            and water treatment facilities while avoiding being taken out by the surface robots or even other players. The game is very 
            focused on the items you collect. However, because there are so many items to collect that are often useless after you have
            used them for their intended purpose, it can be difficult to keep track of which ones are important. Also, seemlingly 
            innccuous items like the "Rusted Gear" appear useless until they are needed to upgrade your workstation. This website 
            seeks to supply a helpful interface that provides quick item filtering along with item tracking in the future. Currently, all links 
            below lead to the /app/items page where you can view all items in the game, or filter them down to a more manageable list.
        </p>

        <div class="nav-box">
            <div class="nav-box-entry">
                <a href="/app/items">Items List</a>
            </div>
            <div class="nav-box-entry">
                <a href="/app/items">Track Items</a>
            </div>

            <div class="nav-box-entry">
                <a href="/app/items">Track Workbench Progress</a>
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