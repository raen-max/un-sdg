import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

// Data for the Sustainable Development Goals (SDGs) including their names, colors, and image paths.
const goalData = [
  { name: 'No Poverty', color: '#e5243b', image: new URL('../lib/svgs/goal-1.svg', import.meta.url).href },
  { name: 'Zero Hunger', color: '#dda63a', image: new URL('../lib/svgs/goal-2.svg', import.meta.url).href },
  { name: 'Good Health and Well-being', color: '#4c9f38', image: new URL('../lib/svgs/goal-3.svg', import.meta.url).href },
  { name: 'Quality Education', color: '#c5192d', image: new URL('../lib/svgs/goal-4.svg', import.meta.url).href },
  { name: 'Gender Equality', color: '#ff3a21', image: new URL('../lib/svgs/goal-5.svg', import.meta.url).href },
  { name: 'Clean Water and Sanitation', color: '#26bde2', image: new URL('../lib/svgs/goal-6.svg', import.meta.url).href },
  { name: 'Affordable and Clean Energy', color: '#fcc30b', image: new URL('../lib/svgs/goal-7.svg', import.meta.url).href },
  { name: 'Decent Work and Economic Growth', color: '#a21942', image: new URL('../lib/svgs/goal-8.svg', import.meta.url).href },
  { name: 'Industry, Innovation and Infrastructure', color: '#fd6925', image: new URL('../lib/svgs/goal-9.svg', import.meta.url).href },
  { name: 'Reduced Inequalities', color: '#dd1367', image: new URL('../lib/svgs/goal-10.svg', import.meta.url).href },
  { name: 'Sustainable Cities and Communities', color: '#fd9d24', image: new URL('../lib/svgs/goal-11.svg', import.meta.url).href },
  { name: 'Responsible Consumption and Production', color: '#bf8b2e', image: new URL('../lib/svgs/goal-12.svg', import.meta.url).href },
  { name: 'Climate Action', color: '#3f7e44', image: new URL('../lib/svgs/goal-13.svg', import.meta.url).href },
  { name: 'Life Below Water', color: '#0a97d9', image: new URL('../lib/svgs/goal-14.svg', import.meta.url).href },
  { name: 'Life on Land', color: '#56c02b', image: new URL('../lib/svgs/goal-15.svg', import.meta.url).href },
  { name: 'Peace, Justice and Strong Institutions', color: '#00689d', image: new URL('../lib/svgs/goal-16.svg', import.meta.url).href },
  { name: 'Partnerships for the Goals', color: '#19486a', image: new URL('../lib/svgs/goal-17.svg', import.meta.url).href },
];

// Define the un-sdg custom element extending LitElement and DDDSuper.
export class unSdg extends DDDSuper(LitElement) {
  
  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.title = "";
    this.goal = "circle"; // Default goal to display.
    this.label = "";
    this.imgSrc = new URL('../lib/svgs/circle.png', import.meta.url).href; // Default image source.
    this.loading = "lazy"; // Lazy loading by default.
    this.fetchPriority = "low"; // Low fetch priority by default.
    this.colorOnly = false; // Flag for color-only rendering.
    this.alt = null; // Default alt text.
    this.width = "254px"; // Default width.
    this.height = "254px"; // Default height.
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: String, reflect: true },
      imgSrc: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: Boolean, attribute: 'color-only', reflect: true },
      label: { type: String },
      alt: { type: String },
      width: { type: String, attribute: "width" },
      height: { type: String, attribute: "height" },
    };
  }

  static get styles() {
    return [super.styles,
      css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        width: var(--un-sdg-width, 254px); // Use CSS variable for width.
        height: var(--un-sdg-height, 254px); // Use CSS variable for height.
      }
      img {
        width: 100%; // Make image take full width.
        height: 100%; // Make image take full height.
        object-fit: contain; // Maintain aspect ratio.
      }
      .color-only {
        width: 100%; // Full width for color-only div.
        height: 100%; // Full height for color-only div.
      }
    `];
  }

  render() {
    if (this.colorOnly) {
      const goalNumber = parseInt(this.goal);
      if (goalNumber >= 1 && goalNumber <= 17) {
        const color = goalData[goalNumber - 1].color; // Get color for the goal.
        return html`<div class="color-only" style="background-color: ${color};"></div>`; // Display color-only square.
      }
    }

    return html`
    <img
      src="${this.imgSrc}"
      alt="${this.label || this.alt || this.title || goalData[parseInt(this.goal) - 1]?.name}" // Use label or fallback to goal name.
      loading="${this.loading}" //Set loading attribute.
      fetchpriority="${this.fetchPriority}" // Set fetch priority.
      style="width: ${this.width}; height: ${this.height};" // Inline styles for width and height.
    />`;
  }

  updated(changedProperties) {
    if (changedProperties.has('goal')) {
      this.updateGoalData(); // Update goal data if goal property has changed.
    }
  }

  updateGoalData() {
    const goalNumber = parseInt(this.goal);
    if (this.goal === 'all') {
      this.imgSrc = new URL(`./lib/svgs/goal-all.svg`, import.meta.url).href; // Image for all goals.
      this.alt = 'All Sustainable Development Goals'; // Alt text for all goals.
    } else if (this.goal === 'circle') {
      this.imgSrc = new URL(`./lib/svgs/circle.png`, import.meta.url).href; // Image for the circle.
      this.alt = 'Sustainable Development Goals Circle'; // Alt text for the circle.
    } else if (goalNumber >= 1 && goalNumber <= 17) {
      this.imgSrc = goalData[goalNumber - 1].image; // Image for specific goal.
      this.alt = `Goal ${goalNumber}: ${goalData[goalNumber - 1].name}`; // Alt text for specific goal.
      this.label = `Goal ${goalNumber}: ${goalData[goalNumber - 1].name}`; // Label for specific goal.
    }
  }

  // HAX properties for the component.
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

// Define the custom element in the global registry.
globalThis.customElements.define(unSdg.tag, unSdg);
