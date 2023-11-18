<template>
  <documents-page></documents-page>
</template>

<script>
import DocumentsPage from '@/components/Documents.vue'

export default {
  name: 'HomeView',
  components: { DocumentsPage },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
main {
  width: 100%;
}
</style>
