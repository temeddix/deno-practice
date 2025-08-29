import { css, html, LitElement } from "lit";

class OtherComponent extends LitElement {
  message = "Hello from another Component!";

  static override properties = {
    message: { type: String },
  };

  static override styles = css`
    p {
      color: blue;
      font-family: Arial, sans-serif;
      margin: 10px 0;
    }
  `;

  override render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}

class MyComponent extends LitElement {
  override title = "My Lit Component";

  static override properties = {
    title: { type: String },
  };

  static override styles = css`
    :host {
      display: block;
      padding: 20px;
      border: 2px solid #ccc;
      border-radius: 8px;
      margin: 10px;
    }

    h2 {
      color: #333;
      margin-top: 0;
    }
  `;

  override render() {
    return html`
      <h2>${this.title}</h2>
      <other-comp message="Nested component with Lit!"></other-comp>
    `;
  }
}

// Define custom elements
customElements.define("other-comp", OtherComponent);
customElements.define("my-comp", MyComponent);

// Export for potential external use
export { MyComponent, OtherComponent };
