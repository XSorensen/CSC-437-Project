import {css, html, LitElement} from "lit";
import {Auth, Observer, View} from "@calpoly/mustang";
import {state, property} from "lit/decorators.js";
import {Item} from "server/models";

import {Msg} from "../messages";
import {Model} from "../model";

import reset from "../styles/reset.css";
import page from "../styles/page.css";
import itemViewList from "../styles/itemViewList.css.ts";

interface FilterItemFormData {
    name_search?: string,

    // rarity checkboxes
    rarity_common?: boolean,
    rarity_uncommon?: boolean,
    rarity_rare?: boolean,
    rarity_epic?: boolean,
    rarity_legendary?: boolean,

    // workshop checkboxes
    wkbch_refiner?: boolean,
    wkbch_medical?: boolean,
    wkbch_explosive?: boolean,
    wkbch_equipment?: boolean, 
    wkbch_basic?: boolean, 
    wkbch_utility?: boolean,
    wkbch_weapon?: boolean, 
    wkbch_gunsmith?: boolean,
}

 interface CheckboxDetailsLookup {
    "field_name": string,
    "visible_name": string
}
export class ItemViewElement extends View<Model, Msg>{
    src = "/api/items"

    @state()
    get itemIndex(): Array<Item> | undefined {
        return this.filterItems(this.model.itemsList);
    }

    @property({attribute: "item-id"})
    itemId?: string

    @state()
    formData: FilterItemFormData = {};

    _authObserver = new Observer<Auth.Model>(
        this,
        "raiders:auth"
    );

    constructor() {
        super("raiders:model");
    }

    connectedCallback() {
        console.log("Connected Callback Called")
        super.connectedCallback();
        this._authObserver.observe(({ user }) => {
            if(user?.authenticated) {
                this.dispatchMessage(["items/request", {}]);
            }
        })
    }

    render() {
        const itemList = this.itemIndex?.map(this.renderItem);
        const workshopFilters = this.renderWorkshopFilters();
        const rarityFilters = this.renderRarityFilters();

        return html`
            <main class="page">
                <header>
                    <h2>Items</h2>
                </header>

                <form
                    @change=${(e: InputEvent) => this.handleChange(e)}
                    @submit=${(e: SubmitEvent) => this.handleSubmit(e)}
                    @reset=${(e: any) => this.handleReset(e)}
                >   
                    <label for="name_search">Search by Item Name:</label>
                        <input type="text" id="name_search" name="name_search" /><br>

                    <h3>Rarity Filters:</h3><br>
                    ${rarityFilters}

                    <h3>Workshop Filters:</h3><br>
                    ${workshopFilters}

                    <input type="reset" value="Reset">
                </form>

                <div class="row" id="">
                    <dt>Item Name</dt>
                    <dd>Item Description</dd>
                    <dd>Item Type</dd>
                    <dd>Rarity</dd>
                    <dd>Value</dd>
                    <dd>Workbench</dd>
                    <dd>Flavor Text</dd>
                </div>
                <dl class="items-list">${itemList}</dl>
            </main>
        `;
    }

    renderWorkshopFilters() {
        const stations: CheckboxDetailsLookup[] = [ // [field_name, visible_name]
            {"field_name": "wkbch_refiner", "visible_name": "Refiner"},
            {"field_name": "wkbch_medical", "visible_name": "Medical Station"},
            {"field_name": "wkbch_explosive", "visible_name":"Explosives Station"},
            {"field_name": "wkbch_equipment", "visible_name": "Equipment Station"},
            {"field_name": "wkbch_basic", "visible_name": "Basic Bench"},
            {"field_name": "wkbch_utility", "visible_name": "Utility Bench"},
            {"field_name": "wkbch_weapon", "visible_name": "Weapon Bench"},
            {"field_name": "wkbch_gunsmith", "visible_name": "Gunsmith"},
        ]

        return stations.map(({field_name, visible_name}) => html`
            <input type="checkbox" id="${field_name}" name="${field_name}" />
            <label for="${field_name}">${visible_name}</label><br>
            `
        );
    }

    renderRarityFilters() {
        const rarities: CheckboxDetailsLookup[] = [
            {"field_name": "rarity_common", "visible_name": "Common"},
            {"field_name": "rarity_uncommon", "visible_name": "Uncommon"},
            {"field_name": "rarity_rare", "visible_name": "Rare"},
            {"field_name": "rarity_epic", "visible_name": "Epic"},
            {"field_name": "rarity_legendary", "visible_name": "Legendary"},
        ]

        return rarities.map(({field_name, visible_name}) => html`
            <input type="checkbox" id="${field_name}" name="${field_name}" />
            <label for="${field_name}">${visible_name}</label><br>
            `
        );
    }

    renderItem(item: Item) {
        const {name, description, item_type, rarity, value, workbench, flavor_text} = item
        console.log(item);

        return html`
            <div class="row">
                <dt>${name}</dt>
                <dd>${description}</dd>
                <dd>${item_type}</dd>
                <dd>${rarity}</dd>
                <dd>${value}</dd>
                <dd>${workbench}</dd>
                <dd>${flavor_text}</dd>
            </div>
        `
    }

    filterItems(items: Array<Item> | undefined): Array<Item> | undefined {
        if(!items) {
            return items;
        }

        console.log("Running filter")

        let toReturn = items;
        
        // Item name string matching
        if(this.formData?.name_search && this.formData.name_search !== "") {
            toReturn = toReturn.filter((item: Item) => {
                return item.name.includes(this.formData.name_search!)
            })
        }

        // Rarity Filtering
        const activeRarityFilters = [
            this.formData?.rarity_common    ? "Common"    : undefined,
            this.formData?.rarity_uncommon  ? "Uncommon"  : undefined,
            this.formData?.rarity_rare      ? "Rare"      : undefined,
            this.formData?.rarity_epic      ? "Epic"      : undefined,
            this.formData?.rarity_legendary ? "Legendary" : undefined,
        ].filter((val: string | undefined) : boolean => val !== undefined)

        if(activeRarityFilters.length) {
            toReturn = toReturn.filter((item: Item): boolean => {
                if(!item.rarity) {
                    return false;
                }               

                for (const rarity of activeRarityFilters) {
                    if(item.rarity.includes(rarity!)) {
                        return true;
                    }
                }

                return false
            })
        }

        // Workbench Filtering
        const activeWorkshopFilters = [
            this.formData?.wkbch_refiner   ? "Ref" : undefined,
            this.formData?.wkbch_medical   ? "Med" : undefined,
            this.formData?.wkbch_explosive ? "Exp" : undefined,
            this.formData?.wkbch_equipment ? "Equ" : undefined,
            this.formData?.wkbch_basic     ? "Bas" : undefined,
            this.formData?.wkbch_utility   ? "Ut"  : undefined,
            this.formData?.wkbch_weapon    ? "Wea" : undefined,
            this.formData?.wkbch_gunsmith  ? "Gun" : undefined,
        ].filter((val: string | undefined) : boolean => val !== undefined)

        if(activeWorkshopFilters.length) {
            toReturn = toReturn.filter((item: Item): boolean => {
                if(!item.workbench) {
                    return false;
                }

                for (const benchName of activeWorkshopFilters) {
                    if(item.workbench.includes(benchName!)) {
                        return true;
                    }
                }

                return false
            })
        }

        console.log("Filtered Benches")
        console.log(toReturn)

        return toReturn
    }

    handleChange(event: InputEvent) {
        const target = event.target as HTMLInputElement;
        const name = target?.name;
        const value = target?.value;
        const checked = target?.checked;

        const prevData = this.formData;

        console.log("Hanlding change")
        console.log(event.target)

        switch (name) {
            case "name_search": {
                this.formData = {...prevData, name_search: value}
                break;
            }

            case "wkbch_refiner": {
                this.formData = {...prevData, wkbch_refiner: checked}
                break;
            }

            case "wkbch_medical": {
                this.formData = {...prevData, wkbch_medical: checked};
                break;
            }

            case "wkbch_explosive": {
                this.formData = {...prevData, wkbch_explosive: checked};
                break;
            }

            case "wkbch_equipment": {
                this.formData = {...prevData, wkbch_equipment: checked};
                break;
            }

            case "wkbch_basic": {
                this.formData = {...prevData, wkbch_basic: checked};
                break;
            }

            case "wkbch_utility": {
                this.formData = {...prevData, wkbch_utility: checked};
                break;
            }

            case "wkbch_weapon": {
                this.formData = {...prevData, wkbch_weapon: checked};
                break;
            }

            case "wkbch_gunsmith": {
                this.formData = {...prevData, wkbch_gunsmith: checked};
                break;
            }

            case "rarity_common": {
                this.formData = {...prevData, rarity_common: checked};
                break;
            }

            case "rarity_uncommon": {
                this.formData = {...prevData, rarity_uncommon: checked};
                break;
            }

            case "rarity_rare": {
                this.formData = {...prevData, rarity_rare: checked};
                break;
            }

            case "rarity_epic": {
                this.formData = {...prevData, rarity_epic: checked};
                break;
            }

            case "rarity_legendary": {
                this.formData = {...prevData, rarity_legendary: checked};
                break;
            }

            default: {
                throw `Unhandled change event target ${name}`
            }

        }
    }

    handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        console.log("Attempting to submit");
    }

    handleReset(event: any) {
        console.log(event)
        this.formData = {};
    }

    static styles = [
        reset.styles,
        itemViewList.styles,
        page.styles,
        css`
        :host {
            display:contents;
        }
        `
    ];
}