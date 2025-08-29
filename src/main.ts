import { add } from "@/site";
import type { MyComponent } from "@src/web_component.ts";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
console.log("Add 2 + 3 =", add(2, 3));

// Test Lit components programmatically
console.log("Lit components loaded and ready!");

// You can also create components dynamically
const dynamicComp = document.createElement("my-comp") as MyComponent;
dynamicComp.title = "Dynamically Created Component";
document.body?.appendChild(dynamicComp);
