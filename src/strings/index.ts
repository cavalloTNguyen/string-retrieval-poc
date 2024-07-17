import { baseStrings } from "./base";
import { overrideAStrings } from "./overrideA";

const overrideMap = {
  a: overrideAStrings,
} as const;

export function getString(
  key: keyof typeof baseStrings,
  override?: keyof typeof overrideMap
): string {
  if (override) {
    const stringFromOverride = overrideMap[override][key];

    if (stringFromOverride !== undefined) {
      return stringFromOverride;
    }
  }

  return baseStrings[key];
}
