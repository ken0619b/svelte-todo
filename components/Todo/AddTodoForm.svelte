<script>
  import { todos } from "../../src/stores";
  // for new todo
  let new_content;

  const addTodo = () => {
    let new_id = $todos.length + 1;
    $todos = [...$todos, { id: new_id, content: new_content, isDone: false }];
    new_content = "";
  };
</script>

<style>
</style>

<header>
  <input bind:value={new_content} placeholder="Add New Todo..." />
  <button on:click={addTodo}>Add</button>
</header>
