"use client";
import { useRef } from "react";
import { useTodoStore } from "../../store/todoStore";

export default function StoreInitializer({ todos }: any) {
  const initialized = useRef(false);

  console.log(todos, initialized);
  if (!initialized.current) {
    useTodoStore.setState(todos);
    initialized.current = true;
  }
  return null;
}
