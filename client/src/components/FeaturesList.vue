<template>
  <div class="list-wrapper">
    <figure>
      <base-button
        class="list-wrapper__list-title"
        :before-icon="icon"
        :after-icon="['fas', `chevron-${direction}`]"
        :class="{ 'base-button--active': menuOpen }"
        :text="listTitle"
        type="tertiary"
        :uppercase="false"
        :on-click="openFeaturesMenu"
      >
      </base-button>

      <transition name="fade">
        <ul class="list-wrapper__list" v-if="menuOpen">
          <li
            v-for="feature in featuresList"
            :key="feature"
          >
            <!-- <font-awesome-icon :icon="" /> -->
            <!-- {{ feature }} -->
            <base-button
              :text="feature"
              type="quaternary"
              :before-icon="['fas', 'circle-right']"
              :uppercase="false"
              :on-click="() => redirectToFeaturePage(feature)"
            ></base-button>
          </li>
        </ul>
      </transition>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'FeaturesList',
  props: {
    listTitle: String,
    icon: Array,
    featuresList: Array
  },
  data() {
    return {
      direction: 'right',
      menuOpen: false
    }
  },
  watch: {
    menuOpen() {
      this.direction = this.menuOpen ? 'down' : 'right'
    }
  },
  methods: {
    openFeaturesMenu() {
      this.menuOpen = !this.menuOpen
    },
    redirectToFeaturePage(featureName) {
      this.$router.push({ name: featureName })
    }
  }
}
</script>

<style lang="scss">
.list-wrapper {
  font-size: 1.1rem;
  display: flex;

  figure {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.7rem;
  }

  &__list-title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: opacity 0.3s ease;
    list-style-type: none;
    margin-block-start: 0;
    padding-inline-start: 1rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.9rem;
      cursor: pointer;
      transition: linear 0.05s;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.15s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .base-button {
    &__after-icon {
      margin-left: auto;
    }

    &--active {
      span {
        font-weight: 600 !important ;
      }
    }
  }
}
</style>
