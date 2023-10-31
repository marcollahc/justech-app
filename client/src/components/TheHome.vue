<template>
  <section class="home-page-wrapper">
    <div class="home-page-wrapper__title-container">
      <h1>Gerencie seu escritório</h1>
      <h2>
        Aqui, você terá acesso rápido e fácil para consultar e acompanhar todos os processos
        jurídicos de forma eficiente e organizada.
      </h2>
    </div>

    <main-graph></main-graph>

    <div class="home-page-wrapper__processes-container">
      <h3>Processos em andamento</h3>
      <processes-list></processes-list>
    </div>
  </section>
</template>

<script>
import MainGraph from '@/components/MainGraph.vue';
import ProcessesList from '@/components/ProcessesList.vue';

export default {
  name: 'TheHome',
  components: { MainGraph, ProcessesList },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.home-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  gap: 2rem;

  &__title-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      color: #868686;
      width: 60%;
    }
  }

  &__processes-container {
    h3 {
      font-weight: 600;
    }
  }
}
</style>
