<template>
  <div class="list-wrapper">
    <figure>
      <figcaption>{{ listTitle }}</figcaption>
      <ul class="list-wrapper__list">
        <li v-for="feature in featuresList" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'FeaturesList',
  props: {
    listTitle: String,
    featuresList: Array
  }
}
</script>

<style lang="scss">

.list-wrapper {
  color: #000;
  font-size: 1.1rem;

  &__list {
    list-style-type: none;
  }
}
</style>
