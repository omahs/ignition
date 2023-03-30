/**
 * The representation of the execution graph that Plan gets.
 *
 * @alpha
 */
export type IExecutionGraphT = unknown;

/**
 * The representation of the deployment graph that Plan gets.
 *
 * @alpha
 */
export type IDeploymentGraphT = unknown;

/**
 * The planned deployment.
 *
 * @internal
 */
export interface IgnitionPlan {
  deploymentGraph: IDeploymentGraphT;
  executionGraph: IExecutionGraphT;
}
