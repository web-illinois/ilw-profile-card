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
            _hasAddress: { state: true, type: Boolean },
            _hasPhone: { state: true, type: Boolean },
            _hasEmail: { state: true, type: Boolean },
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
        this._hasAddress = false;
        this._hasPhone = false;
        this._hasEmail = false;
    }

    /**
     * Tracks the number of graphic elements (images and icons) in the card, so we can
     * hide the graphics container if there's no graphics.
     *
     * @private
     */
    _slotsChanged() {
        this._hasAddress = this.shadowRoot.querySelector("slot[name=address]").assignedElements().length > 0;
        this._hasPhone = this.shadowRoot.querySelector("slot[name=phone]").assignedElements().length > 0;
        this._hasEmail = this.shadowRoot.querySelector("slot[name=email]").assignedElements().length > 0;
    }

    render() {
        let imageClasses = {
            "profile-image": true,
            aspect: !!this.aspectratio
        }
        return html`
            <ilw-card aspectRatio=${this.aspectratio ? this.aspectratio : nothing}
                      theme=${this.theme === "gray" ? "gray" : nothing}>
                <div class=${classMap(imageClasses)} slot="image">
                    <slot name="image"></slot>
                </div>
                <slot name="name"></slot>
                <div class="content">
                    <slot name="title"></slot>
                    <div class="address ${this._hasAddress ? '' : 'hidden'}">
                        <ilw-icon icon="location" size="1.5em"></ilw-icon>
                        <slot name="address" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="phone ${this._hasPhone ? '' : 'hidden'}">
                        <ilw-icon icon="phone" size="1.5em"></ilw-icon>
                        <slot name="phone" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <div class="email ${this._hasEmail ? '' : 'hidden'}">
                        <ilw-icon icon="email" size="1.5em"></ilw-icon>
                        <slot name="email" @slotchange=${this._slotsChanged}></slot>
                    </div>
                    <slot></slot>
                </div>
            </ilw-card>
        `;
    }
}

customElements.define('ilw-profile-card', ProfileCard);