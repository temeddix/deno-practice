// my-component.ts
export class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    }).innerHTML = `<p>Hello from Deno Web Component!</p>`;
  }
}
customElements.define("my-component", MyComponent);
