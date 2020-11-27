<script>
  export let items = [];
  import TodoItem from "./TodoItem.svelte";
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
    {#each items as item, id}
      <TodoItem {item} />
    {/each}
  </ul>
</di>
