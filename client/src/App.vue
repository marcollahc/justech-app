<template>
  <div class="main-wrapper">
    <section class="main-wrapper__side-content">
      <the-header></the-header>
      <the-side-bar></the-side-bar>
    </section>
    <main class="main-wrapper__main-content">
      <router-view :key="$route.path"></router-view>
    </main>
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router'
import { TheSideBar, TheHeader } from '@/components'

</script>
<style lang="scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    background-color: $default-white;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #app {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;

    .main-wrapper {
      display: flex;
      width: 100%;

      &__side-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 22%;
      }

      &__main-content {
        width: 100%;
        overflow: auto;
      }
    }
  }
</style>
