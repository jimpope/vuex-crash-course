<template>
  <div>
      Filter Todos
      <select @change="filterTodos($event)">
        <option value="200">Docientos</option>
        <option value="100">Cien</option>
        <option value="50">Cinquenta</option>
        <option value="20">Veinte</option>
        <option value="10">Diez</option>
      </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "FilterTodos",
    methods: mapActions(["filterTodos"])
}
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>