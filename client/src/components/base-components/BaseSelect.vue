<template>
  <v-select
    :id="id"
    v-model="selectedOption"
    :options="selectOptions"
    label="name"
    index="acronym"
    :placeholder="placeholder"
    :clearable="false"
    class="base-select"
  ></v-select>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    id: String,
    name: String,
    multiple: Boolean,
    placeholder: String,
    selectOptions: Array
  },
  data() {
    return {
      selectedOption: ''
    }
  },
  watch: {
    selectedOption() {
      this.$emit('update', this.selectedOption)
    }
  }
}
</script>

<style lang="scss">
.vs {
  &__dropdown-toggle {
    align-items: center;
    font-family: $default-font;
    width: 100%;
    height: 2.46rem;
    font-size: 1rem;
    font-weight: 400;
    background-color: #fff;
    box-shadow: 0 0rem 0.1rem rgba(0, 0, 0, 0.25);
    border: 0.06rem solid #ced4da;
    border-radius: 0.375rem;
    cursor: pointer;
  }

  &__actions {
    padding: 0.5rem 0.5rem 0 0;
  }

  &__selected-options {
    input {
      font-family: $default-font;
      &::placeholder {
        color: rgba(143, 143, 143, 1);
      }
    }
  }

  &__dropdown-menu {
    --vs-dropdown-option--active-bg: #09BC8A;
    li {
      padding: 0.5rem;
      &:hover {
        background-color: $secundary;
      }
    }
  }
}
</style>
