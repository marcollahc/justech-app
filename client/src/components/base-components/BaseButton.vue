<template>
  <button
    :class="[
      'base-button',
      `base-button--${type}`,
      { 'base-button--has-icon-text': buttonHasIconAndText }
    ]"
    @click="invokeOnClickFunction()"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    icon: {
      type: Array,
      required: false
    }
  },
  computed: {
    buttonHasIconAndText() {
      return this.icon && this.text && this.text != ''
    }
  },
  methods: {
    invokeOnClickFunction() {
      this.onClick();
    }
  }
}
</script>

<style lang="scss">

.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 0.07rem 0.3rem rgba(0, 0, 0, 0.25);
  border: 1px solid;
  outline: none;
  cursor: pointer;
  transition: ease-in 0.1s;

  &:disabled {
    background-color: #d8d8d8;
    color: #666666;
    border-color: #999999 !important;
    cursor: not-allowed;
    opacity: 0.65;

    svg,
    path {
      fill: #666666;
    }
  }

  &--primary {
    border-color: $primary;
    background-color: $primary;
    color: #ffff;

    &:not([disabled]):hover,
    &:not([disabled]):active,
    &:not([disabled]):focus {
      color: #ffff;
      background-color: red !important;
      border-color: red !important;
    }

    &:focus {
      box-shadow: none !important;
    }

    svg,
    path {
      fill: #ffff;
    }
  }

  &--secundary {
    color: $default-white;
    border-color: $default-white;
    background-color: $secundary;

    &:not([disabled]):hover,
    &:not([disabled]):active,
    &:not([disabled]):focus {
      color: #ffff;
      background-color: red !important;
      border-color: red !important;

      svg,
      path {
        fill: #ffff;
      }
    }

    &:focus {
      box-shadow: none !important;
    }

    svg,
    path {
      fill: $primary;
    }
  }

  &--tertiary {
    color: #000;
    border-color: $default-white;
    background-color: transparent;

    &:not([disabled]):hover,
    &:not([disabled]):active,
    &:not([disabled]):focus {
      color: #000;
      background-color: #09bc895e;
      border-color: #09bc895e;

      svg,
      path {
        fill: #000;
      }
    }

    &:focus {
      box-shadow: none !important;
    }

    svg,
    path {
      fill: #000;
    }
  }

  &--has-icon-text {
    svg,
    path {
      margin-right: 0.3rem;
    }
  }
}
</style>