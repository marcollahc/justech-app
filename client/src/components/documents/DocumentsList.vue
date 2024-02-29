<template>
  <table class="documents-list" aria-describedby="Documentos e arquivos do usuário">
    <div class="documents-list__table-head">
      <th class="input-header">
        <input type="checkbox" v-model="selectAll" @change="selectAllFiles" />
      </th>
      <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
      <base-button text="Baixar todos" type="secundary" :uppercase="false" :on-click="downloadSelectedFiles"
        :disabled="!selectedFiles.length"></base-button>
    </div>
    <div class="documents-list__table-body">
      <tr v-for="(document, index) in parsedUserFiles" :key="index">
        <td class="input-header">
          <input type="checkbox" v-model="selectedFiles" :value="document" />
        </td>

        <td class="document-name">{{ document.name }}</td>
        <td>{{ formatLastModifiedDate(document.lastModifiedDate) }}</td>
        <td>{{ formatDocumentType(document.type) }}</td>
        <td>{{ formatDocumentSize(document.size) }}KB</td>

        <div class="documents-list__file-actions">
          <font-awesome-icon class="preview-icon" @click="downloadFile(document)" :icon="['fas', 'download']" />
          <font-awesome-icon class="delete-icon" @click="deleteFileFromUploadList(document.id)"
            :icon="['fas', 'circle-xmark']" />
        </div>
      </tr>
    </div>
  </table>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DocumentsList',
  props: {
    userDocuments: String
  },
  data() {
    return {
      headers: ['Nome do arquivo', 'Data de entrada', 'Tipo', 'Tamanho'],
      selectAll: false,
      selectedFiles: []
    }
  },
  computed: {
    parsedUserFiles() {
      return this.userDocuments ? JSON.parse(this.userDocuments) : []
    }
  },
  methods: {
    downloadFile(file) {
      const downloadLink = document.createElement('a')
      downloadLink.href = file.processedUrl
      downloadLink.download = file.name
      downloadLink.click()
    },
    formatLastModifiedDate(date) {
      return moment(date).format('DD/MM/YYYY')
    },
    selectAllFiles() {
      if (this.selectAll) {
        this.selectedFiles = [...this.parsedUserFiles]
      } else {
        this.selectedFiles = []
      }
    },
    downloadSelectedFiles() {
      this.selectedFiles.forEach((file) => this.downloadFile(file))
    },
    deleteFileFromUploadList(fileId) {
      const newFileList = this.parsedUserFiles.filter((file) => file.id !== fileId)
      localStorage.filesHistory = JSON.stringify(newFileList)
      this.$router.go()
    },
    formatDocumentType(documentType) {
      const formatedType = documentType.match(/\/([^/]+)$/)
      return formatedType ? formatedType[1].toUpperCase() : documentType
    },
    formatDocumentSize(documentSize) {
      const formatedSize = documentSize / 1024
      return formatedSize.toFixed(2)
    }
  }
}
</script>

<style lang="scss">
.documents-list {
  width: 100%;

  &__table-head {
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

  &__table-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.2rem;
    width: 100%;

    .input-header {
      text-align: start;
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
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .base-button {
        height: 2rem;
        width: 6rem;
        min-width: inherit;
      }
    }

    td {
      padding: 1rem 0;
      text-align: center;
      width: 30%;
      font-size: 1rem;
    }
  }

  &__file-actions {
    display: flex;
    gap: 2rem;
    cursor: pointer;
    align-items: center;

    svg {
      font-size: 1.3rem;
      transition: ease-in-out 0.2s;
    }

    .preview-icon {
      color: primary;

      &:hover {
        color: $secundary;
      }
    }

    .delete-icon {
      color: #dc3545;

      &:hover {
        color: #e4552d;
      }
    }
  }
}
</style>
