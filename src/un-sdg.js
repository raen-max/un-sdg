import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
//new URL('../lib/svgs/goal-1.svg', import.meta.url).href;

const goalData = [
  { name: 'No Poverty', color: '#e5243b', image: new URL('../lib/svgs/goal-1.svg', import.meta.url).href },
  { name: 'Zero Hunger', color: '#dda63a' },
  { name: 'Good Health and Well-being', color: '#4c9f38' },
  { name: 'Quality Education', color: '#c5192d' },
  { name: 'Gender Equality', color: '#ff3a21' },
  { name: 'Clean Water and Sanitation', color: '#26bde2' },
  { name: 'Affordable and Clean Energy', color: '#fcc30b' },
  { name: 'Decent Work and Economic Growth', color: '#a21942' },
  { name: 'Industry, Innovation and Infrastructure', color: '#fd6925' },
  { name: 'Reduced Inequalities', color: '#dd1367' },
  { name: 'Sustainable Cities and Communities', color: '#fd9d24' },
  { name: 'Responsible Consumption and Production', color: '#bf8b2e' },
  { name: 'Climate Action', color: '#3f7e44' },
  { name: 'Life Below Water', color: '#0a97d9' },
  { name: 'Life on Land', color: '#56c02b' },
  { name: 'Peace, Justice and Strong Institutions', color: '#00689d' },
  { name: 'Partnerships for the Goals', color: '#19486a' },
];

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.title = "";
    this.goal = "circle";
    this.label = "";
    this.imgSrc = new URL('../lib/svgs/circle.png', import.meta.url).href;
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.alt = null;
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
      alt: { type: String }
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
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
        width: 254px;
        height: 254px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .color-only {
        width: 100%;
        height: 100%;
      }
    `];
  }

  render() {
    if (this.colorOnly) {
      const goalNumber = parseInt(this.goal);
      if (goalNumber >= 1 && goalNumber <= 17) {
        const color = goalData[goalNumber - 1].color;
        return html`<div class="color-only" style="background-color: ${color};"></div>`;
      }
    }

    return html`
    <img
      src="${this.imgSrc}"
      alt="${this.label || this.alt || this.title}"
      loading="${this.loading}"
      fetchpriority="${this.fetchPriority}"
    />`;
  }

  updated(changedProperties) {
    if (changedProperties.has('goal')) {
      this.updateGoalData();
    }
  }

  updateGoalData() {
    const goalNumber = parseInt(this.goal);
    if (this.goal === 'all') {
      this.imgSrc = new URL(`./lib/svgs/goal-all.svg`, import.meta.url).href;
      this.alt = 'All Sustainable Development Goals';
    } else if (this.goal === 'circle') {
      this.imgSrc = new URL(`./lib/svgs/circle.png`, import.meta.url).href;
      this.alt = 'Sustainable Development Goals Circle';
    } else if (goalNumber >= 1 && goalNumber <= 17) {
      this.imgSrc = goalData[goalNumber - 1].image || '';
      this.alt = `Goal ${goalNumber}: ${goalData[goalNumber - 1].name}`;
      this.label = `Goal ${goalNumber}: ${goalData[goalNumber - 1].name}`;
    }
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);
