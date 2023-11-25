<template>
  <div class="upload-container" @dragover.prevent>
    <div class="upload-container__dropzone" @drop="handleDrop" @click="triggerFileInput">
      <input type="file" multiple ref="fileInput" @change="handleFileChange" />
      <font-awesome-icon :icon="['fas', 'file-arrow-up']" />
      <p>Clique aqui ou arraste o arquivo</p>
    </div>

    <ul class="upload-container__files-to-upload-list" v-if="filesToUpload.length">
      <h4>Arquivos para carregar</h4>

      <li v-for="(file, index) in filesToUpload" :key="index">
        {{ file.name }}

        <div class="upload-container__files-to-upload-actions">
          <font-awesome-icon
            class="preview-icon"
            @click="previewFile(file)"
            :icon="['fas', 'eye']"
          />
          <font-awesome-icon
            class="delete-icon"
            @click="deleteFileFromUploadList(index)"
            :icon="['fas', 'circle-xmark']"
          />
        </div>
      </li>
    </ul>

    <base-button
      type="primary"
      text="Carregar"
      :disabled="!filesToUpload.length"
      :on-click="uploadFiles"
    ></base-button>
  </div>
</template>

<script>
export default {
  name: 'DropZone',
  data() {
    return {
      filesToUpload: []
    }
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    handleFileChange(event) {
      const files = event.target.files
      if (files.length > 0) {
        this.filesToUpload = [...this.filesToUpload, ...Array.from(files)]
      }
    },
    handleDrop(event) {
      event.preventDefault()
      const files = event.dataTransfer.files
      if (files.length > 0) {
        this.filesToUpload = [...this.filesToUpload, ...Array.from(files)]
      }
    },
    uploadFiles() {
      if (this.filesToUpload.length > 0) {
        localStorage.filesHistory = JSON.stringify(this.mountFileStructure())
      }
    },
    mountFileStructure() {
      const userFiles = localStorage.filesHistory ? JSON.parse(localStorage.filesHistory) : []
      const structuredFilesToUpload = this.filesToUpload.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastTimeModified: file.lastModifiedDate,
        processedUrl: URL.createObjectURL(file)
      }));

      structuredFilesToUpload.forEach(file => userFiles.push(file))
      return userFiles
    }
  },
  previewFile(file) {
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(file)
    downloadLink.download = file.name
    downloadLink.click()
  },
  deleteFileFromUploadList(fileIndex) {
    this.filesToUpload.splice(fileIndex, 1)
  }
}
</script>

<style lang="scss">
.upload-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  border-radius: 0.625rem;
  align-items: center;
  border: 0.063rem solid $border-gray;

  h4 {
    font-weight: 600;
  }

  svg {
    font-size: 4rem;
    color: $primary;
    transition: ease-in-out 0.1s;
  }

  &__dropzone {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 1rem;
    border-radius: 0.625rem;
    align-items: center;
    border: 0.063rem solid $border-gray;
    cursor: pointer;
    gap: 1rem;
    transition: ease-in-out 0.2s;

    p {
      font-weight: 600;
    }

    input {
      display: none;
    }

    &:hover {
      background-color: #09bc8935;
    }
  }

  &__files-to-upload-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    gap: 0.3rem;
    list-style-type: none;
    border: 0.063rem solid $border-gray;
    padding: 1rem;
    border-radius: 0.625rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ddd;
      border-radius: 0.2rem;
      padding: 0.3rem;
      width: 100%;

      svg {
        font-size: 1.2rem;
      }
    }
  }

  &__files-to-upload-actions {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;

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
