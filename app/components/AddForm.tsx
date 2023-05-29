"use client";
import React, { useState } from "react";
import Input from "./Input";
import { useTodoStore } from "../../store/todoStore";

export default function AddForm() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = useTodoStore((store) => store.addTodo);

  const submitTodo = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      await addTodo(inputValue);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={submitTodo}>
        <Input
          type="text"
          value={inputValue}
          placeholder="Add To do"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="my-5 p-3 bg-cyan-700 rounded-lg disabled:opacity-20 hover:bg-cyan-600"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
