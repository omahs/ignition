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

/**
 * The configuration options that control how on-chain execution will happen
 * during the deploy.
 *
 * @alpha
 */
export interface IgnitionDeployOptions {
  txPollingInterval: number;
  networkName: string;
  maxRetries: number;
  gasPriceIncrementPerRetry: BigNumber | null;
  pollingInterval: number;
  eventDuration: number;
  force: boolean;
}

/**
 * The result of a deployment operation.
 *
 * @alpha
 */
export type DeploymentResultT<ModuleT extends ModuleDict = ModuleDict> =
  unknown;

/**
 * Ignition's main interface.
 *
 * @alpha
 */
export interface Ignition {
  /**
   * Run a deployment based on a given Ignition module on-chain,
   * leveraging any configured journal to record.
   *
   * @param ignitionModule - An Ignition module
   * @param options - Configuration options
   * @returns A struct indicating whether the deployment was
   * a success, failure or hold. A successful result will
   * include the addresses of the deployed contracts.
   *
   * @internal
   */
  deploy<ModuleT extends ModuleDict>(
    ignitionModule: Module<ModuleT>,
    options: IgnitionDeployOptions
  ): Promise<DeploymentResultT<ModuleT>>;

  /**
   * Construct a plan (or dry run) describing how a deployment will be executed
   * for the given module.
   *
   * @param deploymentModule - The Ignition module to be deployed
   * @returns The deployment details as a plan
   *
   * @internal
   */
  plan<T extends ModuleDict>(
    deploymentModule: Module<T>
  ): Promise<IgnitionPlan>;
}
