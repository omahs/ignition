import { Ignition as IgnitionImplementation } from "./internal/Ignition";
import { Ignition, IgnitionConstructorArgs } from "./types";

/**
 * Creates a new instance of Ignition.
 *
 * @alpha
 */
export function initialize(
  intializationArgs: IgnitionConstructorArgs
): Ignition {
  return new IgnitionImplementation(intializationArgs);
}
