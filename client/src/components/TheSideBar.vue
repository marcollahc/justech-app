<template>
  <aside class="side-bar-wrapper">
    <base-button
      text="Página inicial"
      type="tertiary"
      :icon="['fas', 'house']"
    ></base-button>

    <base-button
      text="Pendências"
      type="tertiary"
      :icon="['far', 'clock']"
    ></base-button>

    <features-list
      class="side-bar-wrapper__features"
      list-title="Consultas"
      :features-list="queryFeatures"
    >
    </features-list>
  </aside>
</template>

<script>
import FeaturesList from './FeaturesList.vue';

export default {
  name: "TheSideBar",
  components: { FeaturesList },
  data() {
    return {
      queryFeatures: [
        'PJE',
        'ESAJ'
      ]
    }
  }
};
</script>

<style lang="scss">

.side-bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
}
</style>
