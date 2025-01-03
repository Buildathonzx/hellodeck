import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { encryptMessage, decryptMessage } from "../../../lib/encryption";
import { calimero } from "../../../lib/calimero";

export async function GET() {
  const messages = await prisma.message.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  // Decrypt
  const decrypted = await Promise.all(
    messages.map(async (m) => ({
      ...m,
      content: await calimero.decryptMessage(m.content)
    }))
  );
  return NextResponse.json(decrypted);
}

export async function POST(request: NextRequest) {
  const { userId, content } = await request.json();

  // Create user if not exists
  let user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    user = await prisma.user.create({
      data: { id: userId, name: userId },
    });
  }

  const encrypted = await calimero.encryptMessage(content);
  const newMessage = await prisma.message.create({
    data: {
      content: encrypted,
      userId,
    },
  });
  return NextResponse.json(newMessage);
}