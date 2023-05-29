import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.todo.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("Error has occured while fetching the categories", {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  const requestBody = await request.json();

  if (!requestBody.text.length) {
    return new NextResponse("Please add a text", {
      status: 403,
    });
  }
  try {
    const response = await prisma.todo.create({ data: requestBody });
    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse("Error has occured while creating a todo", {
      status: 500,
    });
  }
}
