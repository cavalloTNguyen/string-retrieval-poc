import { getString } from "./strings";

console.log("-- car --\n");
console.log(`base: ${getString("car")}`);
console.log(`overrideA: ${getString("car", "a")}\n`);

console.log("-- airplane --\n");
console.log(`base: ${getString("airplane")}`);
console.log(`overrideA: ${getString("airplane", "a")}\n`);
