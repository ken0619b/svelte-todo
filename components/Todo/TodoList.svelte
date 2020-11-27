<script>
  import TodoItem from "./TodoItem.svelte";
  import { todos } from "../../src/stores.js";

  // deleteTodo
  const deleteTodo = (event) => {
    $todos = $todos.filter(function (item) {
      return item.id !== event.detail.id;
    });
  };
</script>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .todo-list {
    list-style-type: none;
    width: 300px;
  }
</style>

<di class="wrapper">
  <ul class="todo-list">
    {#each $todos as item, id}
      <TodoItem {item} on:deleteItem={deleteTodo} />
    {/each}
  </ul>
</di>
