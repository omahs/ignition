import type { BigNumber } from "ethers";
import { Module, ModuleDict } from "./module";
import { IgnitionPlan } from "./plan";

/**
 * The type of the services that Ignition uses. Soon to be made private.
 *
 * @internal
 */
export type ServicesT = unknown;

/**
 * The type of the CommandJournal that Ignition uses.
 *
 * @alpha
 */
export type ICommandJournalT = unknown;

/**
 * The type of a callback to update the UI.
 *
 * @alpha
 */
export type UpdateUiActionT = unknown;

/**
 * The setup options for Ignition
 *
 * @internal
 */
export interface IgnitionConstructorArgs {
  /**
   * An adapter that allows Ignition to communicate with external services
   * like the target blockchain or local filesystem.
   */
  services: ServicesT;

  /**
   * An optional UI update function that will be invoked with the current
   * Ignition state on each major state change.
   */
  uiRenderer?: UpdateUiActionT;

  /**
   * An optional journal that will be used to store a record of the current
   * run and to access the history of previous runs.
   */
  journal?: ICommandJournalT;
}
