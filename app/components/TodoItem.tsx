import { Todo } from "@prisma/client";
import { useTodoStore } from "../../store/todoStore";

export default function TodoItem({ item }: any) {
  const updateTodo = useTodoStore((store) => store.updateTodo);
  const deleteTask = useTodoStore((store) => store.deleteTodo);

  const handleUpdate = (e: KeyboardEvent, item: Todo) => {
    if (e.key === " ") {
      updateTodo(item);
    }
  };

  const handleDelete = (e: KeyboardEvent, id: string) => {
    e.stopPropagation();
    deleteTask(item.id);
  };

  return (
    <div
      className={`pt-6 pb-4 px-3 mb-3 rounded-lg relative cursor-pointer outline-none focus:ring focus:ring-pink-400 ${
        item.completed
          ? "bg-green-700 hover:bg-green-500 line-through"
          : "bg-orange-600 hover:bg-orange-500"
      }`}
      onKeyDown={(e) => handleUpdate(e, item)}
      tabIndex={0}
    >
      <p>{item.text}</p>
      <button
        className="rounded-lg absolute top-0 right-0 m-2 w-5 h-5 text-sm hover:text-red-500 hover:bg-slate-200 outline-none focus:ring focus:ring-pink-400"
        type="button"
        onClick={(e) => handleDelete(e, item.id)}
      >
        ✕
      </button>
    </div>
  );
}
