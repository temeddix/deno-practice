// my-component.ts
export class MyComponent extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
    const pElement = document.createElement("p");
    pElement.innerText = "Hello from Deno Web Component!";
    this.shadow.appendChild(pElement);
  }
}
customElements.define("my-component", MyComponent);
