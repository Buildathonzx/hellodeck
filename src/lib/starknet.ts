import { Provider, Account, RpcProvider } from "starknet";

if (!process.env.NEXT_PUBLIC_STARKNET_NODE_URL) {
  throw new Error("NEXT_PUBLIC_STARKNET_NODE_URL must be set in environment variables");
}

class StarknetClient {
  private static instance: StarknetClient;
  private provider: Provider;
  private account: Account | null = null;

  private constructor() {
    // Initialize with devnet for development
    this.provider = new RpcProvider({ nodeUrl: process.env.NEXT_PUBLIC_STARKNET_NODE_URL });
  }

  static getInstance(): StarknetClient {
    if (!StarknetClient.instance) {
      StarknetClient.instance = new StarknetClient();
    }
    return StarknetClient.instance;
  }

  async connectAccount(accountAddress: string, privateKey: string): Promise<Account> {
    try {
      this.account = new Account(this.provider, accountAddress, privateKey);
      await this.account.declareAndDeploy({});
      return this.account;
    } catch (error) {
      console.error("Failed to connect Starknet account:", error);
      throw error;
    }
  }

  getProvider(): Provider {
    return this.provider;
  }

  getCurrentAccount(): Account | null {
    return this.account;
  }
}

export const starknet = StarknetClient.getInstance();
