import { createCipheriv, createDecipheriv } from "crypto";

// Ensure environment variables are set
const secretKey = process.env.ENCRYPTION_KEY;
const iv = process.env.ENCRYPTION_IV;

if (!secretKey || !iv) {
  throw new Error("ENCRYPTION_KEY and ENCRYPTION_IV must be set in environment variables");
}

export function encryptMessage(plainText: string): string {
  const cipher = createCipheriv("aes-256-cbc", Buffer.from(secretKey, "utf-8"), Buffer.from(iv, "utf-8"));
  let encrypted = cipher.update(plainText, "utf-8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

export function decryptMessage(cipherText: string): string {
  const decipher = createDecipheriv("aes-256-cbc", Buffer.from(secretKey, "utf-8"), Buffer.from(iv, "utf-8"));
  let decrypted = decipher.update(cipherText, "base64", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}