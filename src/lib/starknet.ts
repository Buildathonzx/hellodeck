import { Provider, Account, Contract, RpcProvider } from "starknet";

class StarknetClient {
  private static instance: StarknetClient;
  private provider: Provider;
  private account: Account | null = null;

  private constructor() {
    // Initialize with devnet for development
    this.provider = new RpcProvider({ nodeUrl: process.env.NEXT_PUBLIC_STARKNET_NODE_URL || "http://127.0.0.1:5050/rpc" });
  }

  static getInstance(): StarknetClient {
    if (!StarknetClient.instance) {
      StarknetClient.instance = new StarknetClient();
    }
    return StarknetClient.instance;
  }

  async connectAccount(accountAddress: string, privateKey: string) {
    this.account = new Account(this.provider, accountAddress, privateKey);
    return this.account;
  }

  async getProvider() {
    return this.provider;
  }

  async getCurrentAccount() {
    return this.account;
  }
}

export const starknet = StarknetClient.getInstance();
