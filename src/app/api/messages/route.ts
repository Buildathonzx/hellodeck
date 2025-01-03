import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { encryptMessage, decryptMessage } from "../../../lib/encryption";

export async function GET() {
  const messages = await prisma.message.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  // Decrypt
  const decrypted = messages.map((m) => ({
    ...m,
    content: decryptMessage(m.content),
  }));
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

  const newMessage = await prisma.message.create({
    data: {
      content: encryptMessage(content),
      userId,
    },
  });
  return NextResponse.json(newMessage);
}