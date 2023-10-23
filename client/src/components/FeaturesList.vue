<template>
  <div class="list-wrapper">
    <figure>
      <base-button 
        class="list-wrapper__list-title"
        :before-icon="icon"
        :after-icon="['fas', `chevron-${direction}`]"
        :class="{ 'base-button--active': menuOpen}"
        :text="listTitle"
        type="tertiary"
        :uppercase="false"
        :on-click="openFeaturesMenu"
      >
      </base-button>

      <transition name="fade">
        <ul class="list-wrapper__list" v-if="menuOpen">
          <li v-for="feature in featuresList" :key="feature">
            {{ feature }}
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
      this.direction = this.menuOpen
        ? 'down'
        : 'right'
    }
  },
  methods: {
    openFeaturesMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss">

.list-wrapper {
  color: #000;
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
    list-style-type: none;
    transition: opacity 0.3s ease;

    li {
      font-size: 0.9rem;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .15s ease-in-out;
  }

  .fade-enter-from, .fade-leave-to {
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
