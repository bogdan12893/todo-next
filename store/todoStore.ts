import { Todo } from "@prisma/client";
import { create } from "zustand";
import axios from "axios";

export const useTodoStore = create((set: any) => ({
  todos: [],
  loadingTodos: true,

  getTodos: async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/todos`);
      set({ todos: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ loadingTodos: false });
    }
  },

  addTodo: async (text: string) => {
    try {
      const res = await axios.post(`http://localhost:3000/api/todos`, {
        text: text,
      });
      set((state: any) => ({ todos: [...state.todos, res.data] }));
    } catch (error) {
      console.log(error);
    }
  },

  deleteTodo: async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`);
      set((state: any) => ({
        todos: state.todos.filter((todo: Todo) => todo.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  updateTodo: async (todo: Todo) => {
    try {
      const updatedTodo = await axios.patch(
        `http://localhost:3000/api/todos/${todo.id}`,
        todo
      );
      set((state: any) => ({
        todos: state.todos.map((t: Todo) =>
          t.id === todo.id ? { ...t, ...updatedTodo.data } : t
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));
