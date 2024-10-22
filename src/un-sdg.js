import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {
  static get tag() { return "un-sdg"; }

  constructor() {
    super();
    this.goal = "circle"; 
    this.label = "";
    this.width = "254px";
    this.height = "254px";
    this.fetchPriority = "low"; 
    this.colorOnly = false; 
    this.image = ""; 
    this.color = ""; 
  }

  static get properties() {
    return { 
      goal: { type: String, reflect: true }, 
      label: { type: String },
      width: { type: String }, 
      height: { type: String },
      fetchPriority: { type: String, reflect: true },
      colorOnly: { type: Boolean } 
    };
  }

  static get styles() {
    return css`
      :host { display: inline-block; }
      .svg-wrapper { margin: 10px; padding: 10px; }
      img { width: 100%; height: 100%; }
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('goal')) this.updateElements();
  }

  updateElements() {
    const goals = {
      'circle': ["Sustainable developments logo", "white", "circle.png"],
      'all': ["All Sustainable Development Goals", "white", "all.svg"],
      '1': ["Goal 1: No poverty", "#eb1c2c", "goal-1.svg"],
      '2': ["Goal 2: Zero hunger", "#d2a42a", "goal-2.svg"],
      '3': ["Goal 3: Good health", "#2c9b48", "goal-3.svg"],
      '4': ["Goal 4: Quality education", "#c21f33", "goal-4.svg"],
      '5': ["Goal 5: Gender equality", "#ef402a", "goal-5.svg"],
      '6': ["Goal 6: Clean water", "#00add8", "goal-6.svg"],
      '7': ["Goal 7: Clean energy", "#fdb712", "goal-7.svg"],
      '8': ["Goal 8: Economic growth", "#8f1737", "goal-8.svg"],
      '9': ["Goal 9: Innovation", "#f36d24", "goal-9.svg"],
      '10': ["Goal 10: Reduced inequalities", "#e01a83", "goal-10.svg"],
      '11': ["Goal 11: Sustainable cities", "#f99d25", "goal-11.svg"],
      '12': ["Goal 12: Responsible consumption", "#cf8d2a", "goal-12.svg"],
      '13': ["Goal 13: Climate action", "#48773d", "goal-13.svg"],
      '14': ["Goal 14: Life below water", "#007cbd", "goal-14.svg"],
      '15': ["Goal 15: Life on land", "#3faf49", "goal-15.svg"],
      '16': ["Goal 16: Peace and justice", "#01558a", "goal-16.svg"],
      '17': ["Goal 17: Partnerships", "#193663", "goal-17.svg"]
    };
    const [desc, color, img] = goals[this.goal] || ["", "transparent", ""];
    this.label = this.label || desc;
    this.color = color;
    this.image = new URL(`../lib/svgs/${img}`, import.meta.url).href;
  }

  render() {
    return html`
      <div class="svg-wrapper" style="background-color: ${this.color}; width: ${this.width}; height: ${this.height};">
        ${!this.colorOnly ? html`
          <img src="${this.image}" alt="${this.label}" fetchpriority="${this.fetchPriority}" loading="lazy" />
        ` : ''}
      </div>
    `;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);
