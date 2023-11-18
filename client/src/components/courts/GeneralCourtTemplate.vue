<template>
  <section class="court-wrapper">
    <div class="court-wrapper__title-container">
      <h1>Consulte seus processos - {{ courtName }}</h1>
      <h2>
        Para verificar o andamento do seu processo, basta digitar no campo abaixo o código de
        referência.
      </h2>
    </div>

    <div class="court-wrapper__search-container">
      <base-input
        v-model="processNumber"
        @update-input="defineWritedProcessNumber"
        id="search-processes"
        placeholder="Digite o número do seu processo"
        is-search
        @keyup.enter="searchProcessByNumber"
      ></base-input>

      <base-select
        v-model="complementSelectedOption"
        id="process-extra-select"
        name="complement-select"
        :placeholder="mountPlaceholderByCourt()"
        :select-options="courtsWithStates.length ? courtsWithStates : courtsWithRegions"
      >
      </base-select>

      <base-button
        type="primary"
        text="Pesqusar"
        :on-click="searchProcessByNumber"
        :disabled="!processNumber"
        :before-icon="['fas', 'magnifying-glass']"
        uppercase
      ></base-button>
    </div>

    <the-loader class="court-wrapper__loader" v-if="isLoading"></the-loader>

    <div class="court-wrapper__processes-container" v-if="Object.keys(process).length">
      <h3>Processo Nº {{ this.process.number }}</h3>

      <div class="court-wrapper__fields-container">
        <div class="court-wrapper__input-group">
          <label for="process-class">Classe</label>
          <base-input :value="process.class" id="process-class" disabled></base-input>
        </div>

        <div class="court-wrapper__input-group">
          <label for="process-judge">Órgão julgador</label>
          <base-input :value="process.judgeName" id="process-judge" disabled></base-input>
        </div>

        <div class="court-wrapper__input-group">
          <label for="process-system">Sistema</label>
          <base-input :value="process.system" id="process-system" disabled></base-input>
        </div>
      </div>

      <div class="court-wrapper__fields-container">
        <div class="court-wrapper__input-group">
          <label for="process-initial-date">Data de entrada</label>
          <base-input :value="process.initialDate" id="process-initial-date" disabled></base-input>
        </div>

        <div class="court-wrapper__input-group">
          <label for="process-last-update">Data última atualização</label>
          <base-input
            :value="process.lastUpdateTime"
            id="process-last-update"
            disabled
          ></base-input>
        </div>

        <div class="court-wrapper__input-group">
          <label for="process-last-update">Formato</label>
          <base-input :value="process.format" id="process-format" disabled></base-input>
        </div>
      </div>

      <div class="court-wrapper__fields-container subjects">
        <div class="court-wrapper__input-group subject-input-group">
          <label for="process-subjects">Assuntos</label>
          <base-input :value="process.subjects" id="process-subjects" disabled></base-input>
        </div>
      </div>

      <div class="court-wrapper__movements-container">
        <h4>Últimas movimentações</h4>
        <div
          class="court-wrapper__movement"
          v-for="(movement, index) in process.movements"
          :key="index"
        >
          <div class="court-wrapper__input-group movement-inputs">
            <label for="process-last-update">Nome</label>
            <base-input :value="movement.nome" id="process-format" disabled></base-input>
          </div>
          <div class="court-wrapper__input-group movement-inputs">
            <label for="process-last-update">Data e hora</label>
            <base-input :value="movement.dataHora" id="process-format" disabled></base-input>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import courtClient from '@/http/court-client'
import TheLoader from '../unique-components/TheLoad.vue';
import moment from 'moment'

export default {
  name: 'GeneralCourtTemplate',
  components: { TheLoader },
  props: {
    courtName: String,
    courtFlag: String,
    addonTest: String,
    processTest: String,
    courtsWithStates: Array,
    courtsWithRegionsDetails: Object || null
  },
  data() {
    return {
      processNumber: '',
      complementSelectedOption: '',
      courtIdentifier: '',
      processMovements: [],
      process: {},
      isLoading: false
    }
  },
  computed: {
    courtsWithRegions() {
      return this.generateCourtsByRegionsQuantity();
    }
  },
  methods: {
    async searchProcessByNumber() {
      this.isLoading = true;
      this.courtIdentifier = this.addonTest
      this.processNumber = this.processTest
      const rawProcess = await courtClient.getProcessByCourt(
        this.courtFlag,
        this.courtIdentifier,
        this.processNumber
      )
      this.mountProcessDataToPrint(rawProcess)
      this.isLoading = false;
    },
    defineWritedProcessNumber(writedProcess) {
      this.processNumber = writedProcess.replace(/[^a-zA-Z0-9]/g, '')
    },
    mountProcessDataToPrint(rawProcess) {
      this.process = {};
      this.process.number = this.processNumber
      this.process.class = rawProcess.classe.nome
      this.process.judgeName = rawProcess.orgaoJulgador.nome
      this.process.system = rawProcess.sistema.nome
      this.process.format = rawProcess.formato.nome
      this.process.initialDate = moment(rawProcess.dataAjuizamento).format('DD/MM/YYYY HH:ss')
      this.process.lastUpdateTime = moment(rawProcess.dataHoraUltimaAtualizacao).format(
        'DD/MM/YYYY HH:ss'
      )
      this.process.movements = this.getLastProcessMovements(rawProcess.movimentos)
      this.process.subjects = this.extractSubjectsFromProcess(rawProcess.assuntos)
    },
    extractSubjectsFromProcess(rawSubjects) {
      return rawSubjects.map((subject) => subject.nome.trim()).join(', ')
    },
    mountPlaceholderByCourt() {
      return this.courtsWithStates.length
        ? 'Selecione o estado do tribunal'
        : 'Selecione o número da região'
    },
    getLastProcessMovements(allMovements) {
      const movements = allMovements.slice(Math.max(allMovements.length - 5, 1))
      movements.forEach(
        (movement) => (movement.dataHora = moment(movement.dataHora).format('DD/MM/YYYY HH:ss'))
      )
      return movements
    },
    generateCourtsByRegionsQuantity() {
      const generatedCourtsRegions = []
      const nameComplement = this.courtsWithRegionsDetails.acronym === 'trabalho' ? 'do Trabalho' : 'Federal'

      for (let region = 1; region <= this.courtsWithRegionsDetails.quantity; region++) {
        generatedCourtsRegions.push({
          name: `Tribunal Regional ${nameComplement} da ${region}ª Região`,
          acronym: `${region}`
        })
      }

      console.log("asasas", generatedCourtsRegions)

      return generatedCourtsRegions
    }
  }
}
</script>

<style lang="scss">
.court-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
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

  &__loader {
    padding-top: 3rem;
  }

  &__search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .input-wrapper {
      width: 57%;
    }

    .base-select {
      width: 30%;
    }
  }

  &__processes-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 0rem 0.1rem rgba(0, 0, 0, 0.25);
    border: 1px solid #ced4da;
    border-radius: 0.375rem;

    h3 {
      padding: 1rem;
      color: #fff;
      background-color: $primary;
      font-weight: 600;
      border-radius: 0.375rem 0.375rem 0 0;
    }
  }

  &__fields-container {
    display: flex;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 32%;
  }

  .subjects {
    width: 100%;
    justify-content: center;

    .subject-input-group {
      width: 90%;
    }
  }

  &__movements-container {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      padding: 1rem;
    }
  }

  &__movement {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;

    .movement-inputs {
      width: 48%;
    }
  }
}
</style>
