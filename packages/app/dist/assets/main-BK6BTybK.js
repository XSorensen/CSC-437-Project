import{a as p,i as h,b as x,x as n,r as m,V as b,O as D,h as R,e as _,c as d,n as $,d as z,s as S,_ as M,f as q}from"./headings.css-CrszazWd.js";const E={};function F(s,t,e){const[i,a]=s;switch(i){case"profile/request":{const{userid:r}=a;if(t.profile?.userid===r)break;return[{...t,profile:{userid:r}},L(a,e).then(o=>["profile/load",{userid:r,profile:o}])]}case"profile/load":{const{profile:r}=a;return{...t,profile:r}}case"dark-mode":{const{darkModeEnabled:r}=a;return{...t,darkModeEnabled:r}}case"items/request":{if(t?.itemsList)break;return[{...t,itemsList:[]},A({},e).then(r=>["items/load",{itemsList:r}])]}case"items/load":{const{itemsList:r}=a;return{...t,itemsList:r}}default:throw new Error(`Unhandled Auth message "${i}"`)}return t}function L(s,t){return fetch(`/api/ar_raiders/${s.userid}`,{headers:p.headers(t)}).then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Profile:",e),e;throw"No JSON in response body"})}function A(s,t){return fetch("/api/items/",{headers:p.headers(t)}).then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Items:",e),e;throw"No JSON in response body"})}const B=h`
    @import "./reset.css";
    @import "./tokens.css";

    body {
        /* background: radial-gradient(circle at center, blue 0,#284373 100%); */
        background: var(--color-background);
    }

    body.dark-mode {
        --color-background: var(--color-background-inverted);
        --color-header-background: var(--color-header-background-inverted);
        --color-accent: var(--color-accent-inverted);
        --color-link: var(--color-link-inverted);
        --color-text: var(--color-text-inverted);
    }

    header {
        position: sticky;
        top: 0;
        background-color: var(--color-header-background);
        stroke: var(--color-header-stroke);
        stroke-dashoffset: 5%;

        flex:auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 10px 20px;

        & > * {
            width: fit-content
        }

        /* & > a {
            font-family: var(--default-font-family-header);
            font-size: var(--default-font-size-header);
            color:  var(--color-header-text);
    
            text-decoration: none;
            color: var(--color-header-text);
        }    */
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--default-font-family-subheader);
        font-size: var(--default-font-size-subheader);
        
    }

    p {
        font-family: var(--default-font-family-text);
        font-size: var(--default-font-size-text);
    }

    a {
        font-family: var(--default-font-family-text);
        font-size: var(--default-font-size-text);
    }

    a.home-button {
        font-family: var(--default-font-family-header);
        font-size: var(--default-font-size-header);
        text-decoration: none;
        color: var(--color-header-text);
        background-color: var(--color-header-background) / 0.7;
        border-radius: 10px;
        border: orangered 2px solid;
        padding: var(--default-padding);
    }

    svg.icon {
        display: inline;
        height: 125px;
        width: 200px;
        vertical-align: middle;
        fill: currentColor;
    }

    ul {
        list-style-type: none;
        padding: 0;

        vertical-align: middle;

        & > li {
            width: fit-content;
            height: fit-content;

            & > svg.icon {
                height: 50px;
                width: 50px;
            }

            & > a {
                margin-left: -11px;
                color: var(--color-link);
            }
        }
    }

    /* .links_wrapper {
        display: flex;
        flex-direction: row;
        vertical-align: baseline;
        gap: auto;
        width:fit-content;

        & > li {
            list-style: none;
        }
    } */

    .nav-box {
        display: flex;

        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        
        /* border: 1px solid var(--color-accent); */

        justify-content: space-around;
        gap: 20px;
        margin-top: 20px;
            flex-basis: flex-grow;

        height: min-content;
        > .nav-box-entry {
                top: 0;
            flex: 1;
            flex-grow: 1;

            border: 5px solid var(--color-accent);
            border-radius: 20px;
            padding: 10px 20px;
            font-family: var(--default-font-family-text);
            font-size: var(--default-font-size-text);
            background-color: var(--color-background);
            color: var(--color-text);
            text-align: center;
            width: fit-content;
            min-width: 24ch; 
            max-width: 20%;
            min-height: 500px;

            & > a {
                text-decoration: none;
                color: inherit;
                font-family: var(--default-font-family-subheader);
                font-size: var(--default-font-size-subheader);
            }

            &:hover {
                background-color: var(--color-accent);
                color: var(--color-text-inverted);
                cursor: pointer;
            }
        }
    }`,I={styles:B},y=class y extends x{constructor(){super(...arguments),this.src="/api/"}render(){return n`
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
        `}};y.styles=[m.styles,I.styles,h`
        :host {
            display:contents;
        }
        `];let u=y;const W=h`
    header {
        position: sticky;
        top: 0;
        background-color: var(--color-header-background);
        stroke: var(--color-header-stroke);
        stroke-dashoffset: 5%;

        flex:auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 10px 20px;

        & > * {
            width: fit-content
        }

        & > a {
            font-family:var(--default-font-family-header);
            font-size:var(--default-font-size-header);
            color:var(--color-header-text);
    
            text-decoration: none;
            color:var(--color-header-text);
        }
    }
`,j={styles:W};var N=Object.defineProperty,T=Object.getOwnPropertyDescriptor,f=(s,t,e,i)=>{for(var a=i>1?void 0:i?T(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(a=(i?o(t,e,a):o(a))||a);return i&&a&&N(t,e,a),a};const k=class k extends b{constructor(){super("raiders:model"),this.loggedIn=!1,this.userid="raider",this.darkModeEnabled=!1,this._authObserver=new D(this,"raiders:auth")}get profile(){return this.model.profile}render(){const{userid:t}=this.profile||{};return console.log(this.profile),console.log(this.model),n`
            <header>
                <a class="home-button" href="/">
                    Arc Raiders Field Guide
                </a>

                <label class='dark-mode-switch'>
                    <input type="checkbox" @change=${this.toggleDarkMode} autocomplete=${this.model?.darkModeEnabled?"on":"off"}"></input>
                    Dark Mode
                </label>
                    <img src="/icons/default_user_icon.svg" alt="User Icon" width="50" height="50">
                
                <a slot="actuator">
                    Hello, ${t||"Raider"}
                </a>
                ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
            </header>
        `}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:e}=t;e&&e.authenticated?(this.loggedIn=!0,this.userid=e.username,this.dispatchMessage(["profile/request",{userid:this.userid}])):(this.loggedIn=!1,this.userid=void 0)})}renderSignInButton(){return n`
            <a href="/login.html">
                Sign In...
            </a>
        `}renderSignOutButton(){return n`
        <button
            @click=${this.signOut}
        >
            Sign Out
        </button>
        `}toggleDarkMode(t){const i=t.target.checked;this.darkModeEnabled=i,_.relay(t,"dark-mode",{checked:i})}signOut(t){_.relay(t,"auth:message",["auth/signout"])}static initializeOnce(){const t=(e,i)=>{e?.classList.toggle("dark-mode",i)};document.body.addEventListener("dark-mode",e=>{t(e.currentTarget,e.detail.checked)}),console.log("Header Initialized")}};k.styles=[m.styles,j.styles,R.styles,h`
        :host {
            display: block;
            width: 100%;
            height: var(--header-height, 64px);
        }
        `];let l=k;f([d()],l.prototype,"loggedIn",2);f([d()],l.prototype,"userid",2);f([d()],l.prototype,"darkModeEnabled",2);f([d()],l.prototype,"profile",1);var U=Object.defineProperty,G=Object.getOwnPropertyDescriptor,O=(s,t,e,i)=>{for(var a=i>1?void 0:i?G(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(a=(i?o(t,e,a):o(a))||a);return i&&a&&U(t,e,a),a};class v extends b{get profile(){return this.model.profile}constructor(){super("raiders:model")}render(){return n`
            <h2>Arc Raider Profile</h2>
            <p>Name: ${this.userId}</p>
        `}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),t==="user-id"&&e!==i&&i&&this.dispatchMessage(["profile/request",{userid:i}])}get src(){return`/api/arcraiders/${this.userId}`}}O([$({attribute:"user-id"})],v.prototype,"userId",2);O([d()],v.prototype,"profile",1);const J=h`
    .items-list dl {
        display: grid;
        gap: 1rem;
    }
    
    .row {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        padding-left: 30px;
        padding-right: 30px;

        & > dt {
            grid-column: 1;
        }
        
        & > * {
            border: 3px solid black;
            padding: 0.75rem;
            font-color: var(--color-text);
        }
    }
`,H={styles:J};var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,g=(s,t,e,i)=>{for(var a=i>1?void 0:i?Q(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(a=(i?o(t,e,a):o(a))||a);return i&&a&&K(t,e,a),a};const w=class w extends b{constructor(){super("raiders:model"),this.src="/api/items",this.formData={},this._authObserver=new D(this,"raiders:auth")}get itemIndex(){return this.filterItems(this.model.itemsList)}connectedCallback(){console.log("Connected Callback Called"),super.connectedCallback(),this._authObserver.observe(({user:t})=>{t?.authenticated&&this.dispatchMessage(["items/request",{}])})}render(){const t=this.itemIndex?.map(this.renderItem),e=this.renderWorkshopFilters(),i=this.renderRarityFilters();return n`
            <main class="page">
                <header>
                    <h2>Items</h2>
                </header>

                <form
                    @change=${a=>this.handleChange(a)}
                    @submit=${a=>this.handleSubmit(a)}
                    @reset=${a=>this.handleReset(a)}
                >   
                    <label for="name_search">Search by Item Name:</label>
                        <input type="text" id="name_search" name="name_search" /><br>

                    <h3>Rarity Filters:</h3><br>
                    ${i}

                    <h3>Workshop Filters:</h3><br>
                    ${e}

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
                <dl class="items-list">${t}</dl>
            </main>
        `}renderWorkshopFilters(){return[{field_name:"wkbch_refiner",visible_name:"Refiner"},{field_name:"wkbch_medical",visible_name:"Medical Station"},{field_name:"wkbch_explosive",visible_name:"Explosives Station"},{field_name:"wkbch_equipment",visible_name:"Equipment Station"},{field_name:"wkbch_basic",visible_name:"Basic Bench"},{field_name:"wkbch_utility",visible_name:"Utility Bench"},{field_name:"wkbch_weapon",visible_name:"Weapon Bench"},{field_name:"wkbch_gunsmith",visible_name:"Gunsmith"}].map(({field_name:e,visible_name:i})=>n`
            <input type="checkbox" id="${e}" name="${e}" />
            <label for="${e}">${i}</label><br>
            `)}renderRarityFilters(){return[{field_name:"rarity_common",visible_name:"Common"},{field_name:"rarity_uncommon",visible_name:"Uncommon"},{field_name:"rarity_rare",visible_name:"Rare"},{field_name:"rarity_epic",visible_name:"Epic"},{field_name:"rarity_legendary",visible_name:"Legendary"}].map(({field_name:e,visible_name:i})=>n`
            <input type="checkbox" id="${e}" name="${e}" />
            <label for="${e}">${i}</label><br>
            `)}renderItem(t){const{name:e,description:i,item_type:a,rarity:r,value:o,workbench:P,flavor_text:C}=t;return console.log(t),n`
            <div class="row">
                <dt>${e}</dt>
                <dd>${i}</dd>
                <dd>${a}</dd>
                <dd>${r}</dd>
                <dd>${o}</dd>
                <dd>${P}</dd>
                <dd>${C}</dd>
            </div>
        `}filterItems(t){if(!t)return t;console.log("Running filter");let e=t;this.formData?.name_search&&this.formData.name_search!==""&&(e=e.filter(r=>r.name.includes(this.formData.name_search)));const i=[this.formData?.rarity_common?"Common":void 0,this.formData?.rarity_uncommon?"Uncommon":void 0,this.formData?.rarity_rare?"Rare":void 0,this.formData?.rarity_epic?"Epic":void 0,this.formData?.rarity_legendary?"Legendary":void 0].filter(r=>r!==void 0);i.length&&(e=e.filter(r=>{if(!r.rarity)return!1;for(const o of i)if(r.rarity.includes(o))return!0;return!1}));const a=[this.formData?.wkbch_refiner?"Ref":void 0,this.formData?.wkbch_medical?"Med":void 0,this.formData?.wkbch_explosive?"Exp":void 0,this.formData?.wkbch_equipment?"Equ":void 0,this.formData?.wkbch_basic?"Bas":void 0,this.formData?.wkbch_utility?"Ut":void 0,this.formData?.wkbch_weapon?"Wea":void 0,this.formData?.wkbch_gunsmith?"Gun":void 0].filter(r=>r!==void 0);return a.length&&(e=e.filter(r=>{if(!r.workbench)return!1;for(const o of a)if(r.workbench.includes(o))return!0;return!1})),console.log("Filtered Benches"),console.log(e),e}handleChange(t){const e=t.target,i=e?.name,a=e?.value,r=e?.checked,o=this.formData;switch(console.log("Hanlding change"),console.log(t.target),i){case"name_search":{this.formData={...o,name_search:a};break}case"wkbch_refiner":{this.formData={...o,wkbch_refiner:r};break}case"wkbch_medical":{this.formData={...o,wkbch_medical:r};break}case"wkbch_explosive":{this.formData={...o,wkbch_explosive:r};break}case"wkbch_equipment":{this.formData={...o,wkbch_equipment:r};break}case"wkbch_basic":{this.formData={...o,wkbch_basic:r};break}case"wkbch_utility":{this.formData={...o,wkbch_utility:r};break}case"wkbch_weapon":{this.formData={...o,wkbch_weapon:r};break}case"wkbch_gunsmith":{this.formData={...o,wkbch_gunsmith:r};break}case"rarity_common":{this.formData={...o,rarity_common:r};break}case"rarity_uncommon":{this.formData={...o,rarity_uncommon:r};break}case"rarity_rare":{this.formData={...o,rarity_rare:r};break}case"rarity_epic":{this.formData={...o,rarity_epic:r};break}case"rarity_legendary":{this.formData={...o,rarity_legendary:r};break}default:throw`Unhandled change event target ${i}`}}handleSubmit(t){t.preventDefault(),console.log("Attempting to submit")}handleReset(t){console.log(t),this.formData={}}};w.styles=[m.styles,H.styles,I.styles,h`
        :host {
            display:contents;
        }
        `];let c=w;g([d()],c.prototype,"itemIndex",1);g([$({attribute:"item-id"})],c.prototype,"itemId",2);g([d()],c.prototype,"formData",2);const X=[{path:"/app",view:()=>n`<home-view></home-view>`},{path:"/",redirect:"/app"},{path:"/app/items",view:()=>n`<item-view></item-view>`},{path:"/app/items/:id",view:s=>n`<item-view item-id=${s.id}></item-view>`},{path:"/app/profile/:id",view:s=>n`<profile-view user-id="${s.id}></profile-view>`}];class Y extends x{render(){return n`<mu-switch></mu-switch>`}connectedCallback(){super.connectedCallback(),l.initializeOnce()}}z({"mu-auth":p.Provider,"mu-history":q.Provider,"raiders-header":l,"mu-switch":class extends M.Element{constructor(){super(X,"raiders:history","raiders:auth")}},"mu-store":class extends S.Provider{constructor(){super(F,E,"raiders:auth")}},"raiders-app":Y,"home-view":u,"profile-view":v,"item-view":c});l.initializeOnce();
