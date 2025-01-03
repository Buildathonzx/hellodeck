import { CalimeroSdk, WalletConnection, CalimeroToken, CalimeroTokenData } from "calimero-sdk";

const config = {
  shardId: process.env.NEXT_PUBLIC_CALIMERO_SHARD_ID,
  walletUrl: process.env.NEXT_PUBLIC_WALLET_ENDPOINT_URL,
  calimeroUrl: process.env.NEXT_PUBLIC_CALIMERO_ENDPOINT_URL,
  calimeroToken: process.env.NEXT_PUBLIC_CALIMERO_TOKEN,
};

class CalimeroClient {
  private static instance: CalimeroClient;
  private sdk: CalimeroSdk = new CalimeroSdk;
  private walletConnection: WalletConnection = new WalletConnection;

  private constructor() {
    this.initialize();
  }

  private async initialize() {
    this.sdk = await CalimeroSdk.init(config).connect();
    this.walletConnection = new WalletConnection(this.sdk, "hellodeck");
  }

  static getInstance(): CalimeroClient {
    if (!CalimeroClient.instance) {
      CalimeroClient.instance = new CalimeroClient();
    }
    return CalimeroClient.instance;
  }

  async requestSignIn() {
    return this.walletConnection.requestSignIn({
      successUrl: `${window.location.origin}/auth/success`,
      failureUrl: `${window.location.origin}/auth/failure`,
    });
  }

  async signOut() {
    this.walletConnection.signOut();
  }

  async isSignedIn(): Promise<boolean> {
    return this.walletConnection.isSignedInAsync();
  }

  async encryptMessage(message: string): Promise<string> {
    // Use Calimero's private shard for encryption
    return this.sdk.encrypt(message);
  }

  async decryptMessage(encrypted: string): Promise<string> {
    return this.sdk.decrypt(encrypted);
  }
}

export const calimero = CalimeroClient.getInstance();
