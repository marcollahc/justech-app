<template>
  <table class="documents-list" aria-describedby="Documentos e arquivos do usuário">
    <t-head>
      <th class="input-header"><input type="checkbox"></th>
      <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
    </t-head>
    <t-body>
      <tr v-for="(document, index) in userDocuments" :key="index">
        <td class="input-header"><input type="checkbox"></td>
        <td class="document-name">{{ document.name }}</td>
        <td>{{ formatLastModifiedDate(document.lastModifiedDate) }}</td>
        <td>{{ document.type }}</td>
        <td>{{ document.size }}</td>
      </tr>
    </t-body>
  </table>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DocumentsList',
  props: {
    userDocuments: Array
  },
  data() {
    return {
      headers: ['Nome do arquivo', 'Data de entrada', 'Tipo', 'Tamanho']
    }
  },
  methods: {
    downloadFile(file) {
      const downloadLink = document.createElement('a')
      downloadLink.href = URL.createObjectURL(file)
      downloadLink.download = file.name
      downloadLink.click()
    },
    formatLastModifiedDate(date) {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}
</script>

<style lang="scss">
.documents-list {
  width: 100%;

  t-head {
    display: flex;
    background-color: $primary;
    align-items: center;
    padding: 1rem 1.2rem;
    width: 100%;

    .input-header {
      display: flex;
      width: 10%;

      input {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    th {
      width: 35%;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #fff;
    }
  }

  t-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.2rem;
    width: 100%;

    .input-header {
      width: 10%;

      input {
        width: 1.2rem;
        height: 1.2rem;
      }
    }

    .document-name {
      text-overflow: ellipsis;
    }

    tr {
      width: 100%;
    }

    td {
      width: 30%;
      font-size: 1rem;
    }
  }
}
</style>
