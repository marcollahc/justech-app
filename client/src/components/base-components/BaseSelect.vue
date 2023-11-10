<template>
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :multiple="multiple"
    :class="[
      'base-select',
      {
        'base-select--is-placeholder': !modelValue
      }
    ]"
  >
    <option value="" disabled selected hidden>{{ placeholder }}</option>
    <option
      class="base-select__options"
      v-for="(option, index) in selectOptions"
      :key="index"
      :value="option.acronym"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    id: String,
    name: String,
    multiple: Boolean,
    placeholder: String,
    selectOptions: Array,
    modelValue: String
  }
}
</script>

<style lang="scss">
.base-select {
  font-family: $default-font;
  width: 100%;
  height: 2.46rem;
  padding: 0.37rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  background-color: #fff;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.25);
  outline: 0.06rem solid #ced4da;
  border-width: 0;
  border-right: 1rem solid transparent;
  border-radius: 0.375rem;
  cursor: pointer;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &__options {
    cursor: pointer;
  }

  &--is-placeholder {
    color: rgba(143, 143, 143, 0.7);
  }

  &:disabled {
    color: #495057;
    font-weight: 300;
  }
}
</style>
