<script>
  import { createEventDispatcher } from "svelte";
  export let item = {};

  const dispatch = createEventDispatcher();

  function deleteThisItem() {
    dispatch("deleteItem", {
      id: item.id,
    });
  }
</script>

<style>
  .todo-item {
    display: flex;
    height: 25px;
    padding-bottom: 4px;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 16px;
  }

  .doneCheck {
    margin-bottom: 0;
    margin-right: 10px;
  }

  .delete-button {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    margin-left: auto;
    margin-bottom: 0;
  }
  .delete-button::after {
    content: "x";
  }
</style>

<li class="todo-item">
  <input
    type="checkbox"
    class="doneCheck"
    title="Done"
    bind:checked={item.isDone} />
  {item.content}
  <button class="delete-button" on:click={deleteThisItem} />
</li>
