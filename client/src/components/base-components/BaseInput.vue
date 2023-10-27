<template>
  <input
    :id="id"
    v-model="inputText"
    type="text"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    class="base-input"
  />
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
    }
  },
  data() {
    return {
      inputText: ''
    }
  },
  watch: {
    inputText() {
      this.$emit("update-input", this.inputText);
    }
  }
}
</script>

<style lang="scss">

.base-input {
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 0.0rem 0.1rem rgba(0, 0, 0, 0.25);
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:focus-visible {
    outline: 0;
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