import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) { // define element and extend LitElement and DDDSuper

  static get tag() {
    return "un-sdg";
  }

  constructor() { // initialize variables
    super();
    this.goal = "circle"; // default goal to display
    this.label = "";
    this.width = "254px";
    this.height = "254px";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.image = ""; // default image
  }

  static get properties() { // variable properties
    return {
      goal: { type: String, reflect: true },
      label: { type: String},
      color: { type: String },
      width: { type: String },
      height: { type: String },
      fetchPriority: { type: String, reflect: true},
      colorOnly: { type: Boolean },
      image: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host { // colors and other style displays of the goals
        --un-sdg-goal-1: rgb(235, 28, 44);
        --un-sdg-goal-2: rgb(210, 160, 42);
        --un-sdg-goal-3: rgb(44, 155, 72);
        --un-sdg-goal-4: rgb(194, 31, 51);
        --un-sdg-goal-5: rgb(239, 64, 42);
        --un-sdg-goal-6: rgb(0, 173, 216);
        --un-sdg-goal-7: rgb(253, 183, 19);
        --un-sdg-goal-8: rgb(143, 23, 55);
        --un-sdg-goal-9: rgb(243, 109, 36);
        --un-sdg-goal-10: rgb(224, 21, 131);
        --un-sdg-goal-11: rgb(249, 157, 37);
        --un-sdg-goal-12: rgb(207, 141, 42);
        --un-sdg-goal-13: rgb(72, 119, 61);
        --un-sdg-goal-14: rgb(0, 125, 187);
        --un-sdg-goal-15: rgb(63, 175, 73);
        --un-sdg-goal-16: rgb(1, 85, 138);
        --un-sdg-goal-17: rgb(25, 54, 103);

        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }
      .svg-wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      img {
        width: 100%;
        height: 100%
      }
    `];
  }

  updated(changedProperties) { // update elements when something changes
    if (changedProperties.has('goal')) {
      this.updateElements();
    }
  }

  updateElements() { // update color, image, and label for each goal/circle/all
    const goal = this.getAttribute('goal');
    switch (goal) {
      case 'circle':
        this.label = "Sustainable developments logo";
        this.color = "white";
        this.image = new URL(`../lib/svgs/circle.png`, import.meta.url).href;
        break;
      case 'all':
        this.label = "All Sustainable Development Goals";
        this.color = "white";
        this.image = new URL(`../lib/svgs/all.svg`, import.meta.url).href;
        break;
      case '1':
        this.label = "Goal 1: No poverty";
        this.color = "var(--un-sdg-goal-1)";
        this.image = new URL(`../lib/svgs/goal-1.svg`, import.meta.url).href;
        break;
      case '2':
        this.label = "Goal 2: Zero hunger";
        this.color = "var(--un-sdg-goal-2)";
        this.image = new URL(`../lib/svgs/goal-2.svg`, import.meta.url).href;
        break;
      case '3':
        this.label = "Goal 3: Good health and well-being";
        this.color = "var(--un-sdg-goal-3)";
        this.image = new URL(`../lib/svgs/goal-3.svg`, import.meta.url).href;
        break;
      case '4':
        this.label = "Goal 4: Quality education";
        this.color = "var(--un-sdg-goal-4)";
        this.image = new URL(`../lib/svgs/goal-4.svg`, import.meta.url).href;
        break;
      case '5':
        this.label = "Goal 5: Gender equality";
        this.color = "var(--un-sdg-goal-5)";
        this.image = new URL(`../lib/svgs/goal-5.svg`, import.meta.url).href;
        break;
      case '6':
        this.label = "Goal 6: Clean water and sanitation";
        this.color = "var(--un-sdg-goal-6)";
        this.image = new URL(`../lib/svgs/goal-6.svg`, import.meta.url).href;
        break;
      case '7':
        this.label = "Goal 7: Affordable and clean energy";
        this.color = "var(--un-sdg-goal-7)";
        this.image = new URL(`../lib/svgs/goal-7.svg`, import.meta.url).href;
        break;
      case '8':
        this.label = "Goal 8: Decent work and economic growth";
        this.color = "var(--un-sdg-goal-8)";
        this.image = new URL(`../lib/svgs/goal-8.svg`, import.meta.url).href;
        break;
      case '9':
        this.label = "Goal 9: Industry, innovation and infrastructure";
        this.color = "var(--un-sdg-goal-9)";
        this.image = new URL(`../lib/svgs/goal-9.svg`, import.meta.url).href;
        break;
      case '10':
        this.label = "Goal 10: Reduced inequalities";
        this.color = "var(--un-sdg-goal-10)";
        this.image = new URL(`../lib/svgs/goal-10.svg`, import.meta.url).href;
        break;
      case '11':
        this.label = "Goal 11: Sustainable cities and communities";
        this.color = "var(--un-sdg-goal-11)";
        this.image = new URL(`../lib/svgs/goal-11.svg`, import.meta.url).href;
        break;
      case '12':
        this.label = "Goal 12: Responsible consumption and production";
        this.color = "var(--un-sdg-goal-12)";
        this.image = new URL(`../lib/svgs/goal-12.svg`, import.meta.url).href;
        break;
      case '13':
        this.label = "Goal 13: Climate action";
        this.color = "var(--un-sdg-goal-13)";
        this.image = new URL(`../lib/svgs/goal-13.svg`, import.meta.url).href;
        break;
      case '14':
        this.label = "Goal 14: Life below water";
        this.color = "var(--un-sdg-goal-14)";
        this.image = new URL(`../lib/svgs/goal-14.svg`, import.meta.url).href;
        break;
      case '15':
        this.label = "Goal 15: Life on land";
        this.color = "var(--un-sdg-goal-15)";
        this.image = new URL(`../lib/svgs/goal-15.svg`, import.meta.url).href;
        break;
      case '16':
        this.label = "Goal 16: Peace, justice and strong institutions";
        this.color = "var(--un-sdg-goal-16)";
        this.image = new URL(`../lib/svgs/goal-16.svg`, import.meta.url).href;
        break;
      case '17':
        this.label = "Goal 17: Partnerships for the goals";
        this.color = "var(--un-sdg-goal-17)";
        this.image = new URL(`../lib/svgs/goal-17.svg`, import.meta.url).href;
        break;
    }
  }  

  render () { // render width and height for svgs
    return html`
    <style>
      :host {
        --width: ${this.width}; 
        --height: ${this.height};
      }
    </style>
    <div class="svg-wrapper" style="background-color: ${this.color};">
      ${this.colorOnly ? `` : // if colorOnly is true, no img tag is rendered, if colorOnly is false, img is rendered with src, alt, and fetchpriority
          html`
            <img 
              src = "${this.image}"
              alt = "${this.label}"
              fetchpriority="${this.fetchPriority}"
            />
        `}
    </div>
    `;          
  }

  static get haxProperties() { // HAX properties for the component
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);