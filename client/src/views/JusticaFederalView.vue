<template>
  <court-template
    court-name="Justiça Federal"
    court-flag="trf"
  ></court-template>
</template>

<script>
import courtTemplate from '@/components/CourtTemplate.vue';

export default {
  name: 'JusticaFederalView',
  components: { courtTemplate }
}
</script>

<style lang="scss">
main {
  width: 100%;
}
</style>
