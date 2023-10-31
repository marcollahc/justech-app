<template>
  <select :id="id" :multiple="multiple" class="base-select">
    <option value="" disabled selected hidden>{{ placeholder }}</option>
    <option v-for="(option, index) in selectOptions" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    multiple: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    selectOptions: {
      type: Array
    }
  },
  data() {
    return {
      selectText: ''
    }
  },
  watch: {
    selectText() {
      this.$emit('update-select', this.selectText)
    }
  }
}
</script>

<style lang="scss">
.base-select {
  font-family: $default-font;
  width: 100%;
  height: 2.5rem;
  padding: 0.37rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #8e8e8e;
  background-color: #fff;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.25);
  outline: 0.06rem solid #ced4da;
  border-width: 0;
  border-right: 1rem solid transparent;
  border-radius: 0.375rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:disabled {
    color: #495057;
    font-weight: 300;
  }
}
</style>
