<template>
  <div class="processes-filter-wrapper">
    <base-input
      id="search-processes"
      placeholder="Buscar processos"
      :autocomplete="false"
      :is-search="true"
      class="processes-filter-wrapper__search-input"
    ></base-input>

    <base-select
      class="processes-filter-wrapper__select"
      name="Situação"
      placeholder="Situação"
    ></base-select>
    <base-select
      class="processes-filter-wrapper__select"
      name="Tarefas"
      placeholder="Tarefas"
    ></base-select>
  </div>
</template>

<script>
export default {
  name: 'ProcessesFilter',
  props: {},
  data() {
    return {}
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss">
.processes-filter-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;

  .input-wrapper {
    width: 50%;
  }

  .base-select {
    width: 22%;
  }
}
</style>
