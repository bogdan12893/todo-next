import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

export default async function Home() {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-5 text-center font-mono">
        Todo or not todo 🗓
      </h1>
      <AddForm />
      <TodoList />
    </div>
  );
}
