"use client";
import { Todo } from "@prisma/client";
import { useTodoStore } from "../../store/todoStore";
import { useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const getTodos = useTodoStore((state: any) => state.getTodos);
  const todoList = useTodoStore((state: any) => state.todos);

  const loadingTodos = useTodoStore((state: any) => state.loadingTodos);

  console.log(loadingTodos);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (loadingTodos) {
    return (
      <div className="p-3 text-xl flex justify-center w-full">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div>
      {!todoList.length ? (
        <div className="p-3 text-xl flex justify-center w-full">
          <span className="text-sm">no todos yet...</span>
        </div>
      ) : (
        todoList.map((item: Todo) => {
          return <TodoItem key={item.id} item={item} />;
        })
      )}
    </div>
  );
}
