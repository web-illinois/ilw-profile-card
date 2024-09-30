import { LitElement, html } from 'lit';
import styles from './ilw-profile-card.styles';
import './ilw-profile-card.css';

class ProfileCard extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-profile-card', ProfileCard);