import prisma from "@/prisma";
import { NextResponse } from "next/server";

type ParamsType = {
  params: {
    id: string;
  };
};

export async function PATCH(request: Request) {
  const requestBody = await request.json();
  const toggleCompletion = requestBody.completed ? false : true;

  try {
    const response = await prisma.todo.update({
      where: {
        id: requestBody.id,
      },
      data: {
        completed: toggleCompletion,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse("Error has occured while editing a todo", {
      status: 500,
    });
  }
}

export async function DELETE(request: Request, { params }: ParamsType) {
  const { id } = params;
  try {
    const data = await prisma.todo.delete({
      where: {
        id: id,
      },
    });

    if (!data) {
      throw new Error();
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return new NextResponse("Error has occured while deleting this todo", {
      status: 403,
    });
  }
}
