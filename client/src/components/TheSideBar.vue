<template>
  <aside class="side-bar-wrapper">
    <div class="side-bar-wrapper__main-features-section">
      <base-button
        text="Página inicial"
        type="tertiary"
        :before-icon="['fas', 'house']"
        :uppercase="false"
      ></base-button>

      <base-button
        text="Pendências"
        type="tertiary"
        :before-icon="['far', 'clock']"
        :uppercase="false"
      ></base-button>

      <h3>Processos</h3>

      <features-list
        class="side-bar-wrapper__features"
        list-title="Consultas"
        :icon="['fas', 'building-columns']"
        :features-list="queryFeatures"
      >
      </features-list>

      <features-list
        class="side-bar-wrapper__features"
        list-title="Criar documento"
        :icon="['fas', 'file-signature']"
        :features-list="createDocumentFeatures"
      >
      </features-list>
    </div>

    <div class="side-bar-wrapper__your-account-section">
      <hr>
      <h3>Sua conta</h3>
      <base-button 
        class="list-wrapper__list-title"
        :before-icon="['fas', 'medal']"
        text="Meu plano"
        type="tertiary"
        :uppercase="false"
      >
      </base-button>

      <base-button 
        class="list-wrapper__list-title teste"
        :before-icon="['fas', 'gear']"
        text="Configurações"
        type="tertiary"
        :uppercase="false"
      >
      </base-button>

      <base-button 
        class="list-wrapper__list-title"
        :before-icon="['fas', 'arrow-right-from-bracket']"
        text="Sair"
        type="tertiary"
        :uppercase="false"
      >
      </base-button>
    </div>
  </aside>
</template>

<script>
import FeaturesList from './FeaturesList.vue';

export default {
  name: "TheSideBar",
  components: { FeaturesList },
  data() {
    return {
      queryFeatures: [
        'PJE',
        'ESAJ'
      ],
      createDocumentFeatures: [
        'Petição inicial',
        'Procuração',
        'Notificação extrajudicial',
        'Convocação',
        'Ver mais modelos'
      ]
    }
  }
};
</script>

<style lang="scss">

.side-bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: solid $border-gray;
  border-width: 0 0.063rem 0.063rem 0.063rem;
  flex-grow: 1;

  &__features {
    width: 100%;
  }

  &__main-features-section {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;
  }

  &__your-account-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    margin-top: auto;
  }

  h3 {
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  hr {
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
  }

  .base-button {
    width: 100%;
    justify-content: flex-start;

    span {
      font-weight: 300;
    }

    &:hover {
      span {
        font-weight: 600;
      }
    }
  }
}
</style>
