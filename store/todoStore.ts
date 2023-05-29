import { Todo } from "@prisma/client";
import { create } from "zustand";
import axios from "axios";

export const useTodoStore = create((set: any) => ({
  todos: [],

  getTodos: async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/todos`);
      set({ todos: res.data });
    } catch (error) {
      console.log(error);
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

  updateTodo: async (todo: Todo) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/todos/${todo.id}`,
        todo
      );

      set((state: any) => {
        console.log(state.todos);
        // state.todos = state.todos.map((item: Todo) =>
        //   item.id === todo.id ? { ...item, ...todo } : item
        // );
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
