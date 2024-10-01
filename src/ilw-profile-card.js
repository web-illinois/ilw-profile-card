import {LitElement, html, unsafeCSS, nothing} from 'lit';
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import styles from './ilw-profile-card.styles.css?inline';
import './ilw-profile-card.css';
import "@illinois-toolkit/ilw-card";
import "@illinois-toolkit/ilw-icon";

class ProfileCard extends LitElement {

    static get properties() {
        return {
            round: { type: Boolean },
            aspectratio: {},
            theme: {},
            _hasSlots: { state: true, type: Object },
        };
    }

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.round = false;
        this.aspectratio = "";
        this.theme = "white";
        this._hasSlots = {};
    }

    /**
     * Tracks the number of graphic elements (images and icons) in the card, so we can
     * hide the graphics container if there's no graphics.
     *
     * @private
     */
    _slotsChanged() {
        console.log("slotsChanged");
        let slots = this.shadowRoot.querySelectorAll("slot");

        let hasSlots = {};
        for (let slot of slots) {
            if (slot.name && slot.assignedElements().length > 0) {
                hasSlots[slot.name] = true;
            }
        }
        this._hasSlots = hasSlots;
    }

    render() {
        let imageClasses = {
            "profile-image": true,
            round: this.round,
            aspect: !!this.aspectratio
        }
        return html`
            <ilw-card aspectRatio=${this.aspectratio ? this.aspectratio : nothing}
                      theme=${this.theme === "gray" ? "gray" : nothing}>
                <div class=${classMap(imageClasses)} slot="image">
                    <slot name="image"></slot>
                </div>
                <div class="content">
                    <slot name="name"></slot>
                    <slot name="title"></slot>
                    <div class="icon address ${this._hasSlots.address ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="location" alt="address" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="address" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon phone ${this._hasSlots.phone ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="phone" alt="phone" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="phone" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon email ${this._hasSlots.email ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="email" alt="email" size="2em"></ilw-icon>
                        </div>
                        <slot name="email" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon hours ${this._hasSlots.hours ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="hours" alt="hours" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="hours" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon linkedin ${this._hasSlots.linkedin ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="linkedin" type="line" alt="LinkedIn" size="2.5em"></ilw-icon>
                        </div>
                        <slot name="linkedin" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon x ${this._hasSlots.x ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="x" type="line" alt="X (Twitter)" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="x" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon facebook ${this._hasSlots.facebook ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="facebook" type="line" alt="Facebook" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="facebook" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon news ${this._hasSlots.news ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="news" alt="news" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="news" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="icon manager ${this._hasSlots.manager ? '' : 'hidden'}">
                        <div class="icon-wrap">
                            <ilw-icon icon="hr" alt="HR" size="1.7em"></ilw-icon>
                        </div>
                        <slot name="manager" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <slot></slot>
                </div>
            </ilw-card>
        `;
    }
}

customElements.define('ilw-profile-card', ProfileCard);