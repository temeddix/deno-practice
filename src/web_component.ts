class OtherComponent extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
    const pElement = document.createElement("p");
    pElement.innerText = "Hello from another Component!";
    this.shadow.appendChild(pElement);
  }
}
customElements.define("other-comp", OtherComponent);

class MyComponent extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({
      mode: "open",
    });
    const comp = document.createElement("other-comp") as OtherComponent;
    this.shadow.appendChild(comp);
  }
}
customElements.define("my-comp", MyComponent);
