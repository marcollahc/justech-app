<template>
  <header class="header">
    <font-awesome-icon :icon="['fas', 'user-astronaut']" />
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
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,42,58,1) 100%);
    border: solid $border-gray;
    border-width: 0 0.063rem 0.063rem 0;

    h1 {
      color: #fff;
      font-weight: 700;
    }

    svg, path {
      fill: #fff;
      font-size: 1.5rem;
    }
  }
</style>
