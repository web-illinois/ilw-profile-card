import {LitElement, html, unsafeCSS, nothing} from 'lit';
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import styles from './ilw-profile-card.styles.css?inline';
import './ilw-profile-card.css';
import "@illinois-toolkit/ilw-card";

class ProfileCard extends LitElement {

    static get properties() {
        return {
            round: { type: Boolean },
            aspectratio: {},
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
            <ilw-card aspectRatio=${this.aspectratio ? this.aspectratio : nothing}>
                <div class=${classMap(imageClasses)} slot="image">
                    <slot name="image"></slot>
                </div>
                <slot name="name"></slot>
                <slot name="title"></slot>
                ${ this._hasAddress ? html`<div class="address"><slot name="address"></slot></div>` : '' }
                ${ this._hasAddress ? html`<div class="phone"><slot name="phone"></slot></div>` : '' }
                ${ this._hasAddress ? html`<div class="email"><slot name="email"></slot></div>` : '' }
                <slot></slot>
            </ilw-card>
        `;
    }
}

customElements.define('ilw-profile-card', ProfileCard);