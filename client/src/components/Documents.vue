<template>
  <section class="documents-page-wrapper">
    <div class="documents-page-wrapper__title-container">
      <h1>Salve e visualize seus documentos</h1>
      <h2>
        Para facilitar ainda mais o seu trabalho, nós te ajudamos a criar modelos daqueles
        documentos que mais utiliza no seu escritório. Basta enviá-los abaixo.
      </h2>
    </div>

    <div class="documents-page-wrapper__upload-container">
      <font-awesome-icon :icon="['fas', 'file-arrow-up']" />
      <p><a>Clique aqui</a> ou arraste o arquivo</p>
    </div>

    <div class="documents-page-wrapper__filter-container">
      <base-input
        id="search-documents"
        placeholder="Buscar documentos"
        :autocomplete="false"
        :is-search="true"
        class="documents-page-wrapper__search-input"
      ></base-input>

      <base-select
        class="processes-filter-wrapper__select"
        name="Categoria"
        placeholder="Categoria"
      ></base-select>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocumentsPage',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.documents-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  gap: 2rem;

  &__title-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    h2 {
      font-size: 1rem;
      font-weight: 400;
      color: #868686;
      width: 60%;
    }
  }

  &__upload-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    border-radius: 0.625rem;
    align-items: center;
    border: 0.063rem solid $border-gray;

    svg {
      font-size: 4rem;
      color: $primary;
    }

    a {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  &__filter-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .input-wrapper {
      width: 75%;
    }

    .base-select {
      width: 22%;
    }
  }
}
</style>
