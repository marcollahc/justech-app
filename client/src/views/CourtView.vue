<template>
  <court-template
    :court-name="courtName"
    :court-flag="courtFlag"
    :addon-test="addonTest"
    :process-test="processTest"
  ></court-template>
</template>

<script>
import courtTemplate from '@/components/courts/GeneralCourtTemplate.vue';

export default {
  name: 'CourtView',
  components: { courtTemplate },
  props: {
    courtName: String,
    courtFlag: String,
    addonTest: String,
    processTest: String
  }
}
</script>

<style lang="scss">
main {
  width: 100%;
}
</style>
