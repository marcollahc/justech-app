<template>
  <header class="header">
    <font-awesome-icon :icon="['fas', 'cubes']" />
    <h1> FutureTech Labs</h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    padding: 1.5rem 1rem;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    background: linear-gradient(0deg, #F2F2F2, #F2F2F2),
                linear-gradient(0deg, #FAFAFA, #FAFAFA);
    color: #000;
    border: solid $border-gray;
    border-width: 0 0.063rem 0.063rem 0;

    h1 {
      font-weight: 700;
    }

    svg {
      font-size: 1.5rem;
    }
  }
</style>
