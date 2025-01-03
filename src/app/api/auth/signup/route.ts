
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Missing email/password" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashed = await hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashed,
      name: email,
    },
  });
  return NextResponse.json({ id: newUser.id, email: newUser.email });
}