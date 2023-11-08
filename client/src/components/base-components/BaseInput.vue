<template>
  <div class="input-wrapper">
    <font-awesome-icon
      class="input-wrapper__icon"
      v-if="isSearch"
      :icon="['fas', 'magnifying-glass']"
    />
    <input
      :id="id"
      v-model="insideText"
      type="text"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :disabled="disabled"
      class="base-input"
      :class="{
        'base-input--search': isSearch
      }"
      @input="emitTyping"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String
    },
    placeholder: {
      type: String
    },
    autocomplete: {
      type: Boolean
    },
    isSearch: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      insideText: this.value
    }
  },
  watch: {
    value(newText) {
      this.insideText = newText;
    }
  },
  methods: {
    emitTyping() {
      this.$emit('update-input', this.insideText);
    }
  }
}
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  &__icon {
    color: #495057;
    position: absolute;
    margin-left: 1rem;
    width: 0.994rem;
    z-index: 2;
  }
}

.base-input {
  font-family: $default-font;
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 0rem 0.1rem rgba(0, 0, 0, 0.25);
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &--search {
    padding-left: 2.7rem;
  }

  &:focus-visible {
    outline: 0;
  }

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
    outline: 0;
  }

  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }
}
</style>
