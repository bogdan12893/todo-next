import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

export default async function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Todos</h1>
      <AddForm />
      <TodoList />
    </div>
  );
}
