"use client";
import { Todo } from "@prisma/client";
import { useTodoStore } from "../../store/todoStore";
import { useEffect } from "react";

export default function TodoList() {
  const getTodos = useTodoStore((state: any) => state.getTodos);
  const todoList = useTodoStore((state: any) => state.todos);

  const updateTodo = useTodoStore((store) => store.updateTodo);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (!todoList.length) {
    return (
      <div className="p-3 text-xl flex justify-center w-full">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div>
      {todoList.map((item: Todo) => {
        return (
          <div
            className={`p-3 mb-3 rounded-lg cursor-pointer ${
              item.completed
                ? "bg-green-700 hover:bg-green-600 line-through"
                : "bg-orange-700 hover:bg-orange-600"
            }`}
            key={item.id}
            onClick={() => updateTodo(item)}
          >
            <strong>{item.text}</strong> - completed:
            {JSON.stringify(item.completed)}
          </div>
        );
      })}
    </div>
  );
}
