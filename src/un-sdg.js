import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
new URL('../lib/svgs/goal-1.svg', import.meta.url).href;

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.title = "";
    this.goal = "circle";
    this.imgSrc = new URL('../lib/svgs/circle.png', import.meta.url).href;
    this.width = "";
    this.height = "";
    this.loading = "lazy";
    this.fetchPriority = "low";
  }

  /** 
   * This initializes properties. 
   */
  static get properties() {
    return {
      title: { type: String },
      goal: { type: String },
      imgSrc: { type: String },
      width: { type: String },
      height: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: String },
      isImageVisible: { type: Boolean }
    };
  }

  /** This defines said properties. */
  static get styles() {
    return [super.styles,
      css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }
      /** :host declares variables for CSS */
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  render() {
    return html`
      <div class="wrapper">
        <div>${this.title}</div>
        <slot></slot>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('goal')) {
      this.updateAlt();
    }
  }

  /**
   * Update the alt text based on the goal attribute.
   */
  updateAlt() {
    const goal = this.goal;
    const goalLabels = {
      circle: "Sustainable developments logo",
      all: "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals",
      '1': "Goal 1: No poverty",
      '2': "Goal 2: Zero hunger",
      '3': "Goal 3: Good health and well-being",
      '4': "Goal 4: Quality education",
      '5': "Goal 5: Gender equality",
      '6': "Goal 6: Clean water and sanitation",
      '7': "Goal 7: Affordable and clean energy",
      '8': "Goal 8: Decent work and economic growth",
      '9': "Goal 9: Industry, innovation and infrastructure",
      '10': "Goal 10: Reduced inequalities",
      '11': "Goal 11: Sustainable cities and communities",
      '12': "Goal 12: Responsible consumption and production",
      '13': "Goal 13: Climate action",
      '14': "Goal 14: Life below water",
      '15': "Goal 15: Life on land",
      '16': "Goal 16: Peace, justice and strong institutions",
      '17': "Goal 17: Partnerships for the goals"
    };

    this.label = goalLabels[goal] || '';
  }

  /** 
   * HaxProperties integration via file reference 
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);
