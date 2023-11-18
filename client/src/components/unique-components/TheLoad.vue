<template>
  <div class="loader-wrapper">
    <div class="loader-wrapper__logo">
      <p>Jus</p>
      <font-awesome-icon class="loader-wrapper__icon" :icon="['fas', 'scale-balanced']" />
      <p>Connect</p>
    </div>
    <div class="loader-wrapper__loader">
      <div class="loader-wrapper__progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLoad',
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
.loader-wrapper {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  width: 15%;
  cursor: wait;

  &__loader {
    background-color: #d1d5db;
    border-radius: 624.938rem;
    height: 0.5rem;
    position: relative;
    overflow: hidden;
  }

  &__logo {
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    gap: 0.2rem;
  }

  &__progress {
    background-color: $primary;
    border-radius: 624.938rem;
    position: absolute;
    bottom: 0;
    top: 0;
    width: 50%;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: indeterminate-progress-bar;

    @keyframes indeterminate-progress-bar {
      from {
        left: -50%;
      }
      to {
        left: 100%;
      }
    }
  }

  &__icon {
    animation: blink 2s linear infinite;
    @keyframes blink {
      25% {
        opacity: 0.5;
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 0.5;
      }
    }
  }
}
</style>
