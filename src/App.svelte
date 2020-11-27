<script>
  import Header from "../components/Header.svelte";
  import { todos } from "./stores.js";

  // for new todo
  let new_content;

  const addTodo = () => {
    let new_id = $todos.length + 1;
    $todos = [...$todos, {id: new_id, content: new_content, isDone: false}]
    new_content = "";
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Header />
  <h1>App</h1>
  <!-- sample input -->
  <input bind:value={new_content} placeholder="Add New Todo..." />

  <button on:click={addTodo}> add item </button>

  <!-- // show todo-list -->
  <ul>
    {#each $todos as todo, id}
      <li>{todo.id} - {todo.content}</li>
    {/each}
  </ul>
  <p>total: {$todos.length}</p>
</main>
