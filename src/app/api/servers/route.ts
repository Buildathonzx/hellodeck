
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const servers = await prisma.server.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(servers);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const found = await prisma.server.findUnique({ where: { name } });
  if (found) {
    return NextResponse.json(found);
  }
  const server = await prisma.server.create({ data: { name } });
  return NextResponse.json(server);
}