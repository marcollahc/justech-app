<template>
  <div class="graph-wrapper">
    <apexchart
      class="graph-wrapper__graph"
      height="328"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>

    <div class="graph-wrapper__review-container">
      <div class="graph-wrapper__review-action">
        <font-awesome-icon :icon="['fas', 'arrow-up']" />
        <p class="number">{{ successfullySentArticles }}</p>
        <p class="description">Peças enviadas com sucesso no mês.</p>
      </div>

      <div class="graph-wrapper__review-action">
        <font-awesome-icon :icon="['fas', 'file-circle-check']" />
        <p class="number">{{ finishedProcesses }}</p>
        <p class="description">Processos finalizados no mês.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainGraph',
  data() {
    return {
      successfullySentArticles: 52,
      finishedProcesses: 153,
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.graph-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  &__graph {
    border-radius: 0.625rem;
    border: 0.063rem solid $border-gray;
    padding: 1.25rem;
    width: 70%;
  }

  &__review-container {
    display: flex;
    flex-direction: column;
    width: 28%;
    gap: 1rem;
  }

  &__review-action {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0.625rem;
    border: 0.063rem solid $border-gray;
    padding: 1.25rem;
    gap: 0.5rem;

    .number {
      font-family: 'Roboto', 'Oxygen';
      font-size: 2rem;
      font-weight: 900;
      color: $primary;
    }

    .description {
      color: #868686;
      font-weight: 300;
    }

    svg,
    path {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
      color: $default-white;
      background-color: $primary;
      padding: 0.625rem;
      border-radius: 0.375rem;
    }
  }
}
</style>
