<script>
  import { todos } from "../../src/stores";
  // for new todo
  let new_content;

  const addTodo = () => {
    const new_id = Math.max(...$todos.map(item => item.id)) + 1
    $todos = [...$todos, { id: new_id, content: new_content, isDone: false }];
    new_content = "";
  };
</script>

<style>
</style>

<header>
  <input bind:value={new_content} placeholder="Add New Todo..." />
  <button on:click={addTodo}> Add</button>
</header>
