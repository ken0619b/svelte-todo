import { writable } from "svelte/store";

// todo items
export const todos = writable([
  {
    id: 1,
    content: "test",
    isDone: true,
  },
]);
