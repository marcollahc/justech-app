<template>
  <div class="processes-list-wrapper">
    <processes-filter></processes-filter>
  </div>
</template>

<script>
import ProcessesFilter from './ProcessesFilter.vue';

export default {
  name: 'ProcessesList',
  components: { ProcessesFilter },
  props: {

  },
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss">

.processes-list-wrapper {
  display: flex;
  width: 100%;
}
</style>
