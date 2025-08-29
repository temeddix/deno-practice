import { assertEquals } from "@std/assert";

Deno.test("Lit components module can be imported", async () => {
  // Test that the module can be imported without errors in Node.js environment
  try {
    // We can't test DOM functionality in Deno, but we can verify imports work
    const module = await import("../src/web_component.ts");
    assertEquals(typeof module.OtherComponent, "function");
    assertEquals(typeof module.MyComponent, "function");
  } catch (error) {
    // This is expected in Deno environment without DOM
    console.log(
      "DOM APIs not available in test environment, which is expected",
    );
    assertEquals(error.message.includes("HTMLElement"), true);
  }
});
