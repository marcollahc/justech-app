<template>
  <button
    :class="[
      'base-button',
      `base-button--${type}`,
      { 'base-button--uppercase': uppercase}
    ]"
    @click="invokeOnClickFunction()"
  >
    <font-awesome-icon class="base-button__before-icon" v-if="beforeIcon" :icon="beforeIcon" />
    <span>{{ text }}</span>
    <font-awesome-icon class="base-button__after-icon" v-if="afterIcon" :icon="afterIcon" />
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
      required: true,
      default: 'primary'
    },
    onClick: {
      type: Function,
      required: true
    },
    beforeIcon: {
      type: Array,
      required: false
    },
    afterIcon: {
      type: Array,
      required: false
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: true
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
  box-shadow: 0 0.07rem 0.3rem rgba(0, 0, 0, 0.25);
  border: 1px solid;
  outline: none;
  cursor: pointer;
  transition: ease-in 0.1s;
  gap: 0.5rem;
  font-family: 'Oxygen', sans-serif;

  span {
    font-size: 0.9rem;
    font-weight: 600;
  }

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

  &--uppercase {
    text-transform: uppercase;
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
    border: none;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0.25rem;

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
}
</style>