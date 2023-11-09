<template>
  <section class="justica-eleitoral-wrapper">
    <div class="justica-eleitoral-wrapper__title-container">
      <h1>Consulte seus processos</h1>
      <h2>
        Para verificar o andamento do seu processo, basta digitar no campo abaixo o código de
        referência.
      </h2>
    </div>

    <div class="justica-eleitoral-wrapper__search-container">
      <base-input
        v-model="processNumber"
        @update-input="defineWritedProcessNumber"
        id="search-processes"
        placeholder="Digite o número do seu processo"
        is-search
        @keyup.enter="searchProcessByNumber"
      ></base-input>
      <base-button
        type="primary"
        text="Pesqusar"
        :on-click="searchProcessByNumber"
        :disabled="!processNumber"
        :before-icon="['fas', 'magnifying-glass']"
        uppercase
      ></base-button>
    </div>

    <div class="justica-eleitoral-wrapper__processes-container">
      <h3>Processo Nº {{ processNumber }}</h3>

      <div class="justica-eleitoral-wrapper__fields-container">
        <div class="justica-eleitoral-wrapper__input-group">
          <label for="process-class">Classe</label>
          <base-input :value="process.class" id="process-class" disabled></base-input>
        </div>

        <div class="justica-eleitoral-wrapper__input-group">
          <label for="process-judge">Órgão julgador</label>
          <base-input :value="process.judgeName" id="process-judge" disabled></base-input>
        </div>

        <div class="justica-eleitoral-wrapper__input-group">
          <label for="process-system">Sistema</label>
          <base-input :value="process.system" id="process-system" disabled></base-input>
        </div>
      </div>

      <div class="justica-eleitoral-wrapper__fields-container">
        <div class="justica-eleitoral-wrapper__input-group">
          <label for="process-initial-date">Data de entrada</label>
          <base-input :value="process.initialDate" id="process-initial-date" disabled></base-input>
        </div>

        <div class="justica-eleitoral-wrapper__input-group">
          <label for="process-last-update">Data última atualização</label>
          <base-input
            :value="process.lastUpdateTime"
            id="process-last-update"
            disabled
          ></base-input>
        </div>

        <div class="justica-eleitoral-wrapper__input-group">
          <label for="process-last-update">Formato</label>
          <base-input :value="process.format" id="process-format" disabled></base-input>
        </div>
      </div>

      <div class="justica-eleitoral-wrapper__fields-container subjects">
        <div class="justica-eleitoral-wrapper__input-group subject-input-group">
          <label for="process-subjects">Assuntos</label>
          <base-input :value="process.subjects" id="process-subjects" disabled></base-input>
        </div>
      </div>

      <div class="justica-eleitoral-wrapper__movements-container">
        <h4>Últimas movimentações</h4>
        <div
          class="justica-eleitoral-wrapper__movement"
          v-for="(movement, index) in process.movements"
          :key="index"
        >
          <div class="justica-eleitoral-wrapper__input-group movement-inputs">
            <label for="process-last-update">Nome</label>
            <base-input :value="movement.nome" id="process-format" disabled></base-input>
          </div>
          <div class="justica-eleitoral-wrapper__input-group movement-inputs">
            <label for="process-last-update">Data e hora</label>
            <base-input :value="movement.dataHora" id="process-format" disabled></base-input>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import justicaEleitoralClient from '@/http/justica-eleitoral-client'
import moment from 'moment'

export default {
  name: 'JusticaEleitoral',
  data() {
    return {
      processNumber: '',
      processMovements: [],
      process: {}
    }
  },
  methods: {
    async searchProcessByNumber() {
      const rawProcess = await justicaEleitoralClient.getProcessByStateCourt()
      this.mountProcessDataToPrint(rawProcess)
    },
    defineWritedProcessNumber(writedProcess) {
      this.processNumber = writedProcess.replace(/[^a-zA-Z0-9]/g, '')
    },
    mountProcessDataToPrint(rawProcess) {
      console.log(rawProcess)
      this.process.class = rawProcess.classe.nome
      this.process.judgeName = rawProcess.orgaoJulgador.nome
      this.process.system = rawProcess.sistema.nome
      this.process.format = rawProcess.formato.nome
      this.process.initialDate = moment(rawProcess.dataAjuizamento).format('DD/MM/YYYY HH:ss')
      this.process.lastUpdateTime = moment(rawProcess.dataHoraUltimaAtualizacao).format(
        'DD/MM/YYYY HH:ss'
      )
      this.process.movements = this.getLastProcessMovements(rawProcess.movimentos)
      console.log(this.process)
      this.process.subjects = this.extractSubjectsFromProcess(rawProcess.assuntos)
    },
    extractSubjectsFromProcess(rawSubjects) {
      return rawSubjects.map((subject) => subject.nome.trim()).join(', ')
    },
    getLastProcessMovements(allMovements) {
      const movements = allMovements.slice(Math.max(allMovements.length - 5, 1))
      movements.forEach(movement => movement.dataHora = moment(movement.dataHora).format('DD/MM/YYYY HH:ss'))
      return movements
    }
  }
}
</script>

<style lang="scss">
.justica-eleitoral-wrapper {
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

  &__search-container {
    display: flex;

    .base-input {
      width: 97%;
    }
  }

  &__processes-container {
    display: flex;
    flex-direction: column;
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
