import { createCipheriv, createDecipheriv, randomBytes } from "crypto";

// ...for real usage, read keys from process.env...
const secretKey = process.env.ENCRYPTION_KEY ?? "01234567890123456789012345678901"; // 32 bytes
const iv = process.env.ENCRYPTION_IV ?? "0123456789012345"; // 16 bytes

export function encryptMessage(plainText: string): string {
  const cipher = createCipheriv("aes-256-cbc", secretKey, iv);
  let encrypted = cipher.update(plainText, "utf-8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

export function decryptMessage(cipherText: string): string {
  const decipher = createDecipheriv("aes-256-cbc", secretKey, iv);
  let decrypted = decipher.update(cipherText, "base64", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}