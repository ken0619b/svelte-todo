<script>
  import Header from "../components/Header.svelte";

  import AddTodoForm from "../components/Todo/AddTodoForm.svelte";
  import TodoList from "../components/Todo/TodoList.svelte";
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Header />
  <AddTodoForm />
  <TodoList items={$todos} />
  <p>total: {$todos.length}</p>
</main>
