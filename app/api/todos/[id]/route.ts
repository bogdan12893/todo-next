import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const requestBody = await request.json();
  const toggleCompletion = requestBody.completed ? false : true;

  try {
    await prisma.todo.update({
      where: {
        id: requestBody.id,
      },
      data: {
        completed: toggleCompletion,
      },
    });

    return NextResponse.json(requestBody);
  } catch (error) {
    return new NextResponse("Error has occured while editing a todo", {
      status: 500,
    });
  }
}
