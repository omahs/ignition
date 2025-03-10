import { ethers } from "ethers";

import { IgnitionError } from "../src/errors";
import {
  Services,
  TransactionOptions,
  ITransactionsService,
  INetworkService,
  IContractsService,
  IConfigService,
  IArtifactsService,
  IAccountsService,
} from "../src/internal/types/services";
import { Artifact } from "../src/types/hardhat";
import { HasParamResult } from "../src/types/providers";

export function getMockServices() {
  const mockServices: Services = {
    network: new MockNetworkService(),
    contracts: new MockContractsService(),
    artifacts: new MockArtifactsService(),
    transactions: new MockTransactionService(),
    config: new MockConfigService(),
    accounts: new MockAccountsService(),
  };

  return mockServices;
}

class MockNetworkService implements INetworkService {
  public async getChainId(): Promise<number> {
    return 31337;
  }
}

class MockContractsService implements IContractsService {
  private contractCount: number;

  constructor() {
    this.contractCount = 0;
  }

  public async sendTx(
    _deployTransaction: ethers.providers.TransactionRequest,
    _txOptions?: TransactionOptions | undefined
  ): Promise<string> {
    this.contractCount++;

    return `0x0000${this.contractCount}`;
  }
}

class MockArtifactsService implements IArtifactsService {
  public async hasArtifact(_name: string): Promise<boolean> {
    return true;
  }

  public getArtifact(_name: string): Promise<Artifact> {
    throw new IgnitionError("Method not implemented.");
  }

  public getAllArtifacts(): Promise<Artifact[]> {
    throw new IgnitionError("Method not implemented");
  }
}

class MockTransactionService implements ITransactionsService {
  public wait(_txHash: string): Promise<ethers.providers.TransactionReceipt> {
    return {} as any;
  }

  public waitForEvent(
    _filter: ethers.EventFilter,
    _durationMs: number
  ): Promise<ethers.providers.Log> {
    throw new IgnitionError("Method not implemented.");
  }
}

class MockConfigService implements IConfigService {
  public getParam(_paramName: string): Promise<string | number> {
    throw new IgnitionError("Method not implemented.");
  }

  public hasParam(_paramName: string): Promise<HasParamResult> {
    throw new IgnitionError("Method not implemented.");
  }
}

class MockAccountsService implements IAccountsService {
  public getAccounts(): Promise<string[]> {
    throw new IgnitionError("Method not implemented.");
  }

  public getSigner(_address: string): Promise<ethers.Signer> {
    throw new IgnitionError("Method not implemented.");
  }
}
