import { baseStrings } from "./base";

export const overrideAStrings: Partial<
  Record<keyof typeof baseStrings, string>
> = {
  car: "Jeep",
};
