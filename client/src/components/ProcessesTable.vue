<template>
  <table class="processes-table" aria-describedby="Tabela de processos">
    <t-head>
      <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
    </t-head>
    <t-body>
      <tr v-for="(row, index) in processesRows" :key="index">
        <td>{{ row }}</td>
      </tr>
    </t-body>
  </table>
</template>

<script>
export default {
  name: 'ProcessesFilter',
  props: {
    headers: Array,
    processesRows: Array
  },
  data() {
    return {}
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss">
.processes-table {
}
</style>
